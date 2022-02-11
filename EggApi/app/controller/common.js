const BaseController = require('./base');

class CommonController extends BaseController {
  async citys() {
    const data = [
      '上海市、北京市、深圳市、广州市、成都市、杭州市、重庆市、武汉市、苏州市、西安市、天津市、南京市、郑州市、长沙市、沈阳市、青岛市、宁波市、东莞市、无锡市'
        .split('、')
        .map((label, index) => ({
          label,
          value: (10 ** 4 + index + 1).toString(),
        })),
    ];
    this.success(data, '城市列表数据获取成功');
  }
}

module.exports = CommonController;
