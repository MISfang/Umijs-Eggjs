import Banner from './components/banner';
import Footer from './components/footer';
import handleQuery from '@/helper/query';
import Info from './components/info';
import Lists from './components/lists';
import { commonEnums } from '@/enums';
import { FC, useEffect } from 'react';
import { useLocation } from 'umi';
import { useObserverHook } from '@/hooks';
import { useStoreHook } from 'think-react-store';
import './index.less';

const index: FC = () => {
  const { id } = handleQuery(useLocation().search);

  const {
    house: {
      detail,
      comments,
      showLoading,
      getDetailAsync,
      getCommentsAsync,
      reloadComments,
      reloadCommentsNum,
      reSetData,
    },
  } = useStoreHook();

  useObserverHook(
    `#${commonEnums.LOADING_ID}`,
    (entries: any) => {
      if (
        comments &&
        comments.length &&
        showLoading &&
        entries[0].isIntersecting
      ) {
        reloadComments();
      }
    },
    [comments, showLoading],
  );
  useEffect(() => {
    getDetailAsync({ id });
  }, []);

  useEffect(() => {
    getCommentsAsync({ id });
  }, [reloadCommentsNum]);

  useEffect(() => {
    return () => {
      reSetData({ detail: {} });
    };
  }, []);

  return (
    <div className="house-page">
      {/* 顶部banner区域 */}
      <Banner banner={detail?.banner}></Banner>
      {/* 房屋信息 */}
      <Info info={detail?.info}></Info>
      {/* 品论列表 */}
      <Lists lists={comments}></Lists>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default index;
