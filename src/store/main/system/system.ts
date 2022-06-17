import { ISystemState } from './type'
import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import {
  deletePageData,
  getPageListData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

export const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userCount: 0,
      departmentList: [],
      departmentCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0,
      // 系统
      goodsList: [],
      goodsCount: 0,
      categoryCount: 0,
      categoryList: [],
      // 商品
      storyCount: 0,
      storyList: []
      // 故事
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeDepartmentList(state, departmentList: any[]) {
      state.departmentList = departmentList
    },
    changeDepartmentCount(state, departmentCount: number) {
      state.departmentCount = departmentCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    },
    changeCategoryCount(state, categoryTotalCount: number) {
      state.categoryCount = categoryTotalCount
    },
    changeCategoryList(state, categoryList: any[]) {
      state.categoryList = categoryList
    },
    changeStoryCount(state, storyTotalCount: number) {
      state.storyCount = storyTotalCount
    },
    changeStoryList(state, storyList: any[]) {
      state.storyList = storyList
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 请求数据
    async getPageListAction({ commit }, payload) {
      // 1.拿到pageurl
      const pageName = payload.pageName
      let pageUrl = ''

      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        default:
          pageUrl = `/${pageName}/list`
      }
      // 2.请求数据
      const pageListData = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageListData.data

      // 3.保存数据到vuex
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    // 删除数据
    async deletePageDataAction(context, payload: any) {
      // /users/4
      const { pageName, id } = payload
      let pageUrl = `/${pageName}/${id}`
      if (pageName === 'user') {
        pageUrl = `/users/${id}`
      }
      // 调用删除网络请求
      console.log(pageUrl)
      await deletePageData(pageUrl)
      // 调用获取数据网络请求
      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 新增数据
    async createPageDataAction({ dispatch }, payload: any) {
      // 1.创建新用户
      const { pageName, newData } = payload
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users'
          break
        default:
          pageUrl = `/${pageName}`
      }
      await createPageData(pageUrl, newData)

      // 2.重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 编辑数据
    async editPageDataAction({ dispatch }, payload: any) {
      // 1.发送patch请求来编辑数据
      const { pageName, editData, id } = payload
      let pageUrl = `/${pageName}/${id}`
      if (pageName === 'user') {
        pageUrl = `/users/${id}`
      }
      await editPageData(pageUrl, editData)

      // 2.重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
