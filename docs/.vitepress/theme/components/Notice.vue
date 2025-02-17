<template>
  <div v-if="visible" class="notice-background" style="display: block"></div>

  <div v-if="visible" class="notice">
    <h3 class="notice-title">🛎️本站公告({{ countdown }} 秒)</h3>
    <div class="notice-describe">
      <p>🔔本次更新：C 语言预处理器！！！</p>
    </div>
    <div class="notice-footer">
      <div class="notice-btn" @click="closetz">知道了，退下吧</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vitepress";

const visible = ref(false); // 初始化公告为隐藏
const route = useRoute(); // 使用 vitepress 提供的 useRoute
const countdown = ref(10); // 倒计时初始为10秒

// 检查当前页面是否需要显示公告
function checkRoute() {
  // 假设我们只在 '/special-page' 页面显示公告
  if (route.path.endsWith("/notes/")) {
    visible.value = true;
    startCountdown(); // 开始倒计时
  } else {
    visible.value = false;
  }
}

// 关闭公告的函数
function closetz() {
  visible.value = false;
}

// 倒计时函数
function startCountdown() {
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
      closetz();
    }
  }, 1000);
}

// 在组件挂载时检查路由
onMounted(() => {
  checkRoute();
});

// 监听路由变化，当路径变化时重新检查
watch(
  () => route.path,
  () => {
    checkRoute();
  }
);
</script>

<style scoped>
.notice-img {
  z-index: 9999;
}

/* 全屏遮罩层 */
.notice-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 99;
  pointer-events: none;
}

/* 通知 */
.notice {
  z-index: 999;
  padding: 25px;
  background: #fff;
  width: 446px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 18px;
  box-sizing: border-box;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05), 0 1.5rem 2.2rem rgba(0, 0, 0, 0.1);
}

@media (max-width: 640px) {
  .notice {
    width: 82%;
    padding: 25px;
  }
}

.notice-title {
  text-align: center;
  color: #3c3c3c;
  font-size: 20px;
  font-weight: 900;
}

.notice-describe p {
  color: #3c3c3c;
  padding: 10px 0;
  font-size: 15px;
}

.notice-describe p strong {
  color: #3c3c3c;
}

.notice-describe p a {
  color: #eb0e0e;
}

.notice-domain {
  background: #f3f5f7;
  text-align: center;
  border-radius: 10px;
}

/* 通知底部 */
.notice-footer {
  padding: 20px 0 0;
  text-align: center;
}

.notice-btn {
  text-align: center;
  cursor: pointer;
  border-radius: 50px;
  font-weight: 700;
  padding: 0 30px;
  color: #fff;
  background: linear-gradient(to right, #1e69f5 0%, #093ce5 100%);
  box-shadow: 0 10px 12px -4px rgb(0 0 0 / 40%);
  line-height: 40px;
  font-size: 14px;
  display: inline-block;
  text-wrap: nowrap;
}
</style>
