# Generating the Hoymiles Protobuf Monolithic Bundle

This guide explains how to generate the `hoymiles.js` monolithic bundle required for local TCP communication with Hoymiles DTU devices — no cloud, no internet dependency.

> **Source:** The `.proto` definitions come from the excellent [ha-hoymiles-wifi](https://github.com/suaveolent/ha-hoymiles-wifi) project by @suaveolent. This Homey app is an independent port of that integration.

---

## Why a Monolithic Bundle?

The Homey Pro runs apps in a restricted Node.js environment. External npm dependencies must be bundled with the app. Rather than shipping the entire `protobufjs` library, we use `pbjs` to generate a **static module** — a single self-contained JavaScript file that encodes and decodes protobuf messages with no `require()` calls to external packages at runtime.

| File | Purpose | Typical size |
|------|---------|-------------|
| `hoymiles.proto` | Protobuf message definitions (source) | ~8 KB |
| `lib/hoymiles.js` | Generated monolithic bundle (output) | ~325 KB |
| `lib/hoymiles.d.ts` | TypeScript types (optional) | ~15 KB |

---

## Prerequisites

### Tools

```bash
# Install protobufjs-cli globally
npm install -g protobufjs-cli

# Verify installation
pbjs --version   # e.g. 7.4.0
pbts --version
```

### Runtime dependency — `long`

The bundle uses the `long` library for 64-bit integer support (DTU serial numbers are `int64`). Add it to your app's `package.json`:

```json
{
  "dependencies": {
    "long": "^5.2.3"
  }
}
```

Then run `npm install` in your app directory.

### The `.proto` file

Get it from the ha-hoymiles-wifi repository:

```bash
git clone https://github.com/suaveolent/ha-hoymiles-wifi.git

# The proto file is at:
# ha-hoymiles-wifi/custom_components/hoymiles_wifi/hoymiles.proto
```

Place it in your app's `proto/` directory:

```
your-app/
└── proto/
    └── hoymiles.proto
```

---

## Generating the Bundle

### Main command

```bash
pbjs \
  --target static-module \
  --wrapper commonjs \
  --force-long \
  --path ./proto \
  hoymiles.proto \
  --out lib/hoymiles.js
```

| Flag | Value | Why |
|------|-------|-----|
| `--target` | `static-module` | Generates static code with no runtime `require()` calls |
| `--wrapper` | `commonjs` | Compatible with Homey's Node.js (`require` / `module.exports`) |
| `--force-long` | *(flag)* | Serializes `int64` as `Long` objects — required for DTU serial numbers |
| `--path` | `./proto` | Directory containing the `.proto` file |
| `--out` | `lib/hoymiles.js` | Output path |

### Generate TypeScript types (optional, for development)

```bash
pbts --out lib/hoymiles.d.ts lib/hoymiles.js
```

### Add to package.json scripts

```json
{
  "scripts": {
    "proto": "pbjs --target static-module --wrapper commonjs --force-long --path ./proto hoymiles.proto --out lib/hoymiles.js && pbts --out lib/hoymiles.d.ts lib/hoymiles.js",
    "proto:js": "pbjs --target static-module --wrapper commonjs --force-long --path ./proto hoymiles.proto --out lib/hoymiles.js"
  }
}
```

Run with: `npm run proto`

---

## Validating the Generated Bundle

### Check the output

```bash
# File should exist and be ~300-350 KB
ls -lh lib/hoymiles.js

# Verify exported message names
node -e "const pb = require('./lib/hoymiles'); console.log(Object.keys(pb))"
# Expected output includes: RealDataNewResDTO, RealDataNewReqDTO, SGSMO, PvMO, HBResDTO, HBReqDTO
```

### Quick encode/decode test

Create `test-proto.js`:

```js
const pb = require('./lib/hoymiles');

// Test encode (outgoing request)
const req = pb.RealDataNewResDTO.create({
  time: Math.floor(Date.now() / 1000),
  offset: 28800
});
const encoded = Buffer.from(pb.RealDataNewResDTO.encode(req).finish());
console.log('Encoded request:', encoded.length, 'bytes'); // expect ~11 bytes

// Check all required messages exist
const required = ['RealDataNewResDTO', 'RealDataNewReqDTO', 'SGSMO', 'PvMO', 'HBResDTO', 'HBReqDTO'];
required.forEach(m => console.log(m + ':', pb[m] ? 'OK' : 'MISSING'));
```

```bash
node test-proto.js
# Encoded request: 11 bytes
# RealDataNewResDTO: OK
# RealDataNewReqDTO: OK
# ...
```

---

## TCP Communication Protocol

The DTU listens on **port 10081** using a proprietary framing protocol over raw TCP.

### Frame structure

```
Offset  Length  Field            Value / Notes
──────  ──────  ─────────────    ──────────────────────────────────────
0       2       Magic header     0x48 0x4D  ("HM")
2       1       Protocol byte    0xA3  (fixed)
3       1       Command (cmd)    0x11 = RealData request
                                 0x05 = Heartbeat
4       2       Sequence number  Incrementing counter (uint16 big-endian)
6       2       CRC-16           CRC-16/MODBUS of payload (uint16 big-endian)
8       2       Total length     Total frame size including header (uint16 big-endian)
10+     N       Payload          Serialized protobuf message
```

### CRC-16/MODBUS

```js
function crc16(buf) {
  let crc = 0xFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc & 1) ? ((crc >>> 1) ^ 0xA001) : (crc >>> 1);
    }
  }
  return crc & 0xFFFF;
}
```

### Request/response flow

```
App                          DTU (port 10081)
 │                                │
 │  TCP connect                   │
 │ ──────────────────────────────>│
 │                                │
 │  Frame: cmd=0x11               │
 │  Payload: RealDataNewResDTO    │
 │ ──────────────────────────────>│
 │                                │  (DTU processes, ~13-25s response time)
 │                                │
 │  Frame: cmd=0x11               │
 │  Payload: RealDataNewReqDTO    │
 │ <──────────────────────────────│
 │                                │
 │  TCP close                     │
 │ ──────────────────────────────>│
```

> **Note:** The DTU can take 13–25 seconds to respond. The client uses a 25-second read timeout and 2 retries.

---

## Message Structure & Field Decoding

### Key messages

| Message | Direction | Purpose |
|---------|-----------|---------|
| `RealDataNewResDTO` | App → DTU | Request real-time data |
| `RealDataNewReqDTO` | DTU → App | Response with inverter data |
| `SGSMO` | Inside ReqDTO | AC inverter data (voltage, current, frequency, temperature) |
| `PvMO` | Inside ReqDTO | Per-panel DC data (voltage, current, power, energy) |

### Value scaling

All numeric values require division to obtain real-world units:

| Field | Divisor | Unit | Example |
|-------|---------|------|---------|
| `dtu_power` | ÷ 10 | W | `1210` → `121.0 W` |
| `sgs.voltage` | ÷ 10 | V (AC) | `2346` → `234.6 V` |
| `sgs.current` | ÷ 100 | A (AC) | `516` → `5.16 A` |
| `sgs.frequency` | ÷ 100 | Hz | `5995` → `59.95 Hz` |
| `sgs.temperature` | ÷ 10 + sign | °C | `864` → `86.4 °C` |
| `pv.voltage` | ÷ 10 | V (DC) | `375` → `37.5 V` |
| `pv.current` | ÷ 100 | A (DC) | `871` → `8.71 A` |
| `pv.power` | ÷ 10 | W (DC) | `3269` → `326.9 W` |
| `pv.energy_daily` | × 1 | Wh | `2520` → `2520 Wh` |
| `pv.energy_total` | × 1 | Wh | `1281037` → `1281.037 kWh` |

**Temperature encoding:** Values above 32767 are negative (16-bit two's complement):

```js
function decodeTemp(v) {
  let t = toNumber(v);
  if (t > 32767) t -= 65536;
  return t * 0.1;
}
```

---

## Alarm / Warning Codes (`warning_number`)

The `warning_number` field in `SGSMO` returns a numeric code. Not all codes represent real faults. Source: Hoymiles `HmAppData.plist` from the S-Miles app.

| Code | Name | Type | Action |
|------|------|------|--------|
| `0` | No alarm | Normal | None |
| `10223` | Low Irradiation | **Informational** | Ignore — normal at sunrise or on cloudy days |
| `10069` | Grid Voltage fault | Real fault | Check grid voltage |
| `10070` | Grid Frequency fault | Real fault | Check grid frequency |
| `10121` | Internal Temperature | Real fault | Check inverter ventilation |
| `10131` | Leakage Current | Real fault | Check grounding |
| `10181` | Insulation Impedance | Real fault | Check DC panels and wiring |
| `10326` | Arc-Fault (PV1–4) | Real fault | Check DC connectors and cables |

> **Important:** Code `10223` (Low Irradiation) is reported every morning during startup with low sunlight. Treating it as an alarm would trigger false notifications daily. The `HoymilesClient.js` filters this code by default.

```js
const INFORMATIONAL_WARNINGS = new Set([10223]);

const isRealAlarm = warnRaw > 0 && !INFORMATIONAL_WARNINGS.has(warnRaw);
```

---

## Night Mode Behaviour

When the sun sets, the DTU keeps responding to TCP requests but reports no generation. `HoymilesClient.getData()` detects this (`sleeping: true`) and the device:

- Stays **available** in Homey (not marked offline)
- Sets `measure_power = 0` and all live values to 0
- Keeps `meter_power` at its last value (energy is cumulative, never resets)
- Resumes normal reporting at sunrise

If the DTU truly goes offline (no TCP response after 2 retries × 25s timeout), the device increments `_failCount`. After 5 consecutive failures it is marked **unavailable** in Homey.

---

## Compatibility with Other Models

The TCP protocol and protobuf messages are shared across the Hoymiles DTU Wi-Fi product line. Tested with **HMS-2000DW-4T** but expected to work with other models.

| Aspect | HMS-2000DW-4T | Other models |
|--------|--------------|--------------|
| TCP port | 10081 | Same |
| Frame protocol | HM header + CRC16 + protobuf | Same |
| Protobuf messages | RealDataNewResDTO / ReqDTO | Same |
| Panel count (pvArr) | 4 | May be 1, 2, 4, 6, or 8 |
| `energy_total` field | Not available on this model | May be available |
| Multiple inverters (sgsArr) | 1 | May have more |

If your model returns more than 4 panels, add capabilities `measure_power.pv5`, `pv6`, etc. in `driver.compose.json` and iterate `pvArr` accordingly in `device.js`.

---

## How to Contribute

### Testing with a new model

1. Clone the repo and install dependencies
2. Run `node test-dtu.js YOUR_DTU_IP` and save the complete output
3. Check: how many panels appear in `pvArr`? Does `energy_total` have a value > 0?
4. Open an Issue on GitHub with the full log and your DTU model name
5. If everything works, open a Pull Request adding your model to the compatibility table

### Updating the `.proto` file

If a new Hoymiles firmware version adds fields to the protocol:

1. Update `hoymiles.proto` in `/proto/`
2. Regenerate the bundle: `npm run proto`
3. Run `node test-dtu.js YOUR_DTU_IP` to verify
4. Update `HoymilesClient.js` to read the new fields
5. Open a Pull Request with changes and documentation

---

## Troubleshooting

| Problem | Likely cause | Solution |
|---------|-------------|----------|
| `pbjs: command not found` | protobufjs-cli not installed | `npm install -g protobufjs-cli` |
| Generated `hoymiles.js` is empty | Wrong `--path` or filename | Check `--path ./proto` and `hoymiles.proto` spelling |
| `Cannot find module './hoymiles'` | Bundle not in `lib/` | Check `--out lib/hoymiles.js` |
| `Timeout 25000ms` | DTU not responding | Verify IP, port 10081, and firewall rules |
| `CRC invalid` in logs | Different firmware or new model | Capture raw buffer and open an Issue |
| `pvArr` always empty | Field name variant | Test with both `pvData` and `pv_data` |
| `warning_number` always > 0 | Code 10223 = Low Irradiation | Normal — already filtered in `HoymilesClient.js` |
| `energy_total` always 0 | Model doesn't support the field | Use `energyTodayWh` as fallback |
| `Cannot find module 'long'` | Missing dependency | Add `"long": "^5.2.3"` to `package.json` and `npm install` |

---

## Project Structure

```
hoymiles.solar.panel/
├── app.js
├── app.json
├── package.json                        # includes "long" dependency
├── proto/
│   └── hoymiles.proto                  # source definitions (from ha-hoymiles-wifi)
├── lib/
│   ├── hoymiles.js                     # ← generated monolithic bundle
│   ├── hoymiles.d.ts                   # ← generated TypeScript types
│   └── HoymilesClient.js               # TCP client using the bundle
└── drivers/
    └── hoymiles-dtu/
        ├── driver.js
        ├── driver.compose.json
        ├── device.js
        └── assets/images/
            ├── small.png
            ├── large.png
            └── xlarge.png
```

---

## Credits

- Protocol reverse-engineering and `.proto` definitions: [@suaveolent](https://github.com/suaveolent/ha-hoymiles-wifi)
- Alarm code reference: Hoymiles S-Miles app (`HmAppData.plist`)
