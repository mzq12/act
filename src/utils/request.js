import axios from 'axios'
import qs from 'qs'
const fetch = axios.create({
  baseURL: 'https://api.example.com',
  timeOur: 5000, // 请求过期时间
  withCredentials: false
})
fetch.interceptors.request.use(
  function(config) {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)
export default fetch
