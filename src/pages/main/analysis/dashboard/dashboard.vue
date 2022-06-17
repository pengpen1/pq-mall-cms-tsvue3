<template>
  <div class="dashboard">
    <!-- top totol -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>

    <!-- echart*3 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <PqCard title="分类商品数量(饼图)">
          <pieEchart :pieData="categoryGoodsCount"></pieEchart>
        </PqCard>
      </el-col>
      <el-col :span="10">
        <PqCard title="不同城市商品销量">
          <mapEchart :mapData="addressGoodsSale"></mapEchart>
        </PqCard>
      </el-col>
      <el-col :span="7">
        <PqCard title="分类商品数量(玫瑰图)">
          <roseEchart :roseData="categoryGoodsCount"></roseEchart>
        </PqCard>
      </el-col>
    </el-row>

    <!-- echart*2 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <PqCard title="分类商品的销量">
          <lineEchart v-bind="categoryGoodsSale"></lineEchart>
        </PqCard>
      </el-col>
      <el-col :span="12">
        <PqCard title="分类商品的收藏">
          <barEchart v-bind="categoryGoodsFavor"></barEchart>
        </PqCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import PqCard from '@/base-ui/card'
import {
  pieEchart,
  roseEchart,
  lineEchart,
  barEchart,
  mapEchart
} from '@/components/page-echarts'
import { useStore } from '@/store'
import StatisticalPanel from '@/components/statistical-panel'

export default defineComponent({
  components: {
    PqCard,
    pieEchart,
    roseEchart,
    lineEchart,
    barEchart,
    mapEchart,
    StatisticalPanel
  },
  setup() {
    const store = useStore()
    // 请求dashboard数据
    store.dispatch('dashboardModule/getDashboardDataAction')

    // 2.获取顶部PanelData
    const topPanelData = computed(
      () => store.state.dashboardModule.topPanelDatas
    )

    // 从veux拿到商品数量
    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    // 从vuex拿到商品name、sale
    const categoryGoodsSale = computed(() => {
      const xAxisDtat = []
      const seriesData = []
      const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        if (item.name && item.goodsCount) {
          xAxisDtat.push(item.name)
          seriesData.push(item.goodsCount)
        }
      }
      return { xAxisDtat, seriesData }
    })

    // 从vuex拿到分类商品的收藏数量
    const categoryGoodsFavor = computed(() => {
      const xAxisDtat = []
      const seriesData = []
      const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        if (item.name && item.goodsFavor) {
          xAxisDtat.push(item.name)
          seriesData.push(item.goodsFavor)
        }
      }
      return { xAxisDtat, seriesData }
    })
    // 从veux拿到城市商品销量
    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      topPanelData
    }
  }
})
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 10px;
}
</style>
