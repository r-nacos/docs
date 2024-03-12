import { DefaultTheme } from 'vitepress'
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    {
      text: '简介',
      collapsed: false,
      items: [
        {
          text: 'R-Nacos是什么?',
          link: `/notes/intro/what_is_r-nacos/`,
        },
        {
          text: '快速开始',
          link: `/notes/intro/quick_start/`,
        },
        {
          text: '集群部署',
          link: `/notes/intro/cluster_deploy/`,
        },
      ],
    },
    {
      text: '高级',
      collapsed: false,
      items: [
        {
          text: '运行参数和性能',
          link: `/notes/high/run_params_performance/`,
        },
        {
          text: '架构',
          link: `/notes/high/architecture/`,
        },
      ]
    },
    {
      text: '快速开始',
      collapsed: true,
      link: `/p/quick_started/`,
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
      link: `/notes/faq/`,
    },
  ],
}

export default sidebar
