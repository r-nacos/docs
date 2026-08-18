import type { Plugin } from "vite";


export function IndexPermalinkCompat(): Plugin {
    return {
        name: "vitepress-index-permalink-compat",

        // 确保在 vitepress-plugin-permalink 后执行
        enforce: "post",

        config(config: any) {
            const permalinks =
                config.vitepress?.site?.themeConfig?.permalinks;

            if (!permalinks?.map) {
                return;
            }

            const map = permalinks.map as Record<string, string>;
            const inv = permalinks.inv as Record<string, string> | undefined;

            // The permalink plugin already prefixes localized source paths. Avoid
            // turning an explicit `/en/...` permalink into `/en/en/...`.
            for (const [path, permalink] of Object.entries(map)) {
                if (!path.startsWith("en/") || !permalink.startsWith("/en/en/")) {
                    continue;
                }

                const normalized = permalink.replace(/^\/en\/en\//, "/en/");
                map[path] = normalized;

                if (inv?.[permalink] === path) {
                    delete inv[permalink];
                    inv[normalized] = path;
                }
            }

        },
    };
}
