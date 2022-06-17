<template>
  <div class="roseEchart">
    <PqEchart :options="options"></PqEchart>
  </div>
</template>

<script setup lang="ts">
import PqEchart from '@/base-ui/echart'
import { computed, defineProps } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
  seriesData: number[]
  xAxisDtat: string[]
}>()

const options = computed(() => {
  return {
    xAxis: {
      data: props.xAxisDtat,
      axisLabel: {
        // 文本在柱子上面
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        // 滚动缩放数据
        type: 'inside'
      }
    ],
    grid: {
      // xy轴与容器的距离
      left: '3%',
      right: '4%',
      bottom: '3%',
      // xy轴与容器的距离是否要包含文本
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          // 设置渐变的
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.seriesData
      }
    ]
  }
})
</script>

<style scoped></style>
