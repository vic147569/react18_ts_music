import { AxiosResponse } from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'

interface HttpInterceptor<T = AxiosResponse> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface HttpRequestConfig<T = AxiosResponse>
  extends InternalAxiosRequestConfig {
  // TODO: headers ???
  headers: any
  interceptors?: HttpInterceptor<T>
}
