# 第一章：概述

* r-nacos是一个用rust实现的nacos服务。相较于java nacos来说，是一个提供相同功能，启动更快、占用系统资源更小（初始内存小于10M）、性能更高、运行更稳定的服务。 

* r-nacos设计上完全兼容最新版本nacos面向client sdk 的协议（包含1.x的http OpenApi，和2.x的grpc协议）。这使得原本依赖于nacos服务的应用程序能够不修改代码无缝迁移至r-nacos。

![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/r-nacos/r-nacos/total)
![Docker Pulls](https://img.shields.io/docker/pulls/qingpan/rnacos)  

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

![架构图](https://raw.githubusercontent.com/r-nacos/r-nacos/master/doc/assets/imgs/r-nacos_L2_0.3.7.svg)

说明：

* r-nacos默认支持单机或集群部署；单机就相当于一个节点的集群，后续有需要可以按需加入新的节点；
* 数据持久化使用raft协议分布式数据库(raft协议+节点文件存储),类似etcd, **不需要依赖 MySQL**; 
