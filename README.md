# Hoymiles Wi-Fi Integration for Homey (Local TCP)

Local LAN integration for Hoymiles HMS series microinverters using DTU-WLite.

This app connects directly to the DTU over TCP (port 10081).  
No cloud communication is used.

---

## Architecture

Homey App (SDK v3)  
↳ TCP client  
↳ DTU-WLite  
↳ HMS Microinverters  

Communication is performed over the local network using the Hoymiles Wi-Fi TCP protocol.

---

## Requirements

- Homey Pro (SDK v3 compatible)
- Hoymiles DTU-WLite
- DTU and Homey on the same local network
- TCP port 10081 accessible
- DTU IP address

---

## Tested Devices

Validated with:

- HMS-2000DW-4T (via DTU-WLite)
- HMS-800W-2T (via DTU-WLite)

Other HMS series models connected via DTU-WLite may work but are not fully validated.

---

## Features

- Local-only communication
- No internet dependency
- Power monitoring
- Energy reporting
- Device availability handling
- Retry and reconnection logic

---

## Development

Install dependencies:

```bash
npm install

## Notes
This project is not affiliated with Hoymiles.
Portions of the implementation were inspired by:
ha-hoymiles-wifi (MIT License)
All third-party licenses are included in THIRD_PARTY_NOTICES.md.