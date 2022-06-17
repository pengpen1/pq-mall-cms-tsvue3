<template>
  <div class="goods">
    <page-content page-name="goods" :PqTableConfig="PqTableConfig">
      <!-- 定制商品图片列 -->
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :previewSrcList="[scope.row.imgUrl]"
          fit="cover"
          preview-teleported
        />
      </template>
      <!-- 定制原价和现价前的人民币符号 -->
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
      <template #newPrice="scope">
        {{ '￥' + scope.row.newPrice }}
      </template>
      <!-- 定制状态列 -->
      <template #status="scope">
        <el-button
          plain
          :type="scope.row.status ? 'success' : 'danger'"
          size="small"
          >{{ scope.row.status ? '售卖中' : '下架中' }}</el-button
        >
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PqTableConfig } from './config/PqTableConfig'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return {
      PqTableConfig
    }
  }
})
</script>

<style scoped>
/* 利用父组件可以控制子组件根元素的class */
.page-content {
  padding-top: 12px;
}
</style>
