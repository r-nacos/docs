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
  tagline: "Nacos service platform implemented by Rust language, compatible with Nacos(Java)"
  image:  # text 和 tagline 区域旁的图片
    src: /logo.svg
    alt: "R-NACOS"  
  # 按钮相关
  actions:
    - theme: brand
      text: "intro"
      link: "/en/intro/"  
    - theme: alt
      text: "Quick Start"
      link: "/en/quick_started/"

# 按钮下方的描述
features:
  - icon: 🪶
    title: "Lighter weight"
    details: "Thanks to Rust's memory management and compile-time optimization, R-Nacos runs with fewer resources and smaller binaries, making it ideal for resource-constrained environments."
  - icon: 🧱
    title: "More stable"
    details: "Rust provides rigorous compiler checking and memory security, avoiding common problems such as null Pointers, data races, and so on, thereby improving system stability and reliability."
  - icon: 🚀
    title: "High performance"
    details: "Rust's zero-cost abstraction and efficient concurrency model enable R-Nacos to deliver higher performance when handling large volumes of requests, and to respond and process tasks such as service registration, discovery, and more quickly."  
---

