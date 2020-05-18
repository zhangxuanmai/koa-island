const { SuccessException } = require('../../core/http-exception')

function success(msg, errorCode) {
  throw new SuccessException(msg, errorCode)
}

module.exports = {
  success
};
