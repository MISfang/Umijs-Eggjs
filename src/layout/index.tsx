import * as store from '@/stores';
import { FC, useEffect } from 'react';
import { MenuBar } from '@/components';
import { StoreProvider } from 'think-react-store';
import { Switch, useDarkreader } from 'react-darkreader';
import { useLocation } from 'umi';
import '@/styles/stylesheet.css';
import './index.less';
import { Toast } from 'antd-mobile';

const Order: FC = ({ children }) => {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];
  const time = new Date().getHours();
  const timeIsDark = time >= 20 || time <= 6 ? true : false;
  if (timeIsDark) {
    localStorage.setItem('isDark', true.toString());
  }
  useEffect(() => {
    if (timeIsDark) {
      Toast.success('夜深了，自动为您保护眼睛', 1);
    }
  }, []);

  const [isDark, { toggle }] = useDarkreader(
    localStorage.getItem('isDark') === 'true' ? true : false,
  );

  return (
    <StoreProvider store={store}>
      <div className={location.pathname === '/user' ? 'switchIsDark' : 'none'}>
        <Switch
          checked={isDark}
          onChange={() => {
            toggle();
            localStorage.setItem('isDark', (!isDark).toString());
          }}
        />
      </div>
      {children}
      <MenuBar
        show={paths.includes(location.pathname)}
        pathName={location.pathname}
      ></MenuBar>
    </StoreProvider>
  );
};

export default Order;
