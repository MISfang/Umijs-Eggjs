import { FC } from 'react';
import { Button } from 'antd-mobile';
import { IHouseInfo } from '@/types';
import { Timer } from '@/helper/utils';

const index: FC<{ info: IHouseInfo }> = (props) => {
  return (
    <div className="info">
      <div className="info-title">{props?.info?.title}</div>
      <div className="info-msg">简介: {props?.info?.msg}</div>
      <div className="info-price">价格: {props?.info?.price}</div>
      <div className="info-time">
        发布时间: {Timer(props?.info?.publishTime)}
      </div>
      <div className="info-time">
        开始时间: {Timer(props?.info?.startTime, false)}
      </div>
      <div className="info-time">
        结束时间: {Timer(props?.info?.endTime, false)}
      </div>
      <Button className="info-btn" type="warning" size="small">
        预定
      </Button>
    </div>
  );
};

export default index;
