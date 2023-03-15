import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import Cookies from 'js-cookie'
import { getToken } from '@/utils/auth'
// import { secret } from '@/utils'
// create an axios instance
const service = axios.create({
  baseURL: `/`, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
const data = {}
// request interceptor
service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = {
        ...data,
        ...config.data
      }
    }
    console.log(JSON.stringify(config.data))
    // if (config.method === 'get') {
    //   config.params = secret(config.params)
    // } else {
    //   if (config.secret === false) {
    //     console.log(config)
    //   } else {
    //     config.data = secret(config.data)
    //   }
    // }
    // do something before request is sent
    if (Cookies.get('real_token')) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation

      config.headers['Authorization'] = `Bearer ${Cookies.get('real_token')}`
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (response.config.responseType === 'blob') {
      return response.data
    }
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 1) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
