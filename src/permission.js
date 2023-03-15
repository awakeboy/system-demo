import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import Cookies from 'js-cookie'

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // if (to.query.infoStr) {
  //   Cookies.set('Admin-Token', 'c5932ce5203a472a8144abdc5dbdac35')
  //   const infoStr = to.query
  //   localStorage.setItem('infoStr', JSON.stringify(infoStr))
  //   store.dispatch('user/saveToken', { infoStr })
  //   await store.dispatch('user/getTokenInfo', { infoStr })
  //   // 区分体验账号
  //   const userInfo = JSON.parse(infoStr.infoStr)
  //   if (userInfo.isTest === '1') {
  //     location.replace('/#/ServiceItem/ServiceItem')
  //   } else {
  //     location.replace('/')
  //   }
  // } else if (localStorage.getItem('infoStr')) {
  //   if (from.path !== '/login') {
  //     if (localStorage['infoStr']) {
  //       const infoStr = JSON.parse(localStorage.getItem('infoStr'))
  //       store.dispatch('user/saveToken', { infoStr })
  //       await store.dispatch('user/getTokenInfo', { infoStr })
  //     }
  //   }
  // }
  // console.log(to, from)
  // 根据token判断用户是否登录
  // 动态添加可访问路由
  if (from.path === '/') {
    const accessRoutes = await store.dispatch('permission/generateRoutes')
    router.addRoutes(accessRoutes)
    next()
  } else {
    next()
  }
  // next()
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // 如果有token && 打开登录页面，跳转首页
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     // 每次getInfo之后，设定admin
  //     const hasRoles = store.getters.roles && store.getters.roles.length > 0
  //     if (hasRoles) {
  //       next()
  //     } else {
  //       try {
  //         // 获取菜单列表，vuex + 服务端请求，需要await处理
  //         await store.dispatch('user/getInfo')
  //         // 根据菜单列表生成可访问路由映射
  //         const accessRoutes = await store.dispatch('permission/generateRoutes')

  //         // 动态添加可访问路由
  //         router.addRoutes(accessRoutes)

  //         // 破解方法，以确保addRoutes是完整的
  //         // 设置replace: true，这样导航就不会留下历史记录
  //         next({ ...to, replace: true })
  //       } catch (error) {
  //         // 删除令牌，进入登录页面重新登录
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/

  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // 在免费登录白名单，直接去
  //     next()
  //   } else {
  //     // 没有访问权限的其他页面被重定向到登录页面。
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // 完成 progress bar
  NProgress.done()
})
