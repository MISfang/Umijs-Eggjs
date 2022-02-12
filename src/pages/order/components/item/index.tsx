import { FC, useState } from 'react';
import { Button, Toast } from 'antd-mobile';
import './index.less';
import { Http, Timer } from '@/helper/utils';
import { history } from 'umi';

const index: FC<any> = (props) => {
  const hanldePay = async (e: MouseEvent) => {
    e.stopPropagation();
    const res = await Http({
      url: '/orders/pay',
      data: {
        id: props?.id,
      },
    });
    if (res) {
      Toast.success('支付成功');
      window.location.reload();
    }
  };
  const renderBtn = () => {
    switch (props?.type) {
      case 1:
        return (
          <Button
            type="warning"
            size="small"
            onClick={(e: any) => hanldePay(e)}
          >
            去支付
          </Button>
        );
      case 2:
        return (
          <Button icon="check-circle-o" type="primary" size="small" disabled>
            完成
          </Button>
        );
      default:
        break;
    }
  };
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className="order-item"
      onClick={() => {
        setIsShow(!isShow);
      }}
    >
      {isShow ? (
        <div
          className="gotoHouse"
          onClick={() => {
            history.push({
              pathname: '/house',
              query: { id: props?.id },
            });
          }}
        >
          前往 详情页面→
        </div>
      ) : (
        ''
      )}
      <img src={props?.house?.imgs[0]?.url} alt="order" className="img" />
      <div className="center">
        <div className="title">{props?.house?.name}</div>
        <div className="price">￥{props?.house?.price}</div>
        <div className="time">{Timer(props?.createTime, false)}</div>
      </div>
      <div className="pay">{renderBtn()}</div>
    </div>
  );
};

export default index;
