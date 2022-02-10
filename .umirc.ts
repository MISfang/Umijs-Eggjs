import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
  },
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页',
        },
        {
          path: '/order',
          component: './order/index',
          title: '订单',
          auth: true,
        },
        {
          path: '/user',
          component: './user/index',
          title: '用户',
          auth: true,
        },
        {
          path: '/user/edit',
          component: './user/edit',
          title: '编辑页面',
        },
        {
          path: '/search',
          component: './search/index',
          title: '搜索页面',
        },
        {
          path: '/house',
          component: './house/index',
          title: '详情页面',
        },
        {
          path: '/login',
          component: './login/index',
          title: '登录',
        },
        {
          path: '/register',
          component: './register/index',
          title: '注册',
        },
      ],
    },
  ],
  fastRefresh: {},
});
