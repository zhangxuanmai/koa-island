const Koa = require('koa')
const parser = require('koa-bodyparser')
const initManger = require('./utils/init')
const catchError = require('./middlewares/exception')

const app = new Koa()

// catch error message
app.use(catchError)
// parser body
app.use(parser())
// init routers
initManger.initCore(app)

app.listen(9000)