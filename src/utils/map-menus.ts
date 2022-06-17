import { Ibreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

// 1.获取FristMenuObject
let FirstMenuObject: any = null

// 2.根据请求的menus生成映射关系数组
// 所有的映射关系也就是 route 早就定义好放了的
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const Routes: RouteRecordRaw[] = []

  // 1.拿到所有的route
  const allRoutes: RouteRecordRaw[] = []
  const routeFils = require.context('../router/main', true, /\.ts/)
  routeFils.keys().forEach((key) => {
    //  这个是commonjs导入文件的写法哈 ./story/list/list.ts
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.substring(1))
    // commonjs没有默认导入吗，需要module.default
    allRoutes.push(route.default)
  })

  // 2.根据menus添加需要的route
  // 得递归调用找到type===2
  const _recurseGetRoute = function (_userMenus: any[]) {
    for (const menueObject of _userMenus) {
      if (menueObject.type === 2) {
        const route = allRoutes.find((route) => {
          if (menueObject.url === route.path) return true
        })
        if (route) {
          Routes.push(route)
          if (!FirstMenuObject) FirstMenuObject = menueObject
        }
      } else if (menueObject.type === 1) {
        _recurseGetRoute(menueObject.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return Routes
}

// 3.目的是通过path找到并返回一二级菜单的breadcrumbs数组
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: Ibreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// 4.目的是通过path找到并返回menuObject
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: Ibreadcrumb[]
): any {
  for (const menuObject of userMenus) {
    if (menuObject.type === 1) {
      // 递归传入子菜单
      const findMenu = pathMapToMenu(menuObject.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({
          name: menuObject.name
        })
        breadcrumbs?.push({
          name: findMenu.name,
          path: findMenu.url
        })
        return findMenu
      }
    } else if (menuObject.type === 2 && currentPath === menuObject.url) {
      // 这里是为了防止菜单只有一级
      breadcrumbs?.push({
        name: menuObject.name
      })
      return menuObject
    }
  }
}

// 5.目的是通过菜单拿到权限数组
export function mapMenusToPermissions(userMenus: any) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menuItem of menus) {
      if (menuItem.type !== 3) {
        _recurseGetPermission(menuItem.children ?? [])
      } else {
        permissions.push(menuItem.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

// 6.目的通过菜单拿到叶节点
export function mapMenusToLeafKeys(userMenus: any[]) {
  const menuLeafKeys: number[] = []

  function _recurseGetLeaf(userMenus: any[]) {
    for (const menuItem of userMenus) {
      if (menuItem.children) {
        _recurseGetLeaf(menuItem.children)
      } else {
        menuLeafKeys.push(menuItem.id)
      }
    }
  }
  _recurseGetLeaf(userMenus)

  return menuLeafKeys
}

export { FirstMenuObject }
