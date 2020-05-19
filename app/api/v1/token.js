const Router = require('koa-router')
const { TokenValidator, NotEmptyValidator } = require('../../validators')
const { LoginType } = require('../../lib/enum')
const { User } = require('../../models/user')
const { ParameterException } = require('../../../core/http-exception')
const { generateToken } = require('../../../core/util')
const { Auth } = require('../../../middlewares/auth')
const { WechatManager } = require('../../services/wx')

const router = new Router({
  prefix: '/v1/token'
})

router.post('/', async (ctx, next) => {
  const v = await new TokenValidator().validate(ctx)
  const type = v.get('body.type')

  let token;
  switch (type) {
    case LoginType.USER_EMAIL:
      const account = v.get('body.account')
      const secret = v.get('body.secret')
      token = await eamilLogin(account, secret)
      break;

    case LoginType.USER_MINI_PROGRAN:
      token = await WechatManager.codeToToken(v.get('body.account'))
      break;

    default:
      throw new ParameterException('没有相应处理方式')
  }

  ctx.body = {
    token
  }
})

router.post('/verify', async (ctx, next) => {
  const v = await new NotEmptyValidator().validate(ctx)
  const result = Auth.verifyToken(v.get('body.token'))
  ctx.body = {
    result
  }
})

async function eamilLogin(account, secret) {
  const user = await User.verifyEamilPassword(account, secret)
  return generateToken(user.id, Auth.USER)
}

module.exports = router