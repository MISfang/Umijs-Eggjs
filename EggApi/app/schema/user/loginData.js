'use strict';

module.exports = {
  type: 'object',
  properties: {
    status: {
      type: 'number',
    },
    data: {
      properties: {
        id: {
          type: 'number',
        },
        username: {
          type: 'string',
        },
        avatar: {
          type: 'string',
        },
        phone: {
          type: 'number',
        },
        sign: {
          type: 'string',
        },
        createTime: {
          type: 'number',
        },
        updateTime: {
          type: 'number',
        },
        token: {
          type: 'string',
        },
      },
    },
    Msg: {
      type: 'string',
    },
  },
};
