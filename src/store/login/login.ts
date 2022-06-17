import { IloginState } from './type'
import { IRootState } from '../type'
import { Module } from 'vuex'
import { IRequestAccount } from '@/service/login/type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import cacheStore from '@/utils/cacheStore'
import router from '@/router'
import { mapMenusToPermissions, mapMenusToRoutes } from '@/utils/map-menus'

export const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {
        account: '',
        password: ''
      },
      userMenu: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenu = userMenu

      // 1.将根据菜单得到的routes添加到 main.children里面
      const routes = mapMenusToRoutes(userMenu)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 2.获取用户按钮权限(type==3)数组
      const permissions = mapMenusToPermissions(userMenu)
      // 3.保存permissions
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IRequestAccount) {
      // 继续用then来获取的话回调太多了
      const loginResult = await accountLoginRequest(payload)
      // 响应数据是个对象里面有code，data
      const { id, token } = loginResult.data
      commit('changeToken', token)
      cacheStore.setCache('token', token)

      // 发送初始化的请求(role\department)
      dispatch('getInitialDataAction', null, {
        root: true
      })

      // 2.继续请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)

      // 3.为了用户能在重进浏览器后还能看到首页，缓存userinfo
      cacheStore.setCache('userinfo', userInfo)

      // 4.根据不同角色的不同id请求菜单
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenu = userMenuResult.data
      commit('changeUserMenu', userMenu)
      cacheStore.setCache('usermenu', userMenu)

      // 5.跳转到首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction')
    },
    loadLocalLogin({ commit, dispatch }) {
      // 1.初始化vuex
      const token = cacheStore.getCache('token')
      if (token) {
        commit('changeToken', token)
        // 发送初始化的请求(role\department)
        dispatch('getInitialDataAction', null, {
          root: true
        })
      }
      const userinfo = cacheStore.getCache('userinfo')
      if (userinfo) {
        commit('changeUserInfo', userinfo)
      }
      const usermenu = cacheStore.getCache('usermenu')
      if (usermenu) {
        commit('changeUserMenu', usermenu)
      }
    }
  }
}
