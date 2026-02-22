'use strict';

const Homey = require('homey');
const { HoymilesClient } = require('../../lib/HoymilesClient');

module.exports = class HoymilesDriver extends Homey.Driver {

  async onInit() {
    this.log('HoymilesDriver v1.5.0 init');
    this._pairState = {};
    this._pairSeq   = 0;
  }

  async onPair(session) {
    this.log('onPair started');

    const key = 'k' + (++this._pairSeq);
    this._pairState[key] = { ip: null, dtuSn: null };

    // login_credentials template: username = IP, password = ignored
    session.setHandler('login', async ({ username }) => {
      const host = String(username || '').trim();
      this.log('login - ip:', host);

      if (!host) throw new Error('Please enter the DTU IP address.');
      if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(host)) throw new Error('Invalid IP: ' + host);

      const client = new HoymilesClient(host, this.log.bind(this));
      const data   = await client.getData();

      if (!data || data.sleeping) throw new Error('DTU not responding or no data at ' + host);

      this._pairState[key].ip    = host;
      this._pairState[key].dtuSn = data.dtuSn || null;

      this.log('login OK:', JSON.stringify(this._pairState[key]));
      return true;
    });

    session.setHandler('list_devices', async () => {
      const s = this._pairState[key];
      this.log('list_devices - state:', JSON.stringify(s));

      if (!s || !s.ip) throw new Error('IP not found — please go back and try again.');

      // Generic device ID — works for any Hoymiles DTU model
      const deviceId = s.dtuSn
        ? 'hoymiles_' + String(s.dtuSn).replace(/[^a-zA-Z0-9]/g, '')
        : 'hoymiles_' + s.ip.replace(/\./g, '_');

      // Generic device name — user can rename in Homey
      const name = s.dtuSn
        ? 'Hoymiles DTU ' + s.dtuSn
        : 'Hoymiles DTU (' + s.ip + ')';

      const dev = {
        name,
        data:     { id: deviceId },
        settings: { ip: s.ip, polling_interval: 60 },
      };

      this.log('list_devices returning:', JSON.stringify(dev));
      return [dev];
    });

    session.setHandler('add_devices', async (devices) => {
      this.log('add_devices:', JSON.stringify(devices));
      return true;
    });

    session.setHandler('disconnect', async () => {
      delete this._pairState[key];
    });
  }
};
