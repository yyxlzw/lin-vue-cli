import axios from 'axios'

class LINRequest {
  instance
  interceptor

  constructor(config) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.interceptor = config.interceptor

    // 根据自己new类的时候传进来的拦截器设置
    // 设置发送拦截器
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )

    // 设置响应拦截器
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      // 单个请求拦截器
      if (config.interceptor?.requestInterceptor) {
        config = config.interceptor.requestInterceptor(config)
      }

      this.instance
        .request(config)
        .then((res) => {
          // 单个响应拦截器 对数据的处理
          if (config.interceptor?.responseInterceptor) {
            res = config.interceptor.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }

  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }

  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default LINRequest