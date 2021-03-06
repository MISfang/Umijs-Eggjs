import { ImagePicker, List, Toast, InputItem, Button } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { history } from 'umi';
import { createForm } from 'rc-form';
import { useStoreHook } from 'think-react-store';
const index = (props) => {
  const { getFieldProps, validateFields } = props.form;

  const {
    user: { editUserAsync, getUserAsync, avatar, phone, sign },
  } = useStoreHook();

  const [files, setFiles] = useState([{ url: avatar }]);

  const handleSubmit = () => {
    if (!files.length) {
      Toast.fail('请先上传文件');
      return;
    }
    validateFields((error, value) => {
      if (value.tel === '') {
        Toast.fail(`请填写电话`);
        return;
      }
      const regtest = /^(?:(?:\+|00)86)?1\d{10}$/;
      if (!regtest.test(value.tel)) {
        Toast.fail(`请填写正确的电话格式`);
        return;
      }
      if (value.sign === '') {
        Toast.fail(`请填写用户签名`);
        return;
      }

      editUserAsync({
        avatar: files[0].url,
        phone: value.tel,
        sign: value.sign,
      });
    });
  };
  useEffect(() => {
    getUserAsync({});
  }, []);

  return (
    <>
      <div className="user-edit">
        <List>
          <List.Item className="picker">
            <ImagePicker
              files={files}
              selectable={files.length < 1}
              onChange={(files) => {
                const size = files[0]?.file?.size / 1024 / 1024;
                if (size > 0.5) {
                  Toast.fail(`图片大于${size}M 禁止上传`);
                } else {
                  setFiles(files);
                }
              }}
            />
          </List.Item>
          <List.Item>
            <InputItem
              placeholder="电话"
              {...getFieldProps('tel', {
                rules: [{ required: true }],
                initialValue: phone,
              })}
            >
              电话:
            </InputItem>
          </List.Item>
          <List.Item>
            <InputItem
              placeholder="用户签名"
              {...getFieldProps('sign', {
                rules: [{ required: true }],
                initialValue: sign ? sign : '该用户什么也没写',
              })}
            >
              签名:
            </InputItem>
          </List.Item>
        </List>
        <div className="btn">
          <Button
            type="warning"
            onClick={() => {
              history.goBack();
            }}
            className="mybtn"
          >
            取消
          </Button>
          <Button type="primary" onClick={handleSubmit} className="mybtn">
            修改
          </Button>
        </div>
      </div>
    </>
  );
};

export default createForm()(index);
