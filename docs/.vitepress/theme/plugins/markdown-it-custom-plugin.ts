// .vitepress/plugins/markdown-it-custom-plugin.ts
import type MarkdownIt from 'markdown-it';

export function customMarkdownPlugin(md: MarkdownIt) {
    // =========================================================================
    // 1. AST 级别精准翻译容器标题 (保留多语言逻辑)
    // =========================================================================
    const defaultRender = md.render;
    md.render = (...args) => {
        const [content, env] = args;
        const currentLang = env?.localeIndex || 'root';

        // 调用原始渲染，拿到生成的 HTML
        let defaultContent = defaultRender.apply(md, args);

        // 精准替换 VitePress 容器标题
        const replaceContainerTitle = (html: string, enText: string, translatedText: string) => {
            const regex = new RegExp(
                `(<[a-z0-9]+[^>]*\\bclass="[^"]*\\bcustom-block-title\\b[^"]*"[^>]*>)${enText}(<\\/[a-z0-9]+>)`,
                'g'
            );
            return html.replace(regex, `$1${translatedText}$2`);
        };

        // 定义多语言映射字典
        const translations: Record<string, Record<string, string>> = {
            root: {
                NOTE: "提醒", TIP: "建议", IMPORTANT: "重要", WARNING: "警告", CAUTION: "注意"
            },
            ko: {
                NOTE: "알림", TIP: "팁", IMPORTANT: "중요", WARNING: "경고", CAUTION: "주의"
            }
        };

        // 根据当前语言执行精准替换
        const langMap = translations[currentLang];
        if (langMap) {
            for (const [en, translated] of Object.entries(langMap)) {
                defaultContent = replaceContainerTitle(defaultContent, en, typeof translated === "string" ? translated : '');
            }
        }

        return defaultContent;
    };

    // =========================================================================
    // 2. 重写 fence 渲染规则
    // =========================================================================
    const defaultFence =
        md.renderer.rules.fence?.bind(md.renderer.rules) ??
        ((...args) => args[0][args[1]].content);

    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const info = token.info.trim();

        // 识别出自定义块
        const isMarkdown = info.includes("markdown");
        const isMdImg = info.includes("md:img");

        if (isMarkdown || isMdImg) {
            // 强行把 md:img/markdown 伪装成 txt 传给 Shiki
            if (isMdImg) {
                token.info = token.info.replace("md:img", "txt");
            } else {
                token.info = token.info.replace("markdown", "txt");
            }

            // 在 AST 树 attrs 数组中添加自定义类名
            token.attrs = token.attrs || [];
            const classIdx = token.attrIndex('class');
            if (classIdx >= 0) {
                token.attrs[classIdx][1] = `vp-raw-html-block ${token.attrs[classIdx][1]}`;
            } else {
                token.attrs.push(['class', 'vp-raw-html-block']);
            }

            // 执行原生渲染
            const originalHtml = defaultFence(tokens, idx, options, env, self);

            // 渲染内部富文本内容
            token.info = info;
            const renderedHtml = md.render(token.content, env);

            // 正则提取外层 <div>
            const openTagMatch = originalHtml.match(/<div[^>]*>/);
            const openTag = openTagMatch ? openTagMatch[0] : '<div class="vp-raw-html-block">';

            const innerClass = isMdImg ? "vp-custom-html-content rendered-md" : "vp-custom-html-content";
            return `${openTag}<div class="${innerClass}">${renderedHtml}</div></div>`;
        }

        return defaultFence(tokens, idx, options, env, self);
    };
}