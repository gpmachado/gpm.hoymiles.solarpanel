'use strict';

const Homey = require('homey');

module.exports = class HoymilesApp extends Homey.App {

  async onInit() {
    const { id, version } = this.manifest;
    this.log(`${id} v${version} started — local polling, no cloud`);
  }

  onUninit() {
    this.log('HoymilesApp stopped');
  }

};
