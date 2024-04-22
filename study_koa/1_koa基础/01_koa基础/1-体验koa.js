// 导入koa
import Koa from 'koa'
// 创建一个koa对象
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

// 监听4000端口
app.listen(4000, () => {
  console.log('server is running,port is 4000')
})


