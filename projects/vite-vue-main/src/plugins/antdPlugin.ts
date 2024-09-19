import { Button, message } from 'ant-design-vue'
import type { App } from 'vue'

export const installAntdPlugin = (app: App) => {
  app.use(Button)
  app.config.globalProperties.$message = message
}
