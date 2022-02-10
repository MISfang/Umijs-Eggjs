import { List, InputItem, Button, Toast } from 'antd-mobile';
import './index.less';
import { createForm } from 'rc-form';
import { useStoreHook } from 'think-react-store';

const index = (props) => {
  const { getFieldProps, validateFields } = props.form;
  const {
    user: { loginAsync },
  } = useStoreHook();

  const handleSubmit = () => {
    validateFields((err, val) => {
      const { username, password } = val;
      if (!username) {
        Toast.fail(`请填写用户名`);
        return;
      }
      if (!password) {
        Toast.fail(`请填写密码`);
        return;
      }
      loginAsync({
        username,
        password,
      });
    });
  };
  return (
    <div className="login">
      <div className="bg"></div>
      <div className="card">
        <div className="title">用户登录</div>
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
        </List>
        <Button type="primary" className="btn" onClick={handleSubmit}>
          登录
        </Button>
        <a href="/register" className="register">
          没有账户,前往注册~
        </a>
      </div>
    </div>
  );
};

export default createForm()(index);
