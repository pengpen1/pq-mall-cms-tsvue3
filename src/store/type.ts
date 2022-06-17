import { IloginState } from './login/type'
import { ISystemState } from './main/system/type'
import { IDashboardState } from './main/analysis/type'

interface IRootState {
  name: string
  age: number
  entireRole: any[]
  entireDepartment: any[]
  entireMenu: any[]
}
// 这下面的接口是为了使用useStore
interface IRootWithModule {
  loginModule: IloginState
  systemModule: ISystemState
  dashboardModule: IDashboardState
}

type IStoreType = IRootState & IRootWithModule
export { IRootState, IStoreType }
