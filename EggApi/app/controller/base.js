const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data = {}, Msg) {
    const { ctx } = this;
    if (Msg) {
      ctx.body = {
        status: 200,
        data,
        Msg,
      };
    } else {
      ctx.body = {
        status: 200,
        data,
      };
    }
  }
  error(errMsg = '') {
    const { ctx } = this;
    ctx.body = {
      status: 500,
      errMsg,
    };
  }
}

module.exports = BaseController;
