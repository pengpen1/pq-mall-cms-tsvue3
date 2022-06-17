<template>
  <div class="table">
    <!-- header -->
    <div class="header">
      <slot name="header">
        <div class="title">
          {{ title }}
        </div>
        <div class="headerHandler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <!-- 复选框 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-column>

      <!-- 序号 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      >
      </el-table-column>

      <!-- datalist -->
      <template v-for="item in listConfig" :key="item.prop">
        <el-table-column v-bind="item" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <div class="demo-pagination-block">
          <el-pagination
            :page-sizes="[10, 20, 30]"
            :page-size="page.pageSize"
            :current-page="page.currentPage"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="listCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    listConfig: {
      type: Array as any,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['SelectionChange', 'update:page'],
  setup(props, { emit }) {
    // 1.没搞懂这个
    function handleSelectionChange(value: any) {
      emit('SelectionChange', value)
    }

    // 2.配置分页
    const small = ref(false)
    const background = ref(false)
    const disabled = ref(false)

    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
      emit('update:page', { ...props.page, pageSize: val })
    }
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
      emit('update:page', { ...props.page, currentPage: val })
    }
    return {
      handleSelectionChange,
      small,
      background,
      disabled,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  margin: 0 16px 10px 16px;
}
.title {
  font-size: 18px;
  font-weight: 600;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: right;
}
.demo-pagination-block {
  margin: 12px 12px 4px 0px;
}
</style>
