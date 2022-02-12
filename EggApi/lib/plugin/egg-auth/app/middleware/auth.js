module.exports = (options) => {
  return async (ctx, next) => {
    const url = ctx.request.url;
    const clientToken = ctx.request.token;
    const redisToken = await ctx.app.redis.get(ctx.username);
    const flag = redisToken ? redisToken === clientToken : redisToken;

    if (!flag && !options.exclude.includes(url.split('?')[0])) {
      ctx.body = {
        status: 1001,
        errMsg: '用户未登录！',
      };
    } else {
      await next();
    }
  };
};
