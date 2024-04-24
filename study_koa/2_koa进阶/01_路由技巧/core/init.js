const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore(app) {
    InitManager.app = app
    InitManager.initLoadRouters()
  }

  static initLoadRouters() {
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }

    // 路由文件绝对路径
    const apiDirectory = `${process.cwd()}/routers`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    })
  }
}

module.exports = InitManager