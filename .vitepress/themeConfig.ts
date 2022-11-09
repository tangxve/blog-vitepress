import { DefaultTheme } from 'vitepress/theme'

export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    {
      text: '笔记',
      items: [
        { link: '/notes/fullPagejs同步动画问题', text: 'fullPagejs同步动画问题' },
        { link: '/notes/quillEditor自动获取焦点问题', text: 'quillEditor自动获取焦点问题' },
        { link: '/notes/引用多个版本npm包', text: '引用多个版本npm包' },
        { link: '/notes/zsh更新', text: 'zsh更新' },
        { link: '/notes/electron', text: 'electron' },
        { link: '/notes/富文本内容样式问题', text: '富文本内容样式问题' },
        { link: '/notes/Mac前端开发环境', text: 'Mac前端开发环境' },
        { link: '/notes/微信支付开发流程', text: '微信支付开发流程' },
        { link: '/notes/vue2+ts路由钩子函数不生效', text: 'vue2+ts路由钩子函数不生效' },
        { link: '/notes/git', text: 'git' },
        { link: '/notes/微信公众号开发流程', text: '微信公众号开发流程' },
      ]
    }
  ]
}
