
import Layout from '@/layout'

const CommunicationManageRouter = {
  path: '/CommunicationManage',
  component: Layout,
  redirect: 'noRedirect',
  name: '通信管道管理',
  code: 'XTGDGL',
  meta: {
    title: '通信管道管理',
    icon: 'drawing'
  },
  alwaysShow: true,
  hidden: false,
  children: [
    {
      path: 'PipeBill',
      component: () => import('@/views/CommunicationManage/PipeBill/index'),
      name: '通信管道台账',
      code: 'TXGDTZ',
      hidden: false,
      meta: { title: '通信管道台账', noCache: true }
    },
    {
      path: 'PipeCheck',
      component: () => import('@/views/CommunicationManage/PipeCheck/index'),
      name: '通信管道排查',
      code: 'TXGDPC',
      hidden: false,
      meta: { title: '通信管道排查', noCache: true }
    },
    {
      path: 'PipeLease',
      component: () => import('@/views/CommunicationManage/PipeLease/index'),
      name: '通信管道租赁业务',
      code: 'TXGDZLYW',
      hidden: false,
      meta: { title: '通信管道租赁业务', noCache: true }
    }
  ]
}

export default CommunicationManageRouter

