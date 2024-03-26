import { DefaultTheme } from 'vitepress'
export const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '简介',
      link: `/notes/intro/`,
      
    },
    {
      text: '快速开始',
      link: `/notes/quick_started/`,
    },
    {
      text: '集群部署',
      link: `/notes/cluster_deploy/`,
    },
    {
      text: '运行参数说明',
      link: `/notes/env_config/`,
    },
    {
      text: '性能与容量说明',
      link: `/notes/performance/`,
    },
    {
      text: '版本说明',
      link: `/notes/version_describe/`,
    },
    {
      text: '架构',
      link: `/notes/architecture/`,
    },
    {
      text: '常见问题',
      link: `/notes/faq/`,
    },
    {
      text: '部署样例',
      collapsed: false,
      items: [
        {
          text: '单机部署',
          link: `/notes/deploy_example/linux_deploy/`,
        },
        {
          text: '使用systemd部署r-nacos',
          link: `/notes/deploy_example/linux_systemd_deploy/`,
        },
        {
          text: '集群部署',
          link: `/notes/deploy_example/docker_cluster_deploy/`,
        }
      ],
    }
  ],
}

export default sidebar
