import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installAntdPlugin } from './plugins/antdPlugin'
;(async () => {
  const app = createApp(App)

  app.use(router)

  installAntdPlugin(app)

  app.mount('#app')
})()
