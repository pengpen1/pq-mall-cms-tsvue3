<template>
  <div class="list">
    <PageContent
      :PqTableConfig="contentTableConfig"
      pageName="story"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  setup() {
    return {
      contentTableConfig
    }
  },
  components: { PageContent }
})
</script>

<style scoped></style>
