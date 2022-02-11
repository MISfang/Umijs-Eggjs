import dayjs from 'dayjs';

export default function (time: Date | number, isAll: boolean = true) {
  return dayjs(time).format(isAll ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD');
}
