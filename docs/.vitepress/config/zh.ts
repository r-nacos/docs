import {zhNav} from '../navbar'
import dayjs from 'dayjs'
import type {DefaultTheme, LocaleSpecificConfig} from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: { // 主题设置
        lastUpdated: {
            text: '上次更新',
            formatOptions: {
                year: 'numeric',
                month: 'long',   // 输出“六月”
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }
        },
        returnToTopLabel: '返回顶部', // 更改手机端菜单文字显示

        nav: zhNav,
        docFooter: { // 自定义上下页名
            prev: '上一篇', next: '下一篇'
        },
        darkModeSwitchLabel: '深浅模式', // 手机端深浅模式文字修改
        footer: { // 页脚
            message: 'Released under the MIT License.',
            copyright: `Copyright © ${dayjs().format("YYYY")} R-Nacos`
        },
        outline: { // 大纲显示 1-6 级标题
            level: [1, 6],
            label: '目录'
        },
        editLink: {
            pattern: 'https://github.com/r-nacos/docs/edit/master/docs/:path',
            text: '在 GitHub 编辑本页'
        },

    }
}
