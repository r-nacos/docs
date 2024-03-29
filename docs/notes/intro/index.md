# 第一章：概述

* r-nacos 是一款采用 Rust 语言精心打造的 nacos 服务实现，它以其轻巧、迅捷、稳健和卓越的性能表现而脱颖而出。这一服务不仅集成了注册中心、配置中心以及直观的 Web 管理控制台，还支持灵活的单机和集群部署模式，满足不同规模的应用需求。

* r-nacos 在设计上充分考虑了与最新版 nacos 的兼容性，确保了对客户端 SDK 协议的全面支持，包括 1.x 版本的 HTTP OpenApi 和 2.x 版本的 gRPC 协议。这使得原本依赖于 nacos 服务的应用程序能够无缝迁移至 r-nacos，无需进行繁琐的代码修改。

* 相较于java nacos，r-nacos 提供了更为出色的性能表现。它不仅启动速度更快，对系统资源的占用也更少，同时在运行稳定性和性能方面都有显著提升。这些优势使得 r-nacos 成为构建现代、高效、可靠的微服务架构的理想选择。



# 第二章：应用场景和功能

## 2.1 应用场景

* ① 开发测试环境使用 nacos ，nacos 服务可以换成 r-nacos，启动更快，秒启动。
* ② 个人资源云服务部署的 nacos ，可以考虑换成 r-nacos 。资源占用率低，如：包10M 出头，不依赖 JDK；运行时 cpu 小于0.5% ，小于5M（具体和实例有关）。
* ③ 使用非订制 nacos 服务 ，希望能提升服务性能与稳定性，可以考虑迁移到 r-nacos 。

## 2.2 功能

### 2.2.1 概述

* r-nacos 的功能分为：
  * ① 面向 SDK 的功能。
  * ② 面向控制台的功能。
  * ③ 面向部署、集群的功能。

### 2.2.2 面向 SDK 的功能

* 访问认证：
  * 有提供获取认证 token 的接口
  * 实际请求暂不支持认证，都算认证通过。

* 配置中心：
  * 支持配置中心的基础功能、支持维护配置历史记录。
  * 兼容配置中心的 SDK 协议。
  * 暂不支持灰度发布、暂不支持 tag 隔离。

* 注册中心：
  * 支持注册中心的基础功能。
  * 兼容配置中心的 SDK 协议。
  * 暂不支持 1.x 的 udp 实例变更实时通知，只支持 2.x 版本 grpc 实例变更实时通知 。

> 注意⚠️：对于注册中心，最开始的版本也有支持过 udp 实例变更通知，后面因支持 grpc 的两者不统一，就暂时去掉，后继可以考虑加回去。

### 2.2.3 面向控制台的功能

* 访问认证： 暂时不开启认证。

* 命名空间：

  * 支持管理命名空间列表。
  * 支持切换命名空间查询配置、服务数据。


* 配置中心：
  * 支持配置中心信息管理。
  * 支持配置导入、导出,其文件格式与 nacos 兼容。
  * 支持配置历史记录查看与恢复。
  * 暂不支持 tag 的高级查询。
  * 暂不支持查询配置监听记录。

* 服务中心：
  * 支持注册中心的服务、服务实例管理。
  * 暂不支持查询监听记录

### 2.2.4 面向部署、集群的功能

* 支持单机部署。
* 支持集群部署，其中集群部署配置中心数据使用 raft + 节点本地存储组成的分布式存储，**不需要依赖 MySQL** 。