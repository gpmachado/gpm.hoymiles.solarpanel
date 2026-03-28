v1.1.4

Fixed: pairing error crash ("Homey object has no attribute '__'") — now shows a proper error message when the DTU cannot be reached.

⚠️ Action required: re-add your devices after updating.

This version is a complete rewrite in Python (previously Node.js).
Existing devices paired with the old version must be removed and re-added.

Steps:
1. Go to Homey → Devices
2. Long-press your inverter → Remove
3. Add Device → Hoymiles → follow the setup wizard

This is a one-time migration. We apologize for the inconvenience.

v1.1.3

Rewritten in Python — no cloud required, same local polling via TCP.
Added: Auto-detection of panel count, three-phase, hybrid and encryption during pairing.
Added: Hybrid inverter support (energy storage / battery).
Added: Three-phase inverter support.
Added: Automatic network scan for DTU discovery (no IP needed if on same subnet).
Improved: Single universal driver replaces the two separate HMS variants.

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
