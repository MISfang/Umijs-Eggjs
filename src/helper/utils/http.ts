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
    Faxios({
      url,
      method,
      headers: {
        'Content-type': 'application/json',
        ...headers,
      },
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
