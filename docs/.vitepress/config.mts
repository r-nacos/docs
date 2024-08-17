import { defineConfig } from 'vitepress'
import { nav } from './navbar'
import sidebar from './sidebar'
import dayjs from 'dayjs'

//import { loadEnv } from 'vitepress'
//const { VITE_BASE_URL } = loadEnv(process.env.NODE_ENV || "", process.cwd())
const VITE_BASE_URL = "/docs/"

//console.log('VITE_BASE_URL', process.env.NODE_ENV, VITE_BASE_URL)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', // html 标签的 language
  title: "R-Nacos", // 标题
  titleTemplate: "Hi，终于等到你",
  description: "r-nacos doc",
  head: [ // favicon.ico 图标等
    ['link', { rel: "shortcut icon", href: `${VITE_BASE_URL}/favicon.ico` }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'script',
      { id: 'register-sw' },
      `;(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      })()`
      // would render:
      //
      // <script id="register-sw">
      // ;(() => {
      //   if ('serviceWorker' in navigator) {
      //     navigator.serviceWorker.register('/sw.js')
      //   }
      // })()
      // </script>
    ],
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    ['meta', { name: "keywords", content: "r-nacos,nacos,rnacos" }],
    //百度统计
    ['script', { async: '', src: 'https://hm.baidu.com/hm.js?afa135946ba7fb33d69bea1f370b905c' }],
  ],
  base: VITE_BASE_URL,
  lastUpdated: true, // 上次更新
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    plugins: [],
    server: {
      port: 8091
    }
  },
  markdown: { // markdown 配置
    lineNumbers: true, // 行号显示
  },
  themeConfig: {// 主题设置
    lastUpdatedText: '上次更新', // 上次更新显示文本
    returnToTopLabel: '返回顶部', // 更改手机端菜单文字显示
    search: { // 本地搜索
      provider: 'local'
    },
    logo: '/logo.png',  // 左上角logo logo.svg
    nav: nav, // 导航
    sidebar: sidebar, // 侧边栏
    socialLinks: [ // 社交链接
      { icon: 'github', link: 'https://github.com/r-nacos/r-nacos' }
    ],
    docFooter: { // 自定义上下页名
      prev: '上一篇', next: '下一篇'
    },
    footer: { // 页脚
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${dayjs().format("YYYY")} r-nacos`
    },
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
      label: '目录'
    },
    //大纲顶部标题
    outlineTitle: '当前页大纲',
  }
})
