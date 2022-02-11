'use strict';

const md5 = require('md5');
const BaseService = require('./base');

class UserService extends BaseService {
  async getUser(username, password) {
    return this.run(async () => {
      const { ctx, app } = this;
      const _where = password
        ? { username, password: md5(password + app.config.salt) }
        : { username };
      const res = await ctx.model.User.findOne({
        where: _where,
      });
      return res;
    });
  }

  async addUser(params) {
    return this.run(async () => {
      const { ctx } = this;
      const res = await ctx.model.User.create(params);
      return res;
    });
  }
}

module.exports = UserService;
