const { HttpException } = require('../utils/http-exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (error instanceof HttpException) {
      ctx.status = error.statusCode
      ctx.body = {
        request: `${ctx.method} ${ctx.path}`,
        error_code: error.errorCode,
        message: error.message,
      }
      return
    }
    ctx.body = '服务器发生问题，请稍后再尝试！'
  }
}

module.exports = catchError
