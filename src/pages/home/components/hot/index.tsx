import { FC, useState, memo } from 'react';
import { IHouseData } from '@/types';
import { history } from 'umi';

const index: FC<{ houses: IHouseData; housesLoading: boolean }> = ({
  houses,
}) => {
  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hot-lists">
        {houses?.data?.map(({ id, imgs, title, info, price }) => (
          <div
            className="hot-lists-item"
            key={id}
            onClick={() => {
              history.push({
                pathname: '/house',
                query: { id: id.toString() },
              });
            }}
          >
            <img className="img" alt="img" src={imgs[0].url}></img>
            <div className="title">{title}</div>
            <div className="info">{info}</div>
            <div className="price">￥{price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(index);
