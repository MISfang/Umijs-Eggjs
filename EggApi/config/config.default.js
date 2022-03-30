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

  // 尝试使用swagger自动生成工具
  config.swaggerEgg = {
    schema: {
      path: '/app/schema', // JSON Schema directory
    },
    swagger: {
      info: {
        title: '学习开发egg全栈旅游小app',
        description:
          '前端umijs+dva+react-router+antd-design-mobile\n后端eggjs+jwt+mysql+redis',
        version: '1.0.0',
      },
      externalDocs: {
        url: 'https://coding.imooc.com/class/452.html',
        description: '这个是原课程链接',
      },
      host: '127.0.0.1:7001', // catution: 'localhost:7001' will result in cross origin error
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        {
          name: '登录注册',
          description: '用户 登录/注册/退出登录/修改信息 接口',
        },
      ],
      securityDefinitions: {
        api_key: {
          type: 'apiKey', // basic/apiKey/oauth2
          name: 'Authorization', // selfdefined parameter, usually use 'Authorization'
          in: 'header', // query or header, usually use 'header'
        },
        github_auth: {
          type: 'oauth2',
          authorizationUrl: 'http://swagger.io/api/oauth/dialog',
          flow: 'implicit',
          scopes: {
            'write:homes': 'modify home info',
            'read:homes': 'read home info',
          },
        },
      },
      security: [
        {
          api_key: [], // use api key to security
        },
      ], // Cacution: security is array type
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'Fang',
    redisExpire: 60 * 60 * 1,
  };

  return {
    ...config,
    ...userConfig,
  };
};
