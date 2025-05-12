import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/zbh-blog/',
  title: "Zbh Blog",
  description: "Welcome to Zbh's blog!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/svg/logo.svg',
    siteTitle: 'Zbh Blog',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索关键字",
            buttonAriaLabel: "搜索关键字",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            displayDetails: '显示详情',
            backButtonTitle: '关闭搜索',
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭"
            },
          },
        },
      },
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'gitee', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    // 修改「Next page」和「Previous page」
    docFooter: {
      prev: '上一篇', // 修改“Previous page”的显示文本
      next: '下一篇'  // 修改“Next page”的显示文本
    },
    // darkModeSwitchLabel: '🌓 显示控制',  // 切换按钮悬浮提示
    darkModeSwitchTitle: '暗黑模式',      // 无障碍标签
    lightModeSwitchTitle: '浅亮模式',      // 无障碍标签
  }
})
