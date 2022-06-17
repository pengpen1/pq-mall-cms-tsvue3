<template>
  <div class="page-search">
    <pq-home v-bind="PqFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="headerBtns">
          <el-button icon="Refresh" @click="handleRefresh">重置</el-button>
          <el-button icon="Search" type="primary" @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </pq-home>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PqHome from '@/base-ui/form'

export default defineComponent({
  components: {
    PqHome
  },
  props: {
    PqFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['refreshBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 1.双向绑定的属性名称应该由配置文件里的formItems的field决定
    const formItems = props.PqFormConfig?.formItems ?? []
    const formOriginData: any = []
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.刷新逻辑
    function handleRefresh() {
      // formData.value = formOriginData 改不了，要出大问题
      for (const key in formOriginData) {
        formData.value[key] = formOriginData[key]
      }
      emit('refreshBtnClick')
    }

    // 3.搜素逻辑
    function handleQueryClick() {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleRefresh,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.headerBtns {
  text-align: right;
  /* margin: 0px 50px 10px 0px;有传透 */
  padding: 0px 18px 20px 0px;
}
</style>
