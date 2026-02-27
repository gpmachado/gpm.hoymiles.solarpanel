'use strict';

const Homey = require('homey');
const { Log } = require('homey-log');

module.exports = class HoymilesApp extends Homey.App {

  /**
   * Initializes the app and sets up crash reporting via Sentry (homey-log).
   * Uncaught exceptions and unhandled rejections are automatically captured.
   * @returns {Promise<void>}
   */
  async onInit() {
    this.homeyLog = new Log({ homey: this.homey });

    const { id, version } = this.manifest;
    this.log(`${id} v${version} started — local polling, no cloud`);
  }

  onUninit() {
    this.log('HoymilesApp stopped');
  }

};
