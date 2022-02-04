import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
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
        },
        {
          path: '/user',
          component: './user/index',
          title: '用户',
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
      ],
    },
  ],
  fastRefresh: {},
});
