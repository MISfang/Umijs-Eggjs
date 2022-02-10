'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  const { get, post } = router;
  post('/api/user/register', controller.user.register);
  post('/api/user/login', controller.user.login);
  post('/api/user/detail', controller.user.detail);
};
