import React, { FC, useState, useEffect } from 'react';
import './index.less';
import Header from './components/header';
import Hot from './components/hot';
import Search from './components/search';
import { useHttpHook } from '@/hooks';

const Home: FC = () => {
  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys',
  });
  const [houses, housesLoading] = useHttpHook({
    url: '/house/hot',
  });

  return (
    <div className="home">
      {/* 登录区域 */}
      <Header></Header>
      {/* 搜索区域 */}
      {/* @ts-ignore: Unreachable code error */}
      <Search citys={citys} citysLoading={citysLoading}></Search>
      {/* 热门民宿 */}
      {/* @ts-ignore: Unreachable code error */}
      <Hot houses={houses} housesLoading={housesLoading}></Hot>
    </div>
  );
};

export default Home;
