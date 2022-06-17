<template>
  <div class="loginAccount">
    <el-form label-width="65px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password> </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import rules from '../config/ruler-account'
import { ElForm } from 'element-plus'
import cacheStore from '../../../utils/cacheStore'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localStorage.getItem('name')?.slice(1, -1) ?? '',
      password: localStorage.getItem('password')?.slice(1, -1) ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    // 关于账号登录的逻辑
    function loginAction(isKeepPassword: boolean) {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判读是否要缓存密码
          if (isKeepPassword) {
            // 缓存账号密码
            cacheStore.setCache('name', account.name)
            cacheStore.setCache('password', account.password)
          } else {
            cacheStore.deleteCache('name')
            cacheStore.deleteCache('password')
          }

          //  2.执行登录逻辑
          store.dispatch('loginModule/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style lang="less" scoped></style>
