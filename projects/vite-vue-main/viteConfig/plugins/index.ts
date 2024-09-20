import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import type { Plugin } from 'vite'

export const createVitePlugins = () => {
  const arr: Plugin[] = []
  arr.push(
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: any) => /^micro-app/.test(tag)
        }
      }
    })
  )
  arr.push(vueDevTools() as any)
  return arr
}
