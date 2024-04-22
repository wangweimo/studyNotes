import Koa from 'koa'

const app = new Koa()
// 原生路由通过判断request对象的URL属性，做相应处理
app.use(async (ctx) => {
  const url = ctx.request.url
  let content = ''
  switch (url) {
    case '/api/get/userinfo':
      content = '200: this is getUserInfo request'
      break
    case '/api/update/userinfo':
      content = '200: this is updateUserInfo request'
      break
    default:
      content = '404: no router match'
      break
  }
  ctx.body = content
})
app.listen(4000, () => {
  console.log('server is running,port is 4000')
})

