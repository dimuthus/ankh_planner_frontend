import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount('#app')
