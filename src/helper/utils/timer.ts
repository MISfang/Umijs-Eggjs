import dayjs from 'dayjs';

export default function (time: Date | number, isAll: boolean = true) {
  return dayjs(time).format(
    isAll ? 'YYYY年MM月DD日 HH时mm分' : 'YYYY年MM月DD日',
  );
}
