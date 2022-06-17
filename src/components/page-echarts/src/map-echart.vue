<template>
  <div class="roseEchart">
    <PqEchart :options="options"></PqEchart>
  </div>
</template>

<script setup lang="ts">
import PqEchart from '@/base-ui/echart'
import { computed, defineProps } from 'vue'
import { IDataType } from '../types'
import { convertData } from '../utils/convert-data'

const props = defineProps<{
  mapData: IDataType[]
}>()

const options = computed(() => {
  return {
    backgroundColor: '#fff',
    title: {
      text: '全国销量统计',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2]
      }
    },
    // 这是那个数值映射到颜色上的那个表的配置
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#fff'
      }
    },
    // 地理编码
    geo: {
      // 相对于谁
      map: 'china',
      roam: 'scale',
      emphasis: {
        areaColor: '#f4cccc',
        borderColor: 'rgb(9, 54, 95)',
        itemStyle: {
          areaColor: '#f4cccc'
        }
      }
    },
    series: [
      {
        name: '销量',
        // 地图上那些散点
        type: 'scatter',
        // 相对于哪个坐标系统
        coordinateSystem: 'geo',
        // 将对应名字的经纬坐标和mapData.value拼接到一个数组里
        data: convertData(props.mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      },
      {
        type: 'map',
        // 注册地图的名字
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  }
})
</script>

<style scoped></style>
