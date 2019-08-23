'use strict';

const Controller = require('web_framework_eggjs2/baseClass/controller');

class IndexController extends Controller {
  async index() {
    const { ctx } = this;
    this.success('aaaaa');
  }
}

module.exports = IndexController;
