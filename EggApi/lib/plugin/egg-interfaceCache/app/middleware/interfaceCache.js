module.exports = ({ include, expire }) => {
  return async (ctx, next) => {
    const { url } = ctx.request;
    if (include !== undefined) {
      if (include.includes(url)) {
        const cache = await ctx.app.redis.get(url);
        if (cache) {
          ctx.body = JSON.parse(cache);
        } else {
          await next();
          await ctx.app.redis.set(
            url,
            JSON.stringify(ctx.response.body),
            'EX',
            expire,
          );
        }
      } else {
        await next();
      }
    } else {
      const cache = await ctx.app.redis.get(url);
      if (cache) {
        ctx.body = JSON.parse(cache);
      } else {
        await next();
        await ctx.app.redis.set(
          url,
          JSON.stringify(ctx.response.body),
          'EX',
          expire,
        );
      }
    }
  };
};
