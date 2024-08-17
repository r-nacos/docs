---
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
lang: zh-CN
title: R-NACOS
titleTemplate: R-NACOS docs
editLink: true
lastUpdated: true

head:
  - - meta
    - name: description
      content: r-nacos docs
  - - meta
    - name: keywords
      content: r-nacos R-Nacos nacos

hero:
  name: "R-NACOS"
  text: "Fast Nacos"
  tagline: "Rust 语言实现的 Nacos 服务平台，兼容 Nacos(Java)"
  image:  # text 和 tagline 区域旁的图片
    src: /logo.png
    alt: "R-NACOS"  
  # 按钮相关
  actions:
    - theme: brand
      text: "简介"
      link: "/notes/intro/"  
    - theme: alt
      text: "快速开始"
      link: "/notes/quick_started/"

# 按钮下方的描述
features:
  - icon: 🪶
    title: "更轻量"
    details: "得益于 Rust 的内存管理和编译时优化，R-Nacos 运行时占用的资源更少，二进制文件更小，适合资源受限的环境。"
  - icon: 🧱
    title: "更稳定"
    details: "Rust 提供了严格的编译器检查和内存安全性，避免了常见的空指针、数据竞争等问题，从而提升了系统的稳定性和可靠性。"
  - icon: 🚀
    title: "高性能"
    details: "Rust 的零成本抽象和高效的并发模型使得 R-Nacos 在处理大量请求时具有更高的性能表现，能够更快地响应和处理服务注册、发现等任务。"  
---




