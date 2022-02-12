import { List, Button, Modal } from 'antd-mobile';
import { FC, useState, useEffect } from 'react';
import { history } from 'umi';
import './index.less';
import { useStoreHook } from 'think-react-store';
const alert = Modal.alert;

const User: FC = () => {
  const {
    user: { username, avatar, sign, phone, getUserAsync, logoutAsync },
  } = useStoreHook();

  useEffect(() => {
    getUserAsync({
      id: 10,
    });
  }, []);

  return (
    <div className="user-page">
      {/* 用户信息 */}
      <div className="info">
        <div
          className="set"
          onClick={() => {
            history.push({
              pathname: '/user/edit',
              query: {
                id: '10',
              },
            });
          }}
        >
          编辑信息
        </div>
        <div className="user">
          <img src={avatar} alt="" className="img" />
          <div className="tel">昵称:{username}</div>
          <div className="tel">电话:{phone}</div>
          <div className="sign">{sign}</div>
        </div>
      </div>
      {/* 列表 */}
      <div className="lists">
        <List>
          <List.Item arrow="horizontal">用户协议</List.Item>
          <List.Item arrow="horizontal">常见问题</List.Item>
          <List.Item arrow="horizontal">联系客服</List.Item>
        </List>
      </div>

      <Button
        type="warning"
        className="mybtn"
        onClick={() =>
          alert('确定退出登录?', 'Are you sure???', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => logoutAsync() },
          ])
        }
      >
        退出登录
      </Button>
    </div>
  );
};

export default User;
