'use strict';
const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  auth: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-auth'),
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
};
