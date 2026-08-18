import type { VitePressSidebarOptions } from "vitepress-sidebar/types";
import { VITE_BASE_URL } from "./context";

const commonSidebarOptions: VitePressSidebarOptions = {
    documentRootPath: "docs",
    debugPrint: true,
    basePath: VITE_BASE_URL,
    collapsed: true,
    excludeByGlobPattern: ["assets", "public", "index.md", "about","change"],
    includeDotFiles: true,
    includeRootIndexFile: false,
    includeEmptyFolder: true,
    includeFolderIndexFile: false,
    useFolderLinkFromIndexFile: true,
    useTitleFromFrontmatter: false,
    removePrefixAfterOrdering: true,
    prefixSeparator: /^[0-9]{1,2}[-._]/,
    keepMarkdownSyntaxFromTitle: true,
    sortMenusOrderNumericallyFromTitle: true,
    folderLinkNotIncludesFileName: true,
};

const rootLocale = "zh";

export const sidebarOptions: VitePressSidebarOptions[] = [rootLocale, "en"].map((lang) => ({
    ...commonSidebarOptions,
    ...(rootLocale === lang ? {} : {
        basePath: `/${lang}/`,
        useTitleFromFrontmatter: true,
        sortMenusOrderNumericallyFromTitle: false,
    }),
    documentRootPath: `/docs/${lang}`,
    resolvePath: rootLocale === lang ? "/" : `/${lang}/`,
}));

