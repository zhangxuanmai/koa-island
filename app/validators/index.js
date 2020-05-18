const { LinValidator, Rule } = require('../../core/lin-validator')
const { User } = require('../models/user')

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super()
    this.id = [
      // 校验的参数是：id,校验的函数名是：isInt,提示信息是：需要是正整数，其他条件是min: 1
      new Rule('isInt', '需要是正整数', { min: 1 })
    ]
  }
}

class RegisterValidator extends LinValidator {
  constructor() {
    super()
    this.eamil = [
      new Rule('isEmail', '不符合eamil规范')
    ]
    this.password1 = [
      new Rule('isLength', '密码长度至少6个字符，最多20个字符', {
        min: 6,
        max: 20
      }),
      new Rule('matches', '密码强度太低', '^[A-Za-z0-9]{6,20}$')
    ]
    this.password2 = this.password1
    this.nickname = [
      new Rule('isLength', '昵称长度至少4个字符，最多32个字符', {
        min: 4,
        max: 32
      })
    ]
  }

  validatePassword(values) {
    const pwd1 = values.body.password1
    const pwd2 = values.body.password2

    if (pwd1 !== pwd2) {
      throw new Error('两个密码必须相同!')
    }
  }

  async validateEmail(values) {
    const email = values.body.eamil
    const user = await User.findOne({
      where: {
        email: email
      }
    })

    if (user) {
      throw new Error('eamil已存在')
    }
  }
}

class TokenValidator extends LinValidator {
  constructor() {
    super()
    this.account = [
      new Rule('isLength', '账号长度至少4个字符，最多32个字符', {
        min: 4,
        max: 32
      })
    ]
    this.secret = [
      new Rule('isOptional'),
      new Rule('isLength', '至少6个字符', {
        min: 6,
        max: 128
      })
    ]
  }
}

module.exports = {
  PositiveIntegerValidator,
  RegisterValidator,
  TokenValidator,
}