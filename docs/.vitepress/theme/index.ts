// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import ArticleMetadata from "./components/ArticleMetadata.vue"
import { h, onMounted, watch } from 'vue'
import type { EnhanceAppContext, Theme } from 'vitepress'
import { inBrowser, useData, useRoute } from 'vitepress'
import Confetti from "./components/Confetti.vue"
import TypeIt from "./components/TypeIt.vue"
import SwitchLayout from './components/SwitchLayout.vue'
import AuthGate from './components/AuthGate.vue'
import HomeUnderline from "./components/HomeUnderline.vue"
import { NProgress } from 'nprogress-v2/dist/index.js'
import { NolebaseInlineLinkPreviewPlugin, } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import 'virtual:group-icons.css'
import './style/index.css'
import { initComponent } from "vitepress-plugin-legend/component"
import { initLinkIcons } from './utils/tools'
import {
  AntDesignContainer,
} from '@vitepress-demo-preview/component'

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
  document.documentElement.classList.toggle('is-home-page', value)
}
export default {
  extends: DefaultTheme,
  Layout() {
    return h(AuthGate, null, { default: () => h(SwitchLayout) })
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    initComponent(app)
    // 彩虹背景动画样式
    if (typeof window !== 'undefined') {
      watch(
          () => router.route.data.relativePath,
          () => updateHomePageStyle(location.pathname === '/'),
          { immediate: true },
      )
    }
    // 开启详细的水合错误信息
    app.config.warnHandler = (msg, instance, trace) => {
      console.warn('[Vue warn]:', msg)
      console.warn('Component trace:', trace)
    }
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('Confetti', Confetti)
    app.component('HomeUnderline', HomeUnderline)
    app.component('TypeIt', TypeIt)
    // The plugin's recursive Vue Plugin generic exceeds TypeScript's comparison depth.
    app.use(NolebaseInlineLinkPreviewPlugin as any)
    app.component('demo-preview', AntDesignContainer)

    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      // 手动定义 onBeforeRouteChange
      router.onBeforeRouteChange = () => {
        initLinkIcons() // 初始化链接图标
        NProgress.start() // 开始进度条
      }
      // 在页面加载完成时停止进度条
      router.onAfterRouteChange = () => {
        initLinkIcons() // 初始化链接图标
        NProgress.done() // 停止进度条
      }
    }
  },
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()

    onMounted(() => {
      initLinkIcons()
      // 添加 .VPNavBarTitle 的点击事件
      const navBarTitle = document.querySelector('.VPNavBarTitle')
      if (navBarTitle) {
        navBarTitle.addEventListener('click', () => {
          // 刷新页面
          location.reload()
        })
      }

    })
  }
} satisfies Theme
