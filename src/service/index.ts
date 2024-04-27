import { BASE_URL, TIME_OUT } from './config'
import HttpRequest from './request'

const httpRequest = new HttpRequest({
  headers: {},
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default httpRequest
