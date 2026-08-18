import type { HeadConfig } from "vitepress";
import { VITE_BASE_URL } from "./context";

export const head: HeadConfig[] = [
    ["link", { rel: "shortcut icon", href: `${VITE_BASE_URL}logo.svg` }],
    ["link", { rel: "icon", href: `${VITE_BASE_URL}logo.svg`, type: "image/svg+xml" }],
    // 引入 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    // 关键词和描述
    ['meta', { name: "keywords", content: "r-nacos,nacos,rnacos" }],
    //百度统计
    ['script', { async: '', src: 'https://hm.baidu.com/hm.js?afa135946ba7fb33d69bea1f370b905c' }],
    ["meta", { charset: "UTF-8" }],
];

export const siteConfig = {
    rewrites: {
        "zh/:rest*": ":rest*",
    },
    metaChunk: true,
    lang: "zh-CN",
    title: "R-Nacos",
    titleTemplate: "Hi，终于等到你",
    description: "Rust 语言实现的 Nacos 服务平台，兼容 Nacos(Java)|",
    head,
    appearance: true,
    base: VITE_BASE_URL,
    lastUpdated: true,
    hostname: `https://r-nacos.github.io/docs${VITE_BASE_URL}`,
};

