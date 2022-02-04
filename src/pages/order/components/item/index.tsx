import { FC } from 'react';
import { Button } from 'antd-mobile';
import './index.less';

const index: FC<any> = (props) => {
  const renderBtn = () => {
    switch (props?.type) {
      case 1:
        return (
          <Button type="warning" size="small">
            去支付
          </Button>
        );
      case 2:
        return (
          <Button type="primary" size="small">
            已完成
          </Button>
        );
      default:
        break;
    }
  };
  return (
    <div className="order-item">
      <img src={props?.img} alt="order" className="img" />
      <div className="center">
        <div className="title">{props.title}</div>
        <div className="price">{props.price}</div>
        <div className="time">{props.createTime}</div>
      </div>
      <div className="pay">{renderBtn()}</div>
    </div>
  );
};

export default index;
