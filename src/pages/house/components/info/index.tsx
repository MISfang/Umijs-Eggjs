import { FC } from 'react';
import { Button } from 'antd-mobile';
import { IHouseInfo } from '@/types';
import { Timer } from '@/helper/utils';

const index: FC<{
  info: IHouseInfo;
  btnClick: Function;
  order: { id: number | null; isPayed: boolean };
}> = (props) => {
  // 处理按钮展示状态的函数
  const renderBtn = (id: number | null, isPayed: boolean) => {
    if (!id) {
      return (
        <Button
          className="info-btn"
          type="warning"
          size="small"
          onClick={() => props?.btnClick()}
        >
          预定
        </Button>
      );
    }
    if (!isPayed) {
      return (
        <Button
          className="info-btn"
          type="ghost"
          size="small"
          onClick={() => props?.btnClick(id)}
        >
          取消预订
        </Button>
      );
    }
    if (isPayed) {
      return (
        <Button
          className="info-btn"
          type="primary"
          size="small"
          icon="check-circle-o"
          disabled
        >
          民宿居住中
        </Button>
      );
    }
  };
  return (
    <div className="info">
      <div className="info-title">{props?.info?.name}</div>
      <div className="info-msg">简介: {props?.info?.info}</div>
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
      {renderBtn(props.order?.id, props.order?.isPayed)}
    </div>
  );
};

export default index;
