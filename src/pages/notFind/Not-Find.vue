<template>
  <div class="not-find">
    <transition name="coderpen" mode="out-in">
      <h2 v-if="lock">
        这个页面还没开发呢！去别的页面看看吧，
        <el-icon @click="clossText" class="text"><CircleCloseFilled /></el-icon>
      </h2>
      <h2 v-else>
        需要回到上一页吗？
        <el-icon @click="$router.back()" style="cursor: pointer"
          ><Promotion
        /></el-icon>
      </h2>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { onMounted, ref } from 'vue'
export default defineComponent({
  setup() {
    const lock = ref(false)
    onMounted(() => {
      lock.value = true
    })

    function clossText() {
      lock.value = false
    }
    return {
      lock,
      clossText
    }
  }
})
</script>

<style scoped lang="less">
.not-find {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.coderpen-enter-from,
.coderpen-leave-to {
  opacity: 0;
  transform: translateY(200px) scale(0.8);
}
.coderpen-enter-to,
.coderpen-leave-from {
  opacity: 1;
  transform: translateY(0px) scale(1);
}
.coderpen-enter-active,
.coderpen-leave-active {
  transition: all 0.8s ease;
}

.text {
  cursor: pointer;
}
</style>
