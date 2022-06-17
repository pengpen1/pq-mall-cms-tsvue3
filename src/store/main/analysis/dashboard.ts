import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { IDashboardState } from './type'
import {
  getCategoryGoodsSale,
  getAddressGoodsSale,
  getCategoryGoodsFAvor,
  getCategoryGoodsCount,
  getAmountList,
  getGoodsSaleTop10
} from '@/service/main/analysis/dashboard'

export const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: {
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: [],
    topPanelDatas: [],
    goodsSaleTop10: []
  },
  mutations: {
    changeCategoryGoodsCount(state, categoryGoodsCount) {
      state.categoryGoodsCount = categoryGoodsCount
    },
    changeCategoryGoodsSale(state, categoryGoodsSale) {
      state.categoryGoodsSale = categoryGoodsSale
    },
    changeCategoryGoodsFavor(state, categoryGoodsFavor) {
      state.categoryGoodsFavor = categoryGoodsFavor
    },
    changeAddressGoodsSale(state, addressGoodsSale) {
      state.addressGoodsSale = addressGoodsSale
    },
    changeTopPanelDatas(state, topPanelDatas) {
      state.topPanelDatas = topPanelDatas
    },
    changeGoodsSaleTop10(state, goodsSaleTop10) {
      state.goodsSaleTop10 = goodsSaleTop10
    }
  },
  getters: {},
  actions: {
    async getDashboardDataAction({ commit }) {
      // 1.请求数据
      const categoryGoodsCount = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCount.data)

      const categoryGoodsFavor = await getCategoryGoodsFAvor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavor.data)

      const categoryGoodsSale = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categoryGoodsSale.data)

      const addressGoodsSale = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsSale.data)

      const saleTop10 = await getGoodsSaleTop10()
      commit('changeGoodsSaleTop10', saleTop10.data)

      const resultTopPanelDatas = await getAmountList()
      commit('changeTopPanelDatas', resultTopPanelDatas.data)
    }
  }
}
