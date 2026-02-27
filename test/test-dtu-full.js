#!/usr/bin/env node
'use strict';

// Usage: node test-dtu-full.js 192.168.1.202
// Shows all raw protobuf fields to help understand warning_number

const net  = require('net');
const path = require('path');

const host = process.argv[2] || '192.168.1.202';
const port = 10081;

// Try to load the protobuf bundle
let pb;
try {
  pb = require('./lib/hoymiles');
} catch(e) {
  console.error('Cannot load ./lib/hoymiles.js — run from app root directory');
  process.exit(1);
}

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

function toNum(v) {
  if (v == null) return 0;
  if (typeof v === 'number') return v;
  if (typeof v === 'object' && typeof v.toNumber === 'function') return v.toNumber();
  return Number(v) || 0;
}

function bits(n) {
  if (!n) return '(none)';
  const set = [];
  for (let i = 0; i < 16; i++) if (n & (1 << i)) set.push(`BIT${i}`);
  return set.join(', ');
}

const req = pb.RealDataNewResDTO.create({ time: Math.floor(Date.now()/1000), offset: 28800 });
const payload = Buffer.from(pb.RealDataNewResDTO.encode(req).finish());
const frame = buildFrame(0x11, payload, 1);

console.log(`\nConnecting to ${host}:${port}...`);
const sock = new net.Socket();
let buf = Buffer.alloc(0);

const timer = setTimeout(() => { sock.destroy(); console.log('Timeout'); }, 28000);

sock.connect(port, host, () => {
  console.log('Connected — sending request...\n');
  sock.write(frame);
});

sock.on('data', chunk => { buf = Buffer.concat([buf, chunk]); });

sock.on('close', () => {
  clearTimeout(timer);
  if (buf.length < 10) { console.log('No data'); return; }

  const payload = buf.slice(10);
  const msg = pb.RealDataNewReqDTO.decode(payload);

  // ── Raw fields dump ────────────────────────────────────────────────────
  console.log('══ RAW RealDataNewReqDTO FIELDS ══');
  const plain = msg.toJSON ? msg.toJSON() : JSON.parse(JSON.stringify(msg));
  console.log(JSON.stringify(plain, null, 2));

  // ── Interpreted ───────────────────────────────────────────────────────
  const sgsArr = msg.sgsData || msg.sgs_data || [];
  console.log('\n══ SGS (inverter) warning_number analysis ══');
  for (const sgs of sgsArr) {
    const warn = toNum(sgs.warningNumber || sgs.warning_number);
    console.log(`  warning_number raw value : ${warn}`);
    console.log(`  warning_number as hex    : 0x${warn.toString(16).toUpperCase()}`);
    console.log(`  warning_number as bits   : ${bits(warn)}`);
    console.log(`  S-Miles interpretation   :`);
    // Known bit meanings for HMS series (from HmAppData.plist code 10223)
    if (warn === 0)           console.log('    → Normal, no alarm');
    if (warn & 0x0001)        console.log('    → Bit0: Power on Low Light (startup/low irradiation)');
    if (warn & 0x0002)        console.log('    → Bit1: Low Power (below minimum threshold)');
    if (warn & 0x0004)        console.log('    → Bit2: PV voltage plunge');
    if (warn > 0 && warn <= 7) console.log('    → INFORMATIONAL only — S-Miles shows Normal for this');
    if (warn > 7)             console.log('    → Possible REAL FAULT — investigate further');
  }
});

sock.on('error', err => { clearTimeout(timer); console.error('Error:', err.message); });
