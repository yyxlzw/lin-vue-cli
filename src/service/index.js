import LINRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

export const request = new LINRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    // 发送成功拦截器
    requestInterceptor: (config) => {
      return config
    },

    // 发送失败拦截器
    requestInterceptorCatch: (err) => {
      return err
    },

    // 响应成功拦截器
    responseInterceptor: (res) => {
      return res
    },

    // 响应失败拦截器
    responseInterceptorCatch: (err) => {
      return err
    },
  },
})
