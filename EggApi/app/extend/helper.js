const dayjs = require('dayjs');
module.exports = {
  time() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
  },
  timestamp(date) {
    return new Date(date).getTime();
  },

  unPick(source, target) {
    if (Array.isArray(target)) {
      let res = {};
      for (const key in source) {
        if (!target.includes(key)) {
          res[key] = source[key];
        }
      }
      return res;
    }
  },
};
