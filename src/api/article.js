// 文章管理
import request from '@/utils/request'

// 文章列表
export function GetHelpMainListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetHelpMainList',
    method: 'post',
    data
  })
}

// 新增文章
export function AddHelpMainAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddHelpMain',
    method: 'post',
    data
  })
}

// 修改文章
export function UpdateHelpMainAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateHelpMain',
    method: 'post',
    data
  })
}

// 文章详情
export function GetHelpMainDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetHelpMainDetail',
    method: 'post',
    data
  })
}

// 删除文章
export function DeleteHelpMainAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteHelpMain',
    method: 'post',
    data
  })
}

