# Hoymiles Solar Panel — App Description

## Short Description
Monitor your Hoymiles HMS microinverter system directly from your local network — no cloud, no account required.

---

## Full Description

Monitor your Hoymiles HMS series microinverter system (HMS-2000DW-4T and compatible) directly from your local network using the DTU-WLite gateway. All data is polled locally via TCP — no Hoymiles cloud account or internet connection required.

### What this app does

The app connects to your Hoymiles DTU gateway over your local Wi-Fi and retrieves real-time solar production data every 60 seconds (configurable). Each DTU is added as a separate device in Homey.

### Capabilities per device

**System (AC output):**
- Total Power (W)
- AC Voltage (V)
- AC Current (A)
- Grid Frequency (Hz)
- Inverter Temperature (°C)
- Inverter Alarm (true/false — only real faults, not informational startup codes)
- Lifetime Energy (kWh — cumulative, never resets)

**Per panel (DC input) — up to 4 panels:**
- Panel 1–4 Power (W)
- Panel 1–4 Voltage (V)
- Panel 1–4 Current (A)

### Device settings (read-only diagnostics, populated at startup)
- Wi-Fi Signal Strength (%)
- Wi-Fi SSID
- DTU AP SSID
- Firmware SW Version
- Firmware HW Version

### Smart night mode
The app uses your Homey's geolocation to calculate local sunrise and sunset times (NOAA algorithm). Between sunset+30min and sunrise−30min, polling automatically backs off to every 30 minutes — saving resources while the inverter is offline. No configuration needed; works correctly for any location worldwide.

### Supported hardware
- Hoymiles HMS-2000DW-4T (4-panel, 2000W)
- Other HMS series microinverters with DTU-WLite gateway (4-panel variants)

### Requirements
- Hoymiles DTU-WLite gateway on your local network
- DTU reachable by static IP or DHCP reservation
- Homey Pro (SDK v3)

### Setup
1. Find your DTU's local IP address (check your router's DHCP table or the S-Miles app)
2. Add the device in Homey and enter the IP address
3. Optionally adjust the polling interval (default: 60s, minimum: 35s)

### Notes
- Energy data (Lifetime Energy) is sourced from the per-panel accumulators reported by the DTU — the same values shown in the S-Miles app
- Alarm detection ignores informational bitmask codes (Low Irradiation, Low Power at startup) and only triggers for real fault codes
- Wi-Fi and firmware diagnostics are fetched once at startup using the DTU's AppInfo and GetConfig protocol commands
