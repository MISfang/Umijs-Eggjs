module.exports = {
  get username() {
    const token = this.request.token;
    const tokenCache = token
      ? this.app.jwt.verify(token, this.app.config.jwt.secret)
      : undefined;
    return tokenCache ? tokenCache.username : undefined;
  },
};
