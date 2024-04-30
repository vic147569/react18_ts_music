import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HttpRequestConfig } from './type'

export default class HttpRequest {
  instance: AxiosInstance

  /**
  |--------------------------------------------------
  | 1. Global interceptor
  | 2. Instance interceptor
  | 3. request interceptor
  |--------------------------------------------------
  */

  constructor(config: HttpRequestConfig) {
    this.instance = axios.create(config)

    // interceptor for each HttpRequest
    this.instance.interceptors.request.use(
      (config) => {
        console.log('request success')
        return config
      },
      (err) => {
        console.log('request failed')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('response success')
        return res.data
      },
      (err) => {
        console.log('response failed')
        return err
      }
    )

    // interceptor for different HttpRequest
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  request<T = any>(config: HttpRequestConfig<T>) {
    // interceptor for different request, cannot add to instance !!!
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // interceptor for different response
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HttpRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: HttpRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HttpRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HttpRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}
