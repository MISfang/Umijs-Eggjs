import Faxios from '@/api/axios';
import { IUseHttpHook } from '@/types';
import { Toast } from 'antd-mobile';
const Http = async ({
  url,
  method = 'post',
  headers = {},
  data = {},
  setLoading,
  setResData,
}: IUseHttpHook) => {
  setLoading && setLoading(true);
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('username');
    let defaultDheader = {
      'Content-type': 'application/json',
    };
    defaultDheader = token
      ? {
          ...defaultDheader,
          //@ts-ignore
          token,
        }
      : defaultDheader;
    Faxios({
      url,
      method,
      headers: defaultDheader,
      data,
    })
      //  @ts-ignore: Unreachable code error
      .then(({ data, status, errMsg }) => {
        if (status === 200) {
          resolve(data);
          setResData && setResData(data);
        } else {
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
