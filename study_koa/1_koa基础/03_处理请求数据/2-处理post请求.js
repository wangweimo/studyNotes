import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

app.use(bodyParser())

router.post('/api/userinfo', async (ctx) => {
  console.log( ctx.request.query)
})

// 加载路由中间件
app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running,port is 3000')
})