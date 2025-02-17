import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { loadEnv } from 'vite'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import {
  InlineLinkPreviewElementTransform
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
const mode = process.env.NODE_ENV || 'development'
const { VITE_BASE_URL } = loadEnv(mode, process.cwd())

console.log('Mode:', process.env.NODE_ENV)
console.log('VITE_BASE_URL:', VITE_BASE_URL)

export const sharedConfig = defineConfig({
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  metaChunk: true,
  lang: 'zh-CN', // 语言
  title: "R-Nacos", // 站点名称
  titleTemplate: "Hi，终于等到你", // 网页标题
  description: "r-nacos doc", // 站点描述
  head: [ // favicon.ico 图标等
    ['link', { rel: "shortcut icon", href: `${VITE_BASE_URL}logo.svg` }],
    // 网站 favicon.ico 图标
    ['link', { rel: "icon", href: `${VITE_BASE_URL}logo.svg`, type: "image/svg+xml" }],
    // 引入 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    // 关键词和描述
    ['meta', { name: "keywords", content: "r-nacos,nacos,rnacos" }],
    //百度统计
    ['script', { async: '', src: 'https://hm.baidu.com/hm.js?afa135946ba7fb33d69bea1f370b905c' }],
  ],
  appearance: true, // 主题模式，默认浅色且开启切换
  base: VITE_BASE_URL,
  lastUpdated: true, // 上次更新
  vite: {
    build: {
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        external: ['crypto'], // this is the important part
      },
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/vitepress-plugin-inline-link-preview',
      ],
    },
    optimizeDeps: {
      exclude: [
        'vitepress',
        '@nolebase/vitepress-plugin-inline-link-preview/client',
      ],
    },
    plugins: [
      groupIconVitePlugin(), //代码组图标
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/r-nacos/docs',
        mapAuthors: [
          {
            name: '许大仙',
            username: 'Aurorxa',
            mapByEmailAliases: ['1900919313@qq.com']
          }
        ]
      }),
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith("index.md"),
        sections: {
          disableChangelog: true,
          disableContributors: true,
        },
      })
    ],
    server: {
      port: 18089
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler" // or 'modern'
        }
      }
    },
  },
  sitemap: {
    hostname: `https://r-nacos.github.io/docs${VITE_BASE_URL}`,
  },
  markdown: { // markdown 配置
    math: true,
    lineNumbers: true, // 行号显示
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    // 组件插入h1标题下
    config: (md) => {
      // 创建 markdown-it 插件
      md.use((md) => {
        const defaultRender = md.render
        md.render = function (...args) {
          const [content, env] = args
          const isHomePage = env.path === '/' || env.relativePath === 'index.md'  // 判断是否是首页

          if (isHomePage) {
            return defaultRender.apply(md, args) // 如果是首页，直接渲染内容
          }
          // 调用原始渲染
          let defaultContent = defaultRender.apply(md, args)
          // 替换内容
          defaultContent = defaultContent.replace(/NOTE/g, '提醒')
            .replace(/TIP/g, '建议')
            .replace(/IMPORTANT/g, '重要')
            .replace(/WARNING/g, '警告')
            .replace(/CAUTION/g, '注意')
          // 返回渲染的内容
          return defaultContent
        }
      })
      md.use(timeline)
      md.use(groupIconMdPlugin) //代码组图标
      md.use(InlineLinkPreviewElementTransform)
    }
  },
  themeConfig: { // 主题设置
    logo: '/logo.svg',  // 左上角logo
    // search: {
    //   provider: 'local',
    //   options: {
    //     locales: {
    //       root: {
    //         translations: {
    //           button: {
    //             buttonText: 'Search',
    //             buttonAriaLabel: 'Search',
    //           },
    //           modal: {
    //             displayDetails: 'Display detailed list',
    //             resetButtonTitle: 'Reset search',
    //             backButtonTitle: 'Close search',
    //             noResultsText: 'No results for',
    //             footer: {
    //               selectText: 'to select',
    //               selectKeyAriaLabel: 'enter',
    //               navigateText: 'to navigate',
    //               navigateUpKeyAriaLabel: 'up arrow',
    //               navigateDownKeyAriaLabel: 'down arrow',
    //               closeText: 'to close',
    //               closeKeyAriaLabel: 'escape',
    //             },
    //           },
    //         },
    //       },

    //     },
    //   },
    // },
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/r-nacos/docs/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/r-nacos/r-nacos' },
    ],
  }
})
