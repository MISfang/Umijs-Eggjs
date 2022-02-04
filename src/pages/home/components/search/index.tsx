import { FC, useState } from 'react';
import { Picker, List, Calendar, Button, Toast, Icon } from 'antd-mobile';
import { FormatTime, handleStr } from '@/helper/dayjs';
import { BiSearchAlt } from 'react-icons/bi';
import { ICitysData } from '@/types';
import { history } from 'umi';

const index: FC<{ citys: ICitysData; citysLoading: boolean }> = ({
  citys,
  citysLoading,
}) => {
  const [selectedCity, setSelectedCity] = useState<string[]>(['10001']);
  const [times, setTimes] = useState<string[]>(['可选时间', '', '']);
  const [calendarVisiable, setCalendarVisiable] = useState<boolean>(false);

  // 方法区
  const handleCityChange = (value: any) => {};

  const handleDateOnconfirm = (
    startTime: Date | undefined,
    endTime: Date | undefined,
  ) => {
    setTimes(
      handleStr(FormatTime(startTime as Date), FormatTime(endTime as Date), 5),
    );
    setCalendarVisiable(!calendarVisiable);
  };

  const goToSearchPage = () => {
    if (!times[1]) {
      Toast.offline('请先选择日期哦~', 2);
      return;
    }
    history.push({
      pathname: '/search',
      query: {
        cityID: selectedCity,
        startTime: times[1],
        endTime: times[2],
      },
    });
  };

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        {!citysLoading && (
          <Picker
            title="城市选择"
            data={citys.data}
            cascade={false}
            cols={1}
            onChange={handleCityChange}
            value={selectedCity}
          >
            <List.Item arrow="horizontal">选择城市</List.Item>
          </Picker>
        )}
      </div>
      {/* 可选时间 */}
      <div
        className="search-time"
        onClick={() => setCalendarVisiable(!calendarVisiable)}
      >
        <div className="search-time_left">出租时间</div>
        <div className="search-time_right">{times[0]}</div>
        <Icon type="right" size="md" style={{ color: '#938888' }}></Icon>
      </div>
      {/* 点击按钮 */}
      <Button
        type="primary"
        size="small"
        className="myBtn"
        icon={<BiSearchAlt />}
        onClick={goToSearchPage}
      >
        搜索民宿
      </Button>

      <Calendar
        visible={calendarVisiable}
        onCancel={() => setCalendarVisiable(!calendarVisiable)}
        onConfirm={handleDateOnconfirm}
      ></Calendar>
    </div>
  );
};

export default index;
