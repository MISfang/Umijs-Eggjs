export default {
  'post /api/order/list': (req, res) => {
    setTimeout(() => {
      res.json({
        status: 200,
        data: [{
            id: 1,
            img: 'https://cdn.dribbble.com/users/536/screenshots/17430188/media/4bd1df44fd03a6fdd70f329894e8dade.jpg?compress=1&resize=1600x1200&vertical=top',
            title: '你好，天理',
            info: '你妈的。烦死了',
            price: '360'
          },
          {
            id: 2,
            img: 'https://cdn.dribbble.com/users/536/screenshots/17430188/media/4bd1df44fd03a6fdd70f329894e8dade.jpg?compress=1&resize=1600x1200&vertical=top',
            title: '你好，天理',
            info: '你妈的。烦死了',
            price: '360'
          },
          {
            id: 3,
            img: 'https://cdn.dribbble.com/users/536/screenshots/17430188/media/4bd1df44fd03a6fdd70f329894e8dade.jpg?compress=1&resize=1600x1200&vertical=top',
            title: '你好，天理',
            info: '你妈的。烦死了',
            price: '360'
          },
          {
            id: 4,
            img: 'https://cdn.dribbble.com/users/536/screenshots/17430188/media/4bd1df44fd03a6fdd70f329894e8dade.jpg?compress=1&resize=1600x1200&vertical=top',
            title: '你好，天理',
            info: '你妈的。烦死了',
            price: '360'
          },
          {
            id: 5,
            img: 'https://cdn.dribbble.com/users/536/screenshots/17430188/media/4bd1df44fd03a6fdd70f329894e8dade.jpg?compress=1&resize=1600x1200&vertical=top',
            title: '你好，天理',
            info: '你妈的。烦死了',
            price: '360'
          },
          {
            id: 6,
            img: 'https://cdn.dribbble.com/users/536/screenshots/17430188/media/4bd1df44fd03a6fdd70f329894e8dade.jpg?compress=1&resize=1600x1200&vertical=top',
            title: '你好，天理',
            info: '你妈的。烦死了',
            price: '360'
          },
          {
            id: 7,
            img: 'https://cdn.dribbble.com/users/536/screenshots/17430188/media/4bd1df44fd03a6fdd70f329894e8dade.jpg?compress=1&resize=1600x1200&vertical=top',
            title: '你好，天理',
            info: '你妈的。烦死了',
            price: '360'
          },
          {
            id: 8,
            img: 'https://cdn.dribbble.com/users/536/screenshots/17430188/media/4bd1df44fd03a6fdd70f329894e8dade.jpg?compress=1&resize=1600x1200&vertical=top',
            title: '你好，天理',
            info: '你妈的。烦死了',
            price: '360'
          },
        ]
      })
    }, 500);
  }
}
