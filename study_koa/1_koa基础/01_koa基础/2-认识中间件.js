import Koa from 'koa'

const app = new Koa()
// 中间件1
app.use(async (ctx, next) => {
  console.log('--------1-----------')
  await next()
  console.log('=====6=====')
})
// 中间件2
app.use(async (ctx, next) => {
  console.log('--------2-----------')
  await next()
  console.log('=====5=====')
})
// 中间件3
app.use(async (ctx, next) => {
  console.log('--------3-----------')
  await next()
  console.log('=====4=====')
})

app.listen(4000, () => {
  console.log('server is running,port is 4000')
})

