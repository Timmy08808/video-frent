import { resolve } from 'node:path'

export default defineNuxtConfig({
  css: [
    '@/assets/css/global.scss'
  ],
  modules: [
    '@element-plus/nuxt',
  ],
  alias: {
    "@": resolve(__dirname, './')
  }
})