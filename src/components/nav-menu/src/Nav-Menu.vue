<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" class="img" />
      <transition name="coderpen">
        <span v-if="!collapse" class="title">coderpen</span>
      </transition>
    </div>

    <!-- 菜单动态渲染 -->
    <el-menu
      :default-active="menuActiveIndex"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      router
    >
      <template v-for="item in userMenu">
        <template v-if="item.type === 1">
          <!-- subMenu -->
          <ElSubMenu :key="item.id" :index="item.url">
            <!-- 这里要用具名插槽 -->
            <template #title>
              <ElIcon v-if="item.icon">
                <component :is="item.icon.slice(7)"></component>
              </ElIcon>
              <span>{{ item.name }}</span>
            </template>

            <!-- subMenu-item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.url">
                <ElIcon v-if="subitem.icon">
                  <component :is="item.icon.slice(7)"></component>
                </ElIcon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </ElSubMenu>
        </template>

        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :key="item.id" :index="item.url">
            <ElIcon v-if="item.icon">
              <component :is="item.icon.slice(7)"></component>
            </ElIcon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '../../../store'
import { menuObj } from './type'
import { useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  components: {},
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // 1.自己定义函数useStore,拿到用户菜单
    const store = useStore()
    const userMenu = computed(() => {
      return store.state.loginModule.userMenu
    })

    // 2.拿到当前路径，并获取id
    const route = useRoute()
    const currentPath = route.path
    const currentMenuObject = pathMapToMenu(userMenu.value, currentPath)
    const menuActiveIndex = ref('/main/system/user')
    if (currentMenuObject) {
      menuActiveIndex.value = currentMenuObject.url
    }

    // 3.菜单与路径的映射
    function goToRoute(menuObj: menuObj) {
      if (menuObj.url) {
        router.push(menuObj.url)
      } else {
        router.push('/notfind')
      }
    }
    return {
      userMenu,
      goToRoute,
      menuActiveIndex
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

// 提高优先级？
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}

// 过渡动画
@keyframes myScale {
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  50% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.coderpen-enter-active {
  animation: myScale 0.5s ease;
}
.coderpen-leave-active {
  animation: myScale 0.5s ease reverse;
}
</style>
