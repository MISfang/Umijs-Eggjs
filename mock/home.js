export default {
  'post /api/commons/citys': (req, res) => {
    res.json({
      status: 200,
      data: [
        [{
            label: '北京',
            value: '10001',
          },
          {
            label: '上海',
            value: '10002',
          },
          {
            label: '上海',
            value: '10002',
          },
          {
            label: '上海',
            value: '10002',
          },
          {
            label: '上海',
            value: '10002',
          },
          {
            label: '上海',
            value: '10002',
          },
          {
            label: '上海',
            value: '10002',
          },
        ],
      ],
    });
  },
  'post /api/house/hot': (req, res) => {
    res.json({
      status: 200,
      data: [{
          id: 1,
          img: 'https://cdn.dribbble.com/users/4100772/screenshots/17410303/media/a04bb4d37c04510da7e985e374fb50b9.jpg',
          title: '天理民宿',
          info: '天理好啊！',
          price: '150',
        },
        {
          id: 2,
          img: 'https://cdn.dribbble.com/users/4100772/screenshots/17410303/media/a04bb4d37c04510da7e985e374fb50b9.jpg',
          title: '天理民宿',
          info: '天理好啊！',
          price: '150',
        },
        {
          id: 3,
          img: 'https://cdn.dribbble.com/users/4100772/screenshots/17410303/media/a04bb4d37c04510da7e985e374fb50b9.jpg',
          title: '天理民宿',
          info: '天理好啊！',
          price: '150',
        },
        {
          id: 4,
          img: 'https://cdn.dribbble.com/users/4100772/screenshots/17410303/media/a04bb4d37c04510da7e985e374fb50b9.jpg',
          title: '天理民宿',
          info: '天理好啊！',
          price: '150',
        },
        {
          id: 5,
          img: 'https://cdn.dribbble.com/users/4100772/screenshots/17410303/media/a04bb4d37c04510da7e985e374fb50b9.jpg',
          title: '天理民宿',
          info: '天理好啊！',
          price: '150',
        },
      ],
    });
  },

  'post /api/house/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 9,
        banner: [
          'https://cdn.dribbble.com/users/6234/screenshots/17396277/media/8119a1bd3b5784b7acc868fa09df1c38.png?compress=1&resize=1600x1200&vertical=top',
          'https://cdn.dribbble.com/users/6234/screenshots/17430129/media/604770912834878b021248a226c51f60.png',
          'https://cdn.dribbble.com/users/6234/screenshots/17360231/media/e292fdfdce8d976a14fa32fbdecf5a2e.png',
        ],
        info: {
          title: '天津街区',
          msg: '天津理工大学真美',
          price: '240',
          publishTime: 1595238771000,
          startTime: 1595238771000,
          endTime: 1595238771000,
        },
      },
    });
  },
  'post /api/comment/lists': (req, res) => {
    res.json({
      status: 200,
      data: {
        lists: [{
            id: 1,
            avatar: 'https://cdn.dribbble.com/users/6234/screenshots/17396277/media/8119a1bd3b5784b7acc868fa09df1c38.png?compress=1&resize=1600x1200&vertical=top',
            username: '方宇龙',
            createTime: 1595238771000,
            info: '大屌男',
          },
          {
            id: 2,
            avatar: 'https://cdn.dribbble.com/users/6234/screenshots/17396277/media/8119a1bd3b5784b7acc868fa09df1c38.png?compress=1&resize=1600x1200&vertical=top',
            username: '方宇龙',
            createTime: 1595238771000,
            info: '大屌男',
          },
          {
            id: 3,
            avatar: 'https://cdn.dribbble.com/users/6234/screenshots/17396277/media/8119a1bd3b5784b7acc868fa09df1c38.png?compress=1&resize=1600x1200&vertical=top',
            username: '方宇龙',
            createTime: 1595238771000,
            info: '大屌男',
          },
          {
            id: 4,
            avatar: 'https://cdn.dribbble.com/users/6234/screenshots/17396277/media/8119a1bd3b5784b7acc868fa09df1c38.png?compress=1&resize=1600x1200&vertical=top',
            username: '方宇龙',
            createTime: 1595238771000,
            info: '大屌男',
          },
          {
            id: 5,
            avatar: 'https://cdn.dribbble.com/users/6234/screenshots/17396277/media/8119a1bd3b5784b7acc868fa09df1c38.png?compress=1&resize=1600x1200&vertical=top',
            username: '方宇龙',
            createTime: 1595238771000,
            info: '大屌男',
          },
          {
            id: 6,
            avatar: 'https://cdn.dribbble.com/users/6234/screenshots/17396277/media/8119a1bd3b5784b7acc868fa09df1c38.png?compress=1&resize=1600x1200&vertical=top',
            username: '方宇龙',
            createTime: 1595238771000,
            info: '大屌男',
          },
        ],
      },
    });
  },
};
