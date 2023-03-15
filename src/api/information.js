// 信息管理
import request from '@/utils/request'

// 获取组织机构详情
export function GetOrganizeDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetOrganizeDetail',
    method: 'post',
    data
  })
}
