/* 本文件内使用e电工的接口地址 */
import request from '@/utils/http'

export function getLoginUser(params) {
  return request({
    url: `http://121.41.114.184:8201/customer/getLoginUser`,
    method: 'get',
    params
  })
}
export function getTokenInfo(data) {
  return request({
    url: `http://121.41.114.184:8201/customer/api/login`,
    method: 'post',
    data
  })
}
// 费用总览
export function getCostOverview(params) {
  return request({
    url: `http://121.41.114.184:8201/customer/org/app/set/getCostOverview`,
    method: 'get',
    params
  })
}
// 充值申请详情
export function getCashinInfoById(params) {
  return request({
    url: 'http://121.41.114.184:8201/finance/finance/getCashinInfoById',
    method: 'get',
    params
  })
}
// 根据账户ID查询账户信息
export function getAccountInfoById(params) {
  return request({
    url: 'http://121.41.114.184:8201/finance/finance/getAccountInfoById',
    method: 'get',
    params
  })
}
// 账号余额使用统计
export function getAccountCostUseStatistics(data) {
  return request({
    url: `http://121.41.114.184:8201/customer/org/app/set/getAccountCostUseStatistics`,
    method: 'post',
    data
  })
}
export function getAccountCostUseStatisticsByPage(data) {
  return request({
    url: `http://121.41.114.184:8201/customer/org/app/set/getAccountCostUseStatisticsByPage`,
    method: 'post',
    data
  })
}
// 增加充值记录并发起支付(支付宝网页)
export const addCashinWithAlipay = data => {
  return request({
    url: 'http://121.41.114.184:8201/finance/finance/addCashinWithAlipay',
    method: 'post',
    data
  })
}
// 增加充值记录
export const addCashin = data => {
  return request({
    url: '/api/finance/finance/addCashin',
    method: 'post',
    data
  })
}
// 根据参数查询电工账户流水
export const tradePagePay = data => {
  return request({
    url: 'http://121.41.114.184:8201/finance/wechat/tradePagePay',
    method: 'post',
    data
  })
}
// 发送短信web用
export function sendSmsPle(data) {
  return request({
    url: '/api/general/sms/sendSmsPle',
    method: 'post',
    data
  })
}
// 企业购买产品订单记录
export function listOrgBuyOrder(data) {
  return request({
    url: '/api/platform/appPackagesBuy/listOrgBuyOrder',
    method: 'post',
    data
  })
}
// 根据ID查询应用套餐购买
export function viewAppPackagesBuyById(params) {
  return request({
    url: '/api/platform/appPackagesBuy/viewAppPackagesBuyById',
    method: 'get',
    params
  })
}
// 应用套餐获取支付宝表单
export function getAlipayForm(params) {
  return request({
    url: '/api/platform/appPackagesBuy/getAlipayForm',
    method: 'get',
    params
  })
}
// 应用套餐购买付款
export function appBuyPay(data) {
  return request({
    url: '/api/platform/appPackagesBuy/appBuyPay',
    method: 'post',
    data
  })
}
// 根据参数查询电工账户流水
export const selectByPageNumSize = data => {
  return request({
    url: '/api/finance/finance/selectByPageNumSize',
    method: 'post',
    data
  })
}
// 分页查询电工账户流水集合
export const pageAccountHistory = data => {
  return request({
    url: 'http://121.41.114.184:8201/finance/finance/pageAccountHistory',
    method: 'post',
    data
  })
}
// 增加提现记录
export const addCashout = data => {
  return request({
    url: '/api/finance/finance/addCashout',
    method: 'post',
    data
  })
}
// 发送验证码
export function sendVerficationCode(params) {
  return request({
    url: '/api/general/sms/sendVerficationCode',
    method: 'get',
    params
  })
}
// 余额分配列表总(列表上面部分)
export function getOrgAppSetTotalVo(data) {
  return request({
    url: `/api/customer/org/app/set/getOrgAppSetTotalVo`,
    method: 'post',
    data
  })
}
// 余额分配列表
export function getOrgUserSetList(data) {
  return request({
    url: `/api/customer/org/app/set/getOrgUserSetList`,
    method: 'post',
    data
  })
}
// 添加机构应用设置明细
export function addOrgAppSetDetail(data) {
  return request({
    url: `/api/customer/org/app/set/addOrgAppSetDetail`,
    method: 'post',
    data
  })
}
