<template>
  <div class="card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="card-title">{{ title }}</span>
        </div>
      </template>
      <div class="item">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'title'
    }
  },
  setup() {
    return {}
  }
})
</script>
<style scoped lang="less">
.box-card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}
.card-title {
  font-weight: 700;
  font-size: 18px;
}
.item {
  margin-bottom: 10px;
  // border: 1px solid red;
}
</style>
