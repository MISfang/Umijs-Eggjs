import { FC } from 'react';
import { Loading } from '@/components';
import common from '@/enums/common';
import { ICommentItem } from '@/types';
import { Timer } from '@/helper/utils';

const index: FC<{ showLoading?: boolean; lists: ICommentItem[] }> = (props) => {
  return (
    <>
      <div className="comment">
        <div className="line"></div>
        <div className="comment-title">评论列表</div>
        <div className="comment-lists">
          {props?.lists?.map((item) => (
            <div className="comment-lists_item" key={item.id}>
              <img src={item.avatar} alt="user" className="avatar" />
              <div className="right">
                <div className="right-top">
                  <p>{item.username}</p>
                  <p>
                    <span>发表时间:</span> {Timer(item.createTime, false)}
                  </p>
                </div>
                <div className="right-bottom">{item.info}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loading
        showLoading={props?.showLoading}
        id={common.LOADING_ID}
        marginBottom={60}
        marginTop={-30}
      ></Loading>
    </>
  );
};

export default index;
