#!/usr/bin/env node
'use strict';

// Usage: node test-dtu-probe.js 192.168.1.202
// Probes multiple command IDs to discover what each returns

const net  = require('net');
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
  f.writeUInt16BE(seq, 4);
  f.writeUInt16BE(crc16(payload), 6);
  f.writeUInt16BE(len, 8);
  payload.copy(f, 10);
  return f;
}

function tcpRequest(cmd, payload, seq) {
  return new Promise((resolve) => {
    const sock = new net.Socket();
    let buf = Buffer.alloc(0);
    const timer = setTimeout(() => { sock.destroy(); resolve(null); }, 8000);
    sock.connect(port, host, () => sock.write(buildFrame(cmd, payload, seq)));
    sock.on('data', chunk => { buf = Buffer.concat([buf, chunk]); });
    sock.on('close', () => { clearTimeout(timer); resolve(buf.length > 10 ? buf : null); });
    sock.on('error', () => { clearTimeout(timer); resolve(null); });
  });
}

async function main() {
  console.log(`\nProbing ${host}:${port}...\n`);

  // CMD 0x11 — RealData (known working)
  const req = pb.RealDataNewResDTO.create({ time: Math.floor(Date.now()/1000), offset: 28800 });
  const realPayload = Buffer.from(pb.RealDataNewResDTO.encode(req).finish());

  // Empty payload for unknown commands
  const emptyPayload = Buffer.alloc(0);

  // Commands to probe
  const cmds = [
    { cmd: 0x11, payload: realPayload, name: 'RealData (known)' },
    { cmd: 0x19, payload: emptyPayload, name: 'NetworkInfo?' },
    { cmd: 0x1a, payload: emptyPayload, name: '0x1A?' },
    { cmd: 0x21, payload: emptyPayload, name: '0x21?' },
    { cmd: 0x22, payload: emptyPayload, name: '0x22?' },
    { cmd: 0x23, payload: emptyPayload, name: 'HB/Config?' },
    { cmd: 0x30, payload: emptyPayload, name: '0x30?' },
    { cmd: 0x31, payload: emptyPayload, name: '0x31?' },
    { cmd: 0x05, payload: emptyPayload, name: 'Heartbeat?' },
  ];

  for (const { cmd, payload, name } of cmds) {
    process.stdout.write(`  cmd 0x${cmd.toString(16).padStart(2,'0')} (${name}): `);
    const raw = await tcpRequest(cmd, payload, cmd);
    if (!raw) {
      console.log('no response / timeout');
      continue;
    }
    console.log(`${raw.length} bytes received`);

    // Try to decode with all known message types
    const payload2 = raw.slice(10);
    const types = ['RealDataNewReqDTO','HBReqDTO','CommandReqDTO','CommandStatusReqDTO'];
    for (const type of types) {
      try {
        const decoded = pb[type].decode(payload2);
        const json = JSON.stringify(decoded.toJSON ? decoded.toJSON() : decoded);
        if (json.length > 5 && json !== '{}') {
          console.log(`    → decoded as ${type}: ${json.slice(0, 300)}`);
          break;
        }
      } catch(e) { /* skip */ }
    }
    // Always show raw hex for non-0x11
    if (cmd !== 0x11) {
      console.log(`    → raw hex: ${payload2.slice(0,40).toString('hex')}`);
    }
    // Small delay between requests
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\nDone.');
}

main().catch(console.error);
