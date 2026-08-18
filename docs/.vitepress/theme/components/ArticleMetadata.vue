<template>
  <div class="article-metadata">
    <p>
      <span>📅更新：{{ formattedDate }}</span>
      <span>📝字数：{{ wordCount }} 字</span>
      <span>⏰时长：{{ readTime }} 分钟</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { useData } from "vitepress";
import { computed, ref, onMounted, watch, nextTick } from "vue";
import { countWord } from "../utils/functions";
import { useRoute } from "vitepress";

const route = useRoute();
const { page } = useData();

const formattedDate = computed(() => {
  if (!page.value.lastUpdated) return "";
  return dayjs(page.value.lastUpdated).format("YYYY-MM-DD");
});

const wordCount = ref(0);
const imageCount = ref(0);

const wordTime = computed(() => {
  return (wordCount.value / 275) * 60;
});

const imageTime = computed(() => {
  const n = imageCount.value;
  if (imageCount.value <= 10) {
    // 等差数列求和
    return n * 13 + (n * (n - 1)) / 2;
  }
  return 175 + (n - 10) * 3;
});

// 阅读时间
const readTime = computed(() => {
  return Math.ceil((wordTime.value + imageTime.value) / 60);
});

function analyze() {
  // Wait for next tick to ensure DOM is fully rendered
  nextTick(() => {
    // Clean up any existing meta-des elements
    document.querySelectorAll(".meta-des").forEach((v) => v.remove());

    const docDomContainer = window.document.querySelector("#VPContent");
    if (!docDomContainer) return;

    const imgArr = docDomContainer.querySelectorAll<HTMLImageElement>(
        ".content-container .main img",
    );
    imageCount.value = imgArr?.length || 0;

    const contentContainer = docDomContainer.querySelector(
        ".content-container .main",
    );
    const words = contentContainer?.textContent || "";
    wordCount.value = countWord(words);
  });
}

// Use onMounted with nextTick to ensure DOM is ready
onMounted(() => {
  nextTick(() => {
    analyze();
  });
});

// Watch route changes with immediate: false to avoid initial duplicate execution
watch(
    () => route.path,
    () => {
      analyze();
    },
    { flush: "post" }, // Execute after DOM updates
);
</script>

