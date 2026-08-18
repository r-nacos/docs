import terser from "@rollup/plugin-terser";
import AutoFrontmatter from "vitepress-plugin-auto-frontmatter";
import { AnnouncementPlugin } from "vitepress-plugin-announcement";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { ImagePreviewPlugin } from "vitepress-plugin-image-preview";
import Permalink from "vitepress-plugin-permalink";
import { qrcode } from "vite-plugin-qrcode";
import { customIcon } from "../../theme/utils/customIcon";
import { IndexPermalinkCompat } from "../../theme/plugins/Index-permalink-compat-plugin";

export const viteConfig = {
    build: { chunkSizeWarningLimit: 2000 },
    ssr: {
        noExternal: [
            "dayjs",
            "@nolebase/vitepress-plugin-enhanced-readabilities",
            "@nolebase/ui",
            "@nolebase/vitepress-plugin-highlight-targeted-heading",
            "@nolebase/vitepress-plugin-inline-link-preview",
        ],
    },
    optimizeDeps: {
        exclude: [
            "@nolebase/vitepress-plugin-enhanced-readabilities/client",
            "vitepress",
            "@nolebase/vitepress-plugin-inline-link-preview/client",
        ],
    },
    plugins: [
        AutoFrontmatter({
            pattern: "**/*.md",
            transform: (frontmatter, fileInfo) => {
                const isPermalinkExcludedPage = /^(?:(?:zh|en)\/)?(?:about(?:\/index)?|change\/index)\.md$/.test(
                    fileInfo.relativePath.replaceAll("\\", "/"),
                );

                const transformed = {
                    ...frontmatter,
                    encrypt: frontmatter.encrypt ?? false,
                    ...(frontmatter.permalink || isPermalinkExcludedPage
                        ? {}
                        : { permalink: `/pages/${(Math.random() + Math.random()).toString(16).slice(2, 8)}` }),
                };
                if (frontmatter.encrypt !== undefined && (frontmatter.permalink || isPermalinkExcludedPage)) return;
                return Object.keys(transformed).length ? transformed : undefined;
            },
        }),
        AnnouncementPlugin({
            title: "公告",
            duration: 2,
            mobileMinify: true,
            body: [
                { type: "text", content: "👇 文章中 emoji 详解 👇" },
                { type: "text", content: "🌱 ➡️ 了解", style: "" },
                { type: "text", content: "🔥 ➡️ 熟悉", style: "" },
                { type: "text", content: "🎯 ➡️ 掌握", style: "" },
                { type: "text", content: "💾 ➡️ 过时", style: "" },
            ],
        }),
        qrcode(),
        ImagePreviewPlugin(),
        terser(),
        groupIconVitePlugin({ customIcon }) as any,
        Permalink({ ignoreList: [/^(?:(?:zh|en)\/)?(?:about|change)(?:\/|$)/] }),
        IndexPermalinkCompat(),
    ],
    server: { port: 5173, strictPort: false },
    css: {
        preprocessorOptions: {
            scss: { api: "modern-compiler" },
        },
    },
};
