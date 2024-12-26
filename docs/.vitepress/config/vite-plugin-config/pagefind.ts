import { SearchConfig,PagefindOption } from 'vitepress-plugin-pagefind'
/**
 * 使用浏览器内置的分词API Intl.Segmenter
 */
function chineseSearchOptimize(input: string) {
  const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' })
  const result: string[] = []
  for (const it of segmenter.segment(input)) {
    if (it.isWordLike) {
      result.push(it.segment)
    }
  }
  return result.join(' ')
}

export const pagefind: SearchConfig & PagefindOption = {
  locales: {
    root: {
      customSearchQuery: chineseSearchOptimize,
      btnPlaceholder: '搜索',
      placeholder: '搜索文档',
      emptyText: '空空如也',
      heading: '共: {{searchResult}} 条结果',
      filter(searchItem, idx, originArray) {
        console.log(searchItem)
        return !searchItem.route.includes('404')
      }
    },
    en: {
      btnPlaceholder: 'Search',
      placeholder: 'Search Docs...',
      emptyText: 'No results',
      heading: 'Total: {{searchResult}} search results.',
      filter(searchItem, idx, originArray) {
        console.log(searchItem)
        return !searchItem.route.includes('404')
      }
    }
  },
  excludeSelector: ['img', 'a.header-anchor'],
}