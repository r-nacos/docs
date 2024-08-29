import{_ as a,D as i,c as t,I as e,a6 as o,o as s}from"./chunks/framework.DxTFFumn.js";const b=JSON.parse('{"title":"第一章：概述","description":"","frontmatter":{},"headers":[],"relativePath":"notes/intro/index.md","filePath":"notes/intro/index.md","lastUpdated":1724949156000}'),r={name:"notes/intro/index.md"},n=o('<h1 id="第一章-概述" tabindex="-1">第一章：概述 <a class="header-anchor" href="#第一章-概述" aria-label="Permalink to &quot;第一章：概述&quot;">​</a></h1><ul><li><p>r-nacos是一个用rust实现的nacos服务。相较于java nacos来说，是一个提供相同功能，启动更快、占用系统资源更小（初始内存小于10M）、性能更高、运行更稳定的服务。</p></li><li><p>r-nacos设计上完全兼容最新版本nacos面向client sdk 的协议（包含1.x的http OpenApi，和2.x的grpc协议）。这使得原本依赖于nacos服务的应用程序能够不修改代码无缝迁移至r-nacos。</p></li></ul><p><img src="https://img.shields.io/github/downloads/r-nacos/r-nacos/total" alt="GitHub Downloads (all assets, all releases)" loading="lazy"><img src="https://img.shields.io/docker/pulls/qingpan/rnacos" alt="Docker Pulls" loading="lazy"></p><h1 id="第二章-应用场景和功能" tabindex="-1">第二章：应用场景和功能 <a class="header-anchor" href="#第二章-应用场景和功能" aria-label="Permalink to &quot;第二章：应用场景和功能&quot;">​</a></h1><h2 id="_2-1-应用场景" tabindex="-1">2.1 应用场景 <a class="header-anchor" href="#_2-1-应用场景" aria-label="Permalink to &quot;2.1 应用场景&quot;">​</a></h2><ul><li>① 开发测试环境使用 nacos ，nacos 服务可以换成 r-nacos，启动更快，秒启动。</li><li>② 个人资源云服务部署的 nacos ，可以考虑换成 r-nacos 。资源占用率低，如：包10M 出头，不依赖 JDK；运行时 cpu 小于0.5% ，小于5M（具体和实例有关）。</li><li>③ 使用非订制 nacos 服务 ，希望能提升服务性能与稳定性，可以考虑迁移到 r-nacos 。</li></ul><h2 id="_2-2-功能" tabindex="-1">2.2 功能 <a class="header-anchor" href="#_2-2-功能" aria-label="Permalink to &quot;2.2 功能&quot;">​</a></h2><h3 id="_2-2-1-概述" tabindex="-1">2.2.1 概述 <a class="header-anchor" href="#_2-2-1-概述" aria-label="Permalink to &quot;2.2.1 概述&quot;">​</a></h3><ul><li>r-nacos 的功能分为： <ul><li>① 面向 SDK 的功能。</li><li>② 面向控制台的功能。</li><li>③ 面向部署、集群的功能。</li></ul></li></ul><h3 id="_2-2-2-面向-sdk-的功能" tabindex="-1">2.2.2 面向 SDK 的功能 <a class="header-anchor" href="#_2-2-2-面向-sdk-的功能" aria-label="Permalink to &quot;2.2.2 面向 SDK 的功能&quot;">​</a></h3><ul><li><p>访问认证：</p><ul><li>有提供获取认证 token 的接口</li><li>实际请求暂不支持认证，都算认证通过。</li></ul></li><li><p>配置中心：</p><ul><li>支持配置中心的基础功能、支持维护配置历史记录。</li><li>兼容配置中心的 SDK 协议。</li><li>暂不支持灰度发布、暂不支持 tag 隔离。</li></ul></li><li><p>注册中心：</p><ul><li>支持注册中心的基础功能。</li><li>兼容配置中心的 SDK 协议。</li><li>暂不支持 1.x 的 udp 实例变更实时通知，只支持 2.x 版本 grpc 实例变更实时通知 。</li></ul></li></ul><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p></p><p>对于注册中心，最开始的版本也有支持过 udp 实例变更通知，后面因支持 grpc 的两者不统一，就暂时去掉，后继可以考虑加回去。</p></div><h3 id="_2-2-3-面向控制台的功能" tabindex="-1">2.2.3 面向控制台的功能 <a class="header-anchor" href="#_2-2-3-面向控制台的功能" aria-label="Permalink to &quot;2.2.3 面向控制台的功能&quot;">​</a></h3><ul><li><p>访问认证： 暂时不开启认证。</p></li><li><p>命名空间：</p><ul><li>支持管理命名空间列表。</li><li>支持切换命名空间查询配置、服务数据。</li></ul></li><li><p>配置中心：</p><ul><li>支持配置中心信息管理。</li><li>支持配置导入、导出,其文件格式与 nacos 兼容。</li><li>支持配置历史记录查看与恢复。</li><li>暂不支持 tag 的高级查询。</li><li>暂不支持查询配置监听记录。</li></ul></li><li><p>服务中心：</p><ul><li>支持注册中心的服务、服务实例管理。</li><li>暂不支持查询监听记录</li></ul></li></ul><h3 id="_2-2-4-面向部署、集群的功能" tabindex="-1">2.2.4 面向部署、集群的功能 <a class="header-anchor" href="#_2-2-4-面向部署、集群的功能" aria-label="Permalink to &quot;2.2.4 面向部署、集群的功能&quot;">​</a></h3><p><img src="https://raw.githubusercontent.com/r-nacos/r-nacos/master/doc/assets/imgs/r-nacos_L2_0.3.7.svg" alt="架构图" loading="lazy"></p><p>说明：</p><ul><li>r-nacos默认支持单机或集群部署；单机就相当于一个节点的集群，后续有需要可以按需加入新的节点；</li><li>数据持久化使用raft协议分布式数据库(raft协议+节点文件存储),类似etcd, <strong>不需要依赖 MySQL</strong>;</li></ul>',18);function c(d,u,p,h,_,m){const l=i("ArticleMetadata");return s(),t("div",null,[e(l),n])}const x=a(r,[["render",c]]);export{b as __pageData,x as default};