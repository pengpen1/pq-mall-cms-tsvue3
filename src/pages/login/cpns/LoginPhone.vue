<template>
  <div class="loginPhone">
    <el-form label-width="65px" :model="phone" :rules="rules" ref="fromRef">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>

      <div class="codeContent">
        <el-form-item label="验证码" prop="code">
          <el-input v-model="phone.code"> </el-input>
        </el-form-item>
        <el-button type="primary" class="codeButn" size="default"
          >获取验证码</el-button
        >
      </div>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import rules from '../config/ruler-phone'
import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const store = useStore()
    const phone = reactive({
      num: '',
      code: ''
    })

    const fromRef = ref<InstanceType<typeof ElForm>>()
    // 手机号登录逻辑
    function loginAction() {
      fromRef.value?.validate((isValid) => {
        if (isValid) {
          store.dispatch({
            type: 'loginModule/phoneLoginAction',
            ...phone
          })
        }
      })
    }
    return {
      phone,
      rules,
      loginAction,
      fromRef
    }
  }
})
</script>

<style lang="less" scoped>
.codeContent {
  display: flex;
}
.codeButn {
  margin-left: 8px;
}
</style>
