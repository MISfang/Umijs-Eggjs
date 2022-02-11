module.exports = (app) => {
  // 不再使用session
  // const store = {};
  // app.sessionStore = {
  //   async get(key) {
  //     return store[key];
  //   },
  //   async set(key, value, maxAge) {
  //     store[key] = value;
  //   },
  //   async destory(key) {
  //     store[key] = null;
  //   },
  // };

  app.config.coreMiddleware.push('auth');
};
