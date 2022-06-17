<template>
  <div class="nav-header">
    <el-icon class="icon-fold" @click="controlFold"
      ><component :is="isFold ? 'Expand' : 'Fold'"
    /></el-icon>

    <div class="content">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import UserInfo from './UserInfo.vue'
import Breadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

export default defineComponent({
  emits: ['foldChange'],
  components: { UserInfo, Breadcrumb },
  setup(props, { emit }) {
    // 展开逻辑
    const isFold = ref(false)
    function controlFold() {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑逻辑-队列逻辑
    const store = useStore()
    const route = useRoute()
    const breadcrumbs = computed(() => {
      const currentPath = route.path
      return pathMapBreadcrumbs(store.state.loginModule.userMenu, currentPath)
    })

    return {
      controlFold,
      isFold,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .icon-fold {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
