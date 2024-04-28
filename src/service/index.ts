// import { BASE_URL, TIME_OUT } from './config'
import HttpRequest from './request'

const httpRequest = new HttpRequest({
  headers: {},
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: import.meta.env.VITE_TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default httpRequest
