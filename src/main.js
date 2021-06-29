// 如果全域會使用的套件，就在 main.js 引入
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
