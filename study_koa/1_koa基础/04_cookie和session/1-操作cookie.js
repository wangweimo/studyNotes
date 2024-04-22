import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

// 设置cookie
router.get('/api/setcookie', async (ctx) => {
  ctx.cookies.set('id', '123456', {
    domain: '127.0.0.1', // cookie域名
    expires: new Date('2024-4-22'), // 失效时间
    httpOnly: false, // 是否只在http请求中获取
    overWrite: false // 不允许重写
  })
  ctx.body = '设置成功'
})

// 获取cookie
router.get('/api/getcookie', async (ctx) => {
  const cookie = ctx.cookies.get('id')
  console.log(cookie)
  ctx.body = `cookie为:${cookie}`
})

app.use(router.routes())


app.listen(3000, () => {
  console.log('server is running,port is 3000')
})