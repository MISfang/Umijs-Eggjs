import React, { FC } from 'react';
import OrderItem from '../item';
import { IOrderItem } from '@/types';
import { Loading } from '@/components';
import { commonEnums } from '@/enums';

const index: FC<{
  orders: IOrderItem[];
  type: number;
  showLoading: boolean;
}> = (props) => {
  return (
    <div className="tab-lists">
      {props?.orders?.map((item) => (
        <OrderItem type={props?.type} key={item.id} {...item}></OrderItem>
      ))}
      <Loading
        showLoading={props.showLoading}
        isBig={!props?.orders?.length}
        marginBottom={60}
        marginTop={-10}
        id={commonEnums.LOADING_ID}
      >
        没有订单
      </Loading>
    </div>
  );
};

export default index;
