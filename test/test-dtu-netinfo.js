#!/usr/bin/env node
'use strict';

// Usage: node test-dtu-netinfo.js 192.168.1.202
// Strategy 1: cmd 0x22 with empty payload
// Strategy 2: cmd 0x22 with RealData payload
// Strategy 3: separate connection per cmd
// Strategy 4: send 0x11 first in same TCP session, then 0x22

const net = require('net');
const fs  = require('fs');
const host = process.argv[2] || '192.168.1.202';
const port = 10081;

let pb;
try { pb = require('./lib/hoymiles'); }
catch(e) { console.error('Cannot load ./lib/hoymiles.js'); process.exit(1); }

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
  f.writeUInt16BE(seq & 0xffff, 4);
  f.writeUInt16BE(crc16(payload), 6);
  f.writeUInt16BE(len, 8);
  payload.copy(f, 10);
  return f;
}

function realDataPayload() {
  const req = pb.RealDataNewResDTO.create({ time: Math.floor(Date.now()/1000), offset: 28800 });
  return Buffer.from(pb.RealDataNewResDTO.encode(req).finish());
}

// Single connection, send multiple frames, collect all responses
function tcpMultiRequest(frames, timeoutMs = 30000) {
  return new Promise((resolve) => {
    const sock = new net.Socket();
    const responses = [];
    let buf = Buffer.alloc(0);
    let closeTimer = null;

    const done = () => { clearTimeout(timer); sock.destroy(); resolve(responses); };
    const timer = setTimeout(done, timeoutMs);

    const scheduleClose = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(done, 500);
    };

    sock.connect(port, host, () => {
      console.log('Connected — sending frames...');
      for (const f of frames) sock.write(f);
    });

    sock.on('data', chunk => {
      buf = Buffer.concat([buf, chunk]);
      scheduleClose();
      // Try to extract complete frames
      let pos = 0;
      while (pos < buf.length) {
        const idx = buf.indexOf(Buffer.from([0x48, 0x4d]), pos);
        if (idx === -1 || idx + 10 > buf.length) break;
        const totalLen = buf.readUInt16BE(idx + 8);
        if (idx + totalLen > buf.length) break;
        const frame = buf.slice(idx, idx + totalLen);
        responses.push({ cmd: frame[3], payload: frame.slice(10) });
        pos = idx + totalLen;
      }
    });

    sock.on('close', done);
    sock.on('error', () => done());
  });
}

// Single request helper
function tcpSingle(cmd, payload, seq, timeoutMs = 10000) {
  return new Promise((resolve) => {
    const sock = new net.Socket();
    let buf = Buffer.alloc(0);
    let closeTimer = null;
    const done = () => { clearTimeout(timer); sock.destroy(); resolve(buf.length > 10 ? buf : null); };
    const timer = setTimeout(done, timeoutMs);
    sock.connect(port, host, () => sock.write(buildFrame(cmd, payload, seq)));
    sock.on('data', chunk => {
      buf = Buffer.concat([buf, chunk]);
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => sock.end(), 400);
    });
    sock.on('close', done);
    sock.on('error', () => done());
  });
}

function hexDump(buf, label) {
  console.log(`\n=== ${label} (${buf.length} bytes) ===`);
  for (let i = 0; i < buf.length; i += 16) {
    const slice = buf.slice(i, i + 16);
    const hex = [...slice].map(b => b.toString(16).padStart(2,'0')).join(' ').padEnd(48);
    const ascii = [...slice].map(b => b >= 0x20 && b < 0x7f ? String.fromCharCode(b) : '.').join('');
    console.log(`  ${i.toString(16).padStart(4,'0')}  ${hex}  ${ascii}`);
  }
}

async function main() {
  console.log(`\n=== DTU Network Info Capture: ${host}:${port} ===\n`);

  const rdPayload = realDataPayload();

  // Strategy 1: 0x22 alone with empty payload
  console.log('Strategy 1: cmd 0x22 with empty payload...');
  let raw = await tcpSingle(0x22, Buffer.alloc(0), 1);
  if (raw) { hexDump(raw, 'cmd 0x22 empty payload response'); }
  else console.log('  → no response');

  await new Promise(r => setTimeout(r, 1000));

  // Strategy 2: 0x22 with RealData payload
  console.log('\nStrategy 2: cmd 0x22 with RealData payload...');
  raw = await tcpSingle(0x22, rdPayload, 2);
  if (raw) { hexDump(raw, 'cmd 0x22 + RealData payload response'); }
  else console.log('  → no response');

  await new Promise(r => setTimeout(r, 1000));

  // Strategy 3: send 0x11 and 0x22 in same TCP connection
  console.log('\nStrategy 3: cmd 0x11 then 0x22 in same connection...');
  const responses = await tcpMultiRequest([
    buildFrame(0x11, rdPayload, 3),
    buildFrame(0x22, Buffer.alloc(0), 4),
  ], 35000);

  if (responses.length === 0) {
    console.log('  → no response');
  } else {
    for (const r of responses) {
      console.log(`\n  cmd 0x${r.cmd.toString(16).padStart(2,'0')} response — ${r.payload.length} bytes`);
      hexDump(r.payload, `cmd 0x${r.cmd.toString(16)} payload`);
      // Show printable strings
      const str = r.payload.toString('ascii').replace(/[^\x20-\x7e]/g, '·');
      console.log(`  Printable: ${str}`);
    }
  }

  await new Promise(r => setTimeout(r, 1000));

  // Strategy 4: try other command IDs that might be network info
  const candidates = [0x18, 0x19, 0x1b, 0x1c, 0x20, 0x22, 0x24, 0x25, 0x26];
  console.log(`\nStrategy 4: brute-force scan cmds ${candidates.map(c=>'0x'+c.toString(16)).join(', ')}...`);
  for (const cmd of candidates) {
    const r = await tcpSingle(cmd, rdPayload, cmd);
    if (r && r.length > 10) {
      const printable = r.slice(10).toString('ascii').replace(/[^\x20-\x7e]/g, '·');
      console.log(`  cmd 0x${cmd.toString(16).padStart(2,'0')}: ${r.length} bytes — ${printable.slice(0,80)}`);
      fs.writeFileSync(`dtu-cmd${cmd.toString(16)}-${host.replace(/\./g,'-')}.hex`, r.toString('hex'));
    } else {
      console.log(`  cmd 0x${cmd.toString(16).padStart(2,'0')}: no response`);
    }
    await new Promise(r => setTimeout(r, 800));
  }

  console.log('\nDone.');
}

main().catch(console.error);
