import { Http } from '@/helper/utils';
import { Toast } from 'antd-mobile';
import { urlGet } from 'project-libs';
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
      const { data, token } = await Http({
        url: 'user/edit',
        data: payload,
      });

      if (data) {
        Toast.success('信息修改成功！');
        localStorage.setItem('token', token);
        history.push('/user');
      }
    },
    async loginAsync(dispatch: Function, rootState: any, payload: any) {
      //@ts-ignore
      const { data, token } = await Http({
        url: '/user/login',
        data: payload,
      });
      if (data) {
        Toast.success('登录成功');
        localStorage.setItem('token', token);
        localStorage.setItem('username', data.username);
        urlGet('from') && history.push(urlGet('from')!);
      }
    },
    async registerAsync(dispatch: Function, rootState: any, payload: any) {
      //@ts-ignore
      const { data, token } = await Http({
        url: '/user/register',
        data: payload,
      });

      if (data) {
        Toast.success('注册成功');
        localStorage.setItem('token', token);
        localStorage.setItem('username', data.username);
        urlGet('from') && history.push(urlGet('from')!);
      }
    },
    async logoutAsync(dispatch: Function, rootState: any, payload: any) {
      await Http({
        url: '/user/logout',
        data: payload,
      });

      Toast.success('退出登录成功！');
      localStorage.clear();
      location.href = `/login?from=${location.pathname}`;
    },
  },
};
