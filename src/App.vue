<template>
  <div class="rootApp">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  name: 'App'
})
</script>

<style lang="less">
.rootApp {
  width: 100%;
  height: 100%;
}
</style>
