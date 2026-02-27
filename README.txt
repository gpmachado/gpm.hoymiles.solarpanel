Monitor your Hoymiles HMS microinverter system directly from your local network — no cloud account required.

The app connects to your Hoymiles DTU-WLite gateway over Wi-Fi and retrieves real-time solar production data every 60 seconds (configurable).

Supported devices:
- Hoymiles HMS-2000DW-4T (4 panels, 2000W) — tested
- Hoymiles HMS-800W-2T (2 panels, 800W) — tested
- Other HMS series microinverters connected via DTU-WLite

Two driver variants are available during pairing:
- Hoymiles HMS (2-panel) — for HMS-800, HMS-600 and similar
- Hoymiles HMS (4-panel) — for HMS-2000, HMS-1600 and similar

What you get per device:
- Total AC power, voltage, current, frequency and temperature
- Per-panel DC power, voltage and current
- Daily energy (kWh) and lifetime energy (kWh)
- Inverter alarm (real faults only — startup codes ignored)
- Wi-Fi signal strength, SSID and firmware version in device settings

Smart night mode: uses your Homey's location to calculate sunrise and sunset. Polling automatically reduces to every 30 minutes while the inverter is offline at night.

Requirements:
- Hoymiles DTU-WLite on your local network
- Static IP or DHCP reservation for the DTU
- Homey Pro (SDK v3)
