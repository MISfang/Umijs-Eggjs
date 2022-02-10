import * as store from '@/stores';
import { FC } from 'react';
import { MenuBar } from '@/components';
import { StoreProvider } from 'think-react-store';
import { useLocation } from 'umi';
import '@/styles/stylesheet.css';

const Order: FC = ({ children }) => {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];
  return (
    <StoreProvider store={store}>
      {children}
      <MenuBar
        show={paths.includes(location.pathname)}
        pathName={location.pathname}
      ></MenuBar>
    </StoreProvider>
  );
};

export default Order;
