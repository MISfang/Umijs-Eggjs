'use strict';

const md5 = require('md5');
const Controller = require('egg').Controller;

class UserController extends Controller {
  // 辅助方法
  async signToken(username) {
    const { ctx, app } = this;
    ctx.session[username] = 1;
    return app.jwt.sign({ username }, app.config.jwt.secret);
  }

  async register() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const getUserRes = await ctx.service.user.getUser(username);

    if (getUserRes) {
      ctx.body = {
        status: 500,
        errMsg: '该用户已经注册过！',
      };
      return;
    }

    const res = await ctx.service.user.addUser({
      username,
      password: md5(password + app.config.salt),
      createTime: ctx.helper.time(),
    });
    if (res) {
      const token = await this.signToken(username);
      ctx.body = {
        status: 200,
        Msg: '注册成功！',
        data: {
          ...ctx.helper.unPick(res.dataValues, ['password']),
          createTime: ctx.helper.timestamp(res.createTime),
        },
        token,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '注册失败！',
      };
    }
  }

  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const res = await ctx.service.user.getUser(username, password);
    if (res) {
      const token = await this.signToken(username);
      ctx.body = {
        status: 200,
        Msg: '登录成功',
        data: {
          ...ctx.helper.unPick(res.dataValues, ['password']),
          createTime: ctx.helper.timestamp(res.createTime),
        },
        token,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '该用户不存在，请先注册！',
      };
    }
  }
  async detail() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);

    if (user) {
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, ['password']),
          createTime: ctx.helper.timestamp(user.createTime),
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '该用户不存在',
      };
    }
  }
}

module.exports = UserController;
