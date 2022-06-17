<template>
  <div class="menu">
    <PageContent pageName="menu" :PqTableConfig="PqTableConfig"></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { PqTableConfig } from './config/PqTableConfig'

export default defineComponent({
  name: 'system-department',
  setup() {
    return {
      PqTableConfig
    }
  },
  components: { PageContent }
})
</script>

<style scoped>
.page-content {
  padding-top: 12px;
}
</style>
