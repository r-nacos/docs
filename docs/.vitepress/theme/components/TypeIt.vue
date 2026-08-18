<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import TypeIt from 'typeit'
import type { Options } from 'typeit'

// 定义 Props
interface Props {
  /**
   * 要打印的字符串或字符串数组
   */
  strings: string | string[]
  /**
   * TypeIt 的配置选项
   */
  options?: Options
  /**
   * 是否自动开始打印 (默认 true)
   */
  start?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  start: true,
  options: () => ({})
})

// 绑定 DOM 引用
const el = ref<HTMLElement | null>(null)
let instance: any = null

// 初始化 TypeIt
const initTypeIt = () => {
  if (!el.value) return

  // 如果已有实例，先销毁
  if (instance) {
    instance.destroy()
  }

  // 合并默认配置和用户配置
  const config: Options = {
    speed: 50,           // 打字速度
    breakLines: false,   // 是否换行
    waitUntilVisible: true, // 元素进入视口才开始打字（对长页面很有用）
    cursor: true,        // 显示光标
    ...props.options
  }

  instance = new TypeIt(el.value, {
    strings: props.strings,
    ...config
  })

  if (props.start) {
    instance.go()
  }
}

// 监听 props 变化，支持动态更新字符串
watch(
    () => [props.strings, props.options],
    () => {
      initTypeIt()
    },
    { deep: true }
)

onMounted(() => {
  initTypeIt()
})

onBeforeUnmount(() => {
  if (instance) {
    instance.destroy()
  }
})
</script>

<template>
  <span ref="el" class="typeit-wrapper"></span>
</template>

<style scoped>
.typeit-wrapper {
  display: inline-block;
  min-width: 1px; /* 防止空内容时塌陷 */
}
:deep(.ti-cursor) {
  color: var(--vp-c-brand-1); /* 使用 VitePress 主题色 */
  font-weight: bold;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>