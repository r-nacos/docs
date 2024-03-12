import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'
export const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '简介',
      link: `/notes/`,
    },
    {
      text: '快速开始',
      collapsed: true,
      link: `/p/quick_started/`,
      items: [
        {
          text: '部署样列',
          link: `/notes/01_intro/quick_start/`,
        },
      ],
    },
    {
      text: '集群部署',
      link: `/p/cluster_deploy/`,
    },
    {
      text: '运行参数说明',
      link: `/p/deplay_env/`,
    },
    {
      text: '性能与容量说明',
      link: `/p/performance/`,
    },
    {
      text: '版本说明',
      link: `/p/version_describe/`,
    },
    {
      text: '架构',
      link: `/p/architecture/`,
    },
    {
      text: '常见问题',
      link: `/p/faq/`,
    },
  ],
}

export default sidebar
