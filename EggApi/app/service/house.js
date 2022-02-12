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
    const { pageNum, limit, cityID, startTime, endTime, houseSubmit } = params;
    const { lte, gte, like } = app.Sequelize.Op;
    const where = {
      cityCode: cityID,
      startTime: {
        [lte]: startTime,
      },
      endTime: {
        [gte]: endTime,
      },
      name: {
        [like]: `%${houseSubmit}%`,
      },
    };
    if (!houseSubmit) {
      delete where.name;
    }

    return this.run(async () => {
      return await ctx.model.House.findAll({
        ...this.commonAttr(app),
        limit: 8,
        offset: (pageNum - 1) * limit,
        where,
      });
    });
  }

  async detail(id) {
    return this.run(async (ctx, app) => {
      const res = await ctx.model.House.findOne({
        where: {
          id,
        },
        include: [
          {
            model: app.model.Imgs,
            attributes: ['url'],
          },
        ],
      });
      await ctx.model.House.update(
        {
          showCount: res.showCount + 1,
        },
        {
          where: {
            id,
          },
        },
      );
      return res;
    });
  }
}

module.exports = HouseService;
