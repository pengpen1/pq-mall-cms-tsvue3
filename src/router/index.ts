import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import cacheStore from '@/utils/cacheStore'
import { FirstMenuObject } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/pages/login/Pages-Login.vue'),
    name: 'login'
  },
  {
    path: '/main',
    component: () => import('@/pages/main/Pages-Home.vue'),
    name: 'main'
  },
  {
    path: '/home',
    component: () => import('@/pages/main/Pages-Home.vue'),
    name: 'home'
  },
  {
    path: '/:path(.*)*',
    component: () => import('@/pages/notFind/Not-Find.vue'),
    name: 'not-find'
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
// 导航守卫来判断除了登录页之外的任意页面是否登录
router.beforeEach((to, from) => {
  if (to.path !== '/login') {
    if (!cacheStore.getCache('token')) {
      return '/login'
    }
  }

  if (
    to.path == '/main' ||
    to.path == '/main/' ||
    to.path == '/home' ||
    to.path == '/home/'
  ) {
    return FirstMenuObject.url
  }
})

export default router
