import List from './components/List';
import { FC, useEffect, useState } from 'react';
import { commonEnums } from '@/enums';
import { Http } from '@/helper/utils';
import { IOrderItem } from '@/types';
import { isEmpty } from 'project-libs';
import { Tabs } from 'antd-mobile';
import { useObserverHook } from '@/hooks';
import './index.less';

const Order: FC = () => {
  const tabs = [
    {
      title: '未支付',
      sub: 1,
    },
    {
      title: '已支付',
      sub: 2,
    },
  ];
  const [page, setPage] = useState(commonEnums.PAGE);
  const [type, setType] = useState(0);
  const [orders, setOrders] = useState<IOrderItem[]>([]);
  const [showLoading, setShowLoading] = useState(true);

  const fetchOrder = async (pageNum: number) => {
    //@ts-ignore
    const { data } = await Http({
      url: '/order/list',
      data: {
        ...page,
        type,
      },
    });
    if (!isEmpty(data)) {
      setOrders(data);
    }
  };

  useObserverHook(
    `#${commonEnums.LOADING_ID}`,
    async (entries: any) => {
      if (entries[0].isIntersecting) {
        //@ts-ignore
        const { data } = await Http({
          url: '/order/list',
          data: {
            ...page,
            type,
            pageNum: page.pageNum + 1,
          },
        });
        if (!isEmpty(data) && !isEmpty(orders) && data.length === page.limit) {
          setOrders([...orders, ...data]);
          setPage({
            ...page,
            pageNum: page.pageNum + 1,
          });
          setShowLoading(true);
        }
        if (isEmpty(data)) {
          setShowLoading(false);
        }
      }
    },
    null,
  );

  useEffect(() => {
    fetchOrder(1);
  }, [type]);

  return (
    <div className="order-page">
      <Tabs
        tabs={tabs}
        initialPage={+window.localStorage.getItem('page')! - 1 || 0}
        onChange={(val) => {
          const { sub } = val;
          window.localStorage.setItem('page', sub);
          setType(sub);
          setPage(commonEnums.PAGE);
          setOrders([]);
          setShowLoading(true);
        }}
        tabBarBackgroundColor="#8a2be2"
        tabBarActiveTextColor="#FFF"
        tabBarUnderlineStyle={{ border: '#FFF solid 4px' }}
      >
        <div className="tab1">
          <List orders={orders} type={1} showLoading={showLoading}></List>
        </div>
        <div className="tab2">
          <List orders={orders} type={2} showLoading={showLoading}></List>
        </div>
      </Tabs>
    </div>
  );
};

export default Order;
