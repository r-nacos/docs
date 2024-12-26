
import { AnnouncementOptions } from 'vitepress-plugin-announcement'
export const announcement: AnnouncementOptions = {
  title: '更新公告',
  body: [
    { type: 'text', content: '新增：控制台支持国际化，支持中、英两种语言，支持自动选择语言也支持手动切换语言； #181' },
    { type: 'text', content: '修复：修复grpc协议的配置请求中的默认命名空间id为public与空字符串等价的兼容问题； #184' },
    { type: 'text', content: '优化：控制台服务实例列表中增加注册到r-nacos的时间信息 ； #177' },
    { type: 'text', content: '优化：控制台配置列表支持显示配置描述； #179' },
  ],
  footer: [
  ],
  twinkle: true,
  reopen: true
}