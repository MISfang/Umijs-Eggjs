const context = require('../extend/context');
const BaseController = require('./base');

class DemoController extends BaseController {
  async add() {
    const { ctx } = this;

    const { id } = await ctx.service.user.getUser(ctx.username);
    const res = await ctx.service.comment.add({
      userId: id,
      houseId: ctx.params('houseId'),
      msg: ctx.params('comment'),
      createTime: ctx.helper.time(),
    });

    this.success(res);
  }
  async lists() {
    const { ctx } = this;
    const res = await ctx.service.comment.lists(ctx.params());

    this.success(res);
  }
}

module.exports = DemoController;
