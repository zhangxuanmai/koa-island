const Router = require('koa-router')

const { User } = require('../../models/user')
const { RegisterValidator } = require('../../validators')
const { success } = require('../../lib/helper')

const router = new Router({
  prefix: '/v1/token'
})

router.post('/', async (ctx, next) => {
})

module.exports = router