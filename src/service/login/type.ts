export interface IRequestAccount {
  name: string
  password: number
}
// 写这个接口的目的是因为，返回的数据里的data的data可能是菜单、用户信息等等
// 登录信息-返回结果
export interface IloginResult {
  id: number
  name: string
  token: string
}

// 用户信息-角色
export interface IRole {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}
// 用户信息-部门
export interface IDepartment {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}
export interface IUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enabel: number
  createAt: Date
  updateAt: Date
  role: IRole
  department: IDepartment
}
