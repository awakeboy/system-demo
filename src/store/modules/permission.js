import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    // state.routes = constantRoutes.concat(routes)
    state.routes = constantRoutes
  }
}

const actions = {
  // 生成路由
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let aiRouter = localStorage['ai-router'] || []
      try {
        aiRouter = JSON.parse(aiRouter)
      } catch (err) {
        // 登出
        aiRouter = []
      }
      // 筛选账户类型下属的菜单(弃用)
      // function filterMenu(code) {
      //   const roleName = localStorage.getItem('ai-rolename') ? localStorage.getItem('ai-rolename') : ''
      //   if (roleName.length > 1) { // 组织机构用户（false：显示菜单，true：隐藏）
      //     switch (code) {
      //       case 'XTSZ':
      //         return true
      //       case 'HTXXWH':
      //         return true
      //       case 'FWQXMGL':
      //         return false
      //       case 'FYZX':
      //         return true
      //       case 'XXWH':
      //         return true
      //       case 'WZGL':
      //         return true
      //       case 'TZJH': // 图纸校核
      //         return true
      //       default:
      //         return true
      //     }
      //   } else if (roleName === '1') { // 组织机构管理员
      //     switch (code) {
      //       case 'XTSZ': // 系统管理
      //         return false
      //       case 'HTXXWH': // 绘图信息管理
      //         return false
      //       case 'FWQXMGL': // 项目管理
      //         return true
      //       case 'FYZX': // 费用中心
      //         return false
      //       case 'XXWH': // 信息维护
      //         return false
      //       case 'WZGL': // 文章管理
      //         return true
      //       case 'TZJH': // 图纸校核
      //         return false
      //       default:
      //         return true
      //     }
      //   } else if (roleName === '') { // 超管
      //     switch (code) {
      //       case 'XTSZ': // 系统管理
      //         return false
      //       case 'HTXXWH': // 绘图信息管理
      //         return false
      //       case 'FWQXMGL': // 项目管理
      //         return false
      //       case 'FYZX': // 费用中心
      //         return true
      //       case 'XXWH': // 信息维护
      //         return false
      //       case 'WZGL': // 文章管理
      //         return false
      //       case 'TZJH': // 图纸校核
      //         return false
      //       default:
      //         return false
      //     }
      //   } else if (roleName === '0') { // 个人账户
      //     switch (code) {
      //       case 'XTSZ': // 系统管理
      //         return true
      //       case 'HTXXWH': // 绘图信息管理
      //         return true
      //       case 'FWQXMGL': // 项目管理
      //         return false
      //       case 'FYZX': // 费用中心
      //         return false
      //       case 'XXWH':
      //         return true
      //       case 'WZGL':
      //         return true
      //       case 'TZJH': // 图纸校核
      //         return true
      //       default:
      //         return true
      //     }
      //   }
      // }
      // 递归
      function getList(arr1, arr2) { // 服务端菜单，前端菜单
        arr1.forEach(v1 => {
          arr2.forEach(v2 => {
            if (v1.MenuCode === v2.code) { // 当匹配到name相同的菜单
              // v2.hidden = v2.redirect ? filterMenu(v2.code) : false // 前端菜单hidden: false 代表可见
              v2.hidden = false // 前端菜单hidden: false 代表可见
              v2.meta.title = v1.MenuName
              v2.meta.MenuSeq = Number(v1.MenuSeq)
              if (v1.children && v1.children.length !== 0 && v2.children && v2.children.length !== 0) { // 如果还有children，继续遍历
                getList(v1.children, v2.children)
              }
            } else {
              // 单独处理我的桌面
              if (v2.meta.title === '我的桌面') {
                const infoStr = JSON.parse(localStorage.getItem('infoStr'))
                // 体验账号不显示我的桌面
                if (infoStr && JSON.parse(infoStr.infoStr).isTest === '1') {
                  v2.hidden = true
                } else {
                  v2.hidden = false
                }
              }
            }
          })
        })
      }
      getList(aiRouter, asyncRoutes)
      // 排序
      const sortListFun = (arr) => {
        arr.forEach(v => {
          if (v.children && v.children !== 0) {
            v.children = sortListFun(v.children)
          }
        })
        // 冒泡
        for (let j = 0; j < arr.length - 1; j++) {
          for (let i = 0; i < arr.length - 1 - j; i++) {
            if ((arr[i].meta.MenuSeq || 0) > (arr[i + 1].meta.MenuSeq || 0)) {
              const temp = arr[i]
              arr[i] = arr[i + 1]
              arr[i + 1] = temp
            }
          }
        }
        return arr
      }
      const sortList = sortListFun(asyncRoutes)
      const accessedRoutes = sortList
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
