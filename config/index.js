module.exports = {
  env: 'dev',
  database: {
    dbName: 'test',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
  },
  security: {
    secretKey: 'abcdefg',
    expiresIn: 60 * 60 * 24 * 6,
  },
  wx: {
    appID: 'wx959e052cf1cba0a1',
    appSecret: 'abe5deea21a249c9bb44a617a1d7ad75',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
};
