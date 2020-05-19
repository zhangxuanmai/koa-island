const util = require('util')
const axios = require('axios')
const { AuthFailed } = require('../../core/http-exception')
const { User } = require('../models/user')
const { generateToken } = require('../../core/util')
const { Auth } = require('../../middlewares/auth')

class WechatManager {
  static async codeToToken(code) {
    const url = util.format(
      global.config.wx.loginUrl,
      global.config.wx.appID,
      global.config.wx.appSecret,
      code
    )

    const result = await axios.get(url)
    const errcode = result.data.errcode
    const errmsg = result.data.errmsg

    if (result.status !== 200) {
      throw new AuthFailed('oppid获取失败')
    }

    if (errcode) {
      throw new AuthFailed(`${errcode}:${errmsg}`)
    }

    const openid = result.data.openid
    let user = await User.getUserByOpenid(openid)
    if (!user) {
      user = await User.registerByOpenid(openid)
    }

    return generateToken(user.id, Auth.USER)
  }
}

module.exports = {
  WechatManager
};
