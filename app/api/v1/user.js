const Router = require('koa-router')

const { User } = require('../../models/user')
const { RegisterValidator } = require('../../validators')
const { success } = require('../../lib/helper')

const router = new Router({
  prefix: '/v1/user'
})

router.post('/register', async (ctx, next) => {
  const v = await new RegisterValidator().validate(ctx)
  const user = {
    email: v.get('body.eamil'),
    password: v.get('body.password2'),
    nickname: v.get('body.nickname'),
  }
  await User.create(user)
  success()
})

module.exports = router