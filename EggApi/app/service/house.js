const BaseService = require('./base');

class HouseService extends BaseService {
  commonAttr(app) {
    return {
      order: [['showCount', 'DESC']],
      attributes: {
        exclude: ['startTime', 'endTime', 'publishTime'],
      },
      include: [
        {
          model: app.model.Imgs,
          limit: 1,
        },
      ],
    };
  }
  async hot() {
    const { ctx, app } = this;
    return this.run(async () => {
      return await ctx.model.House.findAll({
        limit: 10,
        ...this.commonAttr(app),
      });
    });
  }

  async search(params) {
    const { ctx, app } = this;
    const { pageNum, limit, cityID, startTime, endTime } = params;
    const { lte, gte } = app.Sequelize.Op;
    const where = {
      cityCode: cityID,
      startTime: {
        [lte]: startTime,
      },
      endTime: {
        [gte]: endTime,
      },
    };

    return this.run(async () => {
      return await ctx.model.House.findAll({
        ...this.commonAttr(app),
        limit: 6,
        offset: (pageNum - 1) * limit,
        where,
      });
    });
  }
}

module.exports = HouseService;
