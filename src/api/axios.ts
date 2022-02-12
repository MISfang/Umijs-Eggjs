import axios, { AxiosRequestConfig } from 'axios';
import { Toast } from 'antd-mobile';
import CONST from './constData';

export default function Faxios(config: AxiosRequestConfig) {
  const myAxios = axios.create({
    baseURL: CONST.BASEURL,
    timeout: CONST.TIMEOUT,
  });
  myAxios.interceptors.response.use(
    (res: any) => {
      // Do something before response is sent
      const { data } = res;
      if (data.status === 1001) {
        console.log(
          '%c 🍉 data.status: ',
          'font-size:20px;background-color: #42b983;color:#fff;',
          data.status,
        );
        Toast.fail('用户未登录，请去登录！');
        location.href = '/login?from' + location.pathname;
        localStorage.clear();
      }
      return res;
    },
    (error: any) => {
      console.log(
        '%c 🥠 error: ',
        'font-size:20px;background-color: #93C0A4;color:#fff;',
        error,
      );
      // Do something with response error
      return Promise.reject(error);
    },
  );
  return myAxios(config);
}
