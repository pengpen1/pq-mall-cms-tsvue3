<template>
  <div class="pageModal">
    <el-dialog
      v-model="centerDialogVisible"
      title="Warning"
      width="30%"
      center
      :modal="true"
      :append-to-body="true"
      :destroy-on-close="true"
    >
      <!-- 默认插槽 -->
      <Pqform v-bind="PqModalConfig" v-model="formData"> </Pqform>
      <slot></slot>

      <!-- footer插槽 -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Pqform from '@/base-ui/form'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Pqform
  },
  props: {
    PqModalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    // 1.modal表单双向绑定逻辑
    const centerDialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.PqModalConfig.formItems) {
          // 回显信息
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    // 2.创建角色|部门，发送网络请求
    const store = useStore()
    function handleConfirmClick() {
      // 2.1关闭modal
      centerDialogVisible.value = false

      // 2.2创建/编辑用户
      if (Object.keys(props.defaultInfo).length === 0) {
        // 新建
        store.dispatch('systemModule/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      } else {
        // 编辑
        store.dispatch('systemModule/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      }
    }
    return {
      centerDialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
