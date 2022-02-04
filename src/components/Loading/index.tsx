import { FC, useEffect } from 'react';
import './index.less';

const Loading: FC<{
  id?: string;
  showLoading?: boolean;
  isBig?: boolean;
  marginBottom?: number;
  marginTop?: number;
}> = ({ id, showLoading = true, isBig, marginBottom, marginTop }) => {
  return (
    <div
      className={isBig ? 'box-big' : 'box'}
      id={id}
      style={{
        marginBottom: `${marginBottom}px`,
        marginTop: `${marginTop}px`,
      }}
    >
      {showLoading ? (
        <>
          <div className="atom-spinner">
            <div className="spinner-inner">
              <div className="spinner-line"></div>
              <div className="spinner-line"></div>
              <div className="spinner-line"></div>
              <div className="spinner-circle">&#9679;</div>
            </div>
          </div>
          <div className="text">加载中...</div>
        </>
      ) : (
        <div className="text">没有数据了</div>
      )}
    </div>
  );
};

export default Loading;
