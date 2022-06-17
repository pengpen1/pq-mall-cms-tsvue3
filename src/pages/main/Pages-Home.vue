<template>
  <div class="pagesHome">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <NavMenu :collapse="isCollapse"></NavMenu>
      </el-aside>

      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @foldChange="controlFold"></NavHeader>
        </el-header>

        <el-main class="page-content">
          <div class="Package">
            <ElConfigProvider :locale="locale">
              <router-view></router-view>
            </ElConfigProvider>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  components: { NavMenu, NavHeader, ElConfigProvider },
  setup() {
    const isCollapse = ref(false)
    // header按钮传递过来的布尔值同时决定aside以及menu的折叠
    function controlFold(isFold: boolean) {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      controlFold,
      locale: zhCn
    }
  }
})
</script>

<style scoped lang="less">
// menu
@side-bg-color: #001529;
@side-lighten-bg-color: #0c2135;
@side-font-color: #b7bdc3;
@side-sel-bg-color: #0a60bd;

.pagesHome {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: @side-bg-color;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
  // 就是让自己的滚动条消失
}
// & 表示当前选择器的父级
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
// .Package {
//   background-color: #ffffff;
// }
</style>
