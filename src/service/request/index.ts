import axios, { AxiosInstance } from 'axios'
import type { HYRequsetInterceptors, HyRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

// 常量设置
const DEFAULT_LOADING = true

class HyRequest {
  instance: AxiosInstance
  interceptors?: HYRequsetInterceptors
  loading?: LoadingInstance
  showLoading: boolean

  constructor(config: HyRequestConfig) {
    // 1.创建axios
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 2.定制每个实例独有的拦截器，来自config
    if (config.interceptors) {
      this.interceptors = config.interceptors
      this.instance.interceptors.request.use(
        this.interceptors.requestInterceptors,
        this.interceptors.requsetInterceptorsCatch
      )
      this.instance.interceptors.response.use(
        this.interceptors.responseInterceptors,
        this.interceptors.responseInterceptorsCatch
      )
    }
    // 3.添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          // 3.1开启loading服务
          this.loading = ElLoading.service({
            lock: true,
            text: '小彭同学正在飞快获取数据，请稍等一下！',
            background: 'rgba(0,,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log(err)
      }
    )
    // 3.添加所有实例都有的拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // 移除loading服务
        if (this.showLoading) {
          setTimeout(() => {
            this.loading?.close()
          }, 1000)
        }

        const data = res.data
        return data
      },
      (err) => {
        console.log(err)
        // 移除loading服务
        if (this.showLoading) {
          this.loading?.close()
        }

        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }

  // 4.封装实例方法
  // request方法封装
  request<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.定制单个请求是否需要loading
      if (config.showLoading === true) {
        this.showLoading = true
      }
      if (config.showLoading === false) {
        this.showLoading = false
      }

      // 2.定制单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        // 原理就是这个钩子函数返回的是config，用完后换回来给下一个函数就是了
        config = config.interceptors.requestInterceptors(config)
      }
      // 3.获取数据并处理
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 3.1处理单个请求的拦截器
          if (config.interceptors?.responseInterceptors) {
            // 拦截器说白了就是钩子函数，合适的时候回调
            res = config.interceptors.responseInterceptors(res)
          }
          // 3.2初始化showloading
          this.showLoading = DEFAULT_LOADING

          // 3.3将结果返回出去
          resolve(res)
        })
        .catch((err) => {
          // 失败也得初始化showloading
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  // get方法封装
  get<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  // post方法封装
  post<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  // post方法封装
  delete<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  // post方法封装
  patch<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default HyRequest
