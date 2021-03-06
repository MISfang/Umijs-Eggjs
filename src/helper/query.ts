const handleQuery = (urlStr: string) => {
  if (urlStr[0] === '?') {
    return urlStr
      .slice(1)
      .split('&')
      .reduce((pre: { [key: string]: string }, cur: string) => {
        const temp = cur.split('=');
        pre[temp[0]] = decodeURI(temp[1]);
        return pre;
      }, {});
  } else {
    return urlStr
      .split('&')
      .reduce((pre: { [key: string]: string }, cur: string) => {
        const temp = cur.split('=');
        pre[temp[0]] = decodeURI(temp[1]);
        return pre;
      }, {});
  }
};

export default handleQuery;
