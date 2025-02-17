<template>
  <div class="VPNavBarSearch search">
    <div id="docsearch"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import "meilisearch-docsearch/css";

onMounted(async () => {
  const meilisearchDetector = await import("meilisearch-docsearch");
  meilisearchDetector.default({
    container: "#docsearch",
    host: "https://meilisearch.weiweixu.cn",
    apiKey: "83add19fa3afb78d1c50078a477a36b873bfa354f85f38d28f939698f8e27c80",
    indexUid: "java-weiweixu",
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        title: "搜索文档",
        placeholder: "搜索文档",
        noResults: "没有找到结果",
        showMore: "显示更多结果",
        showLess: "显示更少结果",
        emptyQuery: "请输入搜索词",
        back: "返回",
        searchDocsPlaceHolder: "搜索文档",
        cancelButtonText: "取消",
      },
    },
  });
});
</script>

<style></style>
