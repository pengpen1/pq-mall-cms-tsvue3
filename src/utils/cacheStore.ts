const CacheStore = class {
  // 添加缓存
  setCache(key: string, value: any, isLocal = true) {
    if (isLocal) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    }
  }
  // 获取缓存
  getCache(key: string, isLocal = true) {
    let value
    if (isLocal) {
      value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    } else {
      value = window.sessionStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    }
  }
  // 移除指定缓存
  deleteCache(key: string, isLocal = true) {
    if (isLocal) {
      window.localStorage.removeItem(key)
    } else {
      window.sessionStorage.removeItem(key)
    }
  }
  // 全部清除
  clearCache(key: string, isLocal = true) {
    if (isLocal) {
      window.localStorage.clear()
    } else {
      window.sessionStorage.clear()
    }
  }
}

export default new CacheStore()
