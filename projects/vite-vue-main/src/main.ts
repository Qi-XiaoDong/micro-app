import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/microApp'
import { installAntdPlugin } from '@/plugins/antdPlugin'
;(() => {
  const app = createApp(App)

  app.use(router)

  installAntdPlugin(app)

  app.mount('#app')
})()
