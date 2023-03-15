import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
// 当前token为固定值 c5932ce5203a472a8144abdc5dbdac35
// const tokenStr = 'c5932ce5203a472a8144abdc5dbdac35'

export function getToken() {
  return Cookies.get(TokenKey)
  // return tokenStr
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
