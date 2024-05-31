

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 引入样式
import '@/styles/common.scss'

//引入懒加载指令插件
import { lazyPlugin } from './directives'
import { componentPlugins } from './components/index'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugins)
app.mount('#app')

