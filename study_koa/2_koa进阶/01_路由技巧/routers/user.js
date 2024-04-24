const Router = require('koa-router')
const router = new Router()

router.post('/api/user/login', async (ctx, next) => {
  ctx.body = {
    key: 'this is user login router'
  }
})
router.post('/api/user/update', async (ctx, next) => {
  ctx.body = {
    key: 'this is user data update router'
  }
})

module.exports = router
