import { createApp } from 'vue'
import { registerApp } from './global/index'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { setupStore } from './store/index'

// css样式初始化
import 'normalize.css'
import './assets/css/index.less'

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// 测试文件在这行下面
// import { hyRequest } from './service'
// hyRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     // interceptors: {
//     //   requestInterceptors(config) {
//     //     console.log('单个请求的拦截：发出请求')
//     //     return config
//     //   },
//     //   requsetInterceptorsCatch(err) {
//     //     console.log(err)
//     //   },
//     //   responseInterceptors(config) {
//     //     console.log(' 111单个请求的拦截:获取到了响应体')
//     //     return config
//     //   },
//     //   responseInterceptorsCatch(err) {
//     //     console.log(err)
//     //   }
//     // },
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
// hyRequest
//   .get<DataType>({ url: '/home/multidata' })
//   .then((res) => {
//     console.log(res.data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// 测试文件在这行上面

const app = createApp(App)
// 注册了element-plus
registerApp(app)
// 初始化store
setupStore()
app.use(router)
app.use(store)

app.mount('#app')
