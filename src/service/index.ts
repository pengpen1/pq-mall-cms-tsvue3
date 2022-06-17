// service统一出口
import HyRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
import cacheStore from '@/utils/cacheStore'

// const hyRequest2 = new HyRequest({})
const hyRequest = new HyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 每个实例独有的拦截器
  interceptors: {
    requestInterceptors(config) {
      const token = cacheStore.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requsetInterceptorsCatch(err) {
      return err
    },
    responseInterceptors(config) {
      return config
    },
    responseInterceptorsCatch(err) {
      return err
    }
  },
  // 是否展示showLoading
  showLoading: false
})
export { hyRequest }
