const BaseController = require('./base');

class HouseController extends BaseController {
  async hot() {
    const { ctx } = this;
    const res = await ctx.service.house.hot();
    this.success(res, '热门民宿获取成功');
  }
  async search() {
    const { ctx } = this;
    const res = await ctx.service.house.search(ctx.params());
    console.log(
      '%c 🦐 res: ',
      'font-size:20px;background-color: #6EC1C2;color:#fff;',
      res,
    );
    this.success(res, '热门民宿获取成功');
  }
}

module.exports = HouseController;
