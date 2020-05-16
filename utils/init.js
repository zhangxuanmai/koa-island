const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore(app) {
    InitManager.app = app
    InitManager.initLoadRouters()
  }

  // 路由导入及注册
  static initLoadRouters() {
    const whenModuleLoaded = obj => {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      } else if (typeof obj === "object") {
        // 兼容 module.exports 导出对象的写法
        for (let k in obj) {
          if (obj[k] instanceof Router) {
            InitManager.app.use(obj[k].routes())
          }
        }
      }
    };

    const path = `${process.cwd()}/app/api`
    requireDirectory(module, path, {
      visit: whenModuleLoaded
    })
  }
}

module.exports = InitManager