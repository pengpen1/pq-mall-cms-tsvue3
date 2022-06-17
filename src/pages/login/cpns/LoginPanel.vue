<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentPane">
      <el-tab-pane class="pane" name="account">
        <template #label>
          <span class="custom-tabs-label">
            <UserFilled style="width: 1em; height: 1em; margin-right: 8px" />
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="loginAccountRef"></login-account>
      </el-tab-pane>

      <el-tab-pane class="pane" name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <Iphone style="width: 1em; height: 1em; margin-right: 8px" />
            <span>手机登录</span>
          </span>
        </template>

        <login-phone ref="loginPhoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="passwordOptions">
      <el-checkbox v-model="isKeeppd">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="loginButn" @click="executeLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const isKeeppd = ref(true)
    // 被挂载时获取到账号子组件
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentPane = ref('account')

    function executeLogin() {
      // 这里只是通知子组件处理函数
      if (currentPane.value === 'account') {
        loginAccountRef.value?.loginAction(isKeeppd.value)
      } else {
        loginPhoneRef.value?.loginAction()
      }
    }

    return {
      isKeeppd,
      executeLogin,
      loginAccountRef,
      currentPane,
      loginPhoneRef
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: -18vh;
}
.custom-tabs-label {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  width: max-content;
}
.pane {
  width: 240px;
}
// 记住密码区域格式设置
.passwordOptions {
  display: flex;
  justify-content: space-between;
  width: 270px;
}
.loginButn {
  width: 270px;
  margin-top: 8px;
}
</style>
