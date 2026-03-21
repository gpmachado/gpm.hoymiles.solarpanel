# Hoymiles Wi-Fi Integration for Homey

Local monitoring for Hoymiles microinverters via DTU — no cloud required.

Connects directly to the DTU over your local network using the open-source [hoymiles-wifi](https://github.com/suaveolent/hoymiles-wifi) library.

---

## Supported Hardware

| Device | Status |
|--------|--------|
| DTU-WLite | Supported |
| DTU-Pro | Supported |
| DTU-Pro-S (encrypted) | Supported |

HMS series microinverters connected via any of the above DTUs.

---

## Features

- Local-only communication — no internet or cloud dependency
- Auto-detection of panel count, single/three-phase, hybrid and encryption
- Per-panel power, voltage and current monitoring
- AC power, voltage, current, frequency and temperature
- Daily and lifetime energy reporting
- Hybrid/battery storage support (state of charge, active power)
- Configurable polling interval (minimum 35 seconds)
- Device availability tracking with error threshold

---

## Requirements

- Homey Pro (SDK v3, Homey ≥ 13.0)
- Hoymiles DTU on the same local network as Homey
- TCP port 10081 accessible from Homey
- DTU IP address (static or reserved DHCP recommended)

---

## Setup

1. Install the app on Homey
2. Add a new device — choose **Hoymiles DTU**
3. Enter the DTU IP address or let the app scan the local network
4. The app detects panel count, inverter type and encryption automatically

> **Upgrading from a previous version?** Remove the existing device and add it again (re-pair). This version uses a new device ID format and will not recognise devices added by older versions.

---

## Notes

- Not affiliated with Hoymiles
- Built on [hoymiles-wifi](https://github.com/suaveolent/hoymiles-wifi) (MIT License)
- Third-party license notices in `third Party Notices.md`
