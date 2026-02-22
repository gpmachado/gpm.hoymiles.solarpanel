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
  }

  async onDeleted() { this._stopPolling(); }

  async onSettings({ changedKeys }) {
    if (changedKeys.includes('ip') || changedKeys.includes('polling_interval')) {
      this.log('Settings changed, restarting polling');
      this._stopPolling();
      this._startPolling();
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
      this._failCount++;
      if (this._failCount >= 5) {
        await this.setUnavailable('DTU not responding (' + this._failCount + ' failures)').catch(() => {});
      }
      this.error('poll error [' + this._failCount + ']:', err && err.message ? err.message : err);
    } finally {
      this._polling = false;
    }
  }
};
