import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    {
      text: '简介',
      collapsed: true,
      items: [
        { text: '快速开始', link: `/notes/01_intro/quick_start/` },
      ]
    },
    {
      text: '其它',
      collapsed: true,
      items: [

      ]
    },
  ],
}

export default sidebar