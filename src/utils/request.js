import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // eslint-disable-next-line no-undef
  baseURL: webBaseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // 请求超时时间
})

const pending = {}
const CancelToken = axios.CancelToken
const removePending = (key, isRequest = false) => {
  if (pending[key] && isRequest) {
    pending[key]('取消重复请求')
  }
  delete pending[key]
}
const getRequestIdentify = (config, isReuest = false) => {
  let url = config.url
  if (isReuest) {
    url = config.baseURL + config.url.substring(1, config.url.length)
  }
  return config.method === 'get' ? encodeURIComponent(url + JSON.stringify(config.params)) : encodeURIComponent(config.url + JSON.stringify(config.data))
}

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 拦截重复请求(即当前正在进行的相同请求)
    const requestData = getRequestIdentify(config, true)
    removePending(requestData, true)
    console.log(JSON.stringify(config.data))

    config.cancelToken = new CancelToken((c) => {
      pending[requestData] = c
    })
    // 请求前可更改一些配置
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    const reqData = config.data || {}
    try {
      reqData.Token = 'c5932ce5203a472a8144abdc5dbdac35'
      config.data = reqData
    } catch (err) {
      console.log(err)
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 把已经完成的请求从 pending 中移除
    const requestData = getRequestIdentify(response.config)
    removePending(requestData)

    return res
  },
  error => {
    console.log('err' + error) // for debug
    if (error.message !== '取消重复请求') {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    } else {
      return Promise.reject()
    }
  }
)

export default service
