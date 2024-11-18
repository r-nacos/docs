<template>
  <div class="word">
    <p>
      <span>🔥更新：{{ dayjs(date.toLocaleDateString()).format("YYYY-MM-DD") }}</span>
      <span>📝字数: {{ wordCount }} 字</span>
      <span>⏱时长: {{ readTime }} 分钟</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs"
import { useData } from "vitepress"
import { computed, ref, onMounted, watch } from "vue"
import { countWord } from "../utils/functions"
import { useRoute } from "vitepress"

const route = useRoute() // 使用 vitepress 提供的 useRoute

const { page } = useData()
const date = computed(() => new Date(page.value.lastUpdated!))

const wordCount = ref(0)
const imageCount = ref(0)

const wordTime = computed(() => {
  return (wordCount.value / 275) * 60
});

const imageTime = computed(() => {
  const n = imageCount.value
  if (imageCount.value <= 10) {
    // 等差数列求和
    return n * 13 + (n * (n - 1)) / 2
  }
  return 175 + (n - 10) * 3
});

// 阅读时间
const readTime = computed(() => {
  return Math.ceil((wordTime.value + imageTime.value) / 60)
});

function analyze() {
  document.querySelectorAll(".meta-des").forEach((v) => v.remove())
  const docDomContainer = window.document.querySelector("#VPContent")
  const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>(
    ".content-container .main img"
  );
  imageCount.value = imgs?.length || 0
  const words =
    docDomContainer?.querySelector(".content-container .main")?.textContent || ""
  wordCount.value = countWord(words)
}

onMounted(() => {
  // 初始化时执行一次
  analyze()
});

// 监听路由变化，当路径变化时重新检查
watch(
  () => route.path,
  () => {
    analyze()
  }
);
</script>

<style>
.word {
  color: var(--vp-c-text-2);
  font-size: 15px;
  margin-bottom: 15px;
}

.icon {
  display: inline-block;
  transform: translate(0px, 2px);
}
</style>
