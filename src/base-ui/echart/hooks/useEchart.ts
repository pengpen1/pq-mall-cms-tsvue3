import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import ChinaMapData from '../data/china.json'

echarts.registerMap('china', ChinaMapData)
export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  function setOptions(options: EChartsOption) {
    echartInstance.setOption(options)
  }

  // 浏览器宽度改变时，自动改变大小
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  const updateSize = () => {
    echartInstance.resize()
  }
  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
