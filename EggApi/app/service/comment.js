const BaseService = require('./base');

class CommentService extends BaseService {
  async add(params) {
    return this.run(async (ctx, app) => {
      const res = await ctx.model.Comment.create(params);
      return res;
    });
  }

  async lists(params) {
    const { id, pageSize, pageNum } = params;
    return this.run(async (ctx, app) => {
      return await ctx.model.Comment.findAll({
        where: {
          houseId: id,
        },
        limit: pageSize,
        offset: (pageNum - 1) * pageSize,
        include: [
          {
            model: app.model.User,
            attributes: ['avatar', 'username'],
          },
        ],
      });
    });
  }
}

module.exports = CommentService;
