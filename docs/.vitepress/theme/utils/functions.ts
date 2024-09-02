const pattern
  = /[a-zA-Z0-9_\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g

export function countWord(data: string) {
  data = data.trim()
  // 正则表达式匹配 "更新: 2024/8/27 字数: 0 字 时长: 0 分钟" 并删除它
  const ignorePattern = /更新:\s*\d{4}\/\d{1,2}\/\d{1,2}\s*字数:\s*\d+\s*字\s*时长:\s*\d+\s*分钟/
  data = data.replace(ignorePattern, '')
  debugger
  console.log('data', data)
  const m = data.match(pattern)
  let count = 0
  if (!m) {
    return 0
  }
  for (let i = 0; i < m.length; i += 1) {
    if (m[i].charCodeAt(0) >= 0x4E00) {
      count += m[i].length
    }
    else {
      count += 1
    }
  }
  return count
}