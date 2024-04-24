const Koa = require('koa')
const app = new Koa()

const userRoute = require('./routers/user')
const goodsRoute = require('./routers/goods')
app.use(userRoute.routes())
app.use(goodsRoute.routes())

app.listen(4000, () => {
  console.log('server is running, port is 4000')
})
