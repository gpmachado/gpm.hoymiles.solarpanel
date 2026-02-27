'use strict';

const net  = require('net');
const path = require('path');
const pb   = require(path.join(__dirname, 'lib', 'hoymiles'));

const host = process.argv[2] || '192.168.1.202';

function crc16(buf) {
  let crc = 0xffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++)
      crc = (crc & 1) ? (crc >>> 1) ^ 0xa001 : crc >>> 1;
  }
  return crc & 0xffff;
}

function buildFrame(cmd, payload, seq) {
  const totalLen = payload.length + 10;
  const frame    = Buffer.alloc(totalLen);
  frame[0]=0x48; frame[1]=0x4d; frame[2]=0xa3; frame[3]=cmd & 0xff;
  frame.writeUInt16BE(seq & 0xffff,   4);
  frame.writeUInt16BE(crc16(payload), 6);
  frame.writeUInt16BE(totalLen,       8);
  payload.copy(frame, 10);
  return frame;
}

function toLong(v) {
  if (v == null) return 0;
  if (typeof v === 'number') return v;
  if (typeof v === 'object' && v.low !== undefined)
    return v.toNumber ? v.toNumber() : (v.low >>> 0) + (v.high >>> 0) * 4294967296;
  return Number(v) || 0;
}

const div = (v, f) => { const n = toLong(v); return n === 0 ? 0 : n / f; };

const socket = new net.Socket();
let rxBuf = Buffer.alloc(0);

console.log(`\n🔌 Conectando a ${host}:10081...`);

socket.connect(10081, host, () => {
  console.log('✅ Conectado — enviando request...\n');
  const req     = pb.RealDataNewResDTO.create({ time: Math.floor(Date.now() / 1000), offset: 28800 });
  const payload = Buffer.from(pb.RealDataNewResDTO.encode(req).finish());
  socket.write(buildFrame(0x11, payload, 1));
});

socket.on('data', chunk => {
  rxBuf = Buffer.concat([rxBuf, chunk]);
  process.stdout.write(`📥 ${chunk.length} bytes (total: ${rxBuf.length})\r`);
});

socket.on('close', () => {
  console.log(`\n🔌 Conexão fechada — ${rxBuf.length} bytes\n`);
  if (rxBuf.length < 10) { console.log('❌ Sem dados'); return; }

  let msg;
  try {
    msg = pb.RealDataNewReqDTO.decode(rxBuf.slice(10));
  } catch (e) {
    console.error('❌ Decode erro:', e.message);
    return;
  }

  console.log('━━━━ DTU ━━━━');
  console.log(`  SN             : ${msg.deviceSerialNumber}`);
  console.log(`  Potência total : ${div(msg.dtuPower, 10).toFixed(1)} W`);
  console.log(`  Energia hoje   : ${toLong(msg.dtuDailyEnergy)} Wh`);

  const pvMap = {};
  for (const pv of (msg.pvData || [])) {
    const sn = String(toLong(pv.serialNumber));
    if (!pvMap[sn]) pvMap[sn] = [];
    pvMap[sn].push(pv);
  }
  for (const sn of Object.keys(pvMap))
    pvMap[sn].sort((a, b) => (a.portNumber || 0) - (b.portNumber || 0));

  for (const [i, sgs] of (msg.sgsData || []).entries()) {
    const sn  = String(toLong(sgs.serialNumber));
    const pvs = pvMap[sn] || [];

    console.log(`\n━━━━ Inversor ${i + 1} — SN: ${sn} ━━━━`);
    console.log(`  AC   : ${div(sgs.voltage,10).toFixed(1)} V | ${div(sgs.current,100).toFixed(2)} A | ${div(sgs.activePower,10).toFixed(1)} W | ${div(sgs.frequency,100).toFixed(2)} Hz`);
    console.log(`  Temp : ${(sgs.temperature * 0.1).toFixed(1)} °C | Alarme: ${(sgs.warningNumber||0)!==0} | Link: ${sgs.linkStatus}`);

    let todayTotal = 0, totalWh = 0;
    for (const pv of pvs) {
      const today = toLong(pv.energyDaily);
      const total = toLong(pv.energyTotal);
      todayTotal += today;
      totalWh    += total;
      console.log(`\n  📟 Painel ${pv.portNumber}`);
      console.log(`    DC    : ${div(pv.voltage,10).toFixed(1)} V | ${div(pv.current,100).toFixed(2)} A | ${div(pv.power,10).toFixed(1)} W`);
      console.log(`    Hoje  : ${today} Wh`);
      console.log(`    Total : ${total} Wh (${(total/1000).toFixed(3)} kWh)`);
    }
    console.log(`\n  Σ Hoje: ${todayTotal} Wh | Σ Total: ${(totalWh/1000).toFixed(3)} kWh`);
  }
  console.log();
});

socket.on('error', e => console.error('❌ Erro:', e.message));
setTimeout(() => { console.log('\n⏱ Timeout 15s'); socket.destroy(); }, 15000);
