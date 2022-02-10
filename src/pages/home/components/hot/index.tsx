import { FC, useState, memo } from 'react';
import { IHouseData } from '@/types';
import { history } from 'umi';

const index: FC<{ houses: IHouseData }> = ({ houses }) => {
  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hot-lists">
        {houses?.data?.map(({ id, img, title, info, price }) => (
          <div
            className="hot-lists-item"
            key={id}
            onClick={() => {
              history.push({ pathname: '/house', query: { id } });
            }}
          >
            <img className="img" alt="img" src={img}></img>
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
