// 这个就是经过封装后的hyRequst处理后的返回数据
export interface IDataType<T = any> {
  code: number
  data: T
}
