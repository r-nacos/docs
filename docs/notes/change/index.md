> 常用的符号说明：
>
> ✨新增：用于表示添加新功能或新特性的任务。
>
> 🛠️优化：用于表示代码重构或性能优化的任务。
>
> 📖文档：用于表示更新或添加文档的任务。
>
> 🐛修复：用于表示修复错误或问题的任务。
>
> 💥破坏性变更：指的是对代码、API、协议或系统的更改，这些更改可能会导致依赖旧版本的系统、库或应用程序无法正常工作。


## [v0.5.10](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.10) 2024-05-27
Released by @github-actions[bot] on 2024-05-27T01:10:11Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.9...v0.5.10


新版本控制台前端还有点小问题 #95 ，先把控制台前端回切到旧版本规避这个问题，以保证最新正式版本的控制台功能稳定可用。

新版本控制台前端问题全部处理好后再切回新版。

## [v0.5.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.9) 2024-05-21
Released by @github-actions[bot] on 2024-05-21T14:40:05Z

## What's Changed
* feat(*): 代码片段优化 by @Clownsw in https://github.com/nacos-group/r-nacos/pull/90

v0.5.9是修复v0.5.8控制台前端的问题，相对于v0.5.7的变更项：

1. ✨新增: 调整github workflows以增加支持打包MacOS arm64安装包 #77
2. ✨新增: 面向SDK的接口增加鉴权  #65
3. ✨新增: 支持开启集群间的通信请求校验cluster token #93
4. 🛠️优化: 切换重构后的新版控制台目前功能基本一致；后续会基于新版适配支持移动端，支持国际化等。#58
5. 🛠️优化: openapi接口代码结构调整重构 #62


这次变更中控制台前端切换到重构后的新版本 [rnacos-console-web](https://github.com/r-nacos/rnacos-console-web)。
整个控制台重构工作是由 @DaqiongYang 完成的。这次上线后控制台前端后续的开发工作可以交给他主导开发。 

经过一个多月的磨合，终于为项目找到了合适的前端开发负责人。
之后作者可以更专注于系统设计与后端开发。

在这里特别感谢 @DaqiongYang 的工作。

## New Contributors
* @Clownsw made their first contribution in https://github.com/nacos-group/r-nacos/pull/90

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.8...v0.5.9

## [v0.5.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.8) 2024-05-20
Released by @github-actions[bot] on 2024-05-20T01:01:10Z

## What's Changed
* Rebuild the structure of openapi by @Freedomfirebody in https://github.com/nacos-group/r-nacos/pull/70

---

发布后收到问题：添加配置会直接添加到public内 #82 

有使用控制台编辑配置的暂时先使用v0.5.7版本,
这两天我抽空处理下再发一个新版本出来。

## New Contributors
* @Freedomfirebody made their first contribution in https://github.com/nacos-group/r-nacos/pull/70

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.7...v0.5.8

## [v0.5.8-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.8-beta.1) 2024-05-12
Released by @github-actions[bot] on 2024-05-12T17:38:30Z

## What's Changed
* Rebuild the structure of openapi by @Freedomfirebody in https://github.com/nacos-group/r-nacos/pull/70

1. 调整github workflows以增加支持打包MacOS arm64安装包 #77
2. 面向SDK的接口增加鉴权  #65
3. 切换重构后的新版控制台 0.4.0-beta.2 ，目前功能基本一致；后续会基于新版适配支持移动端，支持国际化等。
4. openapi接口代码结构调整重构 #62


## New Contributors
* @Freedomfirebody made their first contribution in https://github.com/nacos-group/r-nacos/pull/70

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.7...v0.5.8-beta.1

## [v0.5.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.7) 2024-05-05
Released by @github-actions[bot] on 2024-05-05T11:25:53Z

## What's Changed
* 将文档链接旧地址更新 by @Aurorxa in https://github.com/nacos-group/r-nacos/pull/63
* merge Develop update version to v0.5.7-beta by @heqingpan in https://github.com/nacos-group/r-nacos/pull/67


1. 解决日志打印中的时间不能按时区打印题；默认以本机时区打印日志时间，支持通过配置指定时区。 #56
2. 修复因控制台切换v2版本接口，导致dataId为空的配置可以增加不能删除的问题。 #69

## New Contributors
* @Aurorxa made their first contribution in https://github.com/nacos-group/r-nacos/pull/63

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.6...v0.5.7

----

2024-05-08 09:00

本版本由github actions打出来的mac包`rnacos-x86_64-apple-darwin.tar.gz`在x86中提示 `bad CPU type in executable` (可能是MacOS最新的打包平台已经切换到arm64架构)。

我今天在我电脑重新打个包手动上传，后续再调整对应的github actions。

如果还有问题，可以先用v0.5.6版本。



## [v0.5.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.6) 2024-04-19
Released by @github-actions[bot] on 2024-04-19T16:32:55Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.5...v0.5.6

1. 重构控制台接口，把控制台接口独立出来不依赖openapi。这样控制台接口能灵活的支持控制台功能，同时也方便系统对nacos openapi后续的持续兼容。 #58
2. 配置中心，配置信息内容增加配置格式和配置描述两个字段。 #55 #57
3. 控制台页面，配置中心配置编辑器换成代码编辑器，支持高亮显示配置内容，对编辑配置内容操作更友好。 #55 #57
4. 修复重启后配置中心历史记录id从1计数的问题。(配置历史记录id只用于控制台显示，不影响使用)

## [v0.5.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.5) 2024-04-13
Released by @github-actions[bot] on 2024-04-13T02:24:29Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.4...v0.5.5

1. 简化控制台登录验证码 #54
2. 修复控制台使用nginx代理时，退出后重新登陆跳转的页面路径不对的问题；
3. 控制台登陆默认过期设置为一天，可通过配置设置过期时间；

## [v0.5.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.4) 2024-04-07
Released by @github-actions[bot] on 2024-04-07T16:00:37Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.3...v0.5.4

1. 控制台增加支持css/js 缓存提高页面加载效率 #53
2. 修复控制台已登陆的用户修改密码没有权限问题

## [v0.5.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.3) 2024-04-02
Released by @github-actions[bot] on 2024-04-02T00:11:02Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.2...v0.5.3

+ 修复控制台配置列表页面下载和上传文件使用旧接口，不支持请求转发到/rnacos/二级目录下的问题。

## [v0.5.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.2) 2024-03-31
Released by @github-actions[bot] on 2024-03-31T14:14:42Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.1...v0.5.2

+ 修复控制台查询用户接口用户参数字段不正确的问题
+ 控制台前后端路径放到二级目录,支持以二级目录把r-nacos转发到已有的域名上。#46
+ 默认只保留鉴权控制台，关闭无鉴权控制台，支持通过配置开启。#51
+ 打包增加对linux arm64包支持

## [v0.5.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.1) 2024-03-27
Released by @github-actions[bot] on 2024-03-27T16:13:27Z

## What's Changed
* [config]打包加入默认配置文件 by @asmpg in https://github.com/r-nacos/r-nacos/pull/47
* 控制台前端资源请求支持开启gzip以提升页面首屏加载速度 #43
* 修复raft在初始化index文件分两次写入弟一次写入成功弟二次写入失败，导致重启时index内容不全启动失败的问题。 #50


**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.0...v0.5.1

## [v0.5.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.0) 2024-03-18
Released by @github-actions[bot] on 2024-03-18T15:38:23Z

## What's Changed
* [polish] Update the repository URL in the README file to r-nacos by @asmpg in https://github.com/r-nacos/r-nacos/pull/45

* 优化raft集群写入机制；
	* 配置中心单节点写入tps从1.8千提升到1.76万，提升9.7倍；
	* (在单台机器运行)3节点集群写入 tps 从1.5千提升到7.6千，提升5倍 ;
* 优化raft集群写入机制同时去除sled存储，以自定义raft log与snapshot文件替代；
	* 调整后初始启动内存从26M降低到5M；
	* 写入配置中心压测时内存从上百M左右 降低到20M 左右；
* 去除sled存储这项调整使得v0.5.x版本与v0.4.x的储存不兼容，这点旧版本用户在升级前需要注意；储存不兼容主要影响配置中心与控制台用户数据；
	* 配置中心可通过配置导出与导入做数据迁移
	* 控制台用户数据目前没有工具支持迁移；因预计这部分的需求不会很大，暂定不单独提供迁移工具；如果这部分用户需求较多，后面也可以考虑单独出个工具支持从v0.4.x 迁移到v0.5.x；（ 有需求的同学去提 issue反馈，数量超过10个我再抽空补充这个迁移工具)；

## New Contributors
* @asmpg made their first contribution in https://github.com/r-nacos/r-nacos/pull/45

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.4.3...v0.5.0

## [v0.5.0-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.0-beta) 2024-03-10
Released by @github-actions[bot] on 2024-03-10T10:20:02Z

## What's Changed
* [polish] Update the repository URL in the README file to r-nacos by @asmpg in https://github.com/r-nacos/r-nacos/pull/45
* 优化raft集群写入机制；
	* 配置中心单节点写入tps从1.8千提升到1.76万，提升9.7倍；
	* (在单台机器运行)3节点集群写入 tps 从1.5千提升到7.6千，提升5倍 ;
* 优化raft集群写入机制同时去除sled存储，以自定义raft log与snapshot文件替代；
	* 调整后初始启动内存从26M降低到5M；
	* 写入配置中心压测时内存从上百M左右 降低到20M 左右；
* 去除sled存储这项调整使得v0.5.x版本与v0.4.x的储存不兼容，这点旧版本用户在升级前需要注意；储存不兼容主要影响配置中心与控制台用户数据；
	* 配置中心可通过配置导出与导入做数据迁移
	* 控制台用户数据目前没有工具支持迁移；因预计这部分的需求不会很大，暂定不单独提供迁移工具；如果这部分用户需求较多，后面也可以考虑单独出个工具支持从v0.4.x 迁移到v0.5.x；（ 有需求的同学去提 issue反馈，数量超过10个我再抽空补充这个迁移工具)；
	* 目前 v0.5.x只出 beta 版本，生产环境可以等正式版本后再考虑迁移；

本次变更主内容要是[优化raft集群写入机制](https://github.com/r-nacos/r-nacos/issues/19)，具体的信息也可以参考对应[issue](https://github.com/r-nacos/r-nacos/issues/19)下的内容。

## New Contributors
* @asmpg made their first contribution in https://github.com/r-nacos/r-nacos/pull/45

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.4.3...v0.5.0-beta

## [v0.4.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.3) 2024-03-01
Released by @github-actions[bot] on 2024-03-01T14:35:05Z

## What's Changed
* feat: add helm chart by @dickens7 in https://github.com/r-nacos/r-nacos/pull/40
* 修复集群从节点在控制台导入配置不生效的问题 #41

## New Contributors
* @dickens7 made their first contribution in https://github.com/r-nacos/r-nacos/pull/40

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.4.2...v0.4.3

## [v0.4.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.2) 2024-01-09
Released by @github-actions[bot] on 2024-01-09T15:38:38Z

更新版本到v0.4.2,修复控制台前端时间转化成字符串格式取值错误的问题。

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.4.1...v0.4.2

## [v0.4.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.1) 2024-01-08
Released by @github-actions[bot] on 2024-01-08T16:58:27Z

1. 调整r-nacos部分出入参类型处理以支持nacos-sdk-go #35
2. 调整r-nacos部分出入参类型处理以支持nacos-sdk-rust #36

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.4.0...v0.4.1

## [v0.4.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.0) 2023-12-23
Released by @github-actions[bot] on 2023-12-23T14:59:09Z

1. 支持另开一个http独立端口专门用于新控制台，可以单独开放新控制台的端口到外网使用 。 [#29](https://github.com/heqingpan/rnacos/issues/29)
2. 新控制台http端口请求，增加一个统一的登录校验拦截，支持登录校验频率等必要的校验，以支持对外网暴露 。 [#29](https://github.com/heqingpan/rnacos/issues/29)
3. 启用新控制台时，默认增加一个管理员。 [#29](https://github.com/heqingpan/rnacos/issues/29)
4. 新控制台增加一个用户管理模块，管理用户，与用户权限。 [#29](https://github.com/heqingpan/rnacos/issues/29)
5. 新控制台维护一个简易权限控制模块. [#29](https://github.com/heqingpan/rnacos/issues/29)
6. 新控制台 web前端页面实现,更新rnacos-web-dist-wrap版本到v0.3.1。 [#29](https://github.com/heqingpan/rnacos/issues/29)

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.9...v0.4.0

## [v0.4.0-beta.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.0-beta.4) 2023-12-17
Released by @github-actions[bot] on 2023-12-17T13:27:08Z

1. 新控制台前端增加页面权限控制；
2. 新控制台后端增加接口与页面的请求的权限控制；
3. 发布r-nacos新版本 v0.4.0-beta.4

角色权限说明：

1. 管理员: 所有控制台权限
2. 开发者：除了用户管理的所有控制台权限
3. 访客：只能查询配置中心与注册中心的数据，没有编辑权限。

新控制台总体功能已完成，还有登录校验失败频率限制等一部分安全增强内容待补充，完成后再发正式版本。

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.4.0-beta.1...v0.4.0-beta.4


## [v0.4.0-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.0-beta.1) 2023-12-09
Released by @github-actions[bot] on 2023-12-09T16:10:05Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.9...v0.4.0-beta.1

开发r-nacos新控制台，支持新开一个http端口、支持用户密码登陆、支持对外网暴露。

1. 新控制台单据开一个http端口，以支持外网访问，可以单独开放新控制台的端口到外网。端口号：http_port+2000，默认为10848，本地可以通过 http://127.0.0.1:10848/ 访问。 
2. 新控制台增加用户管理模块，支持管理控制台用户。默认用户名为 admin,对应的密码为 admin；对外网开放前需要更新密码。
3. 新控制台所有的接口都控制加上登陆校验，登录页面接口增加验证码校验（后继正式版本还会增加错误校验频率拦截）。

新控制台后面还差最后一个角色权限控制功能模块待开发。具体计划可参考： https://github.com/heqingpan/rnacos/issues/29

## [v0.3.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.9) 2023-10-16
Released by @github-actions[bot] on 2023-10-16T16:14:25Z

## What's Changed
* 更新rnacos-web-dist-wrap版本到v0.2.2，优化控制台页面样式，解决控制台在windows浏览器默认显示滚动条样式不美观的问题
* znb 20231014 配置中心校验tenant by @zhangyubo in https://github.com/heqingpan/rnacos/pull/24
* znb 20231015  配置中心校验data_id、group、content等参数 by @zhangyubo in https://github.com/heqingpan/rnacos/pull/25
* Develop by @heqingpan in https://github.com/heqingpan/rnacos/pull/26
* znb 20231016 删除配置时对 tenant、group、data_id的字符有效性校验 by @zhangyubo in https://github.com/heqingpan/rnacos/pull/27

## New Contributors
* @zhangyubo made their first contribution in https://github.com/heqingpan/rnacos/pull/24

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.8...v0.3.9

## [v0.3.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.8) 2023-09-29
Released by @github-actions[bot] on 2023-09-29T14:30:58Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.7...v0.3.8

## [v0.3.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.7) 2023-09-28
Released by @github-actions[bot] on 2023-09-28T13:28:11Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.6...v0.3.7

## [v0.3.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.6) 2023-09-27
Released by @github-actions[bot] on 2023-09-27T00:11:59Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.5...v0.3.6

## [v0.3.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.5) 2023-09-24
Released by @github-actions[bot] on 2023-09-24T07:11:00Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.4...v0.3.5

## [v0.3.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.4) 2023-09-20
Released by @github-actions[bot] on 2023-09-20T15:20:21Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.3...v0.3.4

## [v0.3.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.3) 2023-09-18
Released by @github-actions[bot] on 2023-09-18T16:18:24Z

## What's Changed
* Fix issue #14 by @zzyandzzy in https://github.com/heqingpan/rnacos/pull/15

## New Contributors
* @zzyandzzy made their first contribution in https://github.com/heqingpan/rnacos/pull/15

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.2...v0.3.3

## [v0.3.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.2) 2023-09-17
Released by @github-actions[bot] on 2023-09-17T16:45:10Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.1...v0.3.2

## [v0.3.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.1) 2023-09-17
Released by @github-actions[bot] on 2023-09-17T15:50:27Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.0...v0.3.1

## [v0.3.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.0) 2023-09-16
Released by @github-actions[bot] on 2023-09-16T12:36:37Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.2...v0.3.0

## [v0.2.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.3) 2023-09-16
Released by @github-actions[bot] on 2023-09-16T12:07:25Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.1...v0.2.3

## [v0.2.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.2) 2023-09-15
Released by @github-actions[bot] on 2023-09-15T16:19:09Z

## What's Changed
* raft_feature v0.2.1-beta.1 by @heqingpan in https://github.com/heqingpan/rnacos/pull/9


**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.0...v0.2.2

## [v0.2.2-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.2-beta.1) 2023-08-26
Released by @github-actions[bot] on 2023-08-26T00:57:32Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.1-beta.1...v0.2.2-beta.1

## [v0.2.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.1) 2023-08-25
Released by @github-actions[bot] on 2023-08-25T23:57:27Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.0...v0.2.1

## [v0.2.1-beta.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.1-beta.2) 2023-08-25
Released by @github-actions[bot] on 2023-08-25T16:21:56Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.0...v0.2.1-beta.2

## [v0.2.1-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.1-beta.1) 2023-08-07
Released by @github-actions[bot] on 2023-08-07T17:08:40Z

## What's Changed
* raft_feature v0.2.1-beta.1 by @heqingpan in https://github.com/heqingpan/rnacos/pull/9


**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.0...v0.2.1-beta.1

## [v0.2.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.0) 2023-07-03
Released by @github-actions[bot] on 2023-07-03T15:54:40Z

## What's Changed
* Loadtest feature by @heqingpan in https://github.com/heqingpan/rnacos/pull/5
* Clippy and fmt by @heqingpan in https://github.com/heqingpan/rnacos/pull/6


**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.10...v0.2.0

## [v0.1.10](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.10) 2023-06-18
Released by @github-actions[bot] on 2023-06-18T16:10:12Z

## What's Changed
* Develop by @heqingpan in https://github.com/heqingpan/rnacos/pull/4

## New Contributors
* @heqingpan made their first contribution in https://github.com/heqingpan/rnacos/pull/4

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.9...v0.1.10

## [v0.1.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.9) 2023-06-10
Released by @github-actions[bot] on 2023-06-10T10:56:49Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.8...v0.1.9

## [v0.1.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.8) 2023-06-01
Released by @github-actions[bot] on 2023-06-01T14:08:59Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.7...v0.1.8

## [v0.1.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.7) 2023-05-31
Released by @github-actions[bot] on 2023-05-31T16:11:34Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.6...v0.1.7

## [v0.1.6-3](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.6-3) 2023-05-30
Released by @github-actions[bot] on 2023-05-30T16:11:34Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.6-2...v0.1.6-3

## [v0.1.6-2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.6-2) 2023-05-29
Released by @github-actions[bot] on 2023-05-29T15:12:05Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.6...v0.1.6-2

## [v0.1.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.6) 2023-05-28
Released by @github-actions[bot] on 2023-05-28T15:02:38Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.5...v0.1.6

## [v0.1.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.5) 2023-05-19
Released by @github-actions[bot] on 2023-05-19T15:29:52Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.4...v0.1.5

## [v0.1.5-beta2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.5-beta2) 2023-05-15
Released by @github-actions[bot] on 2023-05-15T16:38:24Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.4...v0.1.5-beta2

## [v0.1.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.4) 2023-05-11
Released by @github-actions[bot] on 2023-05-11T17:28:22Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.3...v0.1.4

v0.1.4

1. 修复2.0版本注册心跳的问题，注册中心支持grpc统一维持心跳。
2. 配置中心支持导入配置文件，配置文件兼容 nacos 格式。（导出计划后继版本支持）

## [v0.1.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.3) 2023-05-07
Released by @github-actions[bot] on 2023-05-07T15:48:13Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.2...v0.1.3

## [v0.1.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.2) 2023-05-06
Released by @github-actions[bot] on 2023-05-06T16:27:51Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.1...v0.1.2

## [v0.1.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.1) 2023-05-05
Released by @github-actions[bot] on 2023-05-05T17:06:37Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.0...v0.1.1

## [v0.1.0.beta3](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.0.beta3) 2023-05-05
Released by @github-actions[bot] on 2023-05-05T14:50:50Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.0.beta2...v0.1.0.beta3

## [v0.1.0.beta2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.0.beta2) 2023-05-03
Released by @github-actions[bot] on 2023-05-03T17:15:16Z

**Full Changelog**: https://github.com/heqingpan/rnacos/commits/v0.1.0.beta2

