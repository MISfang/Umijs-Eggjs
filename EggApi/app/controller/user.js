'use strict';

const md5 = require('md5');
const BaseController = require('./base');

class UserController extends BaseController {
  // 辅助方法
  async signToken(username) {
    const { ctx, app } = this;
    const token = app.jwt.sign(
      {
        username,
      },
      app.config.jwt.secret,
    );
    await app.redis.set(username, token, 'EX', app.config.redisExpire);
    return token;
  }
  // 处理返回结果的公共抽离函数
  parseResult(ctx, res) {
    return {
      ...ctx.helper.unPick(res.dataValues, ['password']),
      createTime: ctx.helper.timestamp(res.createTime),
    };
  }
  // 辅助方法结束

  async register() {
    const { ctx, app } = this;
    const { username, password } = ctx.params();
    const getUserRes = await ctx.service.user.getUser(username);

    if (getUserRes) {
      this.error('该用户已经注册过！');
      return;
    }

    const res = await ctx.service.user.addUser({
      username,
      password: md5(password + app.config.salt),
      createTime: ctx.helper.time(),
    });
    if (res) {
      const token = await this.signToken(username);
      this.success(
        {
          ...this.parseResult(ctx, res),
          token,
        },
        '注册成功！',
      );
    } else {
      this.error('注册失败！');
    }
  }

  async login() {
    const { ctx } = this;
    const { username, password } = ctx.params();
    const res = await ctx.service.user.getUser(username, password);
    if (res) {
      const token = await this.signToken(username);
      this.success(
        {
          ...this.parseResult(ctx, res),
          token,
        },
        '登录成功',
      );
    } else {
      this.error('该用户不存在，请先注册！');
    }
  }

  async detail() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);

    if (user) {
      this.success({
        ...this.parseResult(ctx, res),
      });
    } else {
      this.error('该用户不存在');
    }
  }

  async logout() {
    const { ctx, app } = this;
    try {
      await app.redis.del(ctx.username);
      this.success('OK', '退出登录成功');
    } catch (error) {
      this.error('退出登录失败');
    }
  }
  async edit() {
    const { ctx, app } = this;
    const res = ctx.service.user.edit({
      ...ctx.params(),
      updateTime: ctx.helper.time(),
    });

    this.success(res);
  }
}

module.exports = UserController;
