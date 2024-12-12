import { DefaultTheme } from 'vitepress'
export const zhSidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '简介',
      link: `/intro/`,

    },
    {
      text: '快速开始',
      link: `/quick_started/`,
    },
    {
      text: '集群部署',
      link: `/cluster_deploy/`,
    },
    {
      text: '运行参数说明',
      link: `/env_config/`,
    },
    {
      text: '性能与容量说明',
      link: `/performance/`,
    },
    {
      text: '服务健康检测、探活',
      link: `/health/`,
    },
    {
      text: '数据备件与迁移',
      link: `/backup/`,
    },
    {
      text: '版本说明',
      link: `/version_describe/`,
    },
    {
      text: '架构',
      link: `/architecture/`,
    },
    {
      text: '常见问题',
      link: `/faq/`,
    },
    {
      text: '部署样例',
      collapsed: false,
      items: [
        {
          text: '单机部署',
          link: `/deploy_example/linux_deploy/`,
        },
        {
          text: '使用systemd部署r-nacos',
          link: `/deploy_example/linux_systemd_deploy/`,
        },
        {
          text: '集群部署',
          link: `/deploy_example/docker_cluster_deploy/`,
        },
        {
          text: '如何平稳地从nacos迁移到r-nacos？',
          link: `/deploy_example/nacos_to_rnacos_doc/`,
        }
      ],
    }
  ],
}
