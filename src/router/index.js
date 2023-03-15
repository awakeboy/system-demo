import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

// 路由模块
import deskTop from './modules/DeskTop' // 系统管理
import systemRouter from './modules/system' // 系统管理
import CommunicationManageRouter from './modules/Communicate' // 系统管理

/**
 * constantRoutes: 同步路由
 * 一些基础的页面，不需要权限
 * 所有权限的人员都可以浏览
 */
export const constantRoutes = [
  deskTop,
  systemRouter,
  CommunicationManageRouter,
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  },

  {
    path: '*',
    redirect: '/404',
    meta: {
    },
    hidden: true
  }
]

/**
 * asyncRoutes: 异步路由
 * 这些路由根据用户身份动态加载
 */
export const asyncRoutes = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       hidden: true,
  //       meta: { title: '我的桌面', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // deskTop, // 我的桌面
  // systemRouter, // 系统管理
  // CommunicationManageRouter, // 通信管道管理
  // 404 页面必须放到最下面
  // {
  //   path: '*',
  //   redirect: '/404',
  //   meta: {
  //   },
  //   hidden: true
  // }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
