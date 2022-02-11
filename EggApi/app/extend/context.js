module.exports = {
  get username() {
    const token = this.request.token;
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
};
