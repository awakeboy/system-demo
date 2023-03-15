import request from '@/utils/request'

// 登录接口
export function loginAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=Login',
    method: 'post',
    data
  })
}

// 组织机构
export function orgListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetOrg',
    method: 'post',
    data
  })
}

// 获取菜单信息
export function getInfoAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetALLMenu',
    method: 'post',
    data
  })
}

// 获取菜单信息
export function LoadMenuAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=LoadMenu',
    method: 'post',
    data
  })
}

// 我的桌面
export function MyDesktopAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=MyDesktop',
    method: 'post',
    data
  })
}
