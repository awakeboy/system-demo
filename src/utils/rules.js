// 手机号
export const validateMobile = (rule, value, callback) => {
  if (value.trim()) {
    // 验证手机号正则
    const reg = /^1[3456789]\d{9}$/
    if (!reg.test(value.trim())) {
      callback(new Error('手机号格式错误'))
    }
  }
  callback()
}
// 手机号/联系电话（只通过区号+7位及以上的座机号码）
export const ContactsTel = (rule, value, callback) => {
  if (value.trim()) {
    // 验证手机号正则
    const reg = /^1[3456789]\d{9}$/
    // 区号+座机号码
    const reg1 = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/
    // 区号+座机号码（不间隔）
    const reg2 = /^0\d{2,3}\d{7,8}$/

    // 区号+座机号码+分机号码

    const reg3 = /^0\d{2,3}-[2-9][0-9]{6,7}-\d{1,4}$/
    // 区号+座机号码（拆分形式）

    const reg4 = /^\d{3,4}-\d{3,4}-\d{3,4}$/

    if (!reg.test(value.trim()) && !reg1.test(value.trim()) && !reg2.test(value.trim()) && !reg3.test(value.trim()) && !reg4.test(value.trim())) {
      callback(new Error('电话号码格式错误'))
    }
  }
  callback()
}

// 身份证号
export const validateIDNumber = (rule, value, callback) => {
  if (value.trim()) {
    // 验证手机号正则
    const reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
    if (!reg.test(value.trim())) {
      callback(new Error('身份证号格式错误'))
    }
  }
  callback()
}

// 支付宝账号
export const validateAliPay = (rule, value, callback) => {
  if (value.trim()) {
    // 验证手机号正则
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const reg1 = /^[1][3,5,6,7,8,9][0-9]{9}$/
    if (!reg.test(value.trim()) && !reg1.test(value.trim())) {
      callback(new Error('支付宝账号格式错误'))
    }
  }
  callback()
}
/**
 * javascript验证纳税人识别号格式
 * @param  taxId [纳税人识别号]
 * @return true格式正确，false格式错误
 */
export const checkTaxId = (rule, taxId, callback) => {
  if (!checkTaxpayerId(taxId)) {
    callback(new Error('纳税人识别号格式错误'))
  }
  callback()
}
function checkTaxpayerId(taxpayerId) {
  if (taxpayerId !== '' && taxpayerId.length === 15) {
    var addressCode = taxpayerId.substring(0, 6)
    // 校验地址码
    var check = checkAddressCode(addressCode)
    if (!check) {
      return false
    }
    // 校验组织机构代码
    var orgCode = taxpayerId.substring(6, 9)
    check = isValidOrgCode(orgCode)
    if (!check) {
      return false
    }
    return true
  } else {
    return false
  }
}
function checkAddressCode(addressCode) {
  var provinceAndCitys = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  }
  var check = /^[1-9]\d{5}$/.test(addressCode)
  if (!check) return false
  if (provinceAndCitys[parseInt(addressCode.substring(0, 2))]) {
    return true
  } else {
    return false
  }
}
function isValidOrgCode(value) {
  if (value !== '') {
    var part1 = value.substring(0, 8)
    var part2 = value.substring(value.length - 1, 1)
    var ws = [3, 7, 9, 10, 5, 8, 4, 2]
    var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var reg = /^([0-9A-Z]){8}$/
    if (!reg.test(part1)) {
      return true
    }
    var sum = 0
    for (var i = 0; i < 8; i++) {
      sum += str.indexOf(part1.charAt(i)) * ws[i]
    }
    var C9 = 11 - (sum % 11)
    var YC9 = part2 + ''
    if (C9 === 11) {
      C9 = '0'
    } else if (C9 === 10) {
      C9 = 'X'
    } else {
      C9 = C9 + ''
    }
    return YC9 !== C9
  }
}
