const Router = require('koa-router')
const router = new Router()
router.get('/api/goods/goodslist', async (ctx, next) => {
  ctx.body = {
    key: 'this is book list'
  }
})

module.exports = router