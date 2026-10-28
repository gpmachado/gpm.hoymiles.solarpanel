"""Hoymiles device — polls DTU and updates Homey capabilities."""

import asyncio
import json
import logging
import time
from datetime import datetime, timezone
from types import SimpleNamespace

from astral import LocationInfo
from astral.sun import sun

from app.drivers.hoymiles.driver import (
    capability_title, _ASSETS, _build_capabilities, _build_capabilities_options,
)
from app.lib import debug
from app.lib.fault_codes import decode_warning as _decode_warning
from homey.device import Device
from hoymiles_wifi.dtu import DTU

_LOGGER = logging.getLogger(__name__)

_INFORMATIONAL_WARN_MAX = 255
_BACKOFF_NIGHT = 30 * 60   # seconds
_BACKOFF_DAY   =  5 * 60   # seconds
_BACKOFF_W100_NO_DATA = 30 * 60  # seconds
_W100_MORNING_WARMUP = 30 * 60  # seconds
_NO_DATA_REBUILD_AFTER = 20 * 60  # seconds
# W100 (legacy a303 protocol) needs longer patience before a "no data" streak
# means an actual connection problem rather than the hardware just being slow
# — same rebuild safety net as every other DTU, just a longer fuse so it
# doesn't fight the 30 min backoff above by rebuilding mid-wait.
_W100_NO_DATA_REBUILD_AFTER = 2 * 60 * 60  # seconds

# Diagnostic reports submitted from the Homey app only include the last ~100
# lines of stdout. Logging every single poll (every 35-60 s) or every single
# failure of a long outage fills that budget in under 2 hours, pushing the
# actual failure/onset out of the report. Routine/repeat lines are throttled
# to this interval; state transitions (error, recovery, night enter/exit)
# always log immediately regardless.
_HEARTBEAT_INTERVAL_S = 15 * 60

# Production started/stopped: start only above _START_W (at dawn/dusk power hovers
# around a few watts), stop only after _STOP_POLLS polls in a row at or below
# _STOP_W (the DTU sometimes returns a single 0 W reading mid-day).
_PRODUCTION_STOP_W = 5.0
_PRODUCTION_START_W = 25.0
_PRODUCTION_STOP_POLLS = 3
_DEBUG_SETTING_MAX_S = 60 * 60   # "Debug logging" setting switches itself off after this

RESTORE_BUTTON_CAP = "button.restore_capabilities"
RESET_LIFETIME_BUTTON_CAP = "button.reset_lifetime_baseline"
POWER_RATIO_CAP = "measure_power_ratio"


class HoymilesDevice(Device):

    _dtu: DTU | None = None
    _poll_task: asyncio.Task | None = None
    _debug_on: bool = False                    # this device's "Debug logging" setting
    _debug_off_task: asyncio.Task | None = None
    _consecutive_errors: int = 0
    _ERROR_THRESHOLD: int = 5
    _backoff_until: float = 0.0
    _first_no_data_at: float | None = None
    _last_poll_ok_at: float | None = None
    _last_poll_ok_power: float | None = None
    _last_poll_ok_daily: float | None = None
    _last_poll_ok_date = None
    _last_poll_ok_warning: int | None = None
    _last_lifetime_wh: float | None = None  # last meter_power (Wh) actually written
    _dtu_rebuilds: int = 0
    _sun_cache: tuple | None = None   # (cache_date, sunrise_utc, sunset_utc)
    _was_producing: bool | None = None  # None = first poll, state not yet known
    _low_polls: int = 0                 # consecutive polls at or below _PRODUCTION_STOP_W
    _last_today_kwh: float = 0.0        # for the daily summary when the day ends at night
    _had_fault: bool | None = None      # None = first poll, state not yet known
    _was_night: bool = False          # last poll's night/day state, for transition logging
    _w100_morning_warmup_done: bool = False
    _last_heartbeat_at: float = 0.0   # monotonic time of the last routine log line
    _first_error_reason: str | None = None  # captured at the start of the current outage
    _last_pv_count: int = 0           # panels in the last good poll — used by restore_capabilities

    def _heartbeat_due(self) -> bool:
        """Throttle routine (non-transition) log lines to _HEARTBEAT_INTERVAL_S apart."""
        if self._debug_on or debug.active(None):
            return True
        now = time.monotonic()
        if now - self._last_heartbeat_at >= _HEARTBEAT_INTERVAL_S:
            self._last_heartbeat_at = now
            return True
        return False

    # ── Lifecycle ─────────────────────────────────────────────────────────────

    async def on_init(self) -> None:
        self.log(f"Device init — {self.get_setting('ip')}")
        await self._build_dtu()
        await self._refresh_info()
        await self._ensure_structural_caps()
        await self._ensure_restore_button()
        await self._ensure_reset_lifetime_button()
        if self.get_setting("debugLog"):
            await self._set_debug_logging(True)
        token = debug.scope.set(self.get_id())
        try:
            # Best-effort — a bad first poll must not block on_init() from
            # completing, or the device would never start its recurring
            # poll loop below.
            await self._poll()
        except Exception as e:
            self.log(f"Initial poll failed (will retry via poll loop): {type(e).__name__}: {e}")
        finally:
            debug.scope.reset(token)
        self._start_polling()
        await self._sync_detail_caps("showPvDetail", self._pv_detail_caps())
        await self._sync_detail_caps("showAcDetail", self._ac_detail_caps())
        await self._sync_power_ratio_cap()

    async def on_settings(self, old_settings, new_settings, changed_keys) -> None:
        if any(k in changed_keys for k in ("ip", "is_encrypted", "enc_rand")):
            await self._build_dtu()
        if "polling_interval" in changed_keys:
            self._start_polling(new_settings.get("polling_interval"))
        elif any(k in changed_keys for k in (
            "solar_latitude", "solar_longitude"
        )):
            self._sun_cache = None
            self._start_polling()
        if "showPvDetail" in changed_keys:
            await self._sync_detail_caps("showPvDetail", self._pv_detail_caps(), new_settings.get("showPvDetail"))
        if "showAcDetail" in changed_keys:
            await self._sync_detail_caps("showAcDetail", self._ac_detail_caps(), new_settings.get("showAcDetail"))
        if "nominal_power" in changed_keys:
            await self._sync_power_ratio_cap(new_settings.get("nominal_power"))
        if "debugLog" in changed_keys:
            await self._set_debug_logging(bool(new_settings.get("debugLog")))
        if any(k in changed_keys for k in ("panel_count", "three_phase")):
            # New values passed in: get_setting() still returns the old ones here.
            await self.restore_capabilities(new_settings)

    def _pv_detail_caps(self) -> dict[str, tuple[str, dict]]:
        """{capability_id: (title_key, title_kwargs)} for per-panel Voltage/Current."""
        panel_count = int(self.get_setting("panel_count") or 0)
        caps: dict[str, tuple[str, dict]] = {}
        for i in range(1, panel_count + 1):
            caps[f"measure_voltage.pv{i}"] = ("Panel Voltage", {"i": i})
            caps[f"measure_current.pv{i}"] = ("Panel Current", {"i": i})
        return caps

    def _ac_detail_caps(self) -> dict[str, tuple[str, dict]]:
        """{capability_id: (title_key, title_kwargs)} for the AC connection Voltage/Current."""
        if bool(self.get_setting("three_phase")):
            return {
                f"measure_voltage.phase_{ph}": ("Voltage Phase", {"label": label})
                for ph, label in (("a", "A"), ("b", "B"), ("c", "C"))
            } | {
                f"measure_current.phase_{ph}": ("Current Phase", {"label": label})
                for ph, label in (("a", "A"), ("b", "B"), ("c", "C"))
            }
        return {
            "measure_voltage": ("AC Voltage", {}),
            "measure_current": ("AC Current", {}),
        }

    async def _sync_detail_caps(self, setting_id: str, cap_titles: dict[str, tuple[str, dict]], value=None) -> None:
        """Add/remove a group of optional detail capabilities to match a device
        setting — no re-pairing needed.

        `value`, when given, is used as-is (the fresh value from on_settings'
        new_settings — self.get_setting() can still return the *previous*
        value at the moment on_settings fires, since Homey calls this hook
        before persisting the change; reading it there would react one
        toggle behind). When omitted (on_init, no settings-change event to
        read from), falls back to self.get_setting().
        """
        raw = self.get_setting(setting_id) if value is None else value
        # Devices paired before this setting existed have no stored value for
        # it — get_setting() returns None. Treat that as "show" (matches the
        # driver.compose.json default of true), not "hide": these capabilities
        # must never disappear from an existing device unless the user
        # explicitly unchecks the setting themselves.
        show = True if raw is None else bool(raw)
        for cap, (title_key, title_kwargs) in cap_titles.items():
            try:
                if show and not self.has_capability(cap):
                    await self.add_capability(cap)
                    # addCapability() at runtime doesn't inherit the per-device
                    # title set at pairing — it falls back to the capability's
                    # generic built-in title (every measure_voltage.* tile
                    # just says "Voltage"). Restore the specific one.
                    try:
                        await self.set_capability_options(cap, {"title": capability_title(title_key, **title_kwargs)})
                    except Exception as e:
                        _LOGGER.warning(f"Set title for {cap} failed: {e}")
                    self.log(f"Added detail capability {cap} ({setting_id})")
                elif not show and self.has_capability(cap):
                    await self.remove_capability(cap)
                    self.log(f"Removed detail capability {cap} ({setting_id})")
            except Exception as e:
                _LOGGER.warning(f"Sync detail capability {cap} ({setting_id}) failed: {e}")

    async def _sync_power_ratio_cap(self, value=None) -> None:
        """Power Ratio (%) tile exists only while nominal_power is set (> 0)."""
        nominal = self.get_setting("nominal_power") if value is None else value
        show = (nominal or 0) > 0
        try:
            if show and not self.has_capability(POWER_RATIO_CAP):
                await self.add_capability(POWER_RATIO_CAP)
                self.log(f"Added {POWER_RATIO_CAP} (nominal_power={nominal}W)")
            elif not show and self.has_capability(POWER_RATIO_CAP):
                await self.remove_capability(POWER_RATIO_CAP)
                self.log(f"Removed {POWER_RATIO_CAP} (nominal_power off)")
        except Exception as e:
            _LOGGER.warning(f"Sync {POWER_RATIO_CAP} failed: {e}")

    async def _set_power(self, power_w: float) -> None:
        """measure_power plus the derived Power Ratio (%), when enabled."""
        await self._set("measure_power", power_w)
        nominal = self._get_float_setting("nominal_power") or 0
        if nominal > 0 and self.has_capability(POWER_RATIO_CAP):
            await self._set(POWER_RATIO_CAP, round(power_w / nominal * 100))

    async def on_deleted(self) -> None:
        self._stop_polling()
        if self._debug_on:
            await self._set_debug_logging(False)

    async def _set_debug_logging(self, on: bool) -> None:
        """'Debug logging' device setting: this DTU's detailed lines in a remote
        user's diagnostic report. Auto-off after _DEBUG_SETTING_MAX_S — the report
        keeps only ~100 lines, and a forgotten debug flood would push the real
        history out."""
        if self._debug_off_task and not self._debug_off_task.done():
            self._debug_off_task.cancel()
        self._debug_off_task = None
        self._debug_on = on
        debug.set_enabled(self.get_id(), on)
        if on:
            self._debug_off_task = asyncio.create_task(self._debug_auto_off())
        self.log(f"Debug logging {'on — switches off in ' + str(_DEBUG_SETTING_MAX_S // 60) + ' min' if on else 'off'}")

    async def _debug_auto_off(self) -> None:
        try:
            await asyncio.sleep(_DEBUG_SETTING_MAX_S)
        except asyncio.CancelledError:
            return
        self._debug_off_task = None  # don't cancel ourselves in _set_debug_logging
        try:
            await self.set_settings({"debugLog": False})
        except Exception as e:
            _LOGGER.warning(f"Debug logging auto-off: could not clear the setting: {e}")
        await self._set_debug_logging(False)

    async def _ensure_structural_caps(self) -> None:
        """Add capabilities introduced after this device was originally paired.

        Only adds, never removes — safe to run on every init. Hybrid devices
        don't get fault_description: _poll_hybrid() aggregates warning_number
        across multiple inverter_sns, so there's no single code to decode.
        """
        if bool(self.get_setting("is_hybrid")):
            # Paired before 1.1.26: this tile never had a value on hybrids.
            if self.has_capability("meter_power.today"):
                try:
                    await self.remove_capability("meter_power.today")
                except Exception as e:
                    _LOGGER.warning(f"Could not remove meter_power.today: {e}")
            return
        if not self.has_capability("fault_description"):
            try:
                await self.add_capability("fault_description")
                self.log("Added missing fault_description cap (recovered from pre-1.1.22 pairing)")
            except Exception as e:
                _LOGGER.warning(f"Could not add fault_description: {e}")
                return
        # Runs every init, not just right after adding — a device that got
        # the capability from an earlier version of this method (before the
        # icon existed) would otherwise never pick it up, since the
        # `not has_capability(...)` branch above only runs once. Idempotent
        # and cheap, so no harm in re-applying it on an already-correct device.
        try:
            await self.set_capability_options(
                "fault_description", {"icon": f"{_ASSETS}/fault_alarm_detail.svg"}
            )
        except Exception as e:
            _LOGGER.warning(f"Set icon for fault_description failed: {e}")

    async def _ensure_restore_button(self) -> None:
        """Maintenance action (device settings → Maintenance). Its options
        (maintenanceAction, title) come from driver.compose.json."""
        try:
            if not self.has_capability(RESTORE_BUTTON_CAP):
                await self.add_capability(RESTORE_BUTTON_CAP)
            self.register_capability_listener(RESTORE_BUTTON_CAP, self._on_restore_button)
        except Exception as e:
            _LOGGER.warning(f"Restore button setup failed: {e}")

    async def _on_restore_button(self, value, **kwargs) -> None:
        await self.restore_capabilities()

    async def _ensure_reset_lifetime_button(self) -> None:
        """Maintenance action that clears the held Lifetime Energy floor after a
        microinverter swap. Options come from driver.compose.json."""
        try:
            if not self.has_capability(RESET_LIFETIME_BUTTON_CAP):
                await self.add_capability(RESET_LIFETIME_BUTTON_CAP)
            self.register_capability_listener(
                RESET_LIFETIME_BUTTON_CAP, self._on_reset_lifetime_button
            )
        except Exception as e:
            _LOGGER.warning(f"Reset energy baseline button setup failed: {e}")

    async def _on_reset_lifetime_button(self, value, **kwargs) -> None:
        """Clear the monotone floor only — next good poll becomes the baseline."""
        prev = self._last_lifetime_wh
        self._last_lifetime_wh = None
        self.log(
            f"meter_power: energy baseline reset"
            f"{f' (was {prev}Wh)' if prev is not None else ''} — "
            f"next poll becomes the new total"
        )

    async def restore_capabilities(self, settings: dict | None = None) -> list[str]:
        """Re-add every capability pairing would create for this device's
        panel_count / three_phase / is_hybrid — same device, so Flows and
        Insights are kept. Add only, never removes. Respects showPvDetail /
        showAcDetail. `settings` overrides get_setting() (on_settings passes
        the new values, which get_setting() doesn't return yet)."""
        settings = settings or {}

        def _get(key):
            return settings[key] if key in settings else self.get_setting(key)

        panel_count = int(_get("panel_count") or 0)
        three_phase = bool(_get("three_phase"))
        is_hybrid   = bool(_get("is_hybrid"))

        if not is_hybrid and self._last_pv_count > panel_count:
            panel_count = self._last_pv_count
            await self.set_settings({"panel_count": panel_count})

        caps = _build_capabilities(panel_count, three_phase, is_hybrid)
        opts = _build_capabilities_options(panel_count, three_phase, is_hybrid)
        hidden: set[str] = set()
        if _get("showPvDetail") is False:
            hidden |= {c for c in caps if c.startswith(("measure_voltage.pv", "measure_current.pv"))}
        if _get("showAcDetail") is False:
            hidden |= {c for c in caps if c in ("measure_voltage", "measure_current") or ".phase_" in c}

        added: list[str] = []
        for cap in caps:
            if cap in hidden or self.has_capability(cap):
                continue
            try:
                await self.add_capability(cap)
                added.append(cap)
            except Exception as e:
                _LOGGER.warning(f"Restore: add {cap} failed: {e}")
                continue
            if cap in opts:
                try:
                    await self.set_capability_options(cap, opts[cap])
                except Exception as e:
                    _LOGGER.warning(f"Restore: set options for {cap} failed: {e}")

        self.log(
            f"Restore capabilities (panels={panel_count} 3ph={three_phase} "
            f"hybrid={is_hybrid}): added {added or 'nothing'}"
        )
        return added

    # ── DTU instance ──────────────────────────────────────────────────────────

    def _dtu_config(self) -> tuple[str, bool, dict]:
        ip           = self.get_setting("ip") or ""
        is_encrypted = bool(self.get_setting("is_encrypted"))
        enc_rand_hex = self.get_setting("enc_rand") or ""

        kwargs: dict = {"timeout": 20}
        if is_encrypted and enc_rand_hex:
            try:
                kwargs["is_encrypted"] = True
                kwargs["enc_rand"]     = bytes.fromhex(enc_rand_hex)
            except ValueError:
                # Corrupted setting (manual edit / partial write) — fall back to
                # unencrypted rather than crash on_init()/on_settings() forever.
                self.log(f"Ignoring invalid enc_rand setting: {enc_rand_hex!r}")
                is_encrypted = False
                kwargs.pop("is_encrypted", None)
                kwargs.pop("enc_rand", None)

        return ip, is_encrypted, kwargs

    async def _build_dtu(self) -> None:
        try:
            ip, is_encrypted, kwargs = self._dtu_config()
            self._dtu = DTU(ip, **kwargs)
            self.log(
                f"DTU built — ip:{ip} encrypted:{is_encrypted} "
                f"enc_rand:{'yes' if kwargs.get('enc_rand') else 'no'}"
            )
        except Exception as e:
            self._dtu = None
            self.log(f"_build_dtu failed: {type(e).__name__}: {e}")

    async def _probe_dtu_info(self, reason: str) -> None:
        """Log a fresh DTU app_info probe for diagnostics."""
        ip, is_encrypted, kwargs = self._dtu_config()
        try:
            probe = DTU(ip, **kwargs)
            app_info = await asyncio.wait_for(
                probe.async_app_information_data(), timeout=10
            )
            if not app_info:
                self.log(f"DTU probe ({reason}): no app_info")
                return

            dtu_info = app_info.dtu_info
            sw = ""
            signal = None
            dfs = None
            if dtu_info:
                sw = dtu_info.wifi_version or dtu_info.dtu_sw_version or ""
                signal = dtu_info.signal_strength
                dfs = dtu_info.dfs

            self.log(
                f"DTU probe ({reason}): ok ip={ip} encrypted={is_encrypted} "
                f"sn={app_info.dtu_serial_number or '—'} "
                f"panels={app_info.pv_number or 0} "
                f"sw={sw or '—'} signal={signal if signal is not None else '—'} "
                f"dfs={dfs if dfs is not None else '—'}"
            )
        except Exception as e:
            self.log(f"DTU probe ({reason}) failed: {type(e).__name__}: {e}")

    async def _refresh_enc_rand_from_app_info(self, reason: str) -> bool:
        """Refresh encrypted DTU metadata from app_info.

        DTU-Pro-S / WLite-S devices expose enc_rand through app_information_data().
        Re-pairing works because it reads this metadata before polling real data.
        During recovery, mirror that behaviour so an installed device can repair
        stale encryption settings without removing/re-adding it.
        """
        ip, is_encrypted, kwargs = self._dtu_config()
        attempts = [("configured", kwargs)]
        if is_encrypted:
            attempts.append(("plain", {"timeout": kwargs.get("timeout", 20)}))

        for label, attempt_kwargs in attempts:
            try:
                probe = DTU(ip, **attempt_kwargs)
                app_info = await asyncio.wait_for(
                    probe.async_app_information_data(), timeout=10
                )
            except Exception as e:
                self.log(
                    f"enc_rand refresh ({reason}, {label}) failed: "
                    f"{type(e).__name__}: {e}"
                )
                continue

            if not app_info or not app_info.dtu_info:
                self.log(f"enc_rand refresh ({reason}, {label}): no app_info")
                continue

            di = app_info.dtu_info
            updates = {
                "signal_strength": str(di.signal_strength or ""),
                "sw_version":      str(di.wifi_version   or di.dtu_sw_version or ""),
                "hw_version":      str(di.dtu_hw_version or ""),
            }

            new_enc_rand = di.enc_rand.hex() if di.enc_rand else ""
            old_enc_rand = self.get_setting("enc_rand") or ""
            if new_enc_rand:
                updates["is_encrypted"] = True
                updates["enc_rand"] = new_enc_rand

            try:
                await self.set_settings(updates)
            except Exception as e:
                self.log(
                    f"enc_rand refresh ({reason}, {label}): settings save failed: "
                    f"{type(e).__name__}: {e}"
                )
                return False

            if new_enc_rand and new_enc_rand != old_enc_rand:
                self.log(
                    f"enc_rand refresh ({reason}, {label}): updated "
                    f"{old_enc_rand[:8] or 'empty'}… → {new_enc_rand[:8]}…"
                )
                return True

            if new_enc_rand:
                self.log(
                    f"enc_rand refresh ({reason}, {label}): unchanged "
                    f"{new_enc_rand[:8]}…"
                )
            else:
                self.log(f"enc_rand refresh ({reason}, {label}): no enc_rand")
            return False

        return False

    # ── One-time startup info ─────────────────────────────────────────────────

    async def _refresh_info(self) -> None:
        if not self._dtu:
            return
        try:
            app_info = await self._dtu.async_app_information_data()
            if app_info:
                pv_num = int(app_info.pv_number or 0)
                # Only raise: pairing may have stored more panels than pv_number
                # (it uses max(pv_number, live PV count)); lowering would freeze tiles.
                if pv_num > int(self.get_setting("panel_count") or 0):
                    await self.set_settings({"panel_count": pv_num})
                if app_info.dtu_info:
                    di = app_info.dtu_info
                    if di.enc_rand:
                        new_hex = di.enc_rand.hex()
                        if new_hex != (self.get_setting("enc_rand") or ""):
                            await self.set_settings({"enc_rand": new_hex})
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

    def _start_polling(self, polling_interval: int | None = None) -> None:
        """polling_interval, when given, is used as-is (the fresh value from
        on_settings' new_settings — self.get_setting() can still return the
        *previous* value at the moment on_settings fires, since Homey calls
        this hook before persisting the change). When omitted (on_init, no
        settings-change event to read from), falls back to self.get_setting().
        A plain None default (not a module-level sentinel) — a real
        polling_interval is never legitimately None when explicitly passed,
        and identity-comparing against a module-level sentinel is fragile
        across a dev-mode module reload, which is what broke this before."""
        self._stop_polling()
        raw_interval = polling_interval if polling_interval is not None else self.get_setting("polling_interval")
        interval = max(35, int(raw_interval or 60))
        self._poll_task = asyncio.ensure_future(self._poll_loop(interval))

    def _stop_polling(self) -> None:
        if self._poll_task and not self._poll_task.done():
            self._poll_task.cancel()
        self._poll_task = None

    async def _poll_loop(self, interval: int) -> None:
        # Tag everything this task logs (incl. hoymiles_wifi) with this device, so
        # per-device "Debug logging" shows only this DTU — see lib/debug.py.
        debug.scope.set(self.get_id())
        self.log(f"Polling started — every {interval}s")
        while True:
            remaining = self._backoff_until - time.monotonic()
            if remaining > 0:
                await asyncio.sleep(min(remaining, interval))
                continue
            try:
                await self._poll()
            except Exception as e:
                self.log(f"Poll loop error: {type(e).__name__}: {e}")
            await asyncio.sleep(interval)

    async def _poll(self) -> None:
        if not self._dtu:
            return
        if bool(self.get_setting("is_hybrid")):
            await self._poll_hybrid()
        else:
            await self._poll_standard()

    # ── Standard polling (sgs / tgs / pv) ────────────────────────────────────

    @staticmethod
    def _normalize_legacy_real_data(data):
        """Map the legacy a303 response to the RealDataNew shape used below."""
        legacy_pv = list(data.pv_data or [])
        if not legacy_pv:
            return None

        pv_data = [
            SimpleNamespace(
                serial_number=pv.pv_sn,
                port_number=pv.pv_port,
                power=pv.pv_power,
                voltage=pv.pv_vol,
                current=pv.pv_cur,
                energy_total=pv.pv_energy_total,
                energy_daily=pv.pv_energy,
                error_code=pv.pv_fault_num,
            )
            for pv in legacy_pv
        ]

        # Grid fields occur only on one PV row per inverter. Aggregate those
        # rows into the single-phase DTU values exposed by the Homey device.
        grid_by_inverter = {}
        for pv in legacy_pv:
            if not (pv.grid_vol or pv.grid_freq or pv.grid_p or pv.grid_i):
                continue
            grid_by_inverter.setdefault(pv.pv_sn, pv)
        grid_rows = list(grid_by_inverter.values())

        def _average_nonzero(field: str) -> int:
            values = [
                int(getattr(row, field) or 0)
                for row in grid_rows
                if getattr(row, field) or 0
            ]
            return round(sum(values) / len(values)) if values else 0

        warning_number = max(
            (int(pv.pv_fault_num or 0) for pv in legacy_pv),
            default=0,
        )
        sgs_data = [SimpleNamespace(
            voltage=_average_nonzero("grid_vol"),
            current=sum(int(row.grid_i or 0) for row in grid_rows),
            frequency=_average_nonzero("grid_freq"),
            temperature=max(
                (int(row.pv_temp or 0) for row in grid_rows),
                default=0,
            ),
            warning_number=warning_number,
        )] if grid_rows else []

        return SimpleNamespace(
            device_serial_number=str(data.dtu_sn or ""),
            dtu_power=sum(int(row.grid_p or 0) for row in grid_rows),
            dtu_daily_energy=sum(int(pv.pv_energy or 0) for pv in legacy_pv),
            pv_data=pv_data,
            sgs_data=sgs_data,
            tgs_data=[],
        )

    async def _poll_standard(self) -> None:
        sun_times = self._get_sunrise_sunset()
        # DTU-W100 serials in the 10D3 family reject a311 but provide full
        # realtime data through the legacy a303 command.
        legacy_w100 = (
            str(self.get_setting("dtu_sn") or "")
            .upper()
            .startswith("10D3")
        )
        if sun_times is not None and self._is_night_time_from(sun_times):
            self._w100_morning_warmup_done = False
            self._first_no_data_at = None
            await self._apply_night_backoff(sun_times)
            return

        if (
            legacy_w100
            and self._was_night
            and not self._w100_morning_warmup_done
        ):
            self._w100_morning_warmup_done = True
            self._first_no_data_at = None
            self._backoff_until = time.monotonic() + _W100_MORNING_WARMUP
            self.log(
                f"Poll: W100 morning warm-up — pausing DTU requests for "
                f"{_W100_MORNING_WARMUP // 60} min"
            )
            return

        try:
            if legacy_w100:
                legacy_data = await self._dtu.async_get_real_data()
                data = (
                    self._normalize_legacy_real_data(legacy_data)
                    if legacy_data
                    else None
                )
            else:
                data = await self._dtu.async_get_real_data_new()
        except Exception as e:
            sun_times = self._get_sunrise_sunset()
            if sun_times is not None and self._is_night_time_from(sun_times):
                self._first_no_data_at = None
                await self._apply_night_backoff(sun_times, e)
            else:
                self._first_no_data_at = None
                reason = f"{type(e).__name__}: {e}"
                self._consecutive_errors += 1
                if self._consecutive_errors == 1:
                    self._first_error_reason = reason
                    # Can't reach the DTU at all (e.g. inverter already asleep
                    # from shade, before the calculated sunset), so there's no
                    # way to know of an active fault — don't leave a stale one
                    # displayed until the unavailable threshold is crossed.
                    if self.has_capability("alarm_generic"):
                        await self._set("alarm_generic", False)
                    if self.has_capability("fault_description"):
                        await self._set("fault_description", _decode_warning(0))
                # Log immediately on the first failure and exactly when it crosses the
                # unavailable threshold; otherwise throttle so a long outage doesn't
                # burn through the ~100-line diagnostic report with identical lines.
                if (self._consecutive_errors == 1
                        or self._consecutive_errors == self._ERROR_THRESHOLD
                        or self._heartbeat_due()):
                    self.log(f"Poll error ({self._consecutive_errors}): {reason} "
                             f"| first={self._first_error_reason}")
                if self._consecutive_errors >= self._ERROR_THRESHOLD:
                    await self.set_unavailable(str(e))
            return

        if not data:
            now = time.monotonic()
            just_started = self._first_no_data_at is None
            if just_started:
                self._first_no_data_at = now
                # No live data means we have no way to know of an active fault —
                # clear any stale alarm/fault text instead of leaving it frozen
                # at its last daytime value for the rest of the outage.
                if self.has_capability("alarm_generic"):
                    await self._set("alarm_generic", False)
                if self.has_capability("fault_description"):
                    await self._set("fault_description", _decode_warning(0))
            no_data_for = now - self._first_no_data_at
            last_ok = (
                "never" if self._last_poll_ok_at is None
                else f"{(now - self._last_poll_ok_at) / 60:.0f} min ago"
            )
            if legacy_w100:
                self._backoff_until = now + _BACKOFF_W100_NO_DATA
                if just_started or self._heartbeat_due():
                    self.log(
                        f"Poll: W100 returned metadata without PV data; "
                        f"pausing DTU requests for "
                        f"{_BACKOFF_W100_NO_DATA // 60} min "
                        f"(last_ok={last_ok}, rebuilds={self._dtu_rebuilds})"
                    )
            else:
                # Log immediately when the "no data" streak starts, then throttle —
                # this repeats every poll (35-60 s) while the inverter sleeps, which
                # would otherwise fill the diagnostic report's ~100-line budget fast.
                if just_started or self._heartbeat_due():
                    self.log(
                        f"Poll: no data — inverter sleeping, keeping last values "
                        f"({no_data_for / 60:.0f} min, last_ok={last_ok}, "
                        f"last_warn={self._last_poll_ok_warning}, "
                        f"rebuilds={self._dtu_rebuilds})"
                    )

            rebuild_after = _W100_NO_DATA_REBUILD_AFTER if legacy_w100 else _NO_DATA_REBUILD_AFTER
            if no_data_for >= rebuild_after:
                self.log(
                    f"Poll: no data persisted — rebuilding DTU connection "
                    f"(last_power={self._last_poll_ok_power}W "
                    f"last_daily={self._last_poll_ok_daily}kWh "
                    f"last_warn={self._last_poll_ok_warning})"
                )
                await self._probe_dtu_info("before rebuild")
                enc_refreshed = await self._refresh_enc_rand_from_app_info(
                    "no data recovery"
                )
                if enc_refreshed:
                    self.log("Poll: DTU encryption metadata refreshed")
                self._dtu_rebuilds += 1
                await self._build_dtu()
                self._first_no_data_at = None
            return

        # A transition (day resumed / recovered from failures) always forces the
        # upcoming heartbeat line through immediately, bypassing the throttle,
        # so the report shows fresh values right when something changed.
        force_heartbeat = self._was_night or self._consecutive_errors > 0
        if self._was_night:
            self.log("day resumed — polling normally")
            self._was_night = False
        if self._consecutive_errors > 0:
            self.log(f"poll recovered after {self._consecutive_errors} failed attempt(s) "
                     f"| first failure was: {self._first_error_reason}")
            self._first_error_reason = None
        self._first_no_data_at = None
        self._consecutive_errors = 0
        await self.set_available()
        panel_count = int(self.get_setting("panel_count") or 0)
        three_phase = bool(self.get_setting("three_phase"))

        pv_list = data.pv_data or []
        self._last_pv_count = len(pv_list)
        # Some DTUs (e.g. DTU-WLite-S with HMS-1600-4T) report dtu_power and
        # dtu_daily_energy as 0 even when individual PV data is correct.
        # Fall back to summing per-PV values so the main card always shows data.
        dtu_w     = (data.dtu_power       or 0) / 10
        dtu_today = (data.dtu_daily_energy or 0) / 1000
        pv_w      = sum((pv.power         or 0) for pv in pv_list) / 10
        pv_today  = sum((pv.energy_daily  or 0) for pv in pv_list) / 1000
        power_w   = dtu_w     if dtu_w     > 0 else pv_w
        today_raw = dtu_today if dtu_today > 0 else pv_today
        today_date = datetime.now(timezone.utc).date()
        today_kwh = today_raw
        if (
            today_raw == 0
            and power_w <= 5
            and self._last_poll_ok_daily
            and self._last_poll_ok_daily > 0
            and self._last_poll_ok_date == today_date
        ):
            today_kwh = self._last_poll_ok_daily
            self.log(
                f"Daily energy reported zero at low power — keeping last value "
                f"{today_kwh:.2f}kWh for today"
            )
        warn_raw = self._warning_number(data)
        self._last_poll_ok_at = time.monotonic()
        self._last_poll_ok_power = round(power_w, 1)
        self._last_poll_ok_daily = round(today_kwh, 3)
        self._last_poll_ok_date = today_date
        self._last_poll_ok_warning = warn_raw
        await self._set_power(power_w)
        await self._set("meter_power.today", today_kwh)

        # meter_power (lifetime) has no DTU-level field to fall back to — the
        # protocol only exposes dtu_power/dtu_daily_energy at that level, not
        # a cumulative total (confirmed against hoymiles_wifi's RealDataNew
        # protobuf). So it's summed from pv_data alone, which makes it
        # vulnerable to a poll where fewer panels report than configured: the
        # sum would be incomplete, understating the true total. Skip the
        # update entirely when that happens, instead of writing a short count.
        if len(pv_list) < panel_count:
            self.log(
                f"meter_power: only {len(pv_list)}/{panel_count} panels reported — "
                f"skipping update, keeping last known value"
            )
        else:
            total_wh = sum(pv.energy_total or 0 for pv in pv_list)
            if self._last_lifetime_wh is not None and total_wh < self._last_lifetime_wh - 10:
                # Near sunset the DTU can return a full panel count with
                # stale lower totals. Reject the drop and keep the last
                # written value; a maintenance action clears the baseline
                # after a real inverter swap.
                self.log(
                    f"meter_power: implausible drop ({self._last_lifetime_wh}Wh -> {total_wh}Wh) — "
                    f"skipping, keeping last known value"
                )
            else:
                self._last_lifetime_wh = total_wh
                await self._set("meter_power", total_wh / 1000)

        # Each block below is independently guarded: an unexpected field on one
        # DTU response (e.g. an attribute missing after a library update) must
        # not skip the remaining capability updates or the flow triggers.
        try:
            if three_phase:
                await self._poll_three_phase(data)
            else:
                await self._poll_single_phase(data)
        except Exception as e:
            _LOGGER.debug(f"Phase capability update failed: {e}")

        try:
            for idx, pv in enumerate((data.pv_data or []), start=1):
                if idx > panel_count:
                    break
                sfx = f"pv{idx}"
                await self._set(f"measure_power.{sfx}",   (pv.power   or 0) / 10)
                await self._set(f"measure_voltage.{sfx}", (pv.voltage or 0) / 10)
                await self._set(f"measure_current.{sfx}", (pv.current or 0) / 100)
        except Exception as e:
            _LOGGER.debug(f"Per-panel capability update failed: {e}")

        # ── Flow triggers ──────────────────────────────────────────────────────
        try:
            await self._fire_flow_triggers(power_w, today_kwh)
        except Exception as e:
            _LOGGER.debug(f"Flow trigger evaluation failed: {e}")

        # Throttled to _HEARTBEAT_INTERVAL_S for the same reason as the other
        # routine log lines above — force_heartbeat bypasses it right after a
        # transition so the report shows it happened.
        if force_heartbeat or self._heartbeat_due():
            self.log(
                f"poll ok | solar={power_w:.0f}W daily={today_kwh:.2f}kWh "
                f"raw_daily={today_raw:.2f}kWh warn={warn_raw} "
                f"failures={self._consecutive_errors}"
            )

    def _warning_number(self, data) -> int:
        if data.tgs_data:
            return (data.tgs_data[0].warning_number or 0)
        if data.sgs_data:
            return (data.sgs_data[0].warning_number or 0)
        return 0

    async def _apply_shared_electrical_caps(self, source, warn_raw: int) -> None:
        """Frequency, temperature, alarm/fault — identical fields on sgs/tgs,
        just factored out so single- and three-phase don't repeat them."""
        await self._set("measure_frequency",   (source.frequency or 0) / 100)
        await self._set("measure_temperature", self._decode_temp(source.temperature or 0))
        await self._set("alarm_generic",       warn_raw > _INFORMATIONAL_WARN_MAX)
        await self._set("fault_description",   _decode_warning(warn_raw, self._lang()))

    async def _poll_single_phase(self, data) -> None:
        sgs = (data.sgs_data or [None])[0]
        if not sgs:
            return
        await self._set("measure_voltage", (sgs.voltage or 0) / 10)
        await self._set("measure_current", (sgs.current or 0) / 100)
        await self._apply_shared_electrical_caps(sgs, sgs.warning_number or 0)

    async def _poll_three_phase(self, data) -> None:
        tgs = (data.tgs_data or [None])[0]
        if not tgs:
            return
        await self._set("measure_voltage.phase_a", (tgs.voltage_phase_A or 0) / 10)
        await self._set("measure_voltage.phase_b", (tgs.voltage_phase_B or 0) / 10)
        await self._set("measure_voltage.phase_c", (tgs.voltage_phase_C or 0) / 10)
        await self._set("measure_current.phase_a", (tgs.current_phase_A or 0) / 100)
        await self._set("measure_current.phase_b", (tgs.current_phase_B or 0) / 100)
        await self._set("measure_current.phase_c", (tgs.current_phase_C or 0) / 100)
        await self._apply_shared_electrical_caps(tgs, tgs.warning_number or 0)

    # ── Hybrid polling (energy storage) ──────────────────────────────────────

    async def _poll_hybrid(self) -> None:
        dtu_sn_str   = self.get_setting("dtu_sn") or ""
        inverter_sns = json.loads(self.get_setting("inverter_sns") or "[]")

        if not dtu_sn_str or not inverter_sns:
            # Throttled — a persistent misconfiguration would otherwise repeat this
            # line on every poll (35-60 s) and fill the diagnostic report with it.
            if self._heartbeat_due():
                self.log("Hybrid poll: missing dtu_sn or inverter_sns")
            return

        try:
            dtu_sn_int = int(dtu_sn_str)
        except ValueError:
            self.log(f"Hybrid poll: invalid dtu_sn '{dtu_sn_str}'")
            return

        total_power = 0.0
        total_wh    = 0.0
        socs: list[int] = []
        responses   = 0

        for inv_sn in inverter_sns:
            try:
                storage = await self._dtu.async_get_energy_storage_data(
                    dtu_serial_number=dtu_sn_int,
                    inverter_serial_number=int(inv_sn),
                )
            except Exception as e:
                # Throttled — a down inverter would otherwise repeat this every poll
                # and fill the diagnostic report with identical lines.
                if self._consecutive_errors == 0 or self._heartbeat_due():
                    self.log(f"Hybrid poll error ({inv_sn}): {type(e).__name__}: {e}")
                continue

            if not storage:
                continue

            responses += 1

            # Units as in the HA hoymiles_wifi integration: power in W,
            # energy (lifetime, increasing) in 0.1 kWh steps.
            for pv in storage.pv_panels:
                total_power += pv.power or 0
                total_wh    += (pv.energy or 0) * 100

            if storage.HasField("battery_management"):
                socs.append(storage.battery_management.state_of_charge)

        if responses == 0:
            self._consecutive_errors += 1
            if self._consecutive_errors >= self._ERROR_THRESHOLD:
                await self.set_unavailable("No response from hybrid inverter")
            return

        self._consecutive_errors = 0
        await self.set_available()
        await self._set_power(total_power)
        # Same drop guard as standard polling: a missing inverter would understate the total.
        if responses == len(inverter_sns) and (
            self._last_lifetime_wh is None or total_wh >= self._last_lifetime_wh
        ):
            self._last_lifetime_wh = total_wh
            await self._set("meter_power", total_wh / 1000)
        if socs:
            await self._set("measure_battery", round(sum(socs) / len(socs)))
        # ESData has no warning_number; fault-code fields are undocumented,
        # so don't guess an alarm from them.
        await self._set("alarm_generic", False)

    # ── Night-time / solar window ─────────────────────────────────────────────

    def _get_sunrise_sunset(self) -> tuple[float, float] | None:
        """Returns (sunrise_utc, sunset_utc) as decimal UTC hours using astral.

        Result is cached per calendar day — computed and logged only once per day.
        Everything is in UTC — no timezone conversion needed.
        Priority: manual solar_latitude/longitude → Homey geolocation."""
        try:
            today = datetime.now(timezone.utc).date()
            if self._sun_cache and self._sun_cache[0] == today:
                return (self._sun_cache[1], self._sun_cache[2])

            lat = self._get_float_setting("solar_latitude")
            lng = self._get_float_setting("solar_longitude")

            from_geolocation = False
            if lat is None or lat == 0.0:
                lat = self.homey.geolocation.get_latitude()
                from_geolocation = True
            if lng is None or lng == 0.0:
                lng = self.homey.geolocation.get_longitude()
                from_geolocation = True

            if lat is None or lng is None or (lat == 0.0 and lng == 0.0):
                self.log("Night backoff disabled — location not available (Homey location not configured?)")
                return None

            # Back-fill settings so the user can see which coordinates are in use.
            # Only written once per day (sun_cache miss), only when fields are still
            # at default 0 values, and only when geolocation returned a real fix.
            if from_geolocation and (lat != 0.0 or lng != 0.0):
                cur_lat = self._get_float_setting("solar_latitude")
                cur_lng = self._get_float_setting("solar_longitude")
                if (cur_lat is None or cur_lat == 0.0) and (cur_lng is None or cur_lng == 0.0):
                    async def _save_location(la: float, lo: float) -> None:
                        try:
                            await self.set_settings({
                                "solar_latitude":  round(la, 6),
                                "solar_longitude": round(lo, 6),
                            })
                        except Exception as exc:
                            _LOGGER.debug(f"Back-fill location settings failed: {exc}")
                    asyncio.create_task(_save_location(lat, lng))

            loc = LocationInfo(latitude=lat, longitude=lng)
            s   = sun(loc.observer, date=today, tzinfo=timezone.utc)
            sr  = s["sunrise"].hour + s["sunrise"].minute / 60
            ss  = s["sunset"].hour  + s["sunset"].minute  / 60
            self._sun_cache = (today, sr, ss)
            self.log(f"Sun times (UTC): sunrise={sr:.2f}h sunset={ss:.2f}h lat={lat:.4f} lng={lng:.4f}")
            return (sr, ss)
        except Exception as e:
            self.log(f"Night backoff disabled — sun calculation failed: {e}")
            return None

    def _is_night_time_from(self, sun_times: tuple[float, float] | None) -> bool:
        """True when outside solar window with a 30-minute buffer on each side.

        Compares UTC current time against UTC sunrise/sunset. For locations west
        of the UTC meridian (e.g. UTC-6), the sunset returned by astral can be on
        the next calendar day in UTC (sunset < sunrise). In that case the solar day
        wraps past midnight UTC and the night window is the inverse interval.
        """
        if sun_times is None:
            return False
        sunrise, sunset = sun_times
        try:
            now      = datetime.now(timezone.utc)
            utc_hour = now.hour + now.minute / 60
            start = sunrise - 0.5
            end   = sunset  + 0.5

            if start < end:
                # Solar window falls within the same UTC day.
                return utc_hour < start or utc_hour >= end
            # Solar window crosses midnight UTC.
            return end <= utc_hour < start
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
        # Close the production day: microinverters fall asleep (DTU: no data) while
        # power may still be above the stop threshold, so "stopped" and the daily
        # summary would otherwise never fire that day.
        if self._was_producing:
            try:
                await self._production_stopped(self._last_today_kwh)
            except Exception as e:
                _LOGGER.warning(f"Production-stopped trigger at night entry failed: {e}")
        self._low_polls = 0
        # The UTC date can be the same before and after a night (east of ~UTC+5),
        # so end the "same day" here or the morning shows yesterday's daily total.
        self._last_poll_ok_date = None
        await self._apply_zeros()
        await self.set_available()
        self._backoff_until = time.monotonic() + _BACKOFF_NIGHT
        sunrise, sunset = sun_times
        suffix = f" | {reason}" if reason else ""
        # Log immediately on entering night (transition) or every _HEARTBEAT_INTERVAL_S
        # while it persists — every single 30-min backoff cycle would burn through the
        # ~100-line diagnostic report window in under 2 days of normal operation.
        if not self._was_night or self._heartbeat_due():
            self.log(
                f"poll: night — backing off 30 min | "
                f"sunrise≈{sunrise:.2f}h sunset≈{sunset:.2f}h (UTC) "
                f"last_power={self._last_poll_ok_power}W "
                f"last_daily={self._last_poll_ok_daily}kWh "
                f"last_warn={self._last_poll_ok_warning}{suffix}"
            )
        self._was_night = True

    # ── Apply zeros ───────────────────────────────────────────────────────────

    async def _apply_zeros(self) -> None:
        """Zero out instantaneous capabilities. Preserves meter_power (lifetime)."""
        panel_count = int(self.get_setting("panel_count") or 0)
        three_phase = bool(self.get_setting("three_phase"))

        await self._set_power(0)
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

    # ── Flow triggers ─────────────────────────────────────────────────────────

    async def _production_stopped(self, today_kwh: float) -> None:
        self._was_producing = False
        self.log(f"production stopped — daily {today_kwh:.2f}kWh")
        await self._trigger("solar_production_stopped", {})
        await self._trigger("daily_data_updated", {"daily_production": today_kwh})

    async def _fire_flow_triggers(self, power_w: float, today_kwh: float) -> None:
        """Fire flow triggers based on state transitions detected in poll values."""
        self._last_today_kwh = today_kwh
        self._low_polls = self._low_polls + 1 if power_w <= _PRODUCTION_STOP_W else 0
        if self._was_producing and self._low_polls:
            # Always logged (not debug): shows whether a mid-day "stopped" came from
            # one transient DTU zero or minutes of 0 W, without asking for debug.
            self.log(f"low power while producing: {power_w:.0f}W "
                     f"({self._low_polls}/{_PRODUCTION_STOP_POLLS})")
        if self._was_producing:
            is_producing = self._low_polls < _PRODUCTION_STOP_POLLS
        else:
            is_producing = power_w > _PRODUCTION_START_W

        # Fault/alarm detected — edge-triggered, only on the OK → fault transition
        # (fault_description was already updated earlier in this poll).
        if self.has_capability("fault_description"):
            description = self.get_capability_value("fault_description") or "OK"
            has_fault = description != "OK"
            if self._had_fault is None:
                self._had_fault = has_fault
            elif has_fault and not self._had_fault:
                self._had_fault = True
                await self._trigger("fault_detected", {"description": description})
            elif not has_fault and self._had_fault:
                self._had_fault = False

        if self._was_producing is None:
            # First poll after startup — record state silently, no transition to fire.
            self._was_producing = is_producing
        elif is_producing and not self._was_producing:
            self._was_producing = True
            self.log(f"production started — {power_w:.0f}W")
            await self._trigger("solar_production_started", {"power": power_w})
        elif not is_producing and self._was_producing:
            await self._production_stopped(today_kwh)

        await self._trigger("data_updated", {"power": power_w, "daily_production": today_kwh})

    async def _trigger(self, card_id: str, tokens: dict) -> None:
        """Fire a flow trigger card."""
        try:
            # Python SDK device cards: get_device_trigger_card(id).trigger(device, tokens).
            card = self.homey.flow.get_device_trigger_card(card_id)
            await card.trigger(self, tokens)
        except Exception as e:
            _LOGGER.warning(f"Flow trigger '{card_id}' failed: {e}")

    # ── Helpers ───────────────────────────────────────────────────────────────

    def _lang(self) -> str:
        """Homey's active 2-char language code, e.g. 'en', 'nl' — used to pick
        the right translation for fault_description. Falls back to English
        if the API call fails for any reason (must never break a poll)."""
        try:
            return self.homey.i18n.get_language() or "en"
        except Exception:
            return "en"

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
