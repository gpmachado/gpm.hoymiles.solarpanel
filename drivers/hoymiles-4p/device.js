'use strict';

const Homey = require('homey');
const { HoymilesClient } = require('../../lib/HoymilesClient');

const VERSION = 'v1.1.0';

module.exports = class HoymilesDevice extends Homey.Device {

  /**
   * Initializes the device state and starts the polling loop.
   * Also fetches DTU diagnostic info (signal, firmware, SSID) once at startup.
   * @returns {Promise<void>}
   */
  async onInit() {
    this._pollTimer    = null;
    this._polling      = false;
    this._failCount    = 0;
    this._successCount = 0;
    this._backoffUntil = 0;

    this.log(`${VERSION} onInit data:`, JSON.stringify(this.getData()));
    this.log(`${VERSION} onInit settings:`, JSON.stringify(this.getSettings()));

    // Add meter_power.today for devices paired before v1.1.0
    if (!this.hasCapability('meter_power.today')) {
      await this.addCapability('meter_power.today').catch(err =>
        this.log('addCapability meter_power.today failed:', err.message)
      );
    }

    this._startPolling();

    // Fetch diagnostic info once at startup (signal%, firmware version, SSID).
    // Runs after polling starts — DTU is expected to be online during daytime init.
    this._pollDiagnostics().catch(err => this.log('diagnostics init error:', err.message));
  }

  /**
   * Stops the polling loop when the device is deleted.
   * @returns {Promise<void>}
   */
  async onDeleted() {
    this._stopPolling();
  }

  /**
   * Restarts polling when IP or interval settings change.
   * @param {{ changedKeys: string[] }} options
   * @returns {Promise<void>}
   */
  async onSettings({ changedKeys }) {
    if (changedKeys.includes('ip') || changedKeys.includes('polling_interval')) {
      this.log('Settings changed, restarting polling');
      this._stopPolling();
      this._startPolling();
    }
  }

  /**
   * Fetches DTU diagnostic info (signal strength, firmware version, SSID) and
   * stores results in device settings. Called once at startup.
   * Skips gracefully if DTU does not respond — settings remain at previous values.
   * @returns {Promise<void>}
   */
  async _pollDiagnostics() {
    const { ip } = this.getSettings();
    const host = String(ip || '').trim();
    if (!host) return;

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

    // DTU needs ~3s to recover between TCP connections
    await new Promise(r => setTimeout(r, 3000));

    try {
      // cmd 0x09 — GetConfig: Wi-Fi SSID, AP SSID
      const config = await client.getConfig();
      if (config && (config.wifiSsid || config.dtuApSsid)) {
        this.log(`diagnostics: ssid=${config.wifiSsid} ap=${config.dtuApSsid}`);
        await this.setSettings({
          wifi_ssid:   config.wifiSsid  || '—',
          dtu_ap_ssid: config.dtuApSsid || '—',
        }).catch(() => {});
      } else {
        this.log(`diagnostics: getConfig returned empty — raw: ${JSON.stringify(config)}`);
      }
    } catch (err) {
      this.log('getConfig failed:', err.message);
    }
  }

  /**
   * Stops the polling interval timer.
   */
  _stopPolling() {
    if (this._pollTimer) {
      this.homey.clearInterval(this._pollTimer);
      this._pollTimer = null;
    }
  }

  /**
   * Starts the polling interval. Validates IP and interval settings before starting.
   * Schedules an immediate first poll after a short delay to avoid blocking onInit.
   */
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

  /**
   * Sets all instantaneous capabilities to zero. Preserves meter_power.
   * Used when the inverter is sleeping (night) or DTU reports no active production.
   * @returns {Promise<void>}
   */
  async _applyZeros() {
    const pvZeros = [];
    for (let i = 1; i <= 4; i++) {
      for (const type of ['measure_power', 'measure_voltage', 'measure_current']) {
        const cap = `${type}.pv${i}`;
        if (this.hasCapability(cap)) pvZeros.push(this.setCapabilityValue(cap, 0));
      }
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
  }

  /**
   * Main poll cycle. Fetches real-time data from the DTU and updates device capabilities.
   * Handles sleeping state, night-time timeouts, and host-unreachable backoff independently
   * of the _polling flag using _backoffUntil to avoid the finally-block race condition.
   * @returns {Promise<void>}
   */
  async _poll() {
    // Respect active backoff window set during night or host-unreachable conditions.
    // This is separate from _polling to avoid the finally-block overwriting the backoff.
    if (Date.now() < this._backoffUntil) return;

    if (this._polling) return;
    this._polling = true;

    try {
      const data = await this._client.getData();
      await this.setAvailable();

      if (data.sleeping) {
        await this._applyZeros();
        this._failCount = 0;
        this.log('poll: DTU sleeping (night mode)');
        return;
      }

      // ── Per-panel data — only update capabilities that exist on this device ──
      const pvUpdates = [];
      const panels    = data.panels || [];

      for (let i = 0; i < 4; i++) {
        const idx = i + 1;
        if (!this.hasCapability(`measure_power.pv${idx}`)) continue;
        const pv = panels[i] || null;
        pvUpdates.push(
          this.setCapabilityValue(`measure_power.pv${idx}`,   pv ? (pv.power   ?? 0) : 0),
          this.setCapabilityValue(`measure_voltage.pv${idx}`, pv ? (pv.voltage ?? 0) : 0),
          this.setCapabilityValue(`measure_current.pv${idx}`, pv ? (pv.current ?? 0) : 0),
        );
      }

      // ── meter_power: lifetime total kWh — only updated when energyTotalWh > 0
      // and value is non-decreasing. Never uses energyTodayWh as fallback (resets at midnight).
      const nextKwh      = data.energyTotalWh > 0 ? data.energyTotalWh / 1000 : null;
      const prevKwh      = this.getCapabilityValue('meter_power') ?? 0;
      // ── meter_power.today: daily energy kWh — allowed to reset at midnight
      const todayKwh     = data.energyTodayWh > 0 ? data.energyTodayWh / 1000 : null;

      await Promise.all([
        this.setCapabilityValue('measure_power',       Math.max(0, data.powerTotal ?? 0)),
        this.setCapabilityValue('measure_voltage',     data.voltage     ?? 0),
        this.setCapabilityValue('measure_current',     data.current     ?? 0),
        this.setCapabilityValue('measure_frequency',   data.frequency   ?? 0),
        this.setCapabilityValue('measure_temperature', data.temperature ?? 0),
        this.setCapabilityValue('alarm_generic',       !!data.alarmFlag),
        ...(nextKwh  !== null && nextKwh >= prevKwh ? [this.setCapabilityValue('meter_power',       nextKwh)]  : []),
        ...(todayKwh !== null                       ? [this.setCapabilityValue('meter_power.today', todayKwh)] : []),
        ...pvUpdates,
      ]);

      this._failCount = 0;
      this._successCount++;

      if (this._successCount % 10 === 1) {
        const pvLog = panels.slice(0, 4).map((pv, i) => `PV${i + 1}:${(pv.power ?? 0).toFixed(0)}W`).join(' ');
        this.log(`poll OK | total:${data.powerTotal}W | ${pvLog} | today:${(todayKwh ?? 0).toFixed(3)}kWh | lifetime:${(nextKwh ?? prevKwh).toFixed(3)}kWh`);
      }

    } catch (err) {
      const msg           = (err && err.message) || '';
      const isTimeout     = msg.includes('Timeout');
      const isHostUnreach = msg.includes('EHOSTUNREACH') || msg.includes('ENETUNREACH') || msg.includes('ECONNREFUSED');
      const isNight       = this._isNightTime();

      if (isTimeout && isNight) {
        // Expected: inverter offline at night — keep available, zero instantaneous values
        this._failCount = 0;
        await this._applyZeros();
        await this.setAvailable().catch(() => {});
        this.log('poll: night timeout — inverter sleeping (expected), backing off 30 min');
        this._backoffUntil = Date.now() + 30 * 60 * 1000;

      } else if (isNight) {
        // Non-timeout error at night — still expected, back off
        this._failCount++;
        if (this._failCount === 1) {
          const { sunrise, sunset } = this._getSunriseSunset();
          const tz     = this.homey.clock.getTimezone();
          const now    = new Date();
          const local  = tz ? new Date(now.toLocaleString('en-US', { timeZone: tz })) : now;
          const localH = local.getHours() + local.getMinutes() / 60;
          const toStr  = h => `${String(Math.floor(h)).padStart(2, '0')}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`;
          this.log(`poll: night error — backing off 30 min | now=${toStr(localH)} sunrise=${toStr(sunrise)} sunset=${toStr(sunset)}`);
          await this.setAvailable().catch(() => {});
        }
        this._backoffUntil = Date.now() + 30 * 60 * 1000;

      } else if (isHostUnreach) {
        // Network down during the day — back off 5 min, do not mark unavailable
        this._failCount++;
        if (this._failCount >= 3) {
          this.log(`poll: host unreachable (fail ${this._failCount}) — backing off 5 min`);
          this._backoffUntil = Date.now() + 5 * 60 * 1000;
        }
        this.error(`poll error [${this._failCount}]:`, msg);

      } else {
        // Real DTU failure during the day
        this._failCount++;
        if (this._failCount >= 10) {
          await this.setUnavailable(`DTU not responding (${this._failCount} failures)`).catch(() => {});
        }
        this.error(`poll error [${this._failCount}]:`, msg || err);
      }
    } finally {
      this._polling = false;
    }
  }

  /**
   * Computes local sunrise and sunset times using the NOAA simplified algorithm.
   * Uses Homey's geolocation (lat/lng) — accurate to ~5 minutes for any location worldwide.
   * Falls back to a conservative 06:00–19:00 window if geolocation is unavailable.
   * @returns {{ sunrise: number, sunset: number }} Decimal hours in local time.
   */
  _getSunriseSunset() {
    try {
      const lat = this.homey.geolocation.getLatitude();
      const lng = this.homey.geolocation.getLongitude();
      const tz  = this.homey.clock.getTimezone();

      if (!lat || !lng) throw new Error('no geolocation');

      const now       = new Date();
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
      const B          = (2 * Math.PI / 365) * (dayOfYear - 81);
      const eotMin     = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
      const tzOffsetH  = tz ? (new Date(now.toLocaleString('en-US', { timeZone: tz })) - now) / 3600000 : 0;
      const lngOffsetH = lng / 15;
      const solarNoon  = 12 - lngOffsetH + tzOffsetH - eotMin / 60;

      return {
        sunrise: solarNoon - ha / 15,
        sunset:  solarNoon + ha / 15,
      };
    } catch (e) {
      return { sunrise: 6, sunset: 19 };
    }
  }

  /**
   * Returns true when current local time is outside the expected solar production window.
   * Applies a 30-minute buffer before sunrise and after sunset to avoid false positives
   * at dawn and dusk when production is marginal.
   * @returns {boolean}
   */
  _isNightTime() {
    try {
      const { sunrise, sunset } = this._getSunriseSunset();
      const tz        = this.homey.clock.getTimezone();
      const now       = new Date();
      const local     = tz ? new Date(now.toLocaleString('en-US', { timeZone: tz })) : now;
      const localHour = local.getHours() + local.getMinutes() / 60;

      // 30-minute buffer on each side to avoid false positives at dawn/dusk
      return localHour < (sunrise - 0.5) || localHour >= (sunset + 0.5);
    } catch (e) {
      const h = new Date().getHours();
      return h < 6 || h >= 19;
    }
  }

};
