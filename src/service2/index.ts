import { BASE_URL, TIME_OUT } from './config'
import HttpRequest from './request'

export const httpRequest = new HttpRequest({
  headers: {},
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const httpRequest2 = new HttpRequest({
  headers: {},
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 10000,
  // interceptor for httpRequest2
  interceptors: {
    requestSuccessFn(config) {
      console.log('http2 request success')
      return config
    },
    requestFailureFn(err) {
      console.log('http2 request failure')
      return err
    },
    responseSuccessFn(res) {
      console.log('http2 response success')
      return res
    },
    responseFailureFn(err) {
      console.log('http2 response failure')
      return err
    }
  }
})
