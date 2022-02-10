export default {
  'post /api/user/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 10,
        username: '诡术妖姬',
        avatar:
          'https://gw.alipayobjects.com/zos/bmw-prod/dd5520d8-44b4-43a6-88ee-c970e3757d39.svg',
        tel: 12345678910,
        sign: '你妈的',
      },
    });
  },
  'post /api/user/edit': (req, res) => {
    res.json({
      status: 200,
      data: 'OK',
    });
  },
  'post /api/login': (req, res) => {
    res.json({
      status: 200,
      data: 'OK',
    });
  },
  'post /api/register': (req, res) => {
    res.json({
      status: 200,
      data: 'OK',
    });
  },
};
