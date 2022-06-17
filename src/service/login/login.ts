import { hyRequest } from '../index'
import { IRequestAccount } from './type'
import { IloginResult } from './type'
import { IDataType } from '../type'

// 因为url可能会被改，这里才用枚举类型
enum loginApi {
  loginAccount = '/login',
  // 用法：/users/1
  loginUserInfo = '/users/',
  // 用法：/role/1/menu
  userMenus = '/role/'
}
export function accountLoginRequest(account: IRequestAccount) {
  return hyRequest.post<IDataType<IloginResult>>({
    url: loginApi.loginAccount,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: loginApi.loginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: loginApi.userMenus + id + '/menu',
    showLoading: false
  })
}
