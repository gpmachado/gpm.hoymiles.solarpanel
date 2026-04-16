# Project context — gpm.hoymiles.solarpanel (Python)

## Locations

- Local: `/Users/gabriel/HomeyApp/gpm.python.hoymiles`
- GitHub: https://github.com/gpmachado/gpm.hoymiles.solarpanel (branch: `main`)
- Node.js predecessor: `/Users/gabriel/HomeyApp/gpm.hoymiles.solarpanel.beta`

## Current version

v1.1.7 — published on Homey App Store (test channel).

## Architecture

Single universal driver (`drivers/hoymiles/`) — replaces the two old separate HMS variants.

### Key files

| File | Role |
|------|------|
| `drivers/hoymiles/device.py` | Device lifecycle, polling loop, night backoff, capability updates |
| `drivers/hoymiles/driver.py` | Pairing wizard, DTU auto-discovery, auto-detection (panel count, 3-phase, hybrid, encryption) |
| `app.py` | App entry point |
| `requirements.txt` | `hoymiles-wifi`, `astral` |

### Device types detected at pairing

- Single-phase standard (1–4 panels)
- Three-phase
- Hybrid (energy storage / battery)
- Encrypted (DTU-Pro-S firmware ≥ V00.02.20)

### Polling

- Day: every 5 minutes (`_BACKOFF_DAY = 5 * 60`)
- Night: every 30 minutes (`_BACKOFF_NIGHT = 30 * 60`)
- Night detection: `astral` library using Homey geolocation + timezone

### Settings

| Key | Description |
|-----|-------------|
| `ip` | DTU IP address |
| `is_encrypted` | True for DTU-Pro-S encrypted firmware |
| `enc_rand` | Random key for encrypted DTU |
| `polling_interval` | Polling interval override (minutes) |
| `panel_count` | Number of panels (auto-detected at pairing) |

## Stack

- Python (Homey Python SDK)
- `hoymiles-wifi` — local TCP polling, port 10081
- `astral` — sunrise/sunset calculation (NOAA algorithm)
- Compose: yes (`drivers/hoymiles/`)

## Recent fixes (latest first)

### `3384813` — fix: night backoff disabled when geolocation/timezone unavailable
Same bug as gpm.python.deye `fcd1cc3`. When `clock.get_timezone()` returned
`None`, `_get_sunrise_sunset()` fell back to hardcoded `(6.0, 19.0)` in UTC.
For users in UTC-3 (Brazil), this caused night mode to trigger at 17h51 local
time (20h51 UTC > 19h00 fallback).

Fix: `_get_sunrise_sunset()` now returns `None` when location unavailable.
`_is_night_time()` returns `False` (assume daytime) in that case.

### `41aaca4` — fix: panel data mapping use enumeration index instead of port_number
Port number from DTU is not always sequential — use enumerate() index instead.

### `f6f8dd9` — fix: on_settings signature
Homey Python SDK changed `on_settings` to keyword args
`(old_settings, new_settings, changed_keys)` — same fix applied to Deye app.

## Known users / testers

| User | DTU | Status |
|------|-----|--------|
| Martin | DTU-Pro-S V00.02.22 @ 192.168.0.41 | Encrypted — needs enc_rand key |
| Sanne Boon | DTU-Pro-S | Same encrypted firmware issue |

## Pending

- [ ] **Repair flow** — implement `on_repair(session, device)` so users can change the DTU IP
  without removing the device. Reference implementation in gpm.python.deye:
  `drivers/deye/driver.py` (`on_repair`) + `drivers/deye/repair/repair_device.html`.
  For Hoymiles the repair screen only needs IP and encryption fields (no model selection).
- [ ] Confirm encrypted pairing works for Martin and Sanne (DTU-Pro-S)
- [ ] Verify `meter_power.today` resets correctly at midnight for all device types
- [ ] Test three-phase polling path with a real 3-phase inverter
- [ ] **Flow cards** — no flow cards implemented yet. Port from gpm.python.deye:
  - Triggers: `solar_production_started`, `solar_production_stopped`, `data_updated`
  - Conditions: `is_solar_producing`
  - Grid/battery flows (`grid_lost`, `grid_restored`, `is_grid_feeding`, `is_battery_charging`)
    only relevant for hybrid — no hybrid users reported yet, lower priority.
- [ ] README.md — still partially copied from Node.js version, needs review

## Patterns / conventions

- All comments and docstrings in **English**
- `_LOGGER = logging.getLogger(__name__)` for module-level logging
- `self.log(...)` for device-level operational messages
- `_LOGGER.warning(...)` for non-fatal errors that affect behavior
- `on_settings(self, old_settings, new_settings, changed_keys)` — keyword args (SDK ≥ 1.x)
- Night backoff: never use hardcoded time fallbacks — return `None` and assume daytime

## Relationship with gpm.python.deye

Both apps share the same patterns and were developed in parallel. Fixes that
affect shared logic (night backoff, `on_settings` signature) should be applied
to both. Cross-check the Deye app at `/Users/gabriel/HomeyApp/gpm.python.deye`
when making structural changes here.
