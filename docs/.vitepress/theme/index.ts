// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import './style/index.css'

export default {
  extends: DefaultTheme,

  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData()
    const route = useRoute()
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom()
      // 禁止 ios 缩放屏幕
      document.addEventListener('gesturestart', function (event) {
        event.preventDefault()
      })

      // 禁止移动端（IOS）双击页面变大
      let touchTime = 0
      document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
          event.preventDefault()
        }
      })
      document.addEventListener(
        'touchend',
        function (event) {
          //记录当前点击的时间与下一次时间的间隔
          const nowTime = new Date()
          if (nowTime.getTime() - touchTime <= 300) {
            event.preventDefault()
          }
          touchTime = nowTime.getTime()
        },
        false
      );
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
    // giscus配置
    giscusTalk({
      repo: '/r-nacos/docs/', //仓库
      repoId: 'R_kgDOLevX8w', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOLevX884Cd41T', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
    },
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    )

  }
}