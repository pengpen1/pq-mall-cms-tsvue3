<template>
  <div class="chat">
    <h3 class="chatTitle">时光静好，与君语</h3>
    <pq-editor v-model:value="htmlString" class="pqEditor" />
    <div class="footer">
      <el-input v-model="title" placeholder="请输入故事的标题" />
      <el-button type="primary" @click="handleUpStory"
        >向服务器上传您的故事</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PqEditor from '@/base-ui/editor'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'chat',
  components: {
    PqEditor
  },
  setup() {
    const store = useStore()
    // 标题和内容
    const title = ref<string>()
    const htmlString = ref<string>('coderpen')
    // 发送故事
    function handleUpStory() {
      store.dispatch('systemModule/createPageDataAction', {
        pageName: 'story',
        newData: {
          title: title.value,
          content: htmlString.value
        }
      })
    }
    return {
      htmlString,
      handleUpStory,
      title
    }
  }
})
</script>

<style scoped>
.pqEditor {
  margin-top: 22px;
  margin-bottom: 12px;
}
.chatTitle {
  width: 100%;
  text-align: center;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-input {
  width: 240px;
  margin-right: 16px;
}
</style>
