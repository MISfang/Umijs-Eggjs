import { Method } from 'axios';

interface IMenuBarProps {
  show: boolean;
  pathName: string;
}

interface IHttpHookProps {
  url: string;
  method?: string;
  headers: {};
  data?: any;
}
interface ICity {
  label: string;
  value: string;
}
interface ICitysData {
  data: ICity[][];
  status: number;
}

interface IHouse {
  name: string;
  id: number;
  imgs: {
    id: number;
    url: string;
    houseId: number;
    createTime: string;
  }[];
  title: string;
  info: string;
  price: string;
}
interface IHouseData {
  data: IHouse[];
  status: number;
}

interface IUseHttpHook {
  url: string;
  method?: Method;
  headers?: any;
  data?: any;
  watch?: any[];
  setLoading?: Function;
  setResData?: Function;
}

interface IQueryData {
  cityID: number;
  startTime: string;
  endTime: string;
}

interface IHouseInfo {
  name: string;
  info: string;
  price: string;
  publishTime: number;
  startTime: number;
  endTime: number;
}
interface ICommentItem {
  user: {
    avatar: string;
    username: string;
  };
  id: number;
  createTime: number;
  msg: string;
}

interface IOrderItem {
  id: number;
  img: string;
  title: string;
  info: string;
  price: string;
}

interface ILoadingProps {
  id?: string;
  showLoading?: boolean;
  isBig?: boolean;
  marginBottom?: number;
  marginTop?: number;
  isPinglun?: boolean;
}

export {
  IMenuBarProps,
  IHouseData,
  IHttpHookProps,
  ICitysData,
  IHouse,
  IUseHttpHook,
  IQueryData,
  IHouseInfo,
  ICommentItem,
  IOrderItem,
  ILoadingProps,
};
