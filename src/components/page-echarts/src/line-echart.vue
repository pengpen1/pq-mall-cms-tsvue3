<template>
  <div class="roseEchart">
    <PqEchart :options="options"></PqEchart>
  </div>
</template>

<script setup lang="ts">
import PqEchart from '@/base-ui/echart'
import { computed, defineProps } from 'vue'

const props = defineProps<{
  seriesData: number[]
  xAxisDtat: string[]
}>()

const options = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xAxisDtat
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      tirgger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      // xy轴与容器的距离
      left: '3%',
      right: '4%',
      bottom: '3%',
      // xy轴与容器的距离是否要包含文本
      containLabel: true
    },
    series: [
      {
        data: props.seriesData,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style scoped></style>
