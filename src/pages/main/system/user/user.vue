<template>
  <div class="user">
    <page-search
      :PqFormConfig="PqFormConfig"
      @queryBtnClick="handleQueryClick"
      @refreshBtnClick="handleRefreshClick"
    ></page-search>

    <div class="tableContent">
      <page-content
        :PqTableConfig="PqTableConfig"
        :pageName="pageName"
        ref="pageContentRef"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      >
        <!-- 定制状态列 -->
        <template #enable="scope">
          <el-button
            plain
            :type="!scope.row.enable ? 'danger' : 'success'"
            size="small"
            >{{ !scope.row.enable ? '禁用' : '启用' }}</el-button
          >
        </template>
      </page-content>
    </div>

    <page-modal
      :PqModalConfig="PqModalConfigRef"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :pageName="pageName"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import { PqFormConfig } from './config/PqFormConfig'
import PageSearch from '@/components/page-search'
import { PqTableConfig } from './config/PqTableConfig'
import PageContent from '@/components/page-content'
import { PqModalConfig } from './config/PqModalConfig'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageContent } from '@/hooks/use-page-content'

export default defineComponent({
  name: 'system-user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },

  setup() {
    const pageName = 'user'
    // 1.搜索刷新逻辑
    const [pageContentRef, handleQueryClick, handleRefreshClick] =
      usePageSearch()

    // 2.动态添加部门和角色列表
    const store = useStore()
    const PqModalConfigRef = computed(() => {
      const departmentItem = PqModalConfig.formItems.find((item) => {
        return item.field === 'departmentId'
      })
      departmentItem!.selectOptions = store.state.entireDepartment.map(
        (item) => {
          // 转换格式为options所需要的格式
          return { title: item.name, value: item.id }
        }
      )
      const roleItem = PqModalConfig.formItems.find((item) => {
        return item.field === 'roleId'
      })
      roleItem!.selectOptions = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })

      return PqModalConfig
    })

    // 3.编辑新增逻辑
    // pag-modal相关的hook逻辑
    const newCallBack = () => {
      const passwordItem = PqModalConfig.formItems.find((item) => {
        return item.field === 'password'
      })
      passwordItem!.isHidden = false
    }
    const editCallBack = () => {
      const passwordItem = PqModalConfig.formItems.find((item) => {
        return item.field === 'password'
      })
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageContent(newCallBack, editCallBack)

    return {
      PqFormConfig,
      PqTableConfig,
      pageName,
      handleQueryClick,
      handleRefreshClick,
      pageContentRef,
      PqModalConfigRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped>
.tableContent {
  padding-top: 20px;
  border-top: solid 20px #f5f5f5;
}
</style>
