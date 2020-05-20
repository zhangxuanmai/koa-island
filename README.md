## 项目介绍

Node.js Koa2 实战开发微信小程序服务端API接口。

## 简历数据库

启动项目前一定要在创建好数据库。可以根据个人本地的数据库情况，修改配置文件。

```bush
/config/config.js

database: {
  dbName: 'test', //数据库名称
  host: 'localhost',
  port: 3306,     // 端口号
  user: 'root',   //数据库账号
  password: '',   //数据库密码
},
```

## 项目构建

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目技术

Koa服务端编程、异步编程、面向对象编程。

- Koa 与 Koa 二次开发API
- 多 koa-router 拆分路由
- require-directory 自动路由加载
- nodemon修改文件自动重启
- 异步编程，async/await
- 异步异常链与全局异常处理
- Sequelize ORM 管理 MySQL
- JWT 权限控制中间件
- Validator 与 LinValidator 验证器
- PM2部署Node.js应用

## 项目来源

- 正版教程：[《纯正商业级应用－Node.js Koa2开发微信小程序服务端》](https://s.imooc.com/SHHXs2R), by 慕课网：7七月老师
- [开源：lin-cms-koa](https://github.com/TaleLin/lin-cms-koa), by TaleLin Team
