module.exports = {
  // prod
  environment: 'env',
  database: {
    dbName: 'test',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
  },
  security: {
    secretKey: "abcdefg",
    expiresIn: 60 * 60 * 24 * 30
  },
  wx: {
    appID: 'wx959e052cf1cba0a1',
    appSecret: 'abe5deea21a249c9bb44a617a1d7ad75',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  },
  yushu: {
    detailUrl: 'http://t.yushu.im/v2/book/id/%s',
    keywordUrl: 'http://t.yushu.im/v2/book/search?q=%s&count=%s&start=%s&summary=%s'
  },
  host: 'https://island.youbego.top/'
}