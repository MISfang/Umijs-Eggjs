import handleQuery from '@/helper/query';
import { FC, useEffect, useState } from 'react';
import { IHouse } from '@/types';
import { Loading } from '@/components';
import { SearchBar } from 'antd-mobile';
import { useHttpHook, useImageHook, useObserverHook } from '@/hooks';
import { useLocation } from 'umi';
import './index.less';
import { commonEnums } from '@/enums';

const index: FC = () => {
  const { cityID, startTime, endTime } = handleQuery(useLocation().search);
  console.log(
    '%c 🍎 cityID, startTime, endTime: ',
    'font-size:20px;background-color: #E41A6A;color:#fff;',
    cityID,
    startTime,
    endTime,
  );

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
  console.log(
    '%c 🥨 houses: ',
    'font-size:20px;background-color: #33A5FF;color:#fff;',
    houses,
  );

  useObserverHook(
    `#${commonEnums.LOADING_ID}`,
    (entres: IntersectionObserverEntry[]) => {
      if (!loading && entres[0].isIntersecting) {
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
      if (data.length) {
        setHouseLists([...houseLists, ...data]);
        if (houses.length < page.limit) {
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
      ></SearchBar>

      {/* 搜索内容页面 */}
      {!houseLists.length ? (
        <Loading isBig={true}></Loading>
      ) : (
        <div className="result">
          {houseLists.map(({ imgs, id, info, price }: IHouse) => (
            <div className="item" key={id}>
              <img
                src={require('../../assets/blank.png')}
                className="img"
                alt=""
                data-src={imgs[0]?.url}
              />
              <div className="item-right">
                <div className="title">{info}</div>
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
    </div>
  );
};

export default index;
