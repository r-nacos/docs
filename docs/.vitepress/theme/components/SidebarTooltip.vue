<template>
  <Transition name="tooltip-fade">
    <div
        v-show="state.visible"
        id="vp-custom-sidebar-tooltip"
        :style="{
        position: 'fixed',
        backgroundColor: '#303133',
        color: '#ffffff',
        padding: '7px 12px',
        fontSize: '13px',
        borderRadius: '4px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.18)',
        zIndex: '99999',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        left: state.left + 'px',
        top: state.top + 'px'
      }"
    >
      {{ state.text }}

      <div :style="{
        position: 'absolute',
        bottom: '-4px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0',
        height: '0',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: '5px solid #303133'
      }"></div>
    </div>
  </Transition>
</template>

<script setup>
import { reactive, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

// 定义 Props
const props = defineProps({
  onlyEllipsis: {
    type: Boolean,
    default: false // 默认全部显示 tooltip
  }
})

const route = useRoute()

const state = reactive({
  visible: false,
  text: '',
  left: 0,
  top: 0
})

const initTooltipListeners = () => {
  if (typeof document === 'undefined') return

  const textNodes = document.querySelectorAll('#VPSidebarNav .item .text')

  textNodes.forEach(node => {
    node.onmouseenter = () => {
      const textVal = node.innerText.trim()

      // 判断是否开启了“仅在 ... 上显示”的控制逻辑
      if (props.onlyEllipsis) {
        if (node.scrollWidth <= node.clientWidth) {
          return
        }
      }

      state.text = textVal
      state.visible = true

      const rect = node.getBoundingClientRect()

      // 动态虚拟计算文字的视觉真实宽度
      const span = document.createElement('span')
      span.style.visibility = 'hidden'
      span.style.whiteSpace = 'nowrap'
      span.style.font = window.getComputedStyle(node).font
      span.innerText = state.text
      document.body.appendChild(span)

      const actualTextWidth = span.getBoundingClientRect().width
      document.body.removeChild(span)

      // 根据文字是否溢出截断，计算真实的视觉中心点
      const textVisualWidth = actualTextWidth > rect.width ? rect.width : actualTextWidth
      state.left = rect.left + textVisualWidth / 2

      nextTick(() => {
        const tooltipEl = document.getElementById('vp-custom-sidebar-tooltip')
        const tooltipHeight = tooltipEl ? tooltipEl.offsetHeight : 32

        state.top = rect.top - tooltipHeight - 8
      })
    }

    node.onmouseleave = () => {
      state.visible = false
    }
  })
}

onMounted(() => {
  setTimeout(initTooltipListeners, 400)
})

watch(() => route.path, () => {
  setTimeout(initTooltipListeners, 450)
}, { flush: 'post' })

onUnmounted(() => {
  state.visible = false
})
</script>

<style scoped>

/* 默认桌面端常驻居中基础定位 */
#vp-custom-sidebar-tooltip {
  transform: translate(-50%, 0);
}

/* ==========================================================================
   【核心修复】移动端/触摸屏环境下强行物理禁用 Tooltip 气泡
   ========================================================================== */
@media (max-width: 768px), (pointer: coarse) {
  #vp-custom-sidebar-tooltip {
    display: none !important; /* 无论是窄屏还是触摸设备，直接抹除显示能力 */
    opacity: 0 !important;
    visibility: hidden !important;
  }
}

/*
==========================================================================
   呼吸灯动画样式：控制滑过、出现和消失时的丝滑过渡
==========================================================================
*/

/* 进场和出场动画的持续时间和缓动曲线 */
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.18s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.18s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* 默认常驻状态下的居中基础定位 */
#vp-custom-sidebar-tooltip {
  transform: translate(-50%, 0);
}

/* 隐藏或刚诞生状态：透明度为0，且在垂直方向上带有轻微沉降（呼吸感缩放平移） */
.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 4px) scale(0.98);
}
</style>