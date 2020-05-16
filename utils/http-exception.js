class HttpException extends Error {
  constructor(message = '服务器异常', errorCode = 10000, statusCode = 400) {
    super()
    this.statusCode = statusCode
    this.errorCode = errorCode
    this.message = message
  }
}

class ParameterException extends HttpException {
  constructor(message, errorCode) {
    super()
    this.statusCode = 400
    this.errorCode = errorCode || 10000
    this.message = message || '参数错误'
  }
}

module.exports = {
  HttpException,
  ParameterException
};
