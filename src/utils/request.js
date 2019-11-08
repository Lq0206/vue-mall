import axios from 'axios'
import { Notify } from 'vant'

console.log('api', process.env)
//创建实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 10000 // request timeout
})

// 请求配置
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应配置
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== null && res.code !== 0) {
      if (res.code !== 200) {
        Notify({ type: 'danger', message: res.message, duration: 2000 })
      }
      throw res
    }
    console.log(response)
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
