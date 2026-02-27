#!/usr/bin/env node
'use strict';

// Usage: node test-dtu-capture.js 192.168.1.202
// Captures raw bytes from cmd 0x22 (NetworkInfo) and decodes all fields

const net  = require('net');
const fs   = require('fs');
const host = process.argv[2] || '192.168.1.202';
const port = 10081;

let pb;
try { pb = require('./lib/hoymiles'); }
catch(e) { console.error('Cannot load ./lib/hoymiles.js — run from app root'); process.exit(1); }

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
  f[0]=0x48; f[1]=0x4d; f[2]=0xa3; f[3]=cmd;
  f.writeUInt16BE(seq, 4);
  f.writeUInt16BE(crc16(payload), 6);
  f.writeUInt16BE(len, 8);
  payload.copy(f, 10);
  return f;
}

function tcpRequest(cmd, payload, seq, timeoutMs = 10000) {
  return new Promise((resolve) => {
    const sock = new net.Socket();
    let buf = Buffer.alloc(0);
    const timer = setTimeout(() => { sock.destroy(); resolve(null); }, timeoutMs);
    sock.connect(port, host, () => sock.write(buildFrame(cmd, payload, seq)));
    sock.on('data', chunk => {
      buf = Buffer.concat([buf, chunk]);
      // Give 300ms after first data to collect full response
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => sock.end(), 300);
    });
    let closeTimer = null;
    sock.on('close', () => { clearTimeout(timer); resolve(buf.length > 0 ? buf : null); });
    sock.on('error', () => { clearTimeout(timer); resolve(null); });
  });
}

function readVarint(buf, pos) {
  let lo = 0, hi = 0, shift = 0, b;
  for (let i = 0; i < 10; i++) {
    if (pos >= buf.length) break;
    b = buf[pos++];
    if (shift < 28)      { lo |= (b & 0x7f) << shift; }
    else if (shift === 28) { lo |= (b & 0x0f) << 28; hi = (b & 0x7f) >> 4; }
    else                 { hi |= (b & 0x7f) << (shift - 32); }
    shift += 7;
    if (!(b & 0x80)) break;
  }
  // signed int64 two's complement
  if (hi & 0x80000000) {
    hi = (~hi >>> 0); lo = (~lo >>> 0) + 1;
    if (lo > 0xffffffff) { lo = 0; hi++; }
    return { value: -(hi * 4294967296 + lo), pos };
  }
  return { value: hi === 0 ? lo : hi * 4294967296 + lo, pos };
}

function parseFields(buf) {
  let pos = 0;
  const fields = [];
  while (pos < buf.length) {
    if (pos >= buf.length) break;
    let tag = 0, shift = 0, b;
    const startPos = pos;
    do {
      if (pos >= buf.length) break;
      b = buf[pos++]; tag |= (b & 0x7f) << shift; shift += 7;
    } while (b & 0x80);
    const fieldNum = tag >>> 3;
    const wireType = tag & 0x7;
    if (fieldNum === 0) break;

    if (wireType === 0) {
      const v = readVarint(buf, pos);
      pos = v.pos;
      fields.push({ field: fieldNum, type: 'varint', value: v.value });
    } else if (wireType === 2) {
      let len = 0; shift = 0;
      do { b = buf[pos++]; len |= (b & 0x7f) << shift; shift += 7; } while (b & 0x80);
      if (pos + len > buf.length) { console.log(`  [truncated at field ${fieldNum}]`); break; }
      const data = buf.slice(pos, pos + len);
      pos += len;
      const str = data.toString('utf8');
      const isPrintable = len > 0 && /^[\x20-\x7e]*$/.test(str);
      fields.push({ field: fieldNum, type: isPrintable ? 'string' : 'bytes', value: isPrintable ? str : data.toString('hex'), raw: data });
    } else if (wireType === 5) {
      if (pos + 4 > buf.length) break;
      const val = buf.readUInt32LE(pos); pos += 4;
      fields.push({ field: fieldNum, type: 'fixed32', value: val });
    } else {
      console.log(`  Unknown wireType ${wireType} at pos ${pos} (field ${fieldNum})`);
      break;
    }
  }
  return fields;
}

// Known field mapping for cmd 0x22 (NetworkInfoReqDTO) based on HA integration
const FIELD_NAMES = {
  1:  'timezone_offset (s)',
  2:  'timestamp',
  8:  'ap_mode',
  9:  'wifi_signal_rssi',
  10: 'wifi_channel_or_signal',
  11: 'wifi_channel',
  12: 'server_port',
  13: 'unknown_13',
  14: 'sw_version',
  15: 'meter_kind',
  16: 'ap_ssid',
  17: 'wifi_ssid',
  18: 'wifi_password',
  19: 'server_host',
  20: 'dtu_sn',
  21: 'unknown_21',
  22: 'mac_address',
  23: 'hw_version',
  24: 'signal_strength_pct',
};

async function main() {
  console.log(`\nCapturing cmd 0x22 (NetworkInfo) from ${host}:${port}...\n`);

  // cmd 0x22 with empty payload
  const raw = await tcpRequest(0x22, Buffer.alloc(0), 0x22);

  if (!raw) {
    console.log('No response from cmd 0x22');
    return;
  }

  console.log(`Total bytes received: ${raw.length}`);
  console.log(`Header (10 bytes): ${raw.slice(0,10).toString('hex')}`);
  console.log(`Payload (${raw.length - 10} bytes):\n`);

  // Save full hex to file for analysis
  const hexFile = `dtu-0x22-${host.replace(/\./g,'-')}.hex`;
  fs.writeFileSync(hexFile, raw.toString('hex') + '\n');
  console.log(`Full hex saved to: ${hexFile}\n`);

  // Also save readable dump
  const dumpLines = [];
  for (let i = 0; i < raw.length; i += 16) {
    const slice = raw.slice(i, i + 16);
    const hex = slice.toString('hex').match(/.{2}/g).join(' ').padEnd(48);
    const ascii = slice.toString('ascii').replace(/[^\x20-\x7e]/g, '.');
    dumpLines.push(`${i.toString(16).padStart(4,'0')}  ${hex}  ${ascii}`);
  }
  const dumpFile = `dtu-0x22-${host.replace(/\./g,'-')}.dump`;
  fs.writeFileSync(dumpFile, dumpLines.join('\n') + '\n');
  console.log('=== HEX DUMP ===');
  dumpLines.forEach(l => console.log(l));

  // Parse payload fields
  const payload = raw.slice(10);
  const fields = parseFields(payload);

  console.log('\n=== DECODED FIELDS ===');
  for (const f of fields) {
    const name = FIELD_NAMES[f.field] || `unknown_${f.field}`;
    let display = f.value;
    // Special formatting
    if (f.field === 1 && typeof f.value === 'number') {
      const h = Math.abs(f.value) / 3600;
      display = `${f.value} s (UTC${f.value >= 0 ? '+' : '-'}${h})`;
    }
    if (f.field === 2 && typeof f.value === 'number') {
      display = `${f.value} (${new Date(f.value * 1000).toISOString()})`;
    }
    console.log(`  field ${String(f.field).padStart(2)} | ${name.padEnd(28)} | ${f.type.padEnd(8)} | ${display}`);
  }

  // Also try to decode as known message types
  console.log('\n=== ATTEMPT DECODE WITH KNOWN MESSAGES ===');
  const msgs = ['NetworkInfoResDTO','NetworkInfoReqDTO','CommandReqDTO','HBReqDTO','AppGetHistPowerReqDTO'];
  for (const msgName of msgs) {
    if (!pb[msgName]) { console.log(`  ${msgName}: not in bundle`); continue; }
    try {
      const decoded = pb[msgName].decode(payload);
      const json = JSON.stringify(decoded.toJSON ? decoded.toJSON() : decoded, null, 2);
      if (json !== '{}' && json.length > 5) {
        console.log(`\n  ✅ ${msgName}:\n${json.split('\n').map(l => '     ' + l).join('\n')}`);
      }
    } catch(e) {
      console.log(`  ${msgName}: decode error — ${e.message}`);
    }
  }

  console.log(`\nFiles saved: ${hexFile}, ${dumpFile}`);
}

main().catch(console.error);
