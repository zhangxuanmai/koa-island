const basicAuth = require('basic-auth')
const jwt = require('jsonwebtoken')
const { Forbbiden } = require('../core/http-exception')

class Auth {
  constructor(level) {
    this.level = level || 1

    Auth.USER = 8
    Auth.ADMIN = 16
  }

  static verifyToken(token) {
    try {
      jwt.verify(token, global.config.security.secretKey)
      return true
    } catch (error) {
      return false
    }
  }

  get m() {
    return async (ctx, next) => {
      const userToken = basicAuth(ctx.req)

      if (!userToken || !userToken.name) throw new Forbbiden()

      try {
        var decode = jwt.verify(userToken.name, global.config.security.secretKey)
      } catch (error) {
        const isTokenExpiredError = error.name === 'TokenExpiredError'
        if (isTokenExpiredError) throw new Forbbiden('token过期')
        throw new Forbbiden('token不合法')
      }

      if (decode.scope < this.level) throw new Forbbiden('权限不足')

      ctx.auth = {
        uid: decode.uid,
        scope: decode.scope,
      }

      await next()
    }
  }
}

module.exports = {
  Auth
};
