const BaseService = require('./base');

class OrdersService extends BaseService {
  async hasOrder({ userId, houseId }) {
    return this.run(async (ctx, app) => {
      return await ctx.model.Orders.findOne({
        where: {
          userId,
          houseId,
        },
      });
    });
  }

  async addOrder(params) {
    return this.run(async (ctx) => {
      return await ctx.model.Orders.create(params);
    });
  }

  async delOrder({ userId, houseId }) {
    return this.run(async (ctx) => {
      return await ctx.model.Orders.destroy({
        where: {
          userId,
          houseId,
        },
      });
    });
  }

  async lists({ type, userId, limit, pageNum }) {
    console.log(
      '%c 🥡 type, userId, limit, pageNum: ',
      'font-size:20px;background-color: #EA7E5C;color:#fff;',
      type,
      userId,
      limit,
      pageNum,
    );
    return this.run(async (ctx, app) => {
      return await ctx.model.Orders.findAll({
        where: {
          isPayed: type,
          userId,
        },
        limit,
        offset: (pageNum - 1) * limit,
        include: [
          {
            model: app.model.House,
            as: 'house',
            include: [
              {
                model: app.model.Imgs,
                attributes: ['url'],
                limit: 1,
              },
            ],
          },
        ],
      });
    });
  }

  async pay({ orderNumber, id }) {
    return this.run(async (ctx) => {
      return await ctx.model.Orders.update(
        {
          isPayed: 1,
          orderNumber,
        },
        {
          where: {
            id,
          },
        },
      );
    });
  }
}

module.exports = OrdersService;
