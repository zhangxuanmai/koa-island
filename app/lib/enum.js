function isThisType(value) {
  for (let key in this) {
    if (this[key] === value) return true;
  }
  return false
}
const LoginTypeMap = new Map([
  [100, 'USER_MINI_PROGRAN'],
  [101, 'USER_EMAIL'],
  [102, 'USER_MOBILE'],
  [200, 'ADMIN_EMAIL'],
])

const LoginType = {
  USER_MINI_PROGRAN: 100,
  USER_EMAIL: 101,
  USER_MOBILE: 102,
  ADMIN_EMAIL: 200,
  isThisType
}

module.exports = {
  LoginTypeMap,
  LoginType,
};
