import { httpRequest, httpRequest2 } from '..'

interface IHomeData {
  data: any
  returnCode: string
  success: boolean
}

httpRequest
  .request<IHomeData>({
    headers: {},
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res.data, res.returnCode, res.success)
  })

httpRequest2
  .request({
    headers: {},
    url: '/entire/list',
    params: {
      offset: 0,
      size: 20
    }
  })
  .then((res) => {
    console.log(res)
  })

interface IHighScoreData {
  list: any[]
  subtitle: string
  title: string
  type: string
  _id: string
}

httpRequest2
  .request<IHighScoreData>({
    headers: {},
    url: '/home/highscore',
    interceptors: {
      // interceptor for this request
      requestSuccessFn(config) {
        console.log('http2 highscore req success')
        return config
      },
      responseSuccessFn(res) {
        console.log('http2 highscore res success')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res.title, res.subtitle)
  })
