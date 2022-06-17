import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import { IRootState, IStoreType } from './type'
import { loginModule } from './login/login'
import { systemModule } from './main/system/system'
import { getPageListData } from '@/service/main/system/system'
import { dashboardModule } from './main/analysis/dashboard'

const store = createStore<IRootState>({
  modules: {
    loginModule,
    systemModule,
    dashboardModule
  },
  state: () => {
    return {
      name: 'coderpen',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, department) {
      state.entireDepartment = department
    },
    changeEntireRole(state, role) {
      state.entireRole = role
    },
    changeEntireMenu(state, menu) {
      state.entireMenu = menu
    }
  },
  actions: {
    // 为lmodal请求的数据
    async getInitialDataAction({ commit }) {
      // 1.请求部门数据
      const departmentData = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const departmentList = departmentData.data.list
      //2.请求角色数据
      const roleData = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const roleList = roleData.data.list
      // 3.请求菜单数据
      const menuData = await getPageListData('/menu/list', {})
      const menuList = menuData.data.list
      // 4.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  }
})

export default store

export function setupStore() {
  // 初始化数据，包括刷新
  store.dispatch('loginModule/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return vuexUseStore()
}
