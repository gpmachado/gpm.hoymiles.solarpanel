# Hoymiles Wi-Fi Solar Panel — Homey App

Local monitoring for Hoymiles HMS microinverter systems via DTU-WLite — no cloud account, no internet dependency.

[![Homey App Store](https://img.shields.io/badge/Homey%20App%20Store-gpm.hoymiles.solarpanel-00B140)](https://homey.app/a/gpm.hoymiles.solarpanel)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Supported hardware

This app uses the **local protobuf protocol** (TCP port 10081) shared by the **HMS series** — microinverters with an integrated Wi-Fi DTU (DTU-WLite / DTUBI). It is a port of the [ha-hoymiles-wifi](https://github.com/suaveolent/ha-hoymiles-wifi) Home Assistant integration by @suaveolent.

### Compatible inverters (HMS series — no battery)

| Device | Panels | Power | Status |
|---|---|---|---|
| Hoymiles HMS-2000DW-4T | 4 | 2000 W | ✅ Tested |
| Hoymiles HMS-800W-2T | 2 | 800 W | ✅ Tested |
| Hoymiles HMS-1600W-4T | 4 | 1600 W | ⚪ Compatible (untested) |
| Hoymiles HMS-1000W-2T | 2 | 1000 W | ⚪ Compatible (untested) |
| Hoymiles HMS-600W-2T | 2 | 600 W | ⚪ Compatible (untested) |
| Hoymiles HMS-500W | 2 | 500 W | ⚪ Compatible (untested) |
| Hoymiles HMS-450W-1T | 1 | 450 W | ⚪ Compatible (untested) |

### Not supported

| Series | Reason |
|---|---|
| HM series (HM-300, HM-600, HM-1500…) | Uses DTU-Pro with a different protocol — no local Wi-Fi DTU |
| HAT / HYT / HAS / HYS (hybrid) | Battery management API not implemented |
| Three-phase inverters (HMT) | Different data structure, not ported |

Two driver variants are available during pairing — select the one that matches your inverter:
- **Hoymiles HMS (2-panel)** — for HMS-800W-2T, HMS-600W-2T, HMS-500W and similar
- **Hoymiles HMS (4-panel)** — for HMS-2000DW-4T, HMS-1600W-4T and similar

> If you test with an unlisted model and it works, please open an issue on GitHub with your model name.

---

## Capabilities

**System (AC output)**

| Capability | Unit | Notes |
|---|---|---|
| Total Power | W | AC output, real-time |
| AC Voltage | V | Grid voltage |
| AC Current | A | |
| Grid Frequency | Hz | |
| Inverter Temperature | °C | |
| Inverter Alarm | — | Real faults only — informational bitmask codes (Low Irradiation, Low Power at startup) are ignored |
| Lifetime Energy | kWh | Cumulative, never resets |
| Daily Energy | kWh | Resets at midnight |

**Per panel (DC input)**

| Capability | Unit |
|---|---|
| Panel 1–2 Power | W |
| Panel 1–2 Voltage | V |
| Panel 1–2 Current | A |
| Panel 3–4 Power (4-panel driver only) | W |
| Panel 3–4 Voltage (4-panel driver only) | V |
| Panel 3–4 Current (4-panel driver only) | A |

**Device settings (diagnostics, populated at startup)**

- Wi-Fi Signal Strength (%)
- Wi-Fi SSID
- DTU AP SSID
- Firmware SW Version
- Firmware HW Version

---

## Requirements

- Hoymiles DTU-WLite on your local network
- DTU reachable by static IP or DHCP reservation
- Homey Pro (Homey v12.6.0+, SDK v3)

---

## Setup

1. Find your DTU's local IP address (check your router's DHCP table or the S-Miles Cloud app)
2. In Homey → Add Device → Hoymiles Wi-Fi Solar Panel
3. Select the driver matching your panel count (2-panel or 4-panel)
4. Enter the DTU IP address
5. Optionally adjust the polling interval (default: 60 s, minimum: 35 s)

---

## How it works

### Polling

The app polls the DTU over TCP every N seconds (configurable). Each poll opens a TCP connection to port 10081, sends a `RealDataNewResDTO` request, and decodes the `RealDataNewReqDTO` response via protobuf.

Diagnostic data (signal strength, firmware version, SSID) is fetched once at startup using `AppInfo` (cmd `0x01`) and `GetConfig` (cmd `0x09`) — not on every poll, as the DTU needs ~3 s to recover between TCP connections.

### Smart night mode

The app uses Homey's geolocation (lat/lng) to compute local sunrise and sunset via the NOAA simplified algorithm (accurate to ~5 min, works worldwide). Between sunset+30 min and sunrise−30 min, polling backs off to every 30 minutes — no wasted connections while the inverter is offline.

If geolocation is unavailable, fallback is 06:00–19:00 local time.

### Energy accounting

- **Lifetime Energy** (`meter_power`) is sourced from `pv_data[n].energy_total` — the per-panel cumulative accumulators reported by the DTU. The value is only updated when `energyTotalWh > 0` and is non-decreasing, to protect Homey's Energy historical data from DTU restart artifacts.
- **Daily Energy** (`meter_power.today`) is sourced from `dtu_daily_energy` (or sum of `pv_data[n].energy_daily` as fallback). Allowed to reset at midnight.

### Alarm detection

`warning_number` from `sgs_data` is a bitmask for HMS series. Values ≤ 255 are informational startup codes (Low Irradiation, Low Power, PV voltage transient) and are ignored. Only values > 255 trigger `alarm_generic = true`.

---

## Project structure

```
drivers/
  hoymiles-2p/         # HMS models with 2 panels (e.g. HMS-800W-2T)
    device.js
    driver.js
    driver.compose.json
  hoymiles-4p/         # HMS models with 4 panels (e.g. HMS-2000DW-4T)
    device.js
    driver.js
    driver.compose.json
lib/
  HoymilesClient.js    # TCP transport + protobuf encode/decode
  hoymiles.js          # Compiled protobuf static module (pbjs)
  hoymiles.d.ts        # TypeScript declarations (VSCode autocomplete)
proto/
  RealDataNew.proto
  APPInfomationData.proto
  GetConfig.proto
```

The protobuf static module is compiled from the `.proto` files using:

```bash
pbjs \
  --target static-module \
  --wrapper commonjs \
  --force-long \
  --path ./proto \
  hoymiles.proto \
  --out lib/hoymiles.js
```

---

## Changelog

### v1.1.0
- Added two driver variants: Hoymiles HMS (2-panel) and Hoymiles HMS (4-panel)
- Added Daily Energy (`meter_power.today`) capability
- Added crash reporting via Sentry (homey-log)
- HMS-800W-2T confirmed working (community tested)

### v1.0.7
- Fixed backoff mechanism — night/host-unreachable backoff now uses `_backoffUntil` timestamp instead of `_polling` flag, preventing the `finally` block from immediately cancelling it
- Fixed `meter_power` fallback — no longer falls back to `energyTodayWh` when `energyTotalWh === 0` (DTU restart artifact), protecting Homey Energy historical data
- Removed `onAdded()` — `energy.meterPowerExportedCapability` is already declared in `driver.compose.json`
- `_pollDiagnostics` no longer skips at night — fails silently if DTU is offline
- Extracted `_applyZeros()` to eliminate duplicated zero-capability blocks
- Added `ECONNREFUSED` and `ENETUNREACH` to host-unreachable detection

### v1.0.6 and earlier
- Initial release with real-time monitoring, per-panel data, smart night mode

---

## Credits

Protocol implementation based on [suaveolent/ha-hoymiles-wifi](https://github.com/suaveolent/ha-hoymiles-wifi) (Home Assistant integration).

---

## License

MIT
