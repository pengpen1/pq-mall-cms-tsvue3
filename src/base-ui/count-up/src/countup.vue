<template>
  <span ref="counterRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
// http://inorganik.github.io/countUp.js/
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'

export default defineComponent({
  components: {},
  props: {
    number: {
      type: Number,
      default: 0
    },
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props) {
    const counterRef = ref<HTMLDivElement | null>(null)
    const instance = ref<CountUp | null>(null)

    watch(
      () => props.number,
      // number方法变化时，更新
      () => {
        update(props.number)
      }
    )
    // 拿到ref
    onMounted(() => {
      createCounter()
    })
    const defaultOptions: CountUpOptions = {
      decimalPlaces: 2, // 保留两位
      duration: 2, // 动画时长
      separator: ',', // 千位分割
      decimal: '.', // 小数分割
      prefix: '￥' // 单位
    }

    // 创建一个计数实例
    const createCounter = () => {
      if (!counterRef.value) return
      const opts: CountUpOptions = Object.assign(defaultOptions, props.option)
      instance.value = new CountUp(counterRef?.value, props.number, opts)
      // 闭眼猜都知道要，html、数字、配置
      start()
    }

    const start = () => {
      if (!instance.value) return
      // 启动
      instance?.value.start()
    }
    const update = (number: number) => {
      if (!instance.value) return
      // 更新
      instance?.value.update(number)
    }
    return {
      counterRef
    }
  }
})
</script>

<style scoped lang="less"></style>
