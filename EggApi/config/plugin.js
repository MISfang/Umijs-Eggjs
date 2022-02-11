'use strict';
const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
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
  notFound: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-notFound'),
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
};
