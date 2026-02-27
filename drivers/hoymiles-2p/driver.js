'use strict';

const Homey = require('homey');
const { HoymilesClient } = require('../../lib/HoymilesClient');

const VERSION    = 'v1.1.0';
const PANEL_COUNT = 2;

module.exports = class HoymilesDriver extends Homey.Driver {

  /**
   * Initializes driver state. Called once when the driver is loaded.
   * @returns {Promise<void>}
   */
  async onInit() {
    this.log(`HoymilesDriver ${VERSION} (${PANEL_COUNT}p) init`);
    this._pairState = {};
    this._pairSeq   = 0;
  }

  /**
   * Handles the pairing session lifecycle.
   * Uses the login_credentials template: username = DTU IP, password = ignored.
   * panel_count is fixed to 2 for this driver variant.
   * @param {object} session - Homey pairing session
   * @returns {Promise<void>}
   */
  async onPair(session) {
    this.log('onPair started');

    const key = 'k' + (++this._pairSeq);
    this._pairState[key] = { ip: null, dtuSn: null };

    session.setHandler('login', async ({ username }) => {
      const host = String(username || '').trim();
      this.log('login - ip:', host);

      if (!host) throw new Error('Please enter the DTU IP address.');

      const octets  = host.split('.');
      const validIp = octets.length === 4
        && octets.every(o => /^\d+$/.test(o) && Number(o) >= 0 && Number(o) <= 255);
      if (!validIp) throw new Error('Invalid IP address: ' + host);

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

      const deviceId = s.dtuSn
        ? 'hoymiles_' + String(s.dtuSn).replace(/[^a-zA-Z0-9]/g, '') + '_2p'
        : 'hoymiles_' + s.ip.replace(/\./g, '_') + '_2p';

      const name = s.dtuSn
        ? 'Hoymiles DTU ' + s.dtuSn
        : 'Hoymiles DTU (' + s.ip + ')';

      const dev = {
        name,
        data:     { id: deviceId },
        settings: { ip: s.ip, polling_interval: 60, panel_count: PANEL_COUNT },
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
