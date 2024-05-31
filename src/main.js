

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 引入样式
import '@/styles/common.scss'

//引入懒加载指令插件
import { lazyPlugin } from './directives'
import { componentPlugins } from './components/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugins)
app.mount('#app')

