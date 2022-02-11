import Faxios from '@/api/axios';
import { IUseHttpHook } from '@/types';
import { Toast } from 'antd-mobile';
const Http = async ({
  url,
  method = 'post',
  data = {},
  setLoading,
  setResData,
}: IUseHttpHook) => {
  setLoading && setLoading(true);
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token');
    let defaultHeader: any = {
      'Content-type': 'application/json',
    };
    defaultHeader = token
      ? {
          ...defaultHeader,
          token,
        }
      : defaultHeader;
    Faxios({
      url,
      method,
      headers: defaultHeader,
      data,
    })
      //  @ts-ignore: Unreachable code error
      .then(({ data, status, errMsg }) => {
        if (status === 200) {
          resolve(data);
          setResData && setResData(data);
        } else {
          if (status === 1001) {
            Toast.fail('用户未登录，请去登录！');
            location.href = '/login?from' + location.pathname;
            localStorage.clear();
          }
          Toast.fail(errMsg);
          reject(errMsg);
        }
      })
      .catch((err) => {
        Toast.fail(err);
        reject(err);
      })
      .finally(() => {
        setLoading && setLoading(false);
      });
  });
};

export default Http;
