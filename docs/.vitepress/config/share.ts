import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import { markdownConfig } from "./shared/markdown";
import { sidebarOptions } from "./shared/sidebar";
import { siteConfig } from "./shared/site";
import { themeConfig } from "./shared/theme";
import { viteConfig } from "./shared/vite";

const vitePressOptions = defineConfig({
  ...siteConfig,
  vite: viteConfig,
  markdown: markdownConfig,
  themeConfig,
});

export const sharedConfig = withSidebar(vitePressOptions, sidebarOptions);
