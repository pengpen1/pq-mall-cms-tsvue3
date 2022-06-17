import { useStore } from '@/store'

export function usepermission(pageName: string, hanldeName: string) {
  // 1.拿到permissions
  const store = useStore()
  const permissions = store.state.loginModule.permissions

  // 2.判断是否有这个权限，返回string|undefined
  let verifyPermission = ''
  if (pageName === 'user') {
    verifyPermission = `system:users:${hanldeName}`
  } else {
    verifyPermission = `system:${pageName}:${hanldeName}`
  }

  return !!permissions.find((permission: string) => {
    return permission === verifyPermission
  })
}
