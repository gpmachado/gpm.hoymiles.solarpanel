'use strict';

const Homey = require('homey');
const { HoymilesClient } = require('../../lib/HoymilesClient');

module.exports = class HoymilesDevice extends Homey.Device {

  async onInit() {
    this._pollTimer    = null;
    this._polling      = false;
    this._failCount    = 0;
    this._successCount = 0;

    this.log('v1.8.0 onInit data:', JSON.stringify(this.getData()));
    this.log('v1.8.0 onInit settings:', JSON.stringify(this.getSettings()));

    this._startPolling();

    // Fetch diagnostic info once at startup (signal%, version, SSID)
    this._pollDiagnostics().catch(err => this.log('diagnostics init error:', err.message));
  }

  async onDeleted() { this._stopPolling(); }

  async onSettings({ changedKeys }) {
    if (changedKeys.includes('ip') || changedKeys.includes('polling_interval')) {
      this.log('Settings changed, restarting polling');
      this._stopPolling();
      this._startPolling();
    }
  }

  async _pollDiagnostics() {
    const { ip } = this.getSettings();
    const host = String(ip || '').trim();
    if (!host) return;

    // Don't bother at night — DTU is offline, wait until morning poll succeeds first
    if (this._isNightTime()) {
      this.log('diagnostics: skipping at night');
      return;
    }

    const client = new HoymilesClient(host, msg => this.log(msg));
    try {
      // cmd 0x01 — AppInfo: signal strength, SW/HW version
      const appInfo = await client.getAppInfo();
      if (appInfo) {
        this.log(`diagnostics: signal=${appInfo.signalStrength}% sw=${appInfo.swVersion} hw=${appInfo.hwVersion}`);
        await this.setSettings({
          signal_strength: String(appInfo.signalStrength) + '%',
          sw_version:      appInfo.swVersion,
          hw_version:      appInfo.hwVersion,
        }).catch(() => {});
      }
    } catch (err) {
      this.log('getAppInfo failed:', err.message);
    }

    // Wait 3s between commands — DTU needs time to recover between TCP connections
    await new Promise(r => setTimeout(r, 3000));

    try {
      // cmd 0x09 — GetConfig: wifi SSID, AP SSID
      const config = await client.getConfig();
      if (config && (config.wifiSsid || config.dtuApSsid)) {
        this.log(`diagnostics: ssid=${config.wifiSsid} ap=${config.dtuApSsid}`);
        await this.setSettings({
          wifi_ssid:   config.wifiSsid   || '—',
          dtu_ap_ssid: config.dtuApSsid  || '—',
        }).catch(() => {});
      } else {
        this.log(`diagnostics: getConfig returned empty — raw: ${JSON.stringify(config)}`);
      }
    } catch (err) {
      this.log('getConfig failed:', err.message);
    }
  }

  _stopPolling() {
    if (this._pollTimer) {
      this.homey.clearInterval(this._pollTimer);
      this._pollTimer = null;
    }
  }

  _startPolling() {
    this._stopPolling();
    const { ip, polling_interval } = this.getSettings();
    const host        = String(ip || '').trim();
    const intervalSec = Number(polling_interval || 60);

    this.log('_startPolling host:', host, 'interval:', intervalSec);

    if (!host) {
      this.setUnavailable('Missing IP — open device settings').catch(() => {});
      return;
    }
    if (!Number.isFinite(intervalSec) || intervalSec < 35) {
      this.setUnavailable('Invalid polling interval (min 35s)').catch(() => {});
      return;
    }

    this._client = new HoymilesClient(host, this.log.bind(this));

    this.homey.setTimeout(() => this._poll().catch(() => {}), 1500);
    const jitter = Math.floor(Math.random() * 2000);
    this._pollTimer = this.homey.setInterval(
      () => this._poll().catch(() => {}),
      intervalSec * 1000 + jitter
    );
  }

  async _poll() {
    if (this._polling) return;
    this._polling = true;

    try {
      const data = await this._client.getData();
      await this.setAvailable();

      if (data.sleeping) {
        const pvZeros = [];
        for (let i = 1; i <= 4; i++) {
          pvZeros.push(
            this.setCapabilityValue(`measure_power.pv${i}`,   0),
            this.setCapabilityValue(`measure_voltage.pv${i}`, 0),
            this.setCapabilityValue(`measure_current.pv${i}`, 0),
          );
        }
        await Promise.all([
          this.setCapabilityValue('measure_power',       0),
          this.setCapabilityValue('measure_voltage',     0),
          this.setCapabilityValue('measure_current',     0),
          this.setCapabilityValue('measure_frequency',   0),
          this.setCapabilityValue('measure_temperature', 0),
          this.setCapabilityValue('alarm_generic',       false),
          ...pvZeros,
        ]);
        this._failCount = 0;
        this.log('poll: DTU sleeping (night mode)');
        return;
      }

      // ── Per-panel data — already decoded by HoymilesClient ──────────────
      const pvUpdates = [];
      const panels = data.panels || [];

      for (let i = 0; i < 4; i++) {
        const pv  = panels[i] || null;
        const idx = i + 1;
        pvUpdates.push(
          this.setCapabilityValue(`measure_power.pv${idx}`,   pv ? (pv.power   ?? 0) : 0),
          this.setCapabilityValue(`measure_voltage.pv${idx}`, pv ? (pv.voltage ?? 0) : 0),
          this.setCapabilityValue(`measure_current.pv${idx}`, pv ? (pv.current ?? 0) : 0),
        );
      }

      // ── Main device capabilities ──────────────────────────────────────────
      // meter_power = lifetime total kWh across all panels (never decreases)
      const energyKwh = (data.energyTotalWh > 0 ? data.energyTotalWh : data.energyTodayWh) / 1000;
      const prevKwh   = await this.getCapabilityValue('meter_power') ?? 0;

      await Promise.all([
        this.setCapabilityValue('measure_power',       data.powerTotal  ?? 0),
        this.setCapabilityValue('measure_voltage',     data.voltage     ?? 0),
        this.setCapabilityValue('measure_current',     data.current     ?? 0),
        this.setCapabilityValue('measure_frequency',   data.frequency   ?? 0),
        this.setCapabilityValue('measure_temperature', data.temperature ?? 0),
        this.setCapabilityValue('alarm_generic',       !!data.alarmFlag),
        ...(energyKwh >= prevKwh ? [this.setCapabilityValue('meter_power', energyKwh)] : []),
        ...pvUpdates,
      ]);

      this._failCount = 0;
      this._successCount++;

      if (this._successCount % 10 === 1) {
        const pvLog = panels.slice(0, 4).map((pv, i) => `PV${i+1}:${(pv.power??0).toFixed(0)}W`).join(' ');
        this.log(`poll OK | total:${data.powerTotal}W | ${pvLog} | today:${data.energyTodayWh}Wh | total:${(energyKwh).toFixed(3)}kWh`);
      }

    } catch (err) {
      const isTimeout = err && err.message && err.message.includes('Timeout');
      const isNight   = this._isNightTime();

      if (isTimeout && isNight) {
        // Normal: inverter offline at night — keep available, zero instantaneous, preserve meter_power
        this._failCount = 0;
        const pvZeros = [];
        for (let i = 1; i <= 4; i++) {
          pvZeros.push(
            this.setCapabilityValue(`measure_power.pv${i}`,   0),
            this.setCapabilityValue(`measure_voltage.pv${i}`, 0),
            this.setCapabilityValue(`measure_current.pv${i}`, 0),
          );
        }
        await Promise.all([
          this.setCapabilityValue('measure_power',       0),
          this.setCapabilityValue('measure_voltage',     0),
          this.setCapabilityValue('measure_current',     0),
          this.setCapabilityValue('measure_frequency',   0),
          this.setCapabilityValue('measure_temperature', 0),
          this.setCapabilityValue('alarm_generic',       false),
          ...pvZeros,
        ]).catch(() => {});
        await this.setAvailable().catch(() => {});
        this.log('poll: night timeout — inverter sleeping (expected)');
      } else {
        this._failCount++;
        const isHostUnreachable = err && err.message && err.message.includes('EHOSTUNREACH');
        const isNight = this._isNightTime();

        if (isNight) {
          // Between 20:00–04:00 — DTU sleeping is expected, never mark unavailable
          // Use long backoff to avoid polling every 60s all night
          if (this._failCount === 1) {
            const { sunrise, sunset } = this._getSunriseSunset();
            const tz  = this.homey.clock.getTimezone();
            const now = new Date();
            const local = tz ? new Date(now.toLocaleString('en-US', { timeZone: tz })) : now;
            const localHour = local.getHours() + local.getMinutes() / 60;
            const dayStart  = sunrise - 0.5;
            const dayEnd    = sunset  + 0.5;
            const toStr = h => `${String(Math.floor(h)).padStart(2,'0')}:${String(Math.round((h%1)*60)).padStart(2,'0')}`;
            this.log(`poll: night — DTU offline (expected), backing off until morning`);
            this.log(`poll: now=${toStr(localHour)} | dayStart=${toStr(dayStart)} | dayEnd=${toStr(dayEnd)} | sunrise=${toStr(sunrise)} | sunset=${toStr(sunset)} | next check in 30min`);
            await this.setAvailable().catch(() => {});
          }
          // Backoff 30min during night
          this._polling = true;
          this.homey.setTimeout(() => { this._polling = false; }, 30 * 60 * 1000);

        } else if (isHostUnreachable) {
          // Wi-Fi / network down during the day — don't mark unavailable, just back off
          this._failCount >= 3 && this.log(`poll: host unreachable (fail ${this._failCount}) — backing off 5 min`);
          if (this._failCount >= 3) {
            this._polling = true;
            this.homey.setTimeout(() => { this._polling = false; }, 5 * 60 * 1000);
          }
          this.error('poll error [' + this._failCount + ']:', err.message);

        } else {
          // Real DTU failure during the day (responds but errors)
          if (this._failCount >= 10) {
            await this.setUnavailable('DTU not responding (' + this._failCount + ' failures)').catch(() => {});
          }
          this.error('poll error [' + this._failCount + ']:', err && err.message ? err.message : err);
        }
      }
    } finally {
      this._polling = false;
    }
  }
  // Returns true during hours when the inverter is expected to be offline.
  // Homey SDK v3 does not expose sunrise/sunset — uses timezone-aware hour check.
  // Minas Gerais = UTC-3 (BRT) year-round (Brazil does not observe DST since 2019).
  // Compute sunrise/sunset hours using NOAA simplified algorithm.
  // Uses Homey's geolocation (lat/lng) — works for any location worldwide.
  // Accurate to ~5 minutes. Returns { sunrise, sunset } as decimal hours in local time.
  _getSunriseSunset() {
    try {
      const lat = this.homey.geolocation.getLatitude();
      const lng = this.homey.geolocation.getLongitude();
      const tz  = this.homey.clock.getTimezone();

      if (!lat || !lng) throw new Error('no geolocation');

      const now = new Date();
      const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);

      // Solar declination
      const decl    = 23.45 * Math.sin((Math.PI / 180) * (360 / 365) * (dayOfYear - 81));
      const latRad  = lat  * Math.PI / 180;
      const declRad = decl * Math.PI / 180;
      const cosHA   = -Math.tan(latRad) * Math.tan(declRad);

      if (cosHA <= -1) return { sunrise: 0,  sunset: 24 }; // midnight sun
      if (cosHA >=  1) return { sunrise: 12, sunset: 12 }; // polar night

      const ha = Math.acos(cosHA) * 180 / Math.PI;

      // Solar noon correction: longitude offset from UTC + equation of time (simplified)
      const B           = (2 * Math.PI / 365) * (dayOfYear - 81);
      const eotMin      = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
      const tzOffsetH   = tz ? (new Date(now.toLocaleString('en-US', { timeZone: tz })) - now) / 3600000 : 0;
      const lngOffsetH  = lng / 15;
      const solarNoon   = 12 - lngOffsetH + tzOffsetH - eotMin / 60;

      return {
        sunrise: solarNoon - ha / 15,
        sunset:  solarNoon + ha / 15,
      };
    } catch(e) {
      // Fallback: conservative fixed window 06:00–19:00
      return { sunrise: 6, sunset: 19 };
    }
  }

  _isNightTime() {
    try {
      const { sunrise, sunset } = this._getSunriseSunset();
      const tz  = this.homey.clock.getTimezone();
      const now = new Date();
      // Local hour as decimal
      const local = tz
        ? new Date(now.toLocaleString('en-US', { timeZone: tz }))
        : now;
      const localHour = local.getHours() + local.getMinutes() / 60;

      // Add 30min buffer before/after to avoid false positives at dawn/dusk
      const dayStart = sunrise - 0.5;
      const dayEnd   = sunset  + 0.5;

      const isNight = localHour < dayStart || localHour >= dayEnd;
      return isNight;
    } catch(e) {
      const h = new Date().getHours();
      return h < 6 || h >= 19;
    }
  }

};
