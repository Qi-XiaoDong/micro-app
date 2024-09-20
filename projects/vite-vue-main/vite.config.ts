import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import { createVitePlugins } from './viteConfig/plugins'

export default defineConfig(() => ({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}))
