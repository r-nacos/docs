---
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: r-nacos
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

head:
  - - meta
    - name: description
      content: r-nacos docs
  - - meta
    - name: keywords
      content: r-nacos 

hero:
  name: "r-nacos"
  text: ""
  tagline: "『r-nacos是一个用rust实现的nacos服务』"
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
  - title: "更轻量"
    details: "r-nacos 在设计上注重减少资源消耗，使得服务运行时占用的内存和CPU资源更少。这对于资源受限的环境或者需要快速部署大量实例的场景非常有用。"
  - title: "更快速"
    details: "通过优化数据存储和网络通信机制，r-nacos 提供了更快的服务发现和配置管理响应时间。这意味着在服务注册、发现以及配置更新时，用户可以体验到更加迅速的服务。"
  - title: "更稳定"
    details: "r-nacos 致力于提供高可用性，通过改进故障转移和数据一致性机制，确保服务在面对网络分区、节点故障等情况下依然能够稳定运行。"
  - title: "高性能"
    details: "r-nacos 通过精心设计的数据结构和算法，提高了处理大量服务实例和配置信息的能力。这使得它能够支持大规模的微服务架构，同时保持高效的性能。"  
---




