import handleQuery from '@/helper/query';
import { commonEnums } from '@/enums';
import { FC, useEffect, useState } from 'react';
import { history, useLocation } from 'umi';
import { Icon, NavBar, SearchBar } from 'antd-mobile';
import { IHouse } from '@/types';
import { Loading } from '@/components';
import { useHttpHook, useImageHook, useObserverHook } from '@/hooks';
import './index.less';

const index: FC = () => {
  const { cityID, startTime, endTime } = handleQuery(useLocation().search);

  const [houseName, setHouseName] = useState('');
  const [houseLists, setHouseLists] = useState<IHouse[]>([]);

  const [page, setPage] = useState<{ limit: number; pageNum: number }>(
    commonEnums.PAGE,
  );
  const [showloading, setShowloading] = useState(true);
  const [houseSubmit, setHouseSubmit] = useState('');

  const [houses, loading] = useHttpHook({
    url: '/house/search',
    data: {
      ...page,
      houseSubmit,
      cityID,
      startTime: `${startTime} 00:00:00`,
      endTime: `${endTime} 23:59:59`,
    },
    watch: [page.pageNum, houseSubmit],
  });

  useObserverHook(
    `#${commonEnums.LOADING_ID}`,
    (entres: IntersectionObserverEntry[]) => {
      if (showloading && entres[0].isIntersecting) {
        setPage({
          ...page,
          pageNum: page.pageNum + 1,
        });
      }
    },
    null,
  );

  useEffect(() => {
    if (!loading && houses) {
      const { data } = houses;
      if (data.length !== 0) {
        setHouseLists([...houseLists, ...data]);
        if (data.length < page.limit) {
          setShowloading(false);
        }
      } else {
        setShowloading(false);
      }
    }
  }, [loading]);

  useImageHook('.img', () => {}, null);

  // 自定义方法区

  // 抽离公共方法
  const _handleSubmit = (val: string) => {
    setHouseSubmit(val);
    setHouseName(val);
    setPage(commonEnums.PAGE);
    setHouseLists([]);
  };

  const onCancel = () => {
    _handleSubmit('');
  };
  const onSubmit = (val: string) => {
    _handleSubmit(val);
  };
  return (
    <div className="search-page">
      {/* 顶部搜索栏 */}
      <SearchBar
        placeholder="搜索民宿"
        value={houseName}
        onChange={(val) => setHouseName(val)}
        onCancel={onCancel}
        onSubmit={onSubmit}
        className="searchBar"
      ></SearchBar>

      {/* 搜索内容页面 */}
      {!houseLists.length ? (
        <Loading isBig={true} showLoading={showloading}>
          搜索无结果
        </Loading>
      ) : (
        <div className="result">
          {houseLists.map(({ imgs, id, info, price, name }: IHouse) => (
            <div
              className="item"
              key={id}
              onClick={() => {
                history.push({
                  pathname: '/house',
                  query: { id: id.toString() },
                });
                location.search;
              }}
            >
              <img
                src={require('../../assets/blank.png')}
                className="img"
                alt=""
                data-src={imgs[0]?.url}
              />
              <div className="item-right">
                <div className="title">{name}</div>
                <div className="title2">{info}</div>
                <div className="price">{price}</div>
              </div>
            </div>
          ))}
          <Loading
            showLoading={showloading}
            id={commonEnums.LOADING_ID}
          ></Loading>
        </div>
      )}
      <div
        className="bttBtn"
        onClick={() => {
          history.goBack();
        }}
      >
        返回上级
      </div>
    </div>
  );
};

export default index;
