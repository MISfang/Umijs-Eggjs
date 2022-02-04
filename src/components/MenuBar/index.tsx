import React, { FC } from 'react';
import './index.less';
import { TabBar } from 'antd-mobile';
import { IMenuBarProps } from '@/types';
import {
  BsHouseFill,
  BsHouse,
  BsBag,
  BsBagFill,
  BsPersonFill,
  BsPerson,
} from 'react-icons/bs';
import { history } from 'umi';
import './index.less';

const MenuBar: FC<IMenuBarProps> = ({ show = false, pathName }) => {
  const itemListData = [
    {
      title: '首页',
      selectedIcon: <BsHouseFill style={{ fontSize: '1.5rem' }} />,
      icon: <BsHouse style={{ fontSize: '1.5rem' }} />,
      link: '/',
    },
    {
      title: '订单',
      selectedIcon: <BsBagFill style={{ fontSize: '1.5rem' }} />,
      icon: <BsBag style={{ fontSize: '1.5rem' }} />,
      link: '/order',
    },
    {
      title: '我的',
      selectedIcon: <BsPersonFill style={{ fontSize: '1.5rem' }} />,
      icon: <BsPerson style={{ fontSize: '1.5rem' }} />,
      link: '/user',
    },
  ];

  return (
    <div className="tabBar">
      <TabBar hidden={!show}>
        {itemListData.map(({ title, icon, selectedIcon, link }) => (
          <TabBar.Item
            icon={icon}
            selectedIcon={selectedIcon}
            title={title}
            key={link}
            selected={pathName === link}
            onPress={() => {
              history.push(link);
            }}
          />
        ))}
      </TabBar>
    </div>
  );
};

export default MenuBar;
