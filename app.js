const Koa = require('koa')

// 应用程序对象 中间件
const app = new Koa()

// 注册
app.use(async (ctx, next) => {
  console.log('hello')
  await next()
})

app.listen(9000)