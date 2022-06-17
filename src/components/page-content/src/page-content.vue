<template>
  <div class="page-content">
    <pq-table
      :listData="listData"
      v-bind="PqTableConfig"
      :listCount="listCount"
      v-model:page="pageInfo"
    >
      <!-- header插槽 -->
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewClick"
          >新增</el-button
        >
        <el-button icon="Refresh"></el-button>
      </template>

      <!-- 定制创建时间列 -->
      <template #createAt="scope">
        {{ $filters.formatDate(scope.row.createAt) }}
      </template>
      <!-- 定制跟新时间列 -->
      <template #updateAt="scope">
        {{ $filters.formatDate(scope.row.updateAt) }}
      </template>
      <!-- 定制操作列 -->
      <template #handler="scope">
        <div
          class="handler-btns"
          style="display: flex; justify-content: center"
        >
          <el-button
            type="primary"
            size="small"
            text
            icon="EditPen"
            style="padding: 0"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="primary"
            size="small"
            text
            icon="Delete"
            style="padding: 0"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 跨组件传递插槽 -->
      <!-- 动态插入剩余插槽 -->
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </pq-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from '@/store'
import PqTable from '@/base-ui/table'
import { usepermission } from '@/hooks/use-permissions'

export default defineComponent({
  name: 'system-user',
  props: {
    PqTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    PqTable
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    // 0.获取操作的权限
    const isCreate = usepermission(props.pageName, 'create')
    const isDelete = usepermission(props.pageName, 'delete')
    const isUpdate = usepermission(props.pageName, 'update')
    const isQuery = usepermission(props.pageName, 'query')

    // 3.双向绑定pageInfo(就是一些偏移量啊、size啊)
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    })

    // 4.监听并发送新的网络请求
    watch(pageInfo, () => {
      getPageData()
    })

    // 1.发送网络请求
    const store = useStore()
    const getPageData = (queryInfo: any = {}) => {
      // 判断用户有没有权限查看
      if (!isQuery) {
        alert(`抱歉！您没有权限查看页面：${props.pageName}`)
        return undefined
      }
      store.dispatch('systemModule/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          // 偏移量
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 2.拿到数据列表

    // switch (props.pageName) {
    //   case 'user':
    //     listData = computed(() => {
    //       return store.state.systemModule.userList
    //     })

    //     listCount = computed(() => {
    //       return store.state.systemModule.userCount
    //     })
    //     break
    //   case 'role':
    //     listData = computed(() => {
    //       return store.state.systemModule.roleList
    //     })
    //     listCount = computed(() => {
    //       return store.state.systemModule.roleCount
    //     })
    //     break
    // }

    const listData = computed(() => {
      return store.getters[`systemModule/pageListData`](props.pageName)
    })
    const listCount = computed(() => {
      return store.getters[`systemModule/pageListCount`](props.pageName)
    })

    // 5.获取其他的动态插槽名称
    const otherPropsSlots = props.PqTableConfig?.listConfig.filter(
      (item: any) => {
        if (item.slotName) {
          if (item.slotName === 'createAt') return false
          if (item.slotName === 'updateAt') return false
          if (item.slotName === 'handler') return false
          return true
        }
      }
    )

    // 6.删除逻辑
    function handleDeleteClick(item: any) {
      store.dispatch('systemModule/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }

    // 7.新增、编辑逻辑
    function handleEditClick(item: any) {
      emit('editBtnClick', item)
    }
    function handleNewClick() {
      emit('newBtnClick')
    }
    return {
      listData,
      listCount,
      getPageData,
      pageInfo,
      otherPropsSlots,
      isCreate,
      isDelete,
      isUpdate,
      handleDeleteClick,
      handleEditClick,
      handleNewClick
    }
  }
})
</script>

<style scoped></style>
