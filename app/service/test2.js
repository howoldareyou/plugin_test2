'use strict';

const Service = require('web_framework_eggjs2').Service;

class Test2Service extends Service {
  // 读缓存
  async test(name) {
    return `test_${name}`;
  }
}

module.exports = Test2Service;
