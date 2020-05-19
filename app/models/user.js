const bcrypt = require('bcryptjs')
const { Sequelize, Model } = require('sequelize')
const { NotFound, AuthFailed } = require('../../core/http-exception')
const { sequelize } = require('../../core/db')

class User extends Model {
  static async verifyEamilPassword(email, plainPassword) {
    const user = await User.findOne({
      where: {
        email
      }
    })
    if (!user) throw new NotFound('账号不存在')

    const correct = bcrypt.compareSync(plainPassword, user.password)
    if (!correct) throw new AuthFailed('密码不正确')

    return user
  }

  static async getUserByOpenid(openid) {
    return await User.findOne({
      where: {
        openid
      }
    })
  }

  static async registerByOpenid(openid) {
    return await User.create({ openid })
  }
}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nickname: Sequelize.STRING,
  email: {
    type: Sequelize.STRING(128),
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    set(val) {
      const salt = bcrypt.genSaltSync(10)
      const psw = bcrypt.hashSync(val, salt)
      this.setDataValue('password', psw)
    }
  },
  openid: {
    type: Sequelize.STRING(64),
    unique: true,
  }
}, {
  sequelize,
  tableName: 'island_user', // 自定义数据库表名
})

module.exports = {
  User
};
