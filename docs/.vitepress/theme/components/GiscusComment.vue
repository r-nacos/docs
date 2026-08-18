<template>
  <div style="margin-top: 2rem" v-if="frontmatter.comment !== false">
    <Giscus
        id="comments"
        :key="route.path"
        repo="r-nacos/docs"
        repo-id="R_kgDOLevX8w"
        category="General"
        category-id="DIC_kwDOLevX884Cd41T"
        mapping="pathname"
        strict="1"
        term="请不吝赐教!"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        lang="zh-CN"
        loading="lazy"
        :theme="isDark ? 'dark_tritanopia' : 'light_tritanopia'"
    ></Giscus>
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue'
import { watch } from 'vue'
import { inBrowser, useData, useRoute } from 'vitepress'

const { isDark, frontmatter } = useData()
const route = useRoute()

watch(isDark, (dark) => {
  if (!inBrowser) return

  const iframe = document.querySelector('giscus-widget')?.shadowRoot?.querySelector('iframe')

  iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme: dark ? 'dark_tritanopia' : 'light_tritanopia' } } }, 'https://giscus.app')
})
</script>