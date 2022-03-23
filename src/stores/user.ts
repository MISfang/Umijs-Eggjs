import { Http } from '@/helper/utils';
import { Toast } from 'antd-mobile';
import { history } from 'umi';

export default {
  state: {
    id: undefined,
    username: undefined,
    avatar: undefined,
    phone: undefined,
    sign: undefined,
  },
  reducers: {
    getUser(state: any, payload: any) {
      return {
        ...state,
        ...payload,
      };
    },

    editUser(state: any, payload: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async getUserAsync(dispatch: Function, rootState: any, payload: any) {
      //@ts-ignore
      const { data } = await Http({
        url: '/user/detail',
        data: payload,
      });

      if (data) {
        dispatch({
          type: 'getUser',
          payload: data,
        });
      }
    },
    async editUserAsync(dispatch: Function, rootState: any, payload: any) {
      //@ts-ignore
      const { status } = await Http({
        url: 'user/edit',
        data: payload,
      });

      if (status === 200) {
        Toast.success('信息修改成功！');
        history.push('/user');
      }
    },
    async loginAsync(dispatch: Function, rootState: any, payload: any) {
      //@ts-ignore
      const { data } = await Http({
        url: '/user/login',
        data: payload,
      });

      if (data) {
        const { token, username } = data;
        Toast.success('登录成功');
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        history.push(`/${history.location.search.slice(5)}`);
      }
    },
    async registerAsync(dispatch: Function, rootState: any, payload: any) {
      //@ts-ignore
      const { data } = await Http({
        url: '/user/register',
        data: payload,
      });

      if (data) {
        const { token, username } = data;
        Toast.success('注册成功');
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        history.push(`/${history.location.search.slice(5)}`);
      }
    },
    async logoutAsync(dispatch: Function, rootState: any, payload: any) {
      await Http({
        url: '/user/logout',
        data: payload,
      });

      Toast.success('退出登录成功！');
      localStorage.clear();
      history.push({
        pathname: '/login',
        query: {
          from: location.pathname.slice(1),
        },
      });
    },
  },
};
