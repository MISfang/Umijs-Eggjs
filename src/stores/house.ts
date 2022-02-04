import { commonEnums } from '@/enums';
import { Http } from '@/helper/utils';
import { IHouseInfo } from '@/types';
import { Toast } from 'antd-mobile';

export default {
  state: {
    detail: {},
    comments: [],
    page: commonEnums.PAGE,
    showLoading: true,
    reloadCommentsNum: 0,
  },
  reducers: {
    getDetail(state: any, payload: IHouseInfo) {
      return {
        ...state,
        detail: payload,
      };
    },
    getComments(state: any, payload: any) {
      return {
        ...state,
        comments: payload,
      };
    },
    setShowLoading(state: any, payload: any) {
      return {
        ...state,
        showLoading: payload,
      };
    },
    reloadComments(state: any, payload: any) {
      return {
        ...state,
        reloadCommentsNum: state.reloadCommentsNum + 1,
        page: {
          ...commonEnums.PAGE,
          pageNum: state.page.pageNum + 1,
        },
      };
    },

    reSetData(state: any, payload: any) {
      return {
        ...state,
        comments: [],
        page: commonEnums.PAGE,
        showLoading: true,
        reloadCommentsNum: state.reloadCommentsNum ? 0 : 1,
        ...payload,
      };
    },
  },

  effects: {
    async getDetailAsync(dispatch: Function, rootState: any, payload: any) {
      //@ts-ignore
      const { data } = await Http({
        url: '/house/detail',
        data: payload,
      });
      dispatch({
        type: 'getDetail',
        payload: data,
      });
    },
    async getCommentsAsync(dispatch: Function, rootState: any, payload: any) {
      const { comments, page } = rootState.house;
      //@ts-ignore
      const { data } = await Http({
        url: '/comment/lists',
        data: {
          ...payload,
          pageSize: page.pageSize,
          pageNum: page.pageNum,
        },
      });
      dispatch({
        type: 'getComments',
        payload: [...comments, ...data.lists],
      });
      dispatch({
        type: 'setShowLoading',
        payload: data.lists.length ? true : false,
      });
    },

    async addCommentAsync(dispatch: Function, rootState: any, payload: any) {
      //@ts-ignore
      const { data } = await Http({
        url: '/comments/add',
        data: payload,
      });
      if (data === 'OK') {
        dispatch({
          type: 'reSetData',
          payload: {},
        });
        Toast.success('写评论成功');
      } else {
        Toast.offline('发生错误，请稍后再试！');
      }
    },
  },
};
