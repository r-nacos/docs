<template></template>
<script setup lang="ts">
import { onMounted } from "vue";
import confetti from "canvas-confetti";

import { inBrowser } from "vitepress";

onMounted(() => {
  // 确保代码仅在浏览器中运行
  if (!inBrowser) return;

  // 触发初始纸屑效果
  confetti({
    particleCount: 100,
    spread: 170,
    origin: { y: 0.6 },
  });

  // 纸屑动画逻辑
  const duration = 15 * 1000; // 动画总时长 15 秒
  const animationEnd = Date.now() + duration; // 动画结束时间
  let skew = 1; // 用于控制纸屑的倾斜度

  /**
   * 生成指定范围内的随机数
   * @param min 最小值
   * @param max 最大值
   * @returns 随机数
   */
  function randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  /**
   * 动画帧，用于持续生成纸屑效果
   */
  function frame() {
    const timeLeft = animationEnd - Date.now(); // 剩余时间
    const ticks = Math.max(200, 500 * (timeLeft / duration)); // 纸屑的生命周期
    skew = Math.max(0.8, skew - 0.001); // 更新倾斜度

    // 生成单个纸屑
    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    // 如果动画未结束，继续下一帧
    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  }

  // 启动动画
  frame();
});
</script>
