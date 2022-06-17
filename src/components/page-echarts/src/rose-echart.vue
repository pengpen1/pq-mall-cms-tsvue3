<template>
  <div class="roseEchart">
    <PqEchart :options="options"></PqEchart>
  </div>
</template>

<script setup lang="ts">
import PqEchart from '@/base-ui/echart'
import { computed, defineProps } from 'vue'
import { IDataType } from '../types'

const props = defineProps<{
  roseData: IDataType[]
}>()

const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: [20, 100],
        center: ['55%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped></style>
