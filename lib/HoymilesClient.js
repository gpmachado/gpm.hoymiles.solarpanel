'use strict';

const net  = require('net');
const path = require('path');
const pb   = require(path.join(__dirname, 'hoymiles'));

const DTU_PORT     = 10081;
const READ_TIMEOUT = 25000;
const MAX_RETRIES  = 2;
const RETRY_DELAY  = 2000;
const HEADER       = Buffer.from([0x48, 0x4d]);

// Warning codes that are informational only — NOT real faults.
// Source: Hoymiles HmAppData.plist / S-Miles app alarm definitions.
// 10223 = Low Irradiation (morning startup, low light, cloudy day) — normal operation.
// warning_number is a BITMASK for HMS series (from HmAppData.plist code 10223):
//   Bit0 (1) = Power on Low Light  — startup / low irradiation
//   Bit1 (2) = Low Power           — below minimum threshold
//   Bit2 (4) = PV voltage plunge   — transient, self-recovers
//   Bit3 (8) = undocumented        — S-Miles still shows "Normal"
// Observed values in the wild: 2, 5, 6, 7, 8, 9 — all informational.
// Real fault codes (10069, 10070, 10121, 10131, 10181, 10326) are all > 1000.
// Safe threshold: treat anything <= 255 as informational bitmask noise.
const INFORMATIONAL_WARN_MAX = 255;

function crc16(buf) {
  let crc = 0xffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc & 1) ? ((crc >>> 1) ^ 0xa001) : (crc >>> 1);
    }
  }
  return crc & 0xffff;
}

function buildFrame(cmd, payload, seq) {
  const totalLen = payload.length + 10;
  const frame    = Buffer.alloc(totalLen);
  frame[0] = 0x48; frame[1] = 0x4d; frame[2] = 0xa3; frame[3] = cmd & 0xff;
  frame.writeUInt16BE(seq & 0xffff, 4);
  frame.writeUInt16BE(crc16(payload), 6);
  frame.writeUInt16BE(totalLen, 8);
  payload.copy(frame, 10);
  return frame;
}

function parseFrames(buf, logger) {
  const frames = [];
  let rx = buf;
  while (rx.length >= 10) {
    const idx = rx.indexOf(HEADER);
    if (idx === -1) break;
    if (idx > 0) rx = rx.slice(idx);
    if (rx.length < 10) break;
    const totalLen = rx.readUInt16BE(8);
    if (totalLen < 10 || rx.length < totalLen) break;
    const frame   = rx.slice(0, totalLen);
    rx            = rx.slice(totalLen);
    const payload = frame.slice(10);
    const crc     = frame.readUInt16BE(6);
    if (crc16(payload) !== crc) {
      logger && logger('parseFrames: CRC inválido — ignorando frame');
      continue;
    }
    frames.push({ cmd: frame[3], payload });
  }
  if (frames.length === 0 && buf.length > 0) {
    logger && logger('parseFrames: nenhum frame válido em buffer de ' + buf.length + ' bytes');
  }
  return frames;
}

function tcpOnce(host, cmd, payload, seq, logger) {
  return new Promise((resolve, reject) => {
    const socket   = new net.Socket();
    let rxBuf      = Buffer.alloc(0);
    let done       = false;
    let closeTimer = null;

    const finish = (err, val) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      clearTimeout(closeTimer);
      socket.destroy();
      if (err) reject(err);
      else resolve(val);
    };

    const timer = setTimeout(
      () => finish(new Error(`Timeout ${READ_TIMEOUT}ms (${host}:${DTU_PORT})`)),
      READ_TIMEOUT
    );

    socket.on('error', finish);

    socket.on('data', (chunk) => {
      rxBuf = Buffer.concat([rxBuf, chunk]);
      if (parseFrames(rxBuf, logger).length > 0) {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => socket.end(), 200);
      }
    });

    socket.on('close', () => {
      if (rxBuf.length === 0)  return finish(null, []);
      const frames = parseFrames(rxBuf, logger);
      if (frames.length > 0)   return finish(null, frames);
      if (rxBuf.length > 10)   return finish(null, [{ cmd: 0, payload: rxBuf.slice(10) }]);
      finish(null, []);
    });

    socket.connect(DTU_PORT, host, () => socket.write(buildFrame(cmd, payload, seq)));
  });
}

async function tcpRequest(host, cmd, payload, seq, logger) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await tcpOnce(host, cmd, payload, seq, logger);
    } catch (err) {
      logger && logger(`tcpRequest tentativa ${attempt}/${MAX_RETRIES} falhou: ${err.message}`);
      if (attempt >= MAX_RETRIES) throw err;
      await new Promise(r => setTimeout(r, RETRY_DELAY));
    }
  }
}

function pick(obj, snake, camel) {
  if (!obj) return undefined;
  return obj[snake] !== undefined ? obj[snake] : obj[camel];
}

function toNumber(v) {
  if (v == null) return 0;
  if (typeof v === 'number') return v;
  if (typeof v === 'string') return Number(v) || 0;
  if (typeof v === 'object' && typeof v.toNumber === 'function') return v.toNumber();
  return Number(v) || 0;
}

function div(v, factor) { return factor ? toNumber(v) / factor : toNumber(v); }

function decodeTemp(v) {
  let t = toNumber(v);
  if (t > 32767) t -= 65536;
  return t * 0.1;
}

class HoymilesClient {
  constructor(host, logger) {
    this._host = host;
    this._log  = logger || (() => {});
    this._seq  = 1;
  }

  async getData() {
    const req     = pb.RealDataNewResDTO.create({ time: Math.floor(Date.now() / 1000), offset: 28800 });
    const payload = Buffer.from(pb.RealDataNewResDTO.encode(req).finish());
    const frames  = await tcpRequest(this._host, 0x11, payload, this._seq++, this._log);

    if (!frames || frames.length === 0 || !frames[0].payload || frames[0].payload.length === 0) {
      return { sleeping: true };
    }

    const msg    = pb.RealDataNewReqDTO.decode(frames[0].payload);
    const dtuSn  = pick(msg, 'device_serial_number', 'deviceSerialNumber') || null;
    const dtuPow = pick(msg, 'dtu_power',            'dtuPower');
    const dtuDay = pick(msg, 'dtu_daily_energy',     'dtuDailyEnergy');
    const sgsArr = pick(msg, 'sgs_data',             'sgsData') || [];
    const pvArr  = pick(msg, 'pv_data',              'pvData')  || [];
    const sgs    = Array.isArray(sgsArr) && sgsArr.length ? sgsArr[0] : null;

    const warnRaw = sgs ? toNumber(pick(sgs, 'warning_number', 'warningNumber')) : 0;

    // Only flag real faults — skip informational codes like Low Irradiation (10223)
    const isRealAlarm = warnRaw > INFORMATIONAL_WARN_MAX;
    if (warnRaw > 0) {
      this._log(`warning_number: ${warnRaw} — ${isRealAlarm ? 'REAL FAULT' : 'informational (ignored)'}`);
    }

    // Sum daily and total energy from panels
    let sumDaily = 0;
    let sumTotal = 0;
    for (const pv of pvArr) {
      sumDaily += toNumber(pick(pv, 'energy_daily', 'energyDaily'));
      sumTotal += toNumber(pick(pv, 'energy_total', 'energyTotal'));
    }

    // Build clean per-panel array with decoded values
    const panels = (Array.isArray(pvArr) ? pvArr : []).map(pv => ({
      port:         toNumber(pick(pv, 'port_number',   'portNumber')),
      voltage:      div(pick(pv, 'voltage',      'voltage'),      10),   // V DC
      current:      div(pick(pv, 'current',      'current'),      100),  // A DC
      power:        div(pick(pv, 'power',        'power'),        10),   // W DC
      energyTodayWh: toNumber(pick(pv, 'energy_daily', 'energyDaily')),  // Wh
      energyTotalWh: toNumber(pick(pv, 'energy_total', 'energyTotal')),  // Wh lifetime
    }));

    return {
      sleeping:      false,
      dtuSn:         dtuSn ? String(dtuSn) : null,
      inverterSn:    sgs ? String(toNumber(pick(sgs, 'serial_number', 'serialNumber'))) : null,
      powerTotal:    div(dtuPow, 10),
      energyTodayWh: toNumber(dtuDay) || sumDaily,
      energyTotalWh: sumTotal,            // lifetime total across all panels
      voltage:       sgs ? div(pick(sgs, 'voltage',    'voltage'),   10)  : 0,
      current:       sgs ? div(pick(sgs, 'current',    'current'),   100) : 0,
      frequency:     sgs ? div(pick(sgs, 'frequency',  'frequency'), 100) : 0,
      temperature:   sgs ? decodeTemp(pick(sgs, 'temperature', 'temperature')) : 0,
      alarmFlag:     isRealAlarm,
      warnCode:      warnRaw,
      panels,        // decoded per-panel array [{port, voltage, current, power, energyTodayWh, energyTotalWh}]
    };
  }
}

module.exports = { HoymilesClient };
