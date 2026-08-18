<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { ArrowRight, BrainCircuit, Eye, EyeOff, KeyRound, LockKeyhole, PencilLine, RefreshCw, ShieldCheck, UserRound } from '@lucide/vue'

const AUTH_KEY = 'vitepress-page-authenticated'
const { frontmatter } = useData()
const username = ref('')
const password = ref('')
const captchaInput = ref('')
const captchaLeft = ref(0)
const captchaRight = ref(0)
const errorMessage = ref('')
const authenticated = ref(false)
const showPassword = ref(false)
const activeSlide = ref(0)
let carouselTimer: ReturnType<typeof setInterval> | undefined
let wheelLocked = false
const slides = [
  { title: '构建完整的计算机知识体系', description: '保持专注，循序渐进地掌握每一个核心概念' },
  { title: '从理解原理到动手实践', description: '用清晰的学习路径连接基础知识与工程应用' },
  { title: '记录每一步学习进展', description: '持续积累、及时复盘，让复杂知识变得有迹可循' },
]
const isProtected = computed(() => frontmatter.value.encrypt === true)
const expectedUsername = import.meta.env.VITE_DOCS_USERNAME || 'admin'
const expectedPassword = import.meta.env.VITE_DOCS_PASSWORD || '123456'

function refreshCaptcha() {
  captchaLeft.value = Math.floor(Math.random() * 8) + 1
  captchaRight.value = Math.floor(Math.random() * 8) + 1
  captchaInput.value = ''
}

function login() {
  errorMessage.value = ''
  if (!username.value.trim() || !password.value || !captchaInput.value.trim()) {
    errorMessage.value = '请填写用户名、密码和验证码'
    return
  }
  if (Number(captchaInput.value) !== captchaLeft.value + captchaRight.value) {
    errorMessage.value = '验证码错误，请重新计算'
    refreshCaptcha()
    return
  }
  if (username.value !== expectedUsername || password.value !== expectedPassword) {
    errorMessage.value = '用户名或密码错误'
    password.value = ''
    refreshCaptcha()
    return
  }
  authenticated.value = true
  sessionStorage.setItem(AUTH_KEY, 'true')
}

function startCarousel() {
  clearInterval(carouselTimer)
  carouselTimer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % slides.length
  }, 5000)
}

function goToSlide(index: number) {
  activeSlide.value = (index + slides.length) % slides.length
  startCarousel()
}

function handleCarouselWheel(event: WheelEvent) {
  if (wheelLocked || Math.abs(event.deltaY) < 8) return
  wheelLocked = true
  goToSlide(activeSlide.value + (event.deltaY > 0 ? 1 : -1))
  window.setTimeout(() => { wheelLocked = false }, 650)
}

onMounted(() => {
  authenticated.value = sessionStorage.getItem(AUTH_KEY) === 'true'
  refreshCaptcha()
  startCarousel()
})

onBeforeUnmount(() => clearInterval(carouselTimer))

watch(isProtected, () => { errorMessage.value = '' })
</script>

<template>
  <slot v-if="!isProtected || authenticated" />
  <main v-else class="auth-page">
    <section class="auth-login" aria-labelledby="auth-title">
      <a class="auth-brand" href="/" aria-label="返回文档首页">
        <img src="/logo.png" alt="">
        <span>为知笔记</span>
      </a>

      <div class="auth-login-content">
        <p class="auth-eyebrow"><ShieldCheck :size="15" aria-hidden="true" />受保护内容</p>
        <h1 id="auth-title">登录您的账号</h1>
        <p class="auth-description">验证身份后继续阅读受保护的文档内容</p>

        <form class="auth-form" @submit.prevent="login">
          <label class="auth-field" for="auth-username">
            <UserRound class="auth-field-icon" :size="19" aria-hidden="true" />
            <input id="auth-username" v-model="username" name="username" type="text" autocomplete="username" placeholder="请输入用户名">
          </label>

          <label class="auth-field" for="auth-password">
            <LockKeyhole class="auth-field-icon" :size="19" aria-hidden="true" />
            <input id="auth-password" v-model="password" name="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" placeholder="请输入密码">
            <button class="auth-password-toggle" type="button" :title="showPassword ? '隐藏密码' : '显示密码'" @click="showPassword = !showPassword">
              <EyeOff v-if="showPassword" :size="19" />
              <Eye v-else :size="19" />
            </button>
          </label>

          <div class="auth-captcha-row">
            <label class="auth-field" for="auth-captcha">
              <KeyRound class="auth-field-icon" :size="19" aria-hidden="true" />
              <input id="auth-captcha" v-model="captchaInput" name="captcha" type="text" inputmode="numeric" autocomplete="off" placeholder="验证码结果">
            </label>
            <button class="auth-captcha" type="button" title="刷新验证码" @click="refreshCaptcha"><span>{{ captchaLeft }} + {{ captchaRight }} = ?</span><RefreshCw :size="15" /></button>
          </div>

          <p v-if="errorMessage" class="auth-error" role="alert">{{ errorMessage }}</p>
          <button class="auth-submit" type="submit"><span>登录并继续</span><ArrowRight :size="18" aria-hidden="true" /></button>
        </form>
      </div>
    </section>

    <aside class="auth-showcase" @wheel.prevent="handleCarouselWheel">
      <Transition name="auth-slide" mode="out-in">
        <div :key="activeSlide" class="auth-slide">
          <div v-if="activeSlide === 0" class="auth-dashboard-visual">
            <div class="auth-progress-panel">
              <div class="auth-panel-bar"><i></i><i></i><i></i><span>learning-path.c</span></div>
              <div class="auth-progress-list">
                <div><b>01</b><span>基础语法与程序结构</span><em>100%</em><i style="--value:100%"></i></div>
                <div><b>02</b><span>指针、内存与函数</span><em>72%</em><i style="--value:72%"></i></div>
                <div><b>03</b><span>数据结构与算法</span><em>45%</em><i style="--value:45%"></i></div>
                <div><b>04</b><span>系统编程实践</span><em>18%</em><i style="--value:18%"></i></div>
              </div>
            </div>
            <div class="auth-study-card"><span>今日学习</span><strong>86 min</strong><div><i></i><i></i><i></i><i></i><i></i></div></div>
          </div>
          <div v-else-if="activeSlide === 1" class="auth-path-visual">
            <div class="auth-path-center"><BrainCircuit :size="42" /><strong>核心原理</strong></div>
            <div class="auth-path-node auth-path-node--start">基础知识</div><div class="auth-path-node auth-path-node--practice">动手实验</div><div class="auth-path-node auth-path-node--result">工程应用</div>
          </div>
          <div v-else class="auth-notes-visual">
            <div class="auth-notes-head"><PencilLine :size="25" /><strong>学习记录</strong><span>本周</span></div>
            <div class="auth-notes-stats"><div><span>已完成</span><strong>24</strong></div><div><span>学习时长</span><strong>8.6h</strong></div><div><span>连续学习</span><strong>7 天</strong></div></div>
            <div class="auth-notes-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </div>
          <h2>{{ slides[activeSlide].title }}</h2>
          <span>{{ slides[activeSlide].description }}</span>
        </div>
      </Transition>
      <div class="auth-dots" aria-label="切换介绍内容">
        <button v-for="(_, index) in slides" :key="index" type="button" :class="{ active: activeSlide === index }" :aria-label="`第 ${index + 1} 页`" @click="goToSlide(index)"></button>
      </div>
    </aside>
  </main>
</template>
