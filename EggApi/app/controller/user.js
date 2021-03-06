'use strict';

const md5 = require('md5');
const BaseController = require('./base');

class UserController extends BaseController {
  // 辅助方法
  async signToken({ username, id }) {
    const { app } = this;
    const token = app.jwt.sign({ id, username }, app.config.jwt.secret);
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

  /**
   * 注册用户 #swagger-api
   * @function register
   * @memberof UserController
   * @description #tags 登录注册
   * @description #consumes application/json
   * @description #produces application/json
   * @description #parameters registerInfo body schema.user.registerInfo true - 注册用户信息
   * @description #responses 200 schema.user.registerData - 接口返回示例
   */
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
      const { id } = res;
      const token = await this.signToken({ id, username });
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

  /**
   * 用户登录 #swagger-api
   * @function login
   * @memberof UserController
   * @description #tags 登录注册
   * @description #consumes application/json
   * @description #produces application/json
   * @description #parameters loginInfo body schema.user.loginInfo true - 用户登录信息
   * @description #responses 200 schema.user.loginData - 接口返回示例
   */
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.params();
    const res = await ctx.service.user.getUser(username, password);
    if (res) {
      const { id } = res;
      const token = await this.signToken({ id, username });
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

  /**
   * 用户详细信息 #swagger-api
   * @function detail
   * @memberof UserController
   * @description #tags 登录注册
   * @description #consumes application/json
   * @description #produces application/json
   * @description #responses 200 schema.user.loginData - 接口返回示例
   */
  async detail() {
    const { ctx } = this;
    const res = await ctx.service.user.getUser(ctx.username);

    if (res) {
      this.success({
        ...this.parseResult(ctx, res),
      });
    } else {
      this.error('用户名或者密码错误！');
    }
  }

  /**
   * 退出登录 #swagger-api
   * @function logout
   * @memberof UserController
   * @description #tags 登录注册
   * @description #consumes application/json
   * @description #produces application/json
   * @description #responses 200 schema.user.logoutInfo - 接口返回示例
   */
  async logout() {
    const { ctx, app } = this;
    try {
      await app.redis.del(ctx.username);
      this.success('OK', '退出登录成功');
    } catch (error) {
      this.error('退出登录失败');
    }
  }

  /**
   * 修改信息 #swagger-api
   * @function edit
   * @memberof UserController
   * @description #tags 登录注册
   * @description #consumes application/json
   * @description #produces application/json
   * @description #parameters detailInfo body schema.user.detailInfo true - 修改信息参数
   * @description #responses 200 schema.user.detailData - 接口返回示例
   */
  async edit() {
    const { ctx } = this;
    const res = ctx.service.user.edit({
      ...ctx.params(),
      updateTime: ctx.helper.time(),
    });
    this.success(res);
  }
}

module.exports = UserController;
