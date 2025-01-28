import { DefaultTheme } from 'vitepress'
// 英文侧边栏
export const enSidebar: DefaultTheme.Sidebar = {
    '/': [
      {
        text: 'Intro',
        link: `/en/intro/`,
  
      },
      {
        text: 'Quick Start',
        link: `/en/quick_started/`,
      },
      {
        text: 'Cluster Deployment',
        link: `/en/cluster_deploy/`,
      },
      {
        text: 'Deployment Parameter Guide',
        link: `/en/env_config/`,
      },
      {
        text: 'Performance and Capacity Overview',
        link: `/en/performance/`,
      },
      {
        text: 'Service Health Check and Liveness Detection',
        link: `/en/health/`,
      },
      {
        text: 'Data Backup and Migration Management',
        link: `/en/backup/`,
      },
      {
        text: 'Version Description',
        link: `/en/version_describe/`,
      },
      {
        text: 'Architecture',
        link: `/en/architecture/`,
      },
      {
        text: 'Faq',
        link: `/en/faq/`,
      },
      {
        text: 'Deployment example',
        collapsed: false,
        items: [
          {
            text: 'Linux deploy',
            link: `/en/deploy_example/linux_deploy/`,
          },
          {
            text: 'Deploying r-nacos with systemd',
            link: `/en/deploy_example/linux_systemd_deploy/`,
          },
          {
            text: 'Cluster deployment',
            link: `/en/deploy_example/docker_cluster_deploy/`,
          },
          {
            text: 'How to move smoothly from nacos to r-nacos?',
            link: `/en/deploy_example/nacos_to_rnacos_doc/`,
          }
        ],
      }
    ],
  }
