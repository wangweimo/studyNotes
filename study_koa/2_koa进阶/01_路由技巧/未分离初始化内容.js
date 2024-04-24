const Koa = require('koa')
const Router = require('koa-router')
const requireDirectory = require('require-directory')
const app = new Koa()

// 路由文件绝对路径
const apiDirectory = `${process.cwd()}/routers`
const whenLoadModule = (obj) => {
  if (obj instanceof Router) {
    app.use(obj.routes())
  }
}
requireDirectory(module, apiDirectory, {
  visit: whenLoadModule
})

app.listen(4000, () => {
  console.log('server is running, port is 4000')
})
