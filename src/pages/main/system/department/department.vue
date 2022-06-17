<template>
  <div class="department">
    <PageSearch
      :PqFormConfig="PqFormConfig"
      @queryBtnClick="handleQueryClick"
      @refreshBtnClick="handleRefreshClick"
    ></PageSearch>

    <div class="tableContent">
      <page-content
        :PqTableConfig="PqTableConfig"
        pageName="department"
        ref="pageContentRef"
        @editBtnClick="handleEditData"
        @newBtnClick="handleNewData"
      />
    </div>

    <PageModal
      pageName="department"
      :PqModalConfig="PqModalConfigRef"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import { PqFormConfig } from './config/PqFormConfig'
import { PqTableConfig } from './config/PqTableConfig'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/use-page-search'
import PageModal from '@/components/page-modal'
import { PqModalConfig } from './config/PqModalConfig'
import { usePageContent } from '@/hooks/use-page-content'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'system-department',
  setup() {
    // 1.分层页面事件处理hook
    const [pageContentRef, handleQueryClick, handleRefreshClick] =
      usePageSearch()

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageContent()

    // 2.动态添加上级部门
    const store = useStore()
    const PqModalConfigRef = computed(() => {
      const parentIdItem = PqModalConfig.formItems?.find(
        (item: any) => item.field === 'parentId'
      )
      parentIdItem!.selectOptions = store.state.entireDepartment.map(
        (item: any) => {
          return { title: item.name, value: item.id }
        }
      )

      return PqModalConfig
    })

    return {
      PqFormConfig,
      PqTableConfig,
      pageContentRef,
      handleQueryClick,
      handleRefreshClick,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      PqModalConfigRef
    }
  },
  components: { PageSearch, PageContent, PageModal }
})
</script>

<style scoped>
.tableContent {
  padding-top: 20px;
  border-top: solid 20px #f5f5f5;
}
</style>
