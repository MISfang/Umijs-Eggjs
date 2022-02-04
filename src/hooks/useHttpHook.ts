import { Http } from '@/helper/utils';
import { IUseHttpHook } from '@/types';
import { useEffect, useState } from 'react';
/**
 * @param  {} {url
 * @param  {} method='post'
 * @param  {} headers={}
 * @param  {} data={}
 * @param  {} watch=[]
 * @param  {IUseHttpHook} }
 */
export default function useHttpHook({
  url,
  method = 'post',
  headers = {},
  data = {},
  watch = [],
}: IUseHttpHook) {
  const [resData, setResData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Http({ url, method, headers, data, setLoading, setResData });
  }, watch);

  return [resData, loading];
}

// 上面是我自己尝试的axios封装的hooks;
