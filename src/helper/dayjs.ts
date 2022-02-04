import dayjs from 'dayjs';

const FormatTime = (time: Date | number): string =>
  dayjs(time).format('YYYY年MM月DD日');

const handleStr = (str1: string, str2: string, num: number): string[] => {
  const leftStr = str1.slice(0, num);
  const rightStr = str2.slice(0, num);
  return [
    leftStr === rightStr
      ? `${leftStr} (${str1.slice(num)}~${str2.slice(num)})`
      : `${str1}~${str2}`,
    str1,
    str2,
  ];
};

export { FormatTime, handleStr };
