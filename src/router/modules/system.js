/**
 * 系统管理 路由模块
 * 1. 菜单管理
 * 2. 组织机构
 * 3. 部门管理
 * 4. 角色管理
 * 5. 用户管理
 * 6. 数据字典
 * 7. 系统参数
 * 8. 日志管理
 * **/

import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: 'noRedirect',
  name: '系统管理',
  code: 'XTSZ',
  meta: {
    title: '系统管理',
    icon: 'system'
  },
  alwaysShow: true,
  hidden: false,
  children: [
    {
      path: 'MenuManage',
      component: () => import('@/views/system/MenuManage/index'),
      name: '菜单管理',
      code: 'CDDH',
      hidden: false,
      meta: { title: '菜单管理', noCache: true }
    },
    {
      path: 'RoleManage',
      component: () => import('@/views/system/RoleManage/index'),
      name: '角色管理',
      code: 'JSGL',
      hidden: false,
      meta: { title: '角色管理', noCache: true }
    },
    {
      path: 'UserManage',
      component: () => import('@/views/system/UserManage/index'),
      name: '用户管理',
      code: 'YHGL',
      hidden: false,
      meta: { title: '用户管理', noCache: true }
    },
    {
      path: 'CodeManage',
      component: () => import('@/views/system/CodeManage/index'),
      name: '数据字典',
      code: 'SJZD',
      hidden: false,
      meta: { title: '数据字典', noCache: true }
    },
    {
      path: 'LogManage',
      component: () => import('@/views/system/LogManage/index'),
      name: '日志管理',
      code: 'RZGL',
      hidden: false,
      meta: { title: '日志管理', noCache: true }
    },
    {
      path: 'OrganizeManage',
      component: () => import('@/views/system/OrganizeManage/index'),
      name: '组织机构管理',
      code: 'ZZJGGL',
      hidden: false,
      meta: { title: '组织机构管理', noCache: true }
    },
    {
      path: 'DepartmentManage',
      component: () => import('@/views/system/DepartmentManage/index'),
      name: '部门管理',
      code: 'BMGL',
      hidden: false,
      meta: { title: '部门管理', noCache: true }
    }
  ]
}

export default systemRouter
