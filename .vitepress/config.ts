import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig, } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { sidebar } from './themeConfig'
// import { headerPlugin } from './headerMdPlugin'
// import { jobsPlugin } from './jobsMdPlugin'


const nav = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: '笔记',
    activeMatch: `^/notes/`,
    link: '/notes/'
  },
  {
    text: '常用软件',
    link: '/app/'
  },
  {
    text: '前端相关',
    activeMatch: `^/ecosystem/`,
    link: '/fe',
  },
  {
    text: 'Coding',
    activeMatch: `^/about/`,
    link: '/coding'
  },
]


const i18n = {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '前一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。'
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。'
  },
  footerLicense: {
    before: '',
    after: ''
  },

  // aria labels
  ariaAnnouncer: {
    before: '',
    after: '已经加载完毕'
  },
  ariaDarkMode: '切换深色模式',
  ariaSkip: '直接跳到内容',
  ariaTOC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航',
}
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: 'zh-CN',
  title: 'Tangxve',
  description: 'Vue.js - 渐进式的 JavaScript 框架',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }]
  ],

  themeConfig: {
    nav,
    sidebar,
    i18n,

    // algolia: {
    //   indexName: 'vuejs_cn2',
    //   appId: 'IB1MOMLQ10',
    //   apiKey: '3af55f3e7bbc437a90e489a6f2d06be9',
    //   searchParameters: {
    //     facetFilters: ['version:v3']
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tangxve' },
    ],

    editLink: {
      repo: 'github.com/tangxve/blog',
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      copyright: `Copyright © 1900 - ${new Date().getFullYear()} Tangxve`
    }
  },

  markdown: {
    config(md) {
      // md.use(headerPlugin).use(jobsPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
