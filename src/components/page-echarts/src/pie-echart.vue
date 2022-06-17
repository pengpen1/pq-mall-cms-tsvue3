<template>
  <div class="pieEchart">
    <PqEchart :options="options"></PqEchart>
  </div>
</template>

<script setup lang="ts">
import PqEchart from '@/base-ui/echart'
import { IDataType } from '../types'
import { computed, defineProps } from 'vue'

const props = defineProps<{
  pieData: IDataType[]
}>()
const options = computed(() => {
  return {
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        type: 'pie',
        name: '分类数据',
        radius: '50%',
        center: ['50%', '60%'],
        data: props.pieData
      }
    ]
  }
})
</script>

<style scoped></style>
