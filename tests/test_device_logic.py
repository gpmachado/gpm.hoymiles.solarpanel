"""Logic checks for device.py / driver.py, run outside Homey:

    python3 tests/test_device_logic.py

Stubs the Homey SDK and the DTU network client; uses the real hoymiles_wifi
protobufs from python_packages (no network, no hardware).
"""

import asyncio
import glob
import importlib.util
import json
import os
import sys
import types
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
SP = glob.glob("python_packages/*/.venv/lib/python3*/site-packages")[0]
sys.path.insert(0, SP)
# Stub the Homey SDK and app package imports so device.py loads outside Homey.
m = types.ModuleType("hoymiles_wifi.dtu")
m.DTU = object
sys.modules["hoymiles_wifi.dtu"] = m
for name in (
    "homey",
    "homey.device",
    "homey.driver",
    "homey.app",
    "astral",
    "astral.sun",
):
    sys.modules[name] = types.ModuleType(name)
sys.modules["homey.device"].Device = object
sys.modules["homey.driver"].Driver = object
sys.modules["homey.app"].App = object
sys.modules["astral"].LocationInfo = object
sys.modules["astral.sun"].sun = None


def load(modname, path):
    spec = importlib.util.spec_from_file_location(modname, path)
    m = importlib.util.module_from_spec(spec)
    sys.modules[modname] = m
    spec.loader.exec_module(m)
    return m


for pkg in ("app", "app.drivers", "app.drivers.hoymiles", "app.lib"):
    sys.modules[pkg] = types.ModuleType(pkg)
load("app.lib.fault_codes", "lib/fault_codes.py")
load("app.lib.debug", "lib/debug.py")
load("app.lib.local_time", "lib/local_time.py")
load("app.app", "app.py")
drv = load("app.drivers.hoymiles.driver", "drivers/hoymiles/driver.py")
dev = load("app.drivers.hoymiles.device", "drivers/hoymiles/device.py")
from hoymiles_wifi.protobuf import ESData_pb2  # noqa: E402 (after sys.path setup)


def es(powers, energies, soc):
    m = ESData_pb2.ESDataReqDTO()
    for p, e in zip(powers, energies):
        pv = m.pv_panels.add()
        pv.power = p
        pv.energy = e
    if soc is not None:
        m.battery_management.state_of_charge = soc
    return m


class FakeDTU:
    def __init__(self, replies):
        self.replies = replies

    async def async_get_energy_storage_data(
        self, dtu_serial_number, inverter_serial_number
    ):
        r = self.replies[inverter_serial_number]
        if isinstance(r, Exception):
            raise r
        return r


class D(dev.HoymilesDevice):
    def __init__(self, settings, replies):
        self.s = settings
        self.vals = {}
        self._dtu = FakeDTU(replies)

    def get_setting(self, k):
        return self.s.get(k)

    async def set_capability_value(self, c, v):
        self.vals[c] = v

    async def set_available(self):
        pass

    async def set_unavailable(self, msg):
        self.vals["unavailable"] = msg

    def log(self, *a):
        pass


settings = {
    "is_hybrid": True,
    "dtu_sn": "123",
    "inverter_sns": json.dumps(["1", "2", "3"]),
}
d = D(
    settings,
    {1: es([1000, 500], [100, 50], 90), 2: es([200], [30], 90), 3: es([0], [20], 30)},
)
asyncio.run(d._poll_hybrid())
assert d.vals["measure_power"] == 1700, d.vals
assert abs(d.vals["meter_power"] - 20.0) < 1e-9, d.vals  # 200 * 0.1 kWh
assert d.vals["measure_battery"] == 70, d.vals  # (90+90+30)/3
assert d.vals["alarm_generic"] is False

# One inverter down: power still shown, lifetime NOT written (would understate total).
d.vals.clear()
d._dtu = FakeDTU({1: es([100], [101], 50), 2: OSError("down"), 3: es([0], [20], 50)})
asyncio.run(d._poll_hybrid())
assert d.vals["measure_power"] == 100 and "meter_power" not in d.vals, d.vals

# Build list: hybrid has no daily tile.
assert "meter_power.today" not in drv._build_capabilities(2, False, True)
print("hybrid checks OK")


class R(D):
    def __init__(self, settings, caps):
        super().__init__(settings, {})
        self.caps = set(caps)
        self.opts = {}

    def has_capability(self, c):
        return c in self.caps

    async def add_capability(self, c):
        self.caps.add(c)

    async def set_capability_options(self, c, o):
        self.opts[c] = o

    async def set_settings(self, s):
        self.s.update(s)


# Paired with 2 panels, live data shows 4, PV detail hidden: adds pv3/pv4 power only.
r = R(
    {"panel_count": 2, "three_phase": False, "showPvDetail": False},
    drv._build_capabilities(2, False, False),
)
r._last_pv_count = 4
added = asyncio.run(r.restore_capabilities())
assert set(added) == {"measure_power.pv3", "measure_power.pv4"}, added
assert (
    r.s["panel_count"] == 4
    and r.opts["measure_power.pv3"]["title"]["en"] == "Panel 3 Power"
)
# on_settings path: new three_phase value passed in, adds phase caps.
added = asyncio.run(r.restore_capabilities({"three_phase": True}))
assert "measure_voltage.phase_a" in added, added
print("restore checks OK")


# Night window crossing midnight UTC (e.g. UTC-6: sunrise 12.5h, sunset 1.0h UTC next day).
class N(D):
    def __init__(self):
        pass


n = N()


def night_at(hour, times):
    real = dev.datetime

    class Fixed(real):
        @classmethod
        def now(cls, tz=None):
            return real(2026, 6, 1, int(hour), int(hour % 1 * 60), tzinfo=timezone.utc)

    dev.datetime = Fixed
    try:
        return n._is_night_time_from(times)
    finally:
        dev.datetime = real


assert night_at(6.0, (12.5, 1.0)) is True  # 00:00 local
assert night_at(18.0, (12.5, 1.0)) is False  # 12:00 local
assert night_at(3.0, (5.0, 20.0)) is True and night_at(12.0, (5.0, 20.0)) is False


# W100 legacy rows: one grid row per inverter, values aggregated.
def row(sn, port, gv, gp):
    return types.SimpleNamespace(
        pv_sn=sn,
        pv_port=port,
        pv_power=100,
        pv_vol=300,
        pv_cur=50,
        pv_energy_total=1000,
        pv_energy=20,
        pv_fault_num=0,
        grid_vol=gv,
        grid_freq=5000 if gv else 0,
        grid_p=gp,
        grid_i=10 if gv else 0,
        pv_temp=250,
    )


legacy = types.SimpleNamespace(
    dtu_sn="10D3",
    pv_data=[row("A", 1, 2300, 500), row("A", 2, 0, 0), row("B", 1, 2310, 400)],
)
out = dev.HoymilesDevice._normalize_legacy_real_data(legacy)
assert (
    out.dtu_power == 900 and len(out.pv_data) == 3 and out.sgs_data[0].voltage == 2305
), out


# W100: a311 first, a303 fallback, then stick to whichever returned panels.
class FakeW100Dtu:
    def __init__(self, new, old):
        self.new, self.old, self.calls = new, old, []

    async def async_get_real_data_new(self):
        self.calls.append("a311")
        return self.new

    async def async_get_real_data(self):
        self.calls.append("a303")
        return self.old


def w100(new, old):
    w = dev.HoymilesDevice()
    w.log = lambda *a: None
    w._dtu = FakeW100Dtu(new, old)
    return w


new_ok = types.SimpleNamespace(pv_data=[object()])
w = w100(new_ok, legacy)
assert asyncio.run(w._read_w100()) is new_ok and w._w100_proto == "a311"
w._dtu.new = types.SimpleNamespace(pv_data=[])  # asleep: no a303 retry once a311 worked
asyncio.run(w._read_w100())
assert w._dtu.calls == ["a311", "a311"], w._dtu.calls

w = w100(None, legacy)
assert asyncio.run(w._read_w100()).dtu_power == 900 and w._w100_proto == "a303"
asyncio.run(w._read_w100())
assert w._dtu.calls == ["a311", "a303", "a303"], w._dtu.calls

w = w100(None, None)
assert asyncio.run(w._read_w100()) is None and w._w100_proto is None


# A night must end the "same day" for the daily-zero guard.
class Night(D):
    def __init__(self):
        self.vals = {}
        self.s = {}

    async def _apply_zeros(self):
        pass


nd = Night()
nd._last_poll_ok_date = datetime.now(timezone.utc).date()
asyncio.run(nd._apply_night_backoff((5.0, 20.0)))
assert nd._last_poll_ok_date is None
print("night/legacy checks OK")


# Power ratio: tile follows nominal_power; value = power / nominal.
class P(R):
    async def remove_capability(self, c):
        self.caps.discard(c)


p = P({"nominal_power": 1600}, ["measure_power"])
asyncio.run(p._sync_power_ratio_cap())
assert "measure_power_ratio" in p.caps
asyncio.run(p._set_power(400.0))
assert p.vals["measure_power"] == 400.0 and p.vals["measure_power_ratio"] == 25, p.vals
asyncio.run(p._sync_power_ratio_cap(0))  # on_settings passes the new value
assert "measure_power_ratio" not in p.caps
print("power ratio checks OK")

# Regression (10-13 dev log): devices paired before nominal_power existed have no
# stored value; on_init must not crash and must not add the tile.
old = P({}, ["measure_power"])
asyncio.run(old._sync_power_ratio_cap())
assert "measure_power_ratio" not in old.caps
# Hidden PV detail must stay hidden on init (no sentinel coercing it to "show").
hid = R({"panel_count": 1, "showPvDetail": False}, ["measure_power"])
asyncio.run(hid._sync_detail_caps("showPvDetail", hid._pv_detail_caps()))
assert "measure_voltage.pv1" not in hid.caps, hid.caps
print("init default checks OK")


# Repair (10-13 log): saving a new IP must rebuild the DTU right away —
# set_settings() from the app doesn't fire on_settings.
class Session:
    def __init__(self):
        self.handlers = {}

    def set_handler(self, name, fn):
        self.handlers[name] = fn


class RepairDev(R):
    built = 0

    def get_id(self):
        return "dev"

    async def _build_dtu(self):
        self.built += 1


class Drv(drv.HoymilesDriver):
    def __init__(self):
        pass

    def log(self, *a):
        pass


rd = RepairDev({"ip": "192.168.1.201"}, [])
sess = Session()
asyncio.run(Drv().on_repair(sess, rd))
asyncio.run(sess.handlers["save_repair"]({"ip": "10.10.10.201"}))
assert rd.s["ip"] == "10.10.10.201" and rd.built == 1, (rd.s, rd.built)
print("repair checks OK")


# ── Flow triggers use the Python SDK device-card API ─────────────────────────
# Python SDK: get_device_trigger_card(id).trigger(device, tokens). The app-level
# get_trigger_card(id).trigger() takes no device — the JS-style call raised a
# TypeError that was swallowed, so no trigger ever fired.
class DeviceCard:
    calls = []

    async def trigger(self, device, tokens=None, **kwargs):
        DeviceCard.calls.append((device, tokens))


class AppCard:
    async def trigger(self, tokens=None, **kwargs):
        pass


class Flow:
    def get_device_trigger_card(self, card_id):
        return DeviceCard()

    def get_trigger_card(self, card_id):
        return AppCard()


td = D({}, [])
td.homey = types.SimpleNamespace(flow=Flow())
asyncio.run(td._trigger("solar_production_started", {"power": 120.0}))
assert DeviceCard.calls == [(td, {"power": 120.0})], DeviceCard.calls
print("flow trigger checks OK")


# ── Per-device "Debug logging": only the enabled DTU, never secrets ──────────
import io  # noqa: E402
import logging  # noqa: E402

dbg = sys.modules["app.lib.debug"]
dbg.install()
handler = next(h for h in logging.getLogger("hoymiles_wifi").handlers
               if any(isinstance(f, dbg._Filter) for f in h.filters))
buf = io.StringIO()
handler.setStream(buf)
lib = logging.getLogger("hoymiles_wifi")


async def dtu_poll(device_id):
    dbg.scope.set(device_id)  # what _poll_loop does
    await asyncio.sleep(0)
    lib.debug(f"[*] Request message: from {device_id}")
    lib.debug(f"Response: 820103494f548a010c<wifi-password> {device_id}")
    lib.warning(f"timeout {device_id}")


async def two_dtus():
    await asyncio.gather(dtu_poll("dtu-201"), dtu_poll("dtu-202"))


dbg.set_enabled("dtu-201", True)
asyncio.run(two_dtus())
dbg.set_enabled("dtu-201", False)
out = buf.getvalue()
assert "from dtu-201" in out and "from dtu-202" not in out, out
assert "Response" not in out and "wifi-password" not in out, out
assert "timeout dtu-201" in out and "timeout dtu-202" in out, out
print("debug scope checks OK")


# ── Production started/stopped: hysteresis, transient DTU zeros, night close ─
class TrigDev(D):
    def __init__(self):
        super().__init__({}, [])
        self.fired = []

    def has_capability(self, c):
        return False

    def log(self, *a):
        pass

    async def _trigger(self, card, tokens):
        if card != "data_updated":  # fires every poll, not a transition
            self.fired.append(card)


async def run_powers(dev, powers):
    for w in powers:
        await dev._fire_flow_triggers(float(w), 1.5)


td = TrigDev()
asyncio.run(run_powers(td, [0, 3, 5.9, 12]))            # dawn: below 25 W, no start
assert td.fired == [], td.fired
asyncio.run(run_powers(td, [30]))                       # start above 25 W
assert td.fired == ["solar_production_started"], td.fired
asyncio.run(run_powers(td, [400, 0, 140.9, 600]))      # one transient DTU zero mid-day
assert td.fired == ["solar_production_started"], td.fired
asyncio.run(run_powers(td, [9, 4, 3, 2]))               # dusk: three low polls in a row
assert td.fired.count("solar_production_stopped") == 1, td.fired
assert td.fired[-1] == "daily_data_updated", td.fired

tn = TrigDev()                                          # micro falls asleep above the threshold
asyncio.run(run_powers(tn, [0, 300, 40]))
tn.fired.clear()
tn._was_night = False
tn._backoff_until = 0
asyncio.run(tn._apply_night_backoff((8.2, 20.9)))
assert tn.fired == ["solar_production_stopped", "daily_data_updated"], tn.fired
print("production trigger checks OK")


# Daily Energy midnight reset: zero once per new local date, default on, can be turned off,
# and a restart after midnight still resets (state lives in the device store).
class MR(R):
    def __init__(self, settings, store=None):
        super().__init__(settings, ["meter_power.today"])
        self.store = dict(store or {})

    def get_store(self):
        return self.store

    async def set_store_value(self, k, v):
        self.store[k] = v


def _on(day):
    async def _local_date():
        return day
    return _local_date


mr = MR({})
mr._local_date = _on("2026-11-22")
asyncio.run(mr._maybe_reset_daily())                    # first run: only remembers the date
assert "meter_power.today" not in mr.vals and not mr._daily_stale
assert mr.store["dailyLocalDate"] == "2026-11-22", mr.store
mr._last_poll_ok_daily = 2.1
mr._local_date = _on("2026-11-23")
asyncio.run(mr._maybe_reset_daily())
assert mr.vals["meter_power.today"] == 0 and mr._daily_stale and mr._last_poll_ok_daily == 0
assert mr.store == {"dailyLocalDate": "2026-11-23", "dailyStale": True}, mr.store
mr.vals.clear()
asyncio.run(mr._maybe_reset_daily())                    # same day: no second reset
assert mr.vals == {}, mr.vals

# Restart at 02:00: the store still says yesterday, so the new process resets.
rs = MR({}, {"dailyLocalDate": "2026-11-22", "dailyStale": False})
rs._local_date = _on("2026-11-23")
asyncio.run(rs._maybe_reset_daily())
assert rs.vals["meter_power.today"] == 0 and rs._daily_stale, rs.vals
# Restart in the afternoon after the reset: hold resumes, no new reset.
ra = MR({}, {"dailyLocalDate": "2026-11-23", "dailyStale": True})
ra._local_date = _on("2026-11-23")
asyncio.run(ra._maybe_reset_daily())
assert ra.vals == {} and ra._daily_stale, ra.vals

off = MR({"reset_daily_midnight": False}, {"dailyLocalDate": "2026-11-22", "dailyStale": True})
off._daily_local_date = "2026-11-22"
off._daily_stale = True
off._local_date = _on("2026-11-23")
asyncio.run(off._maybe_reset_daily())
assert off.vals == {} and not off._daily_stale and off.store["dailyStale"] is False, off.vals

# The local date itself (11-24 BR log: reset at 00:00 UTC = 21:00 local). homey 0.0.11
# reports "UTC" whatever the Homey is set to; -42.7° longitude gives UTC-3.
lt_mod = sys.modules["app.lib.local_time"]
_real_dt = lt_mod.datetime


class _Frozen(datetime):
    @classmethod
    def now(cls, tz=None):
        instant = datetime(2026, 11, 24, 0, 1, tzinfo=timezone.utc)
        return instant.astimezone(tz) if tz else instant


lt_mod.datetime = _Frozen
try:
    for homey_tz, store, expect_log in (
        ("UTC", {}, "UTC-3 from longitude -42.7 (Homey reports UTC)"),
        ("America/Sao_Paulo", {}, "Homey time zone America/Sao_Paulo"),
        # stored before the Homey moved (Tokyo is 12 h from -42.7°): ignored
        ("UTC", {"homeyTimezone": "Asia/Tokyo"}, "UTC-3 from longitude -42.7 (Homey reports UTC)"),
        ("UTC", {"homeyTimezone": "America/Sao_Paulo"},
         "stored time zone America/Sao_Paulo (Homey reports UTC)"),
    ):
        ld = MR({"solar_longitude": -42.6984}, store)
        ld.homey = types.SimpleNamespace(clock=types.SimpleNamespace(get_timezone=lambda tz=homey_tz: tz))
        ld.logs = []
        ld.log = ld.logs.append
        assert asyncio.run(ld._local_date()) == "2026-11-23", (homey_tz, store)
        assert ld.logs == [f"Daily Energy reset uses {expect_log}"], ld.logs
    assert ld.store["homeyTimezone"] == "America/Sao_Paulo"
finally:
    lt_mod.datetime = _real_dt
print("daily reset checks OK")


# Lifetime guard (11-24 NL log, 10D3): at dusk the DTU reported -14 kWh on two
# polls in a row; accepting it made Homey Energy count +14 kWh the next morning.
lt = R({}, ["meter_power"])
asyncio.run(lt._update_lifetime(8904737, 120.0))
for w in (8890382, 8890382, 8890382):                   # dusk / night / storm: 0 W
    asyncio.run(lt._update_lifetime(w, 0.0))
assert lt.vals["meter_power"] == 8904.737, lt.vals
asyncio.run(lt._update_lifetime(8904800, 27.0))         # morning: real total back
assert lt.vals["meter_power"] == 8904.8, lt.vals
# Genuine reset (DTU swapped): accepted after two producing polls.
asyncio.run(lt._update_lifetime(1200, 300.0))
assert lt.vals["meter_power"] == 8904.8
asyncio.run(lt._update_lifetime(1201, 310.0))
assert lt.vals["meter_power"] == 1.201, lt.vals
print("lifetime guard checks OK")
