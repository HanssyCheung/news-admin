import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import { ID_INJECTION_KEY } from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from 'particles.vue3'
import '@/utils/axios.config'

createApp(App).provide(ID_INJECTION_KEY,{
    prefix: Math.floor(Math.random() * 10000),
    current: 0
  }).use(store).use(router).use(ElementPlus).use(Particles).mount('#app')
