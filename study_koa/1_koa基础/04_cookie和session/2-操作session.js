import Koa from 'koa'
import fs from 'fs.js'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import session from 'koa-session'
import shortId from 'js-shortid'

import Store from './store.js'

const app = new Koa()
const router = new Router()

const inst = shortId.inst({
  salts: 4,
  initTime: new Date()
})

const redisConfig = {
  redis: {
    port: 6379,
    host: '127.0.0.1',
    password: ''
  }
}

const sessionConfig = {
  key: 'koa:sess', // cookie键名
  maxAge: 86400000, // 保存期限
  signed: false, // 不做签名
  store: new Store(redisConfig), // 提供外部存储
  genid: () => inst.gen() // 键的生成函数
}
app.use(session(sessionConfig, app))
app.use(bodyParser())
app.use(router.routes())

// 加载前端页面
router.get('/', async (ctx) => {
  ctx.set({'Content-Type': 'text/html'})
  ctx.body = fs.readFileSync('./模拟登录.html')
})

// 登录
router.post('/login', async (ctx) => {
  const postData = ctx.request.body  // 获取用户的提交数据
  if (ctx.session.username) {
    ctx.body = `欢迎, ${ctx.session.username}`
  } else {
    ctx.session = postData
    ctx.body = '您第一次登录系统'
  }
})

app.listen(3000, () => {
  console.log('server is running,port is 3000')
})