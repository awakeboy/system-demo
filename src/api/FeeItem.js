// 费用管理
import request from '@/utils/request'

// 统计
export function StatisticsAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=Statistics',
    method: 'post',
    data
  })
}

// 成为会员
export function BecomeMmemberAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=BecomeMmember',
    method: 'post',
    data
  })
}

// 获取设计院资质
export function GetLevelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetLevel',
    method: 'post',
    data
  })
}
