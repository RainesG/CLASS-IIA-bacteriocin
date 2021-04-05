import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'

const bacteriocin = createApp(App)
bacteriocin.use(router)

bacteriocin.mount('#app')
