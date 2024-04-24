const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.post('/api/user/login', async (ctx) => {
  ctx.body = 'this is user login router'
})
router.post('/api/user/update', async (ctx) => {
  ctx.body = 'this is user data update router'
})
router.get('/api/goods/goodslist', async (ctx) => {
  ctx.body = 'this is book list'
})

app.use(router.routes())
app.listen(4000,()=>{
  console.log('server is running,port is 4000')
})