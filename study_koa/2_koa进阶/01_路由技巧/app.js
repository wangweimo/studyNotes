const Koa = require('koa')
const InitManager = require('./core/init')

const app = new Koa()

InitManager.initCore(app)

app.listen(4000, () => {
  console.log('server is running, port is 4000')
})
