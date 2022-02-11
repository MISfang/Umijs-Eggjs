module.exports = (options) => {
  return async (ctx, next) => {
    const res = ctx.app.router.stack.some((item) =>
      item.regexp.test(ctx.request.url),
    );
    if (res) {
      await next();
    } else {
      ctx.body = {
        status: 404,
        errMsg: `接口${ctx.request.url}不存在！`,
      };
    }
  };
};
