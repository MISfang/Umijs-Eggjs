'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  const { post } = router;
  const userExits = app.middleware.userExits();
  post('/api/user/register', controller.user.register);
  post('/api/user/login', controller.user.login);
  post('/api/user/detail', userExits, controller.user.detail);
  post('/api/user/logout', controller.user.logout);
  post('/api/user/edit', controller.user.edit);

  post('/api/commons/citys', controller.common.citys);

  post('/api/house/hot', controller.house.hot);
  post('/api/house/search', controller.house.search);
  post('/api/house/detail', controller.house.detail);

  post('/api/comment/add', controller.comment.add);
  post('/api/comment/lists', controller.comment.lists);

  post('/api/orders/hasOrder', userExits, controller.orders.hasOrder);
  post('/api/orders/addOrder', userExits, controller.orders.addOrder);
  post('/api/orders/delOrder', userExits, controller.orders.delOrder);
  post('/api/orders/lists', userExits, controller.orders.lists);
  post('/api/orders/pay', userExits, controller.orders.pay);
};
