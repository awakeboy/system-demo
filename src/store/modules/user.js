import { loginAPI, LoadMenuAPI } from '@/api/user'
import { getLoginUser, getTokenInfo } from '@/api/fee'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { Message } from 'element-ui'
import { data } from 'autoprefixer'
import Cookies from 'js-cookie'
import Axios from 'axios'

const state = {
  token: getToken(),
  roles: [],
  user: {},
  balance: 0,
  isTest: '0', // 标记体验账号
  currentUser: null // 监听当前登录账号
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_BALANCE: (state, balance) => {
    state.balance = balance
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USER: (state, user) => {
    state.user = {
      ...state.user,
      ...user
    }
  },
  SET_ACCOUNT: (state, currentUser) => {
    state.currentUser = currentUser
    localStorage['ai-accountid'] = currentUser
  },
  SET_MODEL: (state, isTest) => {
    state.isTest = isTest
  }
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { username, password, orgcode } = userInfo
    return new Promise((resolve, reject) => {
      const params = {
        Login: [
          {
            orgcode: orgcode,
            usercode: username,
            password: password,
            // eslint-disable-next-line no-undef
            // hostIP: returnCitySN.cip || '',
            // eslint-disable-next-line no-undef
            City: lo + '-' + lc || ''
          }
        ]
      }
      // 处理组织机构编码
      if (typeof orgcode === 'object') {
        params.Login[0].orgcode = orgcode[orgcode.length - 1] || ''
      }
      loginAPI(params).then(response => {
        if (response.Rows.result === '1') {
          // 先清空上次的登录状态
          removeToken()
          localStorage.clear()
          const data = response.Data
          const tokenStr = 'c5932ce5203a472a8144abdc5dbdac35'
          // 存储 usercode orgcode token到localStroage中
          localStorage['ai-usercode'] = username
          localStorage['ai-userid'] = data[0].UserID
          localStorage['ai-orgcode'] = params.Login[0].orgcode
          commit('SET_TOKEN', tokenStr)
          setToken(tokenStr)
          resolve()
        } else {
          Message({
            message: response.Rows.remark,
            type: 'error'
          })
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取用户信息-菜单
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      const params = {
        OrganizeCode: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid']
      }
      LoadMenuAPI(params).then(response => {
        localStorage['ai-router'] = JSON.stringify(response.Data)
        commit('SET_ROLES', ['admin'])
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // save token
  async saveToken({ commit }, userInfo) {
    if (userInfo) {
      const info = userInfo.infoStr.infoStr
      const avaiableInfo = JSON.parse(info)
      commit('SET_TOKEN', avaiableInfo.token)
      localStorage['ai-usercode'] = avaiableInfo.usercode
      localStorage['ai-userid'] = avaiableInfo.userID
      localStorage['ai-orgcode'] = avaiableInfo.orgcode
      localStorage['ai-accountid'] = avaiableInfo.accountID
      localStorage['ai-usertype'] = avaiableInfo.userType
      localStorage['ai-rolename'] = avaiableInfo.roleName
      commit('SET_MODEL', avaiableInfo.isTest)
      commit('SET_USER', avaiableInfo)
    }
  },
  // user login
  async getTokenInfo({ dispatch, commit }, userInfo) {
    const roleName = localStorage.getItem('ai-rolename')
    const userType = localStorage.getItem('ai-usertype')
    if (userType === '2' && (roleName !== '1' && roleName !== '0' && roleName !== '')) {
      return
    }
    if (userInfo) {
      const info = userInfo.infoStr.infoStr
      const avaiableInfo = JSON.parse(info)
      return new Promise((resolve, reject) => {
        const params = {
          loginName: avaiableInfo.userName,
          loginPwd: avaiableInfo.password,
          type: avaiableInfo.userType === '1' ? 'elec' : 'cus'
        }
        getTokenInfo(params).then(response => {
          const { data } = response
          Cookies.set('real_token', data.token)
          const params = {
            userId: data.userId,
            token: data.token,
            type: avaiableInfo.userType
          }
          dispatch('getUserInfo', params)
          // commit('SET_TOKEN', data.token)
          // setToken(data.token)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
    setToken(token)
  },
  // get user info
  async getUserInfo({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      if (params.type === '1') {
        Axios({
          method: 'get',
          url: `http://121.41.114.184:8201/customer/web/viewPersonalById/${params.userId}`,
          headers: { 'Authorization': 'Bearer ' + params.token }
        }).then(res => {
          commit('SET_USER', res.data.data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      } else {
        getLoginUser().then(res => {
          // commit('SET_NAME', [res.data.userName])
          commit('SET_USER', res.data)
          // commit('SET_AVATAR', avatar)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      }
    })
  },

  // 登出
  logout({ commit, state, dispatch }) {
    location.reload()
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
    localStorage.clear()
    resetRouter()
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
