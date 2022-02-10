'use strict';

const md5 = require('md5');

const Service = require('egg').Service;

class UserService extends Service {
  async getUser(username, password) {
    const { ctx, app } = this;
    const _where = password
      ? { username, password: md5(password + app.config.salt) }
      : { username };
    try {
      const res = ctx.model.User.findOne({
        where: _where,
      });

      return res;
    } catch (error) {
      console.log(
        '%c 🍪 error: ',
        'font-size:20px;background-color: #465975;color:#fff;',
        error,
      );
    }
  }

  async addUser(params) {
    const { ctx } = this;
    try {
      const res = ctx.model.User.create(params);
      return res;
    } catch (error) {
      console.log(
        '%c 🍺 error: ',
        'font-size:20px;background-color: #42b983;color:#fff;',
        error,
      );
    }
  }
}

module.exports = UserService;
