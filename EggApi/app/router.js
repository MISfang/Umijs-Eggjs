'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  const { get, post } = router;
  const userExits = app.middleware.userExits();
  post('/api/user/register', controller.user.register);
  post('/api/user/login', controller.user.login);
  post('/api/user/detail', userExits, controller.user.detail);
  post('/api/user/logout', controller.user.logout);

  post('/api/commons/citys', controller.common.citys);

  post('/api/house/hot', controller.house.hot);
  post('/api/house/search', controller.house.search);
};
