import { List, InputItem, Button, Toast } from 'antd-mobile';
import './index.less';
import { createForm } from 'rc-form';
import { useStoreHook } from 'think-react-store';
import { useState } from 'react';
const index = (props) => {
  const { getFieldProps, validateFields } = props.form;
  const {
    user: { registerAsync },
  } = useStoreHook();
  const [tempValue, setTempValue] = useState('');

  const handleSubmit = () => {
    validateFields((err, val) => {
      const { username, password, rePassword } = val;
      if (!username) {
        Toast.fail(`请填写用户名`);
        return;
      }
      if (!password) {
        Toast.fail(`请填写密码`);
        return;
      }
      if (!tempValue) {
        Toast.fail(`请填写确认密码`);
        return;
      }
      if (tempValue !== password) {
        Toast.fail(`两次密码不一致`);
        setTempValue('');
        return;
      }
      registerAsync({
        username,
        password,
      });
    });
  };
  return (
    <div className="login">
      <div className="bg"></div>
      <div className="card">
        <div className="title">用户注册</div>
        <List>
          <InputItem clear placeholder="用户名" {...getFieldProps('username')}>
            用户名:
          </InputItem>
          <InputItem
            clear
            type="password"
            placeholder="密码"
            {...getFieldProps('password')}
          >
            密码:
          </InputItem>
          <InputItem
            clear
            type="password"
            placeholder="确认密码"
            value={tempValue}
            onChange={(val) => setTempValue(val)}
          >
            确认密码:
          </InputItem>
        </List>
        <Button type="primary" className="btn" onClick={handleSubmit}>
          登录
        </Button>
        <a href="/login" className="register">
          已有账户,前往登录~
        </a>
      </div>
    </div>
  );
};

export default createForm()(index);
