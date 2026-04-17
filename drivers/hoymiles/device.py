"""Hoymiles device — polls DTU and updates Homey capabilities."""

import asyncio
import json
import logging
import time
from datetime import datetime, timezone

from astral import LocationInfo
from astral.sun import sun

from homey.device import Device
from hoymiles_wifi.dtu import DTU

_LOGGER = logging.getLogger(__name__)

_INFORMATIONAL_WARN_MAX = 255
_BACKOFF_NIGHT = 30 * 60   # seconds
_BACKOFF_DAY   =  5 * 60   # seconds


class HoymilesDevice(Device):

    _dtu: DTU | None = None
    _poll_task: asyncio.Task | None = None
    _consecutive_errors: int = 0
    _ERROR_THRESHOLD: int = 5
    _backoff_until: float = 0.0

    # ── Lifecycle ─────────────────────────────────────────────────────────────

    async def on_init(self) -> None:
        self.log(f"Device init — {self.get_setting('ip')}")
        await self._build_dtu()
        await self._refresh_info()
        await self._poll()
        self._start_polling()

    async def on_settings(self, old_settings, new_settings, changed_keys) -> None:
        if any(k in changed_keys for k in ("ip", "is_encrypted", "enc_rand")):
            await self._build_dtu()
        if any(k in changed_keys for k in (
            "polling_interval", "solar_latitude", "solar_longitude"
        )):
            self._start_polling()

    async def on_deleted(self) -> None:
        self._stop_polling()

    # ── DTU instance ──────────────────────────────────────────────────────────

    async def _build_dtu(self) -> None:
        ip           = self.get_setting("ip") or ""
        is_encrypted = bool(self.get_setting("is_encrypted"))
        enc_rand_hex = self.get_setting("enc_rand") or ""

        kwargs: dict = {"timeout": 20}
        if is_encrypted and enc_rand_hex:
            kwargs["is_encrypted"] = True
            kwargs["enc_rand"]     = bytes.fromhex(enc_rand_hex)

        self._dtu = DTU(ip, **kwargs)
        self.log(f"DTU built — ip:{ip} encrypted:{is_encrypted}")

    # ── One-time startup info ─────────────────────────────────────────────────

    async def _refresh_info(self) -> None:
        if not self._dtu:
            return
        try:
            app_info = await self._dtu.async_app_information_data()
            if app_info:
                pv_num = int(app_info.pv_number or 0)
                if pv_num > 0 and int(self.get_setting("panel_count") or 0) != pv_num:
                    await self.set_setting("panel_count", pv_num)
                if app_info.dtu_info:
                    di = app_info.dtu_info
                    if di.enc_rand:
                        new_hex = di.enc_rand.hex()
                        if new_hex != (self.get_setting("enc_rand") or ""):
                            await self.set_setting("enc_rand", new_hex)
                            self._dtu.enc_rand = di.enc_rand
                    await self.set_settings({
                        "signal_strength": str(di.signal_strength or ""),
                        "sw_version":      str(di.wifi_version   or di.dtu_sw_version or ""),
                        "hw_version":      str(di.dtu_hw_version or ""),
                    })

            config = await self._dtu.async_get_config()
            if config:
                await self.set_settings({
                    "wifi_ssid":   config.wifi_ssid    or "",
                    "dtu_ap_ssid": config.dtu_ap_ssid or "",
                })
        except Exception as e:
            self.log(f"_refresh_info error: {e}")

    # ── Polling ───────────────────────────────────────────────────────────────

    def _start_polling(self) -> None:
        self._stop_polling()
        interval = max(35, int(self.get_setting("polling_interval") or 60))
        self._poll_task = asyncio.ensure_future(self._poll_loop(interval))

    def _stop_polling(self) -> None:
        if self._poll_task and not self._poll_task.done():
            self._poll_task.cancel()
        self._poll_task = None

    async def _poll_loop(self, interval: int) -> None:
        self.log(f"Polling started — every {interval}s")
        while True:
            remaining = self._backoff_until - time.monotonic()
            if remaining > 0:
                await asyncio.sleep(min(remaining, interval))
                continue
            await self._poll()
            await asyncio.sleep(interval)

    async def _poll(self) -> None:
        if not self._dtu:
            return
        if bool(self.get_setting("is_hybrid")):
            await self._poll_hybrid()
        else:
            await self._poll_standard()

    # ── Standard polling (sgs / tgs / pv) ────────────────────────────────────

    async def _poll_standard(self) -> None:
        sun_times = self._get_sunrise_sunset()
        if sun_times is not None and self._is_night_time_from(sun_times):
            await self._apply_night_backoff(sun_times)
            return

        try:
            data = await self._dtu.async_get_real_data_new()
        except Exception as e:
            sun_times = self._get_sunrise_sunset()
            if sun_times is not None and self._is_night_time_from(sun_times):
                await self._apply_night_backoff(sun_times, e)
            else:
                self._consecutive_errors += 1
                self.log(f"Poll error ({self._consecutive_errors}): {e}")
                if self._consecutive_errors >= self._ERROR_THRESHOLD:
                    await self.set_unavailable(str(e))
            return

        if not data:
            self.log("Poll: no data — inverter sleeping, keeping last values")
            return

        self._consecutive_errors = 0
        await self.set_available()
        panel_count = int(self.get_setting("panel_count") or 0)
        three_phase = bool(self.get_setting("three_phase"))

        await self._set("measure_power",     (data.dtu_power or 0) / 10)
        await self._set("meter_power.today", (data.dtu_daily_energy or 0) / 1000)

        total_wh = sum(pv.energy_total or 0 for pv in (data.pv_data or []))
        await self._set("meter_power", total_wh / 1000)

        if three_phase:
            await self._poll_three_phase(data)
        else:
            await self._poll_single_phase(data)

        for idx, pv in enumerate((data.pv_data or []), start=1):
            if idx > panel_count:
                break
            sfx = f"pv{idx}"
            await self._set(f"measure_power.{sfx}",   (pv.power   or 0) / 10)
            await self._set(f"measure_voltage.{sfx}", (pv.voltage or 0) / 10)
            await self._set(f"measure_current.{sfx}", (pv.current or 0) / 100)

    async def _poll_single_phase(self, data) -> None:
        sgs = (data.sgs_data or [None])[0]
        if not sgs:
            return
        warn_raw = sgs.warning_number or 0
        await self._set("measure_voltage",     (sgs.voltage   or 0) / 10)
        await self._set("measure_current",     (sgs.current   or 0) / 100)
        await self._set("measure_frequency",   (sgs.frequency or 0) / 100)
        await self._set("measure_temperature", self._decode_temp(sgs.temperature or 0))
        await self._set("alarm_generic",       warn_raw > _INFORMATIONAL_WARN_MAX)

    async def _poll_three_phase(self, data) -> None:
        tgs = (data.tgs_data or [None])[0]
        if not tgs:
            return
        warn_raw = tgs.warning_number or 0
        await self._set("measure_voltage.phase_a", (tgs.voltage_phase_A or 0) / 10)
        await self._set("measure_voltage.phase_b", (tgs.voltage_phase_B or 0) / 10)
        await self._set("measure_voltage.phase_c", (tgs.voltage_phase_C or 0) / 10)
        await self._set("measure_current.phase_a", (tgs.current_phase_A or 0) / 100)
        await self._set("measure_current.phase_b", (tgs.current_phase_B or 0) / 100)
        await self._set("measure_current.phase_c", (tgs.current_phase_C or 0) / 100)
        await self._set("measure_frequency",       (tgs.frequency       or 0) / 100)
        await self._set("measure_temperature",     self._decode_temp(tgs.temperature or 0))
        await self._set("alarm_generic",           warn_raw > _INFORMATIONAL_WARN_MAX)

    # ── Hybrid polling (energy storage) ──────────────────────────────────────

    async def _poll_hybrid(self) -> None:
        dtu_sn_str   = self.get_setting("dtu_sn") or ""
        inverter_sns = json.loads(self.get_setting("inverter_sns") or "[]")

        if not dtu_sn_str or not inverter_sns:
            self.log("Hybrid poll: missing dtu_sn or inverter_sns")
            return

        try:
            dtu_sn_int = int(dtu_sn_str)
        except ValueError:
            self.log(f"Hybrid poll: invalid dtu_sn '{dtu_sn_str}'")
            return

        total_power = 0.0
        total_soc   = None
        any_alarm   = False
        responses   = 0

        for inv_sn in inverter_sns:
            try:
                storage = await self._dtu.async_get_energy_storage_data(
                    dtu_serial_number=dtu_sn_int,
                    inverter_serial_number=int(inv_sn),
                )
            except Exception as e:
                self.log(f"Hybrid poll error ({inv_sn}): {e}")
                continue

            if not storage:
                continue

            responses += 1

            if storage.production:
                total_power += (storage.production.active_power or 0) / 10

            if storage.battery_management:
                soc = storage.battery_management.state_of_charge
                if soc is not None:
                    total_soc = soc if total_soc is None else (total_soc + soc) // 2

            if storage.warning_number and storage.warning_number > _INFORMATIONAL_WARN_MAX:
                any_alarm = True

        if responses == 0:
            self._consecutive_errors += 1
            if self._consecutive_errors >= self._ERROR_THRESHOLD:
                await self.set_unavailable("No response from hybrid inverter")
            return

        self._consecutive_errors = 0
        await self.set_available()
        await self._set("measure_power", total_power)
        if total_soc is not None:
            await self._set("measure_battery", total_soc)
        await self._set("alarm_generic", any_alarm)

    # ── Night-time / solar window ─────────────────────────────────────────────

    def _get_sunrise_sunset(self) -> tuple[float, float] | None:
        """Returns (sunrise_utc, sunset_utc) as decimal UTC hours using astral.

        Everything is in UTC — no timezone conversion needed.
        Priority: manual solar_latitude/longitude → Homey geolocation."""
        try:
            lat = self._get_float_setting("solar_latitude")
            lng = self._get_float_setting("solar_longitude")

            if lat is None:
                lat = self.homey.geolocation.get_latitude()
            if lng is None:
                lng = self.homey.geolocation.get_longitude()

            if lat is None or lng is None:
                self.log("Night backoff disabled — location not available")
                return None

            today = datetime.now(timezone.utc).date()
            loc   = LocationInfo(latitude=lat, longitude=lng)
            s     = sun(loc.observer, date=today, tzinfo=timezone.utc)
            sr    = s["sunrise"].hour + s["sunrise"].minute / 60
            ss    = s["sunset"].hour  + s["sunset"].minute  / 60
            self.log(f"Sun times (UTC): sunrise={sr:.2f}h sunset={ss:.2f}h lat={lat:.4f} lng={lng:.4f}")
            return (sr, ss)
        except Exception as e:
            self.log(f"Night backoff disabled — sun calculation failed: {e}")
            return None

    def _is_night_time(self) -> bool:
        """True when outside solar window. Convenience wrapper."""
        return self._is_night_time_from(self._get_sunrise_sunset())

    def _is_night_time_from(self, sun_times: tuple[float, float] | None) -> bool:
        """True when outside solar window with a 30-minute buffer on each side.
        Compares UTC current time against UTC sunrise/sunset."""
        if sun_times is None:
            return False
        sunrise, sunset = sun_times
        try:
            now      = datetime.now(timezone.utc)
            utc_hour = now.hour + now.minute / 60
            is_night = utc_hour < (sunrise - 0.5) or utc_hour >= (sunset + 0.5)
            self.log(
                f"Sun check: utc={now.strftime('%H:%M')} ({utc_hour:.2f}h) "
                f"window={sunrise - 0.5:.2f}h–{sunset + 0.5:.2f}h "
                f"→ {'NIGHT' if is_night else 'DAY'}"
            )
            return is_night
        except Exception as e:
            self.log(f"Night time check failed ({e}) — assuming daytime")
            return False

    async def _apply_night_backoff(
        self,
        sun_times: tuple[float, float],
        reason: Exception | None = None,
    ) -> None:
        """Zero instantaneous values, mark device available, and sleep 30 min."""
        self._consecutive_errors = 0
        await self._apply_zeros()
        await self.set_available()
        self._backoff_until = time.monotonic() + _BACKOFF_NIGHT
        sunrise, sunset = sun_times
        suffix = f" | {reason}" if reason else ""
        self.log(
            f"poll: night — backing off 30 min | "
            f"sunrise≈{sunrise:.2f}h sunset≈{sunset:.2f}h (UTC){suffix}"
        )

    # ── Apply zeros ───────────────────────────────────────────────────────────

    async def _apply_zeros(self) -> None:
        """Zero out instantaneous capabilities. Preserves meter_power (lifetime)."""
        panel_count = int(self.get_setting("panel_count") or 0)
        three_phase = bool(self.get_setting("three_phase"))

        await self._set("measure_power",     0)
        await self._set("alarm_generic",     False)
        await self._set("measure_frequency", 0)
        await self._set("measure_temperature", 0)

        if three_phase:
            for ph in ("a", "b", "c"):
                await self._set(f"measure_voltage.phase_{ph}", 0)
                await self._set(f"measure_current.phase_{ph}", 0)
        else:
            await self._set("measure_voltage", 0)
            await self._set("measure_current", 0)

        for i in range(1, panel_count + 1):
            sfx = f"pv{i}"
            await self._set(f"measure_power.{sfx}",   0)
            await self._set(f"measure_voltage.{sfx}", 0)
            await self._set(f"measure_current.{sfx}", 0)

    # ── Helpers ───────────────────────────────────────────────────────────────

    def _get_float_setting(self, key: str) -> float | None:
        """Return a device setting as float, or None if absent/invalid."""
        raw = self.get_setting(key)
        if raw in (None, ""):
            return None
        try:
            return float(raw)
        except (TypeError, ValueError):
            self.log(f"Ignoring invalid numeric setting {key}={raw!r}")
            return None

    async def _set(self, cap: str, value) -> None:
        try:
            await self.set_capability_value(cap, value)
        except Exception:
            pass

    @staticmethod
    def _decode_temp(raw: int) -> float:
        if raw > 32767:
            raw -= 65536
        return raw * 0.1


homey_export = HoymilesDevice
