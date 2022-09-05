import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  title: 'Vue.js',
  description: 'Vue.js - 渐进式的 JavaScript 框架',
  srcDir: 'src',
  // Theme related configurations.
  themeConfig: {
    // logo: '/logo.svg',
    // nav: [...],
    // sidebar: { ... }
  }
})
