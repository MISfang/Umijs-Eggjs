module.exports = {
  get username() {
    const {
      request: { token },
    } = this;
    const tokenCache = token
      ? this.app.jwt.verify(token, this.app.config.jwt.secret)
      : undefined;
    return tokenCache ? tokenCache.username : undefined;
  },
  params(key) {
    const method = this.request.method;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    } else {
      return key ? this.request.body[key] : this.request.body;
    }
  },

  get userId() {
    const {
      request: { token },
    } = this;
    console.log(
      '%c 🥨 token: ',
      'font-size:20px;background-color: #33A5FF;color:#fff;',
      token,
    );

    const tokenCache = token
      ? this.app.jwt.verify(token, this.app.config.jwt.secret)
      : undefined;
    return tokenCache ? tokenCache.id : undefined;
  },
};
