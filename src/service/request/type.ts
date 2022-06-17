import type { AxiosRequestConfig, AxiosResponse } from 'axios'
interface HYRequsetInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requsetInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (err: any) => any
}
// 这里增加拦截器，不能更改人家原本的接口。所以选择继承
interface HyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequsetInterceptors<T>
  // 这里增加泛型接口的原因是 data经过了处理已经不是AxiosResponse类型了
  showLoading?: boolean
}

export { HYRequsetInterceptors, HyRequestConfig }
