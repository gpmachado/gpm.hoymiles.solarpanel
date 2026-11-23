v1.1.27

Fixed DTUs with a 10D3 serial showing no data even though pairing read all panels: the app now tries the standard realtime-data command first and only falls back to the legacy W100 command if that returns no panels, then keeps using whichever one worked.
New device setting "Reset Daily Energy at midnight" (on by default): the DTU only resets its daily counter when production starts, so Daily Energy used to show yesterday's total all night and early in the morning. It now goes to 0 at midnight (Homey's time zone) and stays 0 until the panels produce. Uncheck it to keep the DTU's own value. Lifetime Energy and Homey Energy are not affected.

v1.1.26

Fixed hybrid (energy storage) systems showing no values at all — every poll failed on fields that don't exist in the storage data.
Power, Lifetime Energy and battery level now update; the battery level is a true average across inverters.
Removed the Daily Energy tile on hybrids, which never had a value (the storage data has no daily field).
Pairing now refuses a hybrid gateway whose inverter list can't be read, instead of adding a device that never updates.
Added a "Restore capabilities" button (device settings → Maintenance) that re-adds missing tiles with their correct names — no re-pairing, Flows and Insights are kept.
Changing Panel Count or Three-phase in the settings now adds the matching tiles right away.
The panel count is no longer lowered on restart, which froze some panel tiles.
Fixed yesterday's Daily Energy showing in the early morning for locations east of UTC+5 (e.g. Asia, Australia).
Changing Solar latitude/longitude now takes effect right away instead of the next day.
New optional "Nominal power (W)" setting: when set, adds a Power Ratio (%) tile (current power ÷ nominal power), handy for Flows such as "production below 10%".
Repair: a new DTU IP address now takes effect immediately (it used to wait up to 20 minutes for an automatic reconnect).
Fixed: device Flow triggers (solar production started/stopped, daily data updated, data updated, fault detected) never fired.
"Solar production started" now needs more than 25 W (it fired at dawn on 5 W), and "stopped" needs three low readings in a row, so a single 0 W reading from the DTU mid-day no longer fires stopped + started; at night "stopped" and the daily summary also fire when the inverter falls asleep first.
New device setting "Debug logging": when asked for a diagnostic report, turn it on for the DTU with the problem — it logs every poll and request for that DTU only (never the Wi-Fi password or encryption keys) and switches itself off after 60 minutes.

v1.1.25

EXPERIMENTAL, contributed and tested by a user (thank you!): added support for the DTU-W100 (10D3 serial family), which rejects the standard realtime-data command but works through the legacy one — detected automatically by serial prefix, no setting to configure.
Includes a longer warm-up pause after sunrise and a longer "no data" backoff tuned for this DTU's slower responses, with the same automatic connection-rebuild safety net as every other DTU (just with more patience: 2 hours instead of 20 minutes).
Also fixed a bug (unrelated to the W100) where changing the Polling Interval setting had no effect until something else triggered a restart.

v1.1.24

Fixed Lifetime Energy occasionally dropping and then jumping back up in the history — it's now rejected if fewer panels report in a poll than configured (the previous sum was incomplete, not wrong data from the device), and any other drop must repeat on the next poll before being accepted, so a one-off bad reading can't get stuck hiding real production increases from a genuinely lower value.

v1.1.23

Raised the Panel Count limit from 8 to 32 — installations with more than 8 panels on one DTU couldn't be paired correctly, and the automatic panel-count self-correction (which runs once at startup) silently failed to fix a wrong value above 8.

v1.1.22

Fixed: A possible startup failure when encryption settings (enc_rand) became corrupted — the device now falls back to unencrypted mode instead of failing to start.
Improved: Crash resilience during polling — a single bad panel/phase reading no longer skips the rest of an update.
Improved: Reduced routine log verbosity so diagnostic reports capture more useful history leading up to an issue instead of repeated status lines.

v1.1.21

Fixed: Prevented a crash during encrypted DTU recovery when Homey fails to save refreshed DTU settings such as signal strength, firmware info, or encryption metadata.
Improved: Polling now continues after unexpected polling errors instead of stopping silently.

v1.1.20

Fixed: Night-time detection for locations west of UTC (e.g. UTC-6) where sunset falls on the next calendar day in UTC. The app now polls correctly during local daytime and only backs off during local night.

v1.1.19

Improved: Recovery for encrypted DTU-Pro-S / DTU WLite-S devices after overnight offline periods.

v1.1.18

Fixed: Daily Energy no longer drops to 0 at the end of the day when the DTU reports a temporary zero value at low power.
Improved: Diagnostics now include raw daily energy, warning numbers, and DTU-Pro-S recovery context.

v1.1.17

Test: rebuilds the local DTU connection after prolonged daytime "no data" responses, to improve recovery when a DTU comes back online after the night.

v1.1.14

Fixed: app crash on startup when Homey location is configured — error saving coordinates to device settings was not handled correctly.

v1.1.13

Added: Flow card triggers and conditions for automations (solar production started/stopped, daily summary, data updated, is solar producing).
Fixed: Solar production started trigger no longer fires on every app restart.
Fixed: Night backoff activating at wrong hours when Homey location is not configured.

v1.1.10

Improved: Pairing now starts with automatic network scanning and only offers manual IP entry when discovery fails
Improved: Multiple DTUs can be discovered and added in one pairing flow
Improved: Sunrise and sunset times are now cached once per day instead of recalculated on every poll
Removed: Repair flow

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
