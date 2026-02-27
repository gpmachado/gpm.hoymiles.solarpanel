#!/usr/bin/env node
'use strict';

// Usage: node test-dtu-appinfo.js 192.168.1.202
// Tests cmd 0x01 (AppInfo) and 0x09 (GetConfig) with correct payloads
// Based on hoymiles-wifi const.py + dtu.py

const net = require('net');
const fs  = require('fs');
const host = process.argv[2] || '192.168.1.202';
const port = 10081;

let pb;
try { pb = require('./lib/hoymiles'); }
catch(e) { console.error('Cannot load ./lib/hoymiles.js'); process.exit(1); }

// Check which messages are available
const available = Object.keys(pb).filter(k => pb[k] && typeof pb[k].decode === 'function');
console.log('\nMessages in bundle:', available.join(', '));
console.log();

function crc16(buf) {
  let crc = 0xffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) crc = (crc & 1) ? ((crc >>> 1) ^ 0xa001) : (crc >>> 1);
  }
  return crc & 0xffff;
}

function buildFrame(cmd, payload, seq) {
  const len = payload.length + 10;
  const f = Buffer.alloc(len);
  f[0] = 0x48; f[1] = 0x4d; f[2] = 0xa3; f[3] = cmd;
  f.writeUInt16BE(seq & 0xffff, 4);
  f.writeUInt16BE(crc16(payload), 6);
  f.writeUInt16BE(len, 8);
  payload.copy(f, 10);
  return f;
}

function tcpRequest(cmd, payload, seq, timeoutMs = 12000) {
  return new Promise((resolve) => {
    const sock = new net.Socket();
    let buf = Buffer.alloc(0);
    let closeTimer = null;
    const done = () => { clearTimeout(timer); sock.destroy(); resolve(buf.length > 10 ? buf : null); };
    const timer = setTimeout(done, timeoutMs);
    sock.connect(port, host, () => {
      console.log(`  → Connected, sending cmd 0x${cmd.toString(16).padStart(2,'0')}...`);
      sock.write(buildFrame(cmd, payload, seq));
    });
    sock.on('data', chunk => {
      buf = Buffer.concat([buf, chunk]);
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => sock.end(), 400);
    });
    sock.on('close', done);
    sock.on('error', (e) => { console.log(`  → Socket error: ${e.message}`); done(); });
  });
}

function hexDump(buf) {
  for (let i = 0; i < Math.min(buf.length, 128); i += 16) {
    const slice = buf.slice(i, i + 16);
    const hex = [...slice].map(b => b.toString(16).padStart(2,'0')).join(' ').padEnd(48);
    const ascii = [...slice].map(b => b >= 0x20 && b < 0x7f ? String.fromCharCode(b) : '.').join('');
    console.log(`    ${i.toString(16).padStart(4,'0')}  ${hex}  ${ascii}`);
  }
  if (buf.length > 128) console.log(`    ... (${buf.length} bytes total)`);
}

function tryDecode(payload) {
  const candidates = [
    'APPInfoDataReqDTO',
    'APPInfoDataResDTO', 
    'GetConfigReqDTO',
    'GetConfigResDTO',
    'NetworkInfoReqDTO',
    'RealDataNewReqDTO',
  ];
  for (const name of candidates) {
    if (!pb[name]) continue;
    try {
      const d = pb[name].decode(payload);
      const json = JSON.stringify(d.toJSON ? d.toJSON() : d);
      if (json !== '{}' && json.length > 5) {
        return { name, data: d.toJSON ? d.toJSON() : d };
      }
    } catch(e) { /* skip */ }
  }
  return null;
}

async function testCmd(label, cmd, payloadFn, seq) {
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`${label} (cmd 0x${cmd.toString(16).padStart(2,'0')})`);
  console.log('═'.repeat(60));

  let payload;
  try {
    payload = payloadFn();
    console.log(`  Payload (${payload.length} bytes): ${payload.toString('hex')}`);
  } catch(e) {
    console.log(`  Failed to build payload: ${e.message}`);
    return;
  }

  const raw = await tcpRequest(cmd, payload, seq);

  if (!raw) {
    console.log('  ✗ No response / timeout');
    return;
  }

  console.log(`  ✓ Response: ${raw.length} bytes`);
  console.log(`  Header: ${raw.slice(0,10).toString('hex')}`);
  console.log(`  Response cmd byte: 0x${raw[3].toString(16).padStart(2,'0')}`);
  hexDump(raw);

  // Save hex
  const fname = `dtu-cmd${cmd.toString(16).padStart(2,'0')}-${host.replace(/\./g,'-')}.hex`;
  fs.writeFileSync(fname, raw.toString('hex'));
  console.log(`  Saved: ${fname}`);

  // Try decode
  const payload2 = raw.slice(10);
  const decoded = tryDecode(payload2);
  if (decoded) {
    console.log(`\n  ✓ Decoded as ${decoded.name}:`);
    console.log(JSON.stringify(decoded.data, null, 4).split('\n').map(l => '    ' + l).join('\n'));
  } else {
    console.log(`  Printable: ${payload2.toString('ascii').replace(/[^\x20-\x7e]/g,'.')}`);
  }
}

async function main() {
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`Hoymiles DTU AppInfo + GetConfig probe`);
  console.log(`Host: ${host}:${port}`);
  console.log('═'.repeat(60));

  const now = Math.floor(Date.now() / 1000);
  const OFFSET = 28800;

  // ── CMD 0x01: APP_INFO_DATA ────────────────────────────────
  // dtu.py sends APPInfoDataResDTO as request, gets APPInfoDataReqDTO back
  await testCmd(
    'APP_INFO_DATA (signal_strength, hw/sw version)',
    0x01,
    () => {
      if (pb.APPInfoDataResDTO) {
        const req = pb.APPInfoDataResDTO.create({
          time_ymd_hms: Buffer.from(new Date().toISOString().replace('T',' ').slice(0,19)),
          offset: OFFSET,
          time: now,
        });
        return Buffer.from(pb.APPInfoDataResDTO.encode(req).finish());
      }
      // fallback: empty payload
      return Buffer.alloc(0);
    },
    0x01
  );

  await new Promise(r => setTimeout(r, 1500));

  // ── CMD 0x09: GET_CONFIG ───────────────────────────────────
  // dtu.py sends GetConfigResDTO as request, gets GetConfigReqDTO back
  await testCmd(
    'GET_CONFIG (wifi_ssid, wifi_rssi, MAC, IP)',
    0x09,
    () => {
      if (pb.GetConfigResDTO) {
        const req = pb.GetConfigResDTO.create({
          offset: OFFSET,
          time: now - 60,
        });
        return Buffer.from(pb.GetConfigResDTO.encode(req).finish());
      }
      return Buffer.alloc(0);
    },
    0x09
  );

  await new Promise(r => setTimeout(r, 1500));

  // ── CMD 0x14: NETWORK_INFO ─────────────────────────────────
  // dtu.py sends NetworkInfoResDTO as request, gets NetworkInfoReqDTO back
  await testCmd(
    'NETWORK_INFO (csq, net_work_state)',
    0x14,
    () => {
      if (pb.NetworkInfoResDTO) {
        const req = pb.NetworkInfoResDTO.create({
          offset: OFFSET,
          time: now,
        });
        return Buffer.from(pb.NetworkInfoResDTO.encode(req).finish());
      }
      return Buffer.alloc(0);
    },
    0x14
  );

  console.log('\n\nDone.');
}

main().catch(console.error);
