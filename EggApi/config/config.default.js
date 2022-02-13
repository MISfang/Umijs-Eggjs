/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1643790784563_147';

  // add your middleware config here
  config.middleware = [];
  config.session = {
    key: 'Fang',
    httpOnly: true,
    maxAge: 1000 * 60,
    renew: true,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.auth = {
    exclude: [
      '/api/user/login',
      '/api/user/register',
      '/api/commons/citys',
      '/api/house/hot',
      '/api/house/search',
    ],
  };
  config.interfaceCache = {
    expire: 10,
    include: ['/api/user/detail'],
  };

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: 0,
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'understandme520',
    database: 'egg_ts',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };
  config.jwt = {
    secret: 'Fang',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'Fang',
    redisExpire: 60 * 60 * 24,
  };

  return {
    ...config,
    ...userConfig,
  };
};
