const { Sequelize } = require('sequelize')
const {
  dbName,
  user,
  password,
  host,
  port,
} = require('../config').database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    timestamps: true, // 管理 createdAt和updateAt
    paranoid: true, // 管理deletedAt
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    // 把驼峰转换成下划线
    // underscored: true,
    // scopes: {
    //   bh: {
    //     attributes: {
    //       exclude: ['updated_at', 'deleted_at', 'created_at']
    //     }
    //   }
    // }
  }
})

sequelize.sync({
  // true会自动运行，通过定义的model修改数据库中的表
  force: false
})

module.exports = {
  sequelize,
};
