v1.1.0

Added: Two driver variants — Hoymiles HMS (2-panel) for HMS-800/600 and Hoymiles HMS (4-panel) for HMS-2000/1600
Added: Daily Energy (meter_power.today) capability — resets at midnight
Added: Crash reporting via Sentry (homey-log) for production builds

v1.0.5

Improved: App Store page description updated to a single concise sentence as requested in review feedback
Fixed: Device no longer incorrectly shows as Unavailable at night or during network outages
Added: Diagnostic info (Wi-Fi signal, SSID, firmware version) in device settings
Added: Smart night mode now uses your Homey's location to calculate sunrise/sunset automatically (NOAA algorithm)

v1.0.3

Added: Device settings now show Wi-Fi Signal Strength, Wi-Fi SSID, DTU AP SSID, Firmware SW and HW Version — fetched automatically from the DTU at startup

v1.0.2

Note: v1.0.1 was skipped due to a publish error
Fixed: Device no longer shows as Unavailable during normal offline periods (night, cloudy startup)
Fixed: Alarm no longer triggers for informational DTU codes (Low Irradiation, Low Power at startup)
Added: Smart night mode — polling backs off to every 30 minutes between sunset and sunrise
Added: During daytime network outages, polling backs off to every 5 minutes
Improved: Capability titles are more descriptive (Lifetime Energy, Inverter Alarm, Grid Frequency, Inverter Temperature)
Improved: Lifetime Energy moved to the bottom of the device card

v1.0.0

Initial release
Local polling via TCP — no cloud required
Real-time power, voltage, current, frequency, temperature per DTU
Per-panel power, voltage and current (up to 4 panels)
Lifetime energy accumulation (kWh)
