const BaseController = require('./base');

class OrdersController extends BaseController {
  async hasOrder() {
    const { ctx } = this;
    const res = await ctx.service.orders.hasOrder({
      userId: ctx.userId,
      houseId: ctx.params('id'),
    });
    this.success(res);
  }

  async addOrder() {
    const { ctx } = this;
    const res = await ctx.service.orders.addOrder({
      userId: ctx.userId,
      houseId: ctx.params('id'),
      isPayed: 0,
      createTime: ctx.helper.time(),
    });
    this.success(res);
  }

  async delOrder() {
    const { ctx } = this;
    const res = await ctx.service.orders.delOrder({
      userId: ctx.userId,
      houseId: ctx.params('id'),
    });
    this.success(res);
  }

  async lists() {
    const { ctx } = this;
    const res = await ctx.service.orders.lists({
      ...ctx.params(),
      userId: ctx.userId,
    });

    this.success(res);
  }

  // 模拟第三方支付程序
  async invokePay(id) {
    return {
      orderNumber: id + '-' + new Date().getTime(),
    };
  }

  async pay() {
    const { ctx } = this;
    const { id } = ctx.params();
    const order = await ctx.model.Orders.findByPk(id);
    if (order) {
      try {
        const { orderNumber } = this.invokePay(id);
        const res = await ctx.service.orders.pay({
          orderNumber,
          id,
        });
        this.success(res);
      } catch (error) {
        this.error('出错误了');
      }
    } else {
      this.error('该订单不存在');
    }
  }
}

module.exports = OrdersController;
