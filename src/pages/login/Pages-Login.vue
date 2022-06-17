<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import LoginPanel from './cpns/LoginPanel.vue'

export default defineComponent({
  components: {
    LoginPanel
  }
})
</script>

<style lang="less" scoped>
@dark-bg: #293146;

.login {
  display: flex;
  width: 100%;
  height: 100%;
  // background: url('../../assets/img/login-bg.svg');
  background: url('../../assets/img/sun-tornado.svg');
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
