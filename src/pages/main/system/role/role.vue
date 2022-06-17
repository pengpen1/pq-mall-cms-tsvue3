<template>
  <div class="role">
    <PageSearch
      :PqFormConfig="PqFormConfig"
      @query-btn-click="handleQueryClick"
      @refresh-btn-click="handleRefreshClick"
    ></PageSearch>

    <div class="tableContent">
      <page-content
        :PqTableConfig="PqTableConfig"
        pageName="role"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
        ref="pageContentRef"
      ></page-content>
    </div>

    <page-modal
      :PqModalConfig="PqModalConfig"
      pageName="role"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <div class="menuTree">
        <el-tree
          :data="menus"
          :props="defaultProps"
          show-checkbox
          @check="handleCheckChange"
          node-key="id"
          ref="elTreeRef"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import PageSearch from '@/components/page-search'
import { PqFormConfig } from './config/PqFormConfig'
import { PqTableConfig } from './config/PqTableConfig'
import PageContent from '@/components/page-content'
import { PqModalConfig } from './config/PqModalConfig'
import PageModal from '@/components/page-modal'
import { usePageContent } from '@/hooks/use-page-content'
import { usePageSearch } from '@/hooks/use-page-search'
import { useStore } from 'vuex'
import { mapMenusToLeafKeys } from '@/utils/map-menus'

import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'system-department',

  setup() {
    // 1.搜索逻辑处理
    const [pageContentRef, handleQueryClick, handleRefreshClick] =
      usePageSearch()

    function editCallback(item: any) {
      const leafKeys = mapMenusToLeafKeys(item.menuList)
      // 调用elTree上面的方法
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageContent(undefined, editCallback)
    // tree配置
    const store = useStore()
    const menus = computed(() => {
      return store.state.entireMenu
    })
    // tree组件需要的配置
    const defaultProps = {
      children: 'children',
      label: 'name',
      disabled: 'disabled'
    }

    const otherInfo = ref({})

    // 选中节点的key
    function handleCheckChange(
      data1: any,
      { checkedKeys, halfCheckedKeys }: any
    ) {
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    return {
      PqFormConfig,
      PqTableConfig,
      PqModalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      defaultProps,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef,
      pageContentRef,
      handleQueryClick,
      handleRefreshClick
    }
  },
  components: { PageSearch, PageContent, PageModal }
})
</script>

<style scoped lang="less">
.tableContent {
  padding-top: 20px;
  border-top: solid 20px #f5f5f5;
}
.menuTree {
  margin-left: 25px;
}
</style>
