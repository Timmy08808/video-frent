const { resolve } = require('path')

module.exports = {
  css: [
    '@/assets/css/global.scss'
  ],
  modules: [
    '@element-plus/nuxt',
  ],
  alias: {
    "@": resolve(__dirname, './')
  }
}