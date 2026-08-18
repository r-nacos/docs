import confetti from "canvas-confetti"

// 动画总时长 15 秒
const duration = 15 * 1000
// 动画结束时间
const animationEnd = Date.now() + duration
// 用于控制纸屑的倾斜度
let skew = 1
// 停止标志
let isStopped = false

/**
 * 生成指定范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 随机数
 */
function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

/**
 * 动画帧，用于持续生成纸屑效果
 */
function frame() {
  // 如果动画被停止，直接返回
  if (isStopped) return

  const timeLeft = animationEnd - Date.now() // 剩余时间
  const ticks = Math.max(200, 500 * (timeLeft / duration)) // 纸屑的生命周期
  skew = Math.max(0.8, skew - 0.001) // 更新倾斜度

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
  })

  // 如果动画未结束，继续下一帧
  if (timeLeft > 0) {
    requestAnimationFrame(frame)
  }
}

/**
 * 启动动画
 */
function startConfettiAnimation() {
  isStopped = false // 重置停止标志
  frame() // 开始动画
}

/**
 * 停止动画
 */
function stopConfettiAnimation() {
  isStopped = true // 设置停止标志
}

// 导出启动和停止函数
export { startConfettiAnimation, stopConfettiAnimation }
