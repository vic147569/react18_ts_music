import {
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from 'axios'

export interface HttpInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface HttpRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  headers: any
  interceptors?: HttpInterceptors<T>
}
