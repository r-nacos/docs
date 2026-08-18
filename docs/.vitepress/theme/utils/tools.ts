/**
 * 动态为外部链接设置图标
 */
export const initLinkIcons = (): void => {
  if (typeof window === 'undefined') return

  // 增加 [data-link-icon-processed] 避免重复处理
  const links = document.querySelectorAll<HTMLAnchorElement>('.vp-doc a:not([href^="https://img.shields.io/"]):not(.not):not([data-link-icon-processed])')

  links.forEach((link) => {
    const href = link.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('/')) {
      link.setAttribute('data-link-icon-processed', 'true')
      return
    }

    try {
      const url = new URL(href, window.location.origin)
      const { hostname } = url

      if (hostname && hostname !== window.location.hostname) {
        link.style.setProperty('--link-favicon', `url(https://favicon.im/${hostname})`)
        link.classList.add('external-link')
      }
    } catch {
      // 忽略无效 URL
    } finally {
      link.setAttribute('data-link-icon-processed', 'true')
    }
  })
}