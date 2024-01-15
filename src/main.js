import '@/assets/scss/_index.scss'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 셋팅후 추가사항
// router
import router from '@/router/'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
