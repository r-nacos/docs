<template>
  <div class="VPNavBarSearch search">
    <div id="docsearch"></div>
  </div>
</template>

<script setup>
import { watchEffect, onBeforeUnmount } from "vue";
import { useData } from "vitepress";
// 获取当前语言
const { lang } = useData();
import { inBrowser } from "vitepress";

import "meilisearch-docsearch/css";
if (inBrowser) {
  // 用来存储 meilisearch 实例
  let docSearchInstance = null;

  // 用于销毁现有的搜索框实例
  const destroySearch = () => {
    const container = document.querySelector("#docsearch");
    if (container) {
      // 清除 DOM 中的搜索框
      container.innerHTML = "";
    }
    docSearchInstance = null;
  };

  watchEffect(async () => {
    // 在每次语言变化时，销毁之前的实例
    destroySearch();
    if (lang.value.includes("zh")) {
      const meilisearchDetector = await import("meilisearch-docsearch");
      docSearchInstance = meilisearchDetector.default({
        container: "#docsearch",
        host: "https://meilisearch.weiweixu.cn",
        apiKey: "6f85745405265fa81a5f0f194b237807344ed789d7f4b32f2683578240ba0f3a",
        indexUid: "r-nacos-zh",
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
    } else if (lang.value.includes("en")) {
      const meilisearchDetector = await import("meilisearch-docsearch");
      docSearchInstance = meilisearchDetector.default({
        container: "#docsearch",
        host: "https://meilisearch.weiweixu.cn",
        apiKey: "1ba00dc0c728b51ae875e9b2fdd2c2af54017ed540f72d6a5044ddd4ac93a3da",
        indexUid: "r-nacos-en",
      });
    }
  });
  // 清理工作
  onBeforeUnmount(() => {
    destroySearch();
  });
}
</script>

<style></style>
