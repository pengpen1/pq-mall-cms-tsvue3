<template>
  <div class="category">
    <PageSearch
      :PqFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @refresh-btn-click="handleRefreshClick"
    ></PageSearch>
    <PageContent
      pageName="category"
      :PqTableConfig="contentTableConfig"
      ref="pageContentRef"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  setup() {
    // 1.搜索逻辑处理
    const [pageContentRef, handleQueryClick, handleRefreshClick] =
      usePageSearch()

    return {
      contentTableConfig,
      searchFormConfig,
      pageContentRef,
      handleQueryClick,
      handleRefreshClick
    }
  },
  components: { PageSearch, PageContent }
})
</script>

<style scoped></style>
