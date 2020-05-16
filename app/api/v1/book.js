const Router = require('koa-router')
const router = new Router()
const { ParameterException } = require('../../../utils/http-exception')

router.post('/v1/:id/book', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body

  if (true) {
    throw new ParameterException()
  }
})

module.exports = router