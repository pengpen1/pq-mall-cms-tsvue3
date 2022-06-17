<template>
  <div class="dashboard">
    <h2>可视化库echarts的学习</h2>
    <div
      class="rootEcharts"
      ref="echartsRef"
      :style="{ width: '800px', height: '600px' }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  setup() {
    const echartsRef = ref<HTMLElement>()
    onMounted(() => {
      if (echartsRef.value) {
        // 1.初始化echarts的实例
        const echartsInstance = echarts.init(echartsRef.value, 'light', {
          renderer: 'svg'
        })
        // 2.编写配置
        const options = {
          title: {
            text: 'echarts初使用',
            subText: '柱状图'
          },
          tooltip: {
            tirgger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            // 图例，默认会取数据里的name
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          // 除非知道具体的区间，不然还是让它自己从数据那计算吧
          yAxis: {},
          // 系列
          series: [
            {
              name: '销量',
              type: 'bar',
              // 和x轴一一对应的
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }
        // 3.设置配置，开始绘制
        echartsInstance.setOption(options)
      }
    })

    return {
      echartsRef
    }
  }
})
</script>

<style scoped></style>
