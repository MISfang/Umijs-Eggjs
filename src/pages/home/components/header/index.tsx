import { FC, memo, useState } from 'react';
import { Link } from 'umi';
import { NavBar } from 'antd-mobile';
import './index.less';

const index: FC = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  return (
    <>
      <NavBar
        className="myNav"
        mode="light"
        leftContent="民宿页面"
        rightContent={
          username ? (
            <div className="username">username</div>
          ) : (
            [
              <Link key={1} to="/login" className="mybtn">
                登录
              </Link>,
              <Link key={2} to="/register" className="mybtn">
                注册
              </Link>,
            ]
          )
        }
      ></NavBar>
    </>
  );
};

export default memo(index);
