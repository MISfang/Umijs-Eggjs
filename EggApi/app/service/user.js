'use strict';

const md5 = require('md5');
const BaseService = require('./base');

class UserService extends BaseService {
  async getUser(username, password) {
    return this.run(async (ctx, app) => {
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
    return this.run(async (ctx) => {
      const res = await ctx.model.User.create(params);
      return res;
    });
  }

  async edit(params) {
    return this.run(async (ctx) => {
      return await ctx.model.User.update(params, {
        where: {
          username: ctx.username,
        },
      });
    });
  }
}

module.exports = UserService;
