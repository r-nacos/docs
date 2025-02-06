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
    apiKey: "43912fc814f800fc9f202d2eb1c883fb4fdb2d3cf994666bebc9d4efa89b79bc",
    indexUid: "r-nacos",
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
