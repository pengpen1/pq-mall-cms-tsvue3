<template>
  <div class="userInfo">
    <el-icon class="infoButn"><ChatDotRound /></el-icon>
    <el-icon class="infoButn"><CollectionTag /></el-icon>
    <el-icon class="infoButn rightButn"><Bell /></el-icon>
    <div class="red"></div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon class="el-icon--right">
          <Avatar />
        </el-icon>
        {{ name }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="Stamp">个人信息</el-dropdown-item>
          <el-dropdown-item divided icon="SetUp" @click="handleSetUp"
            >系统管理</el-dropdown-item
          >
          <el-dropdown-item divided icon="SwitchButton" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import cacheStore from '@/utils/cacheStore'
import router from '@/router'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => {
      return store.state.loginModule.userInfo.name
    })

    // 退出逻辑
    function handleExitClick() {
      // 其他会再次获取的
      cacheStore.deleteCache('token')
      // 有导航守卫验证token和跳转到登录页的
      router.push('/main')
    }

    function handleSetUp() {
      router.push('/main/system/user')
    }
    return {
      name,
      handleExitClick,
      handleSetUp
    }
  }
})
</script>

<style lang="less" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  cursor: pointer;
}
.el-icon--right {
  margin-right: 6px;
}

.infoButn {
  margin-left: 6px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.infoButn :hover {
  color: rgb(244, 67, 188);
}
.rightButn {
  margin-right: 12px;
}
.red {
  float: right;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: rgb(236, 25, 25);
  position: relative;
  right: 105px;
}
</style>
