/**
 *
 * 我的桌面
 * **/

import Layout from '@/layout'
const deskTop = {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  hidden: false,
  meta: {
    title: '系统首页',
    icon: 'dashboard'
  },
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: { title: '系统首页', affix: true }
    }
  ]
}
export default deskTop

