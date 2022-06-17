import { hyRequest } from '@/service'
import { IDataType } from '@/service/type'

// 1.获取页面数据
export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType<any>>({
    url: url,
    data: queryInfo
  })
}
// 2.删除某一个数据
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType<any>>({
    url: url
  })
}

// 3.创建新用户
export function createPageData(url: string, newData: any) {
  console.log(newData)
  return hyRequest.post<IDataType<any>>({
    url: url,
    data: newData
  })
}

// 4.编辑用户信息
export function editPageData(url: string, editData: any) {
  return hyRequest.patch<IDataType<any>>({
    url: url,
    data: editData
  })
}
