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

    this.success(res, '热门民宿获取成功');
  }

  async detail() {
    const { ctx } = this;

    const res = await ctx.service.house.detail(ctx.params('id'));
    this.success(
      {
        info: res,
        banner: res.imgs,
      },
      '民宿详情信息获取成功',
    );
  }
}

module.exports = HouseController;
