const Service = require('egg').Service;

class BaseService extends Service {
  run(callback) {
    const { ctx, app } = this;
    try {
      if (callback) {
        return callback(ctx, app);
      }
    } catch (error) {
      console.log(
        '%c 🦀 error: ',
        'font-size:20px;background-color: #4b4b4b;color:#fff;',
        error,
      );
      return null;
    }
  }
}

module.exports = BaseService;
