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
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'understandme520',
      database: 'egg-ts',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'understandme520',
    database: 'egg-ts',
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
  };

  return {
    ...config,
    ...userConfig,
  };
};
