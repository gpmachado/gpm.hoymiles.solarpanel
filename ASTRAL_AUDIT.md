# Astral / Night Backoff Audit — Hoymiles

## Context

Both gpm.python.deye and gpm.python.hoymiles use the `astral` library to calculate
sunrise/sunset and decide when to apply night backoff. A bug was found and fixed in
both apps (commit `3384813` in Hoymiles). This document lists all patterns to verify
are correct in Hoymiles `drivers/hoymiles/device.py`.

Reference: the same patterns in `gpm.python.deye/drivers/deye/device.py` can be used
as ground truth for comparison.

---

## Bug 1 — Fixed: hardcoded fallback in UTC (commit 3384813)

### What was wrong

`_get_sunrise_sunset()` returned `(6.0, 19.0)` as a fallback when geolocation or
timezone was unavailable. These values are local hours, but the comparison in
`_is_night_time()` used UTC time. For a user in UTC-3 (Brazil), UTC 20:00 = local
17:00 — night backoff triggered 2 hours before sunset.

### Fix applied

`_get_sunrise_sunset()` now returns `None` when anything is unavailable.
`_is_night_time()` returns `False` (assume daytime) when it receives `None`.

### Verify in device.py

- `_get_sunrise_sunset()` must never return a hardcoded tuple — only `(sr, ss)` from
  `astral` or `None`.
- `_is_night_time()` must check `if times is None: return False` before unpacking.

---

## Bug 2 — POTENTIAL CRASH: double call to `_get_sunrise_sunset()` in poll error path

### Location

`device.py` around line 138 (inside `_poll_standard`):

```python
if self._is_night_time():
    ...
    sunrise, sunset = self._get_sunrise_sunset()   # ← second call
    self.log(f"poll: night — backing off ... sunrise≈{sunrise:.2f}h ...")
```

### Why it can crash

`_is_night_time()` calls `_get_sunrise_sunset()` internally. When it returns `True`,
the code calls `_get_sunrise_sunset()` a **second time** to format the log message.
Between the two calls, a transient error (e.g. network timeout on a DNS lookup that
astral triggers internally) could cause the second call to return `None`.
Unpacking `None` → `TypeError: cannot unpack non-iterable NoneType object`.

This crash silently swallows the night-backoff logic and may re-raise the original
poll error as an unhandled exception.

### Fix

Cache the result from `_is_night_time` / `_get_sunrise_sunset` so it is called only
once per poll cycle. Pattern used in gpm.python.deye:

```python
# Deye pattern — _is_string_night() calls _is_night_time() which calls
# _get_sunrise_sunset() once, caches nothing but only reads once per code path.
# The log message uses a second safe call with a guard:
sr, ss = self._get_sunrise_sunset() or (0, 0)
self.log(f"night — sunrise≈{sr:.2f}h sunset≈{ss:.2f}h")
```

Or simpler: guard the unpack:

```python
if self._is_night_time():
    self._consecutive_errors = 0
    await self._apply_zeros()
    await self.set_available()
    self._backoff_until = time.monotonic() + _BACKOFF_NIGHT
    times = self._get_sunrise_sunset()
    if times:
        self.log(f"poll: night — backing off 30 min | sunrise≈{times[0]:.2f}h sunset≈{times[1]:.2f}h | {e}")
    else:
        self.log(f"poll: night — backing off 30 min (sun times unavailable) | {e}")
```

---

## Bug 3 — POTENTIAL WRONG DECISION: timezone read twice independently

### Location

`_is_night_time()` in device.py:

```python
def _is_night_time(self) -> bool:
    times = self._get_sunrise_sunset()   # reads get_timezone() internally
    if times is None:
        return False
    sunrise, sunset = times
    try:
        tz_name = self.homey.clock.get_timezone()   # reads AGAIN
        now     = datetime.now(timezone.utc)
        local   = now.astimezone(ZoneInfo(tz_name)) if tz_name else now   # ← if None → uses UTC
        local_hour = local.hour + local.minute / 60
        return local_hour < (sunrise - 0.5) or local_hour >= (sunset + 0.5)
```

### Why it can be wrong

`_get_sunrise_sunset()` succeeded (returned `sr`, `ss` in local time).
Then `get_timezone()` is called again and returns `None` (e.g. transient failure).
The fallback `local = now` means `local` is UTC.
`local_hour` is now in UTC, but `sunrise` / `sunset` are in local time.
The comparison is incorrect — same class of bug as Bug 1.

### Fix

Pass timezone down from `_get_sunrise_sunset()` so it is read only once:

```python
def _get_sunrise_sunset(self) -> tuple[float, float, str] | None:
    """Returns (sunrise, sunset, tz_name) or None."""
    ...
    return (sr, ss, tz_name)

def _is_night_time(self) -> bool:
    result = self._get_sunrise_sunset()
    if result is None:
        return False
    sunrise, sunset, tz_name = result
    try:
        now        = datetime.now(timezone.utc)
        local      = now.astimezone(ZoneInfo(tz_name))
        local_hour = local.hour + local.minute / 60
        return local_hour < (sunrise - 0.5) or local_hour >= (sunset + 0.5)
    except Exception as e:
        _LOGGER.warning(f"Night time check failed ({e}) — assuming daytime")
        return False
```

Note: gpm.python.deye has the same pattern (Bug 3) and the same fix should be applied
to Deye as well when Hoymiles is fixed.

---

## Bug 4 — EDGE CASE: empty string timezone not caught

### Location

`_get_sunrise_sunset()`:

```python
tz_name = self.homey.clock.get_timezone()
if not lat or not lng:
    ...
    return None
# tz_name is NOT validated here
loc = LocationInfo(latitude=lat, longitude=lng, timezone=tz_name)
s   = sun(loc.observer, tzinfo=ZoneInfo(tz_name))   # ← ZoneInfo("") raises KeyError
```

### Why it matters

`get_timezone()` can return an empty string `""` instead of `None`. `ZoneInfo("")`
raises `KeyError: ''`. This is caught by the outer `except Exception` and returns
`None` — so the app won't crash, but it logs a warning that looks like a bug rather
than a missing configuration.

### Fix

Add explicit check:

```python
tz_name = self.homey.clock.get_timezone()
if not lat or not lng or not tz_name:
    _LOGGER.warning("Night backoff disabled — geolocation or timezone not set")
    return None
```

---

## Summary table

| # | Severity | Status in Hoymiles | Description |
|---|----------|--------------------|-------------|
| 1 | HIGH — false night mode | **Fixed** (commit `3384813`) | Hardcoded `(6.0, 19.0)` fallback in UTC |
| 2 | MEDIUM — potential crash | **Not fixed** | Double call to `_get_sunrise_sunset()` in poll error path; second call may return `None` |
| 3 | MEDIUM — wrong decision | **Not fixed** | Timezone read twice; if second read returns `None`, comparison uses UTC vs local |
| 4 | LOW — noisy warning | **Not fixed** | Empty string timezone not caught before `ZoneInfo("")` |

## Files to edit

- `drivers/hoymiles/device.py` — all four bugs are here
- No changes needed in `driver.py` or `app.py`

## Cross-reference

The same bugs 2, 3, 4 exist in `gpm.python.deye/drivers/deye/device.py` and should
be fixed there too after Hoymiles is done. The Deye device.py is at:
`/Users/gabriel/HomeyApp/gpm.python.deye/drivers/deye/device.py`
