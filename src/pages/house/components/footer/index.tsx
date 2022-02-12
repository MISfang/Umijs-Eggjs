import { FC, useState, useEffect } from 'react';
import { Modal, Button, TextareaItem, Toast } from 'antd-mobile';
import './index.less';
import { useStoreHook } from 'think-react-store';
import { useLocation } from 'umi';
import handleQuery from '@/helper/query';

const index: FC = () => {
  const { id } = handleQuery(useLocation().search);

  const [modalIsSHow, setModalIsSHow] = useState<boolean>(false);
  const [text, setText] = useState('');
  const {
    house: { addCommentAsync },
  } = useStoreHook();
  const handleConfirm = () => {
    if (text) {
      addCommentAsync({
        comment: text,
        houseId: id,
      });
      setModalIsSHow(false);
      setText('');
    } else {
      Toast.fail('请输入评论内容再提交！', 1.2);
    }
  };

  return (
    <>
      <div className="footer" onClick={() => setModalIsSHow(true)}>
        写评论~
      </div>

      <Modal
        title="评论内容输入"
        popup
        visible={modalIsSHow}
        animationType="slide-up"
        className="Modal"
      >
        <TextareaItem
          placeholder="请输入内容"
          className="textArea"
          labelNumber={5}
          autoHeight
          clear
          count={200}
          onChange={(val) => setText(val as string)}
        />
        <div className="btn">
          <Button type="primary" className="btn-item" onClick={handleConfirm}>
            确定
          </Button>
          <Button
            type="warning"
            onClick={() => {
              setModalIsSHow(false);
            }}
            className="btn-item"
          >
            关闭
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default index;
