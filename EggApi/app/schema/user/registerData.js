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
        createTime: {
          type: 'number',
          defaultValue: 123456,
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
