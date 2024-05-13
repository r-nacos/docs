> 常用的符号说明：
>
> :sparkles:新增：用于表示添加新功能或新特性的任务。
>
> :hammer_and_wrench:优化：用于表示代码重构或性能优化的任务。
>
> :book:文档：用于表示更新或添加文档的任务。
>
> :bug:修复：用于表示修复错误或问题的任务。
>
> :boom:破坏性变更：指的是对代码、API、协议或系统的更改，这些更改可能会导致依赖旧版本的系统、库或应用程序无法正常工作。

# [v0.5.8-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.8-beta.1) (2024-05-12)

* :hammer_and_wrench:优化：Rebuild the structure of openapi by [@Freedomfirebody](https://github.com/Freedomfirebody) in [#70](https://github.com/nacos-group/r-nacos/pull/70)
* :sparkles:新增：调整 github workflows 以增加支持打包 MacOS arm64 安装包 [#77](https://github.com/nacos-group/r-nacos/issues/77)
* :sparkles:新增：面向 SDK 的接口增加鉴权 [#65](https://github.com/nacos-group/r-nacos/issues/65)
* :hammer_and_wrench:优化：切换重构后的新版控制台 0.4.0-beta.2 ，目前功能基本一致；后续会基于新版适配支持移动端，支持国际化等。
* :hammer_and_wrench:优化：openapi 接口代码结构调整重构 #[62](https://github.com/nacos-group/r-nacos/issues/62)



# [v0.5.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.7) (2024-05-08)

* :book:文档：将文档链接旧地址更新 by [@Aurorxa](https://github.com/Aurorxa) in [#63](https://github.com/nacos-group/r-nacos/pull/63) 
* :hammer_and_wrench:优化：merge Develop update version to v0.5.7-beta by [@heqingpan](https://github.com/heqingpan) in [#67](https://github.com/nacos-group/r-nacos/pull/67)
* :bug:修复：解决日志打印中的时间不能按时区打印题；默认以本机时区打印日志时间，支持通过配置指定时区。 [#56](https://github.com/nacos-group/r-nacos/issues/56)
* :bug:修复：因控制台切换 v2 版本接口，导致 dataId 为空的配置可以增加不能删除的问题。 [#69](https://github.com/nacos-group/r-nacos/issues/69)



# [v0.5.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.6)

* :hammer_and_wrench:优化：重构控制台接口，把控制台接口独立出来不依赖 openapi。这样控制台接口能灵活的支持控制台功能，同时也方便系统对 nacos openapi 后续的持续兼容。
* :sparkles:新增：配置中心，配置信息内容增加配置格式和配置描述两个字段。 [#55](https://github.com/nacos-group/r-nacos/issues/55) [#57](https://github.com/nacos-group/r-nacos/issues/57)
* :sparkles:新增：控制台页面，配置中心配置编辑器换成代码编辑器，支持高亮显示配置内容，对编辑配置内容操作更友好。 [#55](https://github.com/nacos-group/r-nacos/issues/55) [#57](https://github.com/nacos-group/r-nacos/issues/57)
* :bug:修复：重启后配置中心历史记录id从1计数的问题。(配置历史记录id只用于控制台显示，不影响使用)



# [v0.5.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.5)

* :hammer_and_wrench:优化：简化控制台登录验证码 [#54](https://github.com/nacos-group/r-nacos/issues/54)
* :bug:修复：控制台使用 nginx 代理时，退出后重新登陆跳转的页面路径不对的问题。
* :sparkles:新增：控制台登陆默认过期设置为一天，可通过配置设置过期时间。



# [v0.5.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.4)

* :sparkles:新增：控制台增加支持css/js 缓存提高页面加载效率 [#53](https://github.com/nacos-group/r-nacos/issues/53)
* :bug:修复：控制台已登陆的用户修改密码没有权限问题。



# [v0.5.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.3)

* :bug:修复：控制台配置列表页面下载和上传文件使用旧接口，不支持请求转发到 /rnacos/ 二级目录下的问题。





# [v0.5.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.2)

- :bug:修复：控制台查询用户接口用户参数字段不正确的问题。
- :sparkles:新增：控制台前后端路径放到二级目录，支持以二级目录把 r-nacos 转发到已有的域名上。[#46](https://github.com/nacos-group/r-nacos/issues/46)
- :sparkles:新增：默认只保留鉴权控制台，关闭无鉴权控制台，支持通过配置开启。[#51](https://github.com/nacos-group/r-nacos/issues/51)
- :sparkles:新增：打包增加对 linux arm64 包支持。



# [v0.5.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.1)

* :sparkles:新增：[config]打包加入默认配置文件 by [@asmpg](https://github.com/asmpg) in [#47](https://github.com/nacos-group/r-nacos/pull/47)
* :sparkles:新增：控制台前端资源请求支持开启 gzip 以提升页面首屏加载速度 [#43](https://github.com/nacos-group/r-nacos/issues/43)
* :bug:修复：raft 在初始化index文件分两次写入弟一次写入成功弟二次写入失败，导致重启时 index 内容不全启动失败的问题。



# [v0.5.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.0)

* :hammer_and_wrench:优化：raft 集群写入机制。
  * 配置中心单节点写入 tps 从 1.8 千提升到 1.76 万，提升 9.7 倍。
  * (在单台机器运行)3 节点集群写入 tps 从 1.5 千提升到 7.6 千，提升 5 倍 。
* :hammer_and_wrench:优化：raft 集群写入机制同时去除 sled 存储，以自定义 raft log 与 snapshot 文件替代。
  * 调整后初始启动内存从 26M 降低到 5M 。
  * 写入配置中心压测时内存从上百 M 左右 降低到 20M 左右。
* :boom:破坏性变更：去除 sled 存储这项调整使得 v0.5.x 版本与 v0.4.x 的储存不兼容，这点旧版本用户在升级前需要注意；储存不兼容主要影响配置中心与控制台用户数据：
  * 配置中心可通过配置导出与导入做数据迁移。
  * 控制台用户数据目前没有工具支持迁移；因预计这部分的需求不会很大，暂定不单独提供迁移工具；如果这部分用户需求较多，后面也可以考虑单独出个工具支持从 v0.4.x 迁移到 v0.5.x；（ 有需求的同学去提 issue反馈，数量超过 10 个我再抽空补充这个迁移工具)。



# [v0.5.0-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.0-beta)

* :hammer_and_wrench:优化：raft 集群写入机制；
  - 配置中心单节点写入 tps 从 1.8 千提升到 1.76 万，提升 9.7 倍。
  - (在单台机器运行)3 节点集群写入 tps 从 1.5 千提升到 7.6千，提升 5 倍 。

* :hammer_and_wrench:优化：raft 集群写入机制同时去除 sled 存储，以自定义 raft log 与 snapshot 文件替代：
  - 调整后初始启动内存从 26M 降低到 5 M。
  - 写入配置中心压测时内存从上百 M 左右 降低到 20M 左右。
* :boom:破坏性变更：去除 sled 存储这项调整使得 v0.5.x 版本与 v0.4.x 的储存不兼容，这点旧版本用户在升级前需要注意；储存不兼容主要影响配置中心与控制台用户数据：
  * 配置中心可通过配置导出与导入做数据迁移。
  * 控制台用户数据目前没有工具支持迁移；因预计这部分的需求不会很大，暂定不单独提供迁移工具；如果这部分用户需求较多，后面也可以考虑单独出个工具支持从 v0.4.x 迁移到 v0.5.x；（ 有需求的同学去提 issue反馈，数量超过 10 个我再抽空补充这个迁移工具)。
  * 目前 v0.5.x 只出 beta 版本，生产环境可以等正式版本后再考虑迁移。





# [v0.4.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.3)

* :sparkles:新增：add helm chart by [@dickens7](https://github.com/dickens7) in [#40](https://github.com/nacos-group/r-nacos/pull/40)
* :bug:修复：修复集群从节点在控制台导入配置不生效的问题 [#41](https://github.com/nacos-group/r-nacos/issues/41)



# [v0.4.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.2)

* :bug:修复：控制台前端时间转化成字符串格式取值错误的问题。



# [v0.4.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.1)

* :hammer_and_wrench:优化：调整 r-nacos 部分出入参类型处理以支持 nacos-sdk-go [#35](https://github.com/nacos-group/r-nacos/issues/35)
* :hammer_and_wrench:优化：调整 r-nacos 部分出入参类型处理以支持 nacos-sdk-rust [#36](https://github.com/nacos-group/r-nacos/issues/36)



# [v0.4.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.0)

* :sparkles:新增：支持另开一个 http 独立端口专门用于新控制台，可以单独开放新控制台的端口到外网使用 。 [#29](https://github.com/heqingpan/rnacos/issues/29)
* :sparkles:新增：新控制台 http 端口请求，增加一个统一的登录校验拦截，支持登录校验频率等必要的校验，以支持对外网暴露 。 [#29](https://github.com/heqingpan/rnacos/issues/29)

* :sparkles:新增：启用新控制台时，默认增加一个管理员。 [#29](https://github.com/heqingpan/rnacos/issues/29)
* :sparkles:新增：新控制台增加一个用户管理模块，管理用户，与用户权限。 [#29](https://github.com/heqingpan/rnacos/issues/29)
* :sparkles:新增：新控制台维护一个简易权限控制模块。 [#29](https://github.com/heqingpan/rnacos/issues/29)
* :sparkles:新增：新控制台 web 前端页面实现，更新 rnacos-web-dist-wrap 版本到 v0.3.1。 [#29](https://github.com/heqingpan/rnacos/issues/29)



# [v0.4.0-beta.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.0-beta.4)

* :sparkles:新增：新控制台前端增加页面权限控制。
* :sparkles:新增：新控制台后端增加接口与页面的请求的权限控制。



# [v0.4.0-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.0-beta.1)

* :sparkles:新增：开发 r-nacos 新控制台，支持新开一个 http 端口、支持用户密码登陆、支持对外网暴露。
  * 新控制台单据开一个 http 端口，以支持外网访问，可以单独开放新控制台的端口到外网。端口号：http_port+2000，默认为 10848，本地可以通过 http://127.0.0.1:10848/ 访问。
  * 新控制台增加用户管理模块，支持管理控制台用户。默认用户名为 admin，对应的密码为 admin；对外网开放前需要更新密码。
  * 新控制台所有的接口都控制加上登陆校验，登录页面接口增加验证码校验（后继正式版本还会增加错误校验频率拦截）。



# [v0.3.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.9)

* :hammer_and_wrench:优化：rnacos-web-dist-wrap 版本到 v0.2.2，优化控制台页面样式，解决控制台在 windows 浏览器默认显示滚动条样式不美观的问题。
* :sparkles:新增：znb 20231014 配置中心校验tenant by [@zhangyubo](https://github.com/zhangyubo) in [#24](https://github.com/nacos-group/r-nacos/pull/24)
* :sparkles:新增：znb 20231015 配置中心校验data_id、group、content等参数 by [@zhangyubo](https://github.com/zhangyubo) in [#25](https://github.com/nacos-group/r-nacos/pull/25)
* :hammer_and_wrench:优化：znb 20231016 删除配置时对 tenant、group、data_id的字符有效性校验 by [@zhangyubo](https://github.com/zhangyubo) in [#27](https://github.com/nacos-group/r-nacos/pull/27)



# [v0.3.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.8)

* :hammer_and_wrench:优化：api body 解析逻辑。
* :sparkles:新增：[ns mock_operator_metrics api](https://github.com/nacos-group/r-nacos/commit/df5d4c9449456735bda4dcc990aae20006d3e60e)。
* :hammer_and_wrench:优化：[处理配置中心1.x监听空配置立即返回的问题](https://github.com/nacos-group/r-nacos/commit/fbd680942dd8c1a277da5ee1fdc2c79569002431)。





# [v0.3.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.7)

* :hammer_and_wrench:优化：更新 Dockerfile。





# [v0.3.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.6)

* :hammer_and_wrench:优化：更新 async-raft-ext 版本 v0.6.3，修正 raft 集群冷启动等待时间单位从秒更新为 5 毫秒，避免冷启动过长。
* :hammer_and_wrench:优化：更新 starter，切换从 beanfactory 构造。
* :hammer_and_wrench:优化：调整raft store的注入构建。
* :hammer_and_wrench:优化：注册中心依赖注入逻辑。
* :sparkles:新增：actor初步接入依赖注入 factory。



# [v0.3.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.5)

* :sparkles:新增：通过将 `actix-web web::Form<T>` 自动构建参数对象的方式更新为从 request body 手动构建参数，兼容兼容 java nacos-client 1.3.x 。
* :sparkles:新增：更新说明文档，增加 java client sdk 验证版本说明。



# [v0.3.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.4)

* :bug:修复：注册中心从数据库加载信息时，需要重算 md5，不直接取 db 的值，避免 db md5 值为空导致客户端一直循环请求的问题。



# [v0.3.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.3)

* :bug:修复：修复  issue [#14](https://github.com/nacos-group/r-nacos/issues/14) by [@zzyandzzy](https://github.com/zzyandzzy) in [#15](https://github.com/nacos-group/r-nacos/pull/15)。



# [v0.3.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.2)

* :bug:修复：raft 节点变更需要等更新配置后才同步到 naming node manage 的问题。



# [v0.3.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.1)

* :bug:修复：raft 节点变更需要等更新配置后才同步到 naming node manage 的问题。



# [v0.3.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.0)

* :sparkles:新增：更新 rnacos-web-dist-wrap 版本到 0.2.1 。



# [v0.2.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.3)

* :sparkles:新增：更新版本从 v0.2.1 到 v0.2.3 。



# [v0.2.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.2)

* :sparkles:新增：raft_feature v0.2.1-beta.1 by [@heqingpan](https://github.com/heqingpan) in [#9](https://github.com/nacos-group/r-nacos/pull/9)



# [v0.2.2-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.2-beta.1)

* :sparkles:新增：update version to 0.2.2-beta.1。
* :sparkles:新增：support grpc naming_service_list。





# [v0.2.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.1)

* :sparkles:新增：update version to 0.2.1-beta.2。
* :sparkles:新增：support grpc naming_service_list。



# [v0.2.1-beta.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.1-beta.2)

* :sparkles:新增：support grpc naming_service_list。
* :sparkles:新增：update version to 0.2.1-beta.2。



# [v0.2.1-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.1-beta.1)

* :sparkles:新增：raft_feature v0.2.1-beta.1 by [@heqingpan](https://github.com/heqingpan) in [#9](https://github.com/nacos-group/r-nacos/pull/9)



# [v0.2.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.0)

* :sparkles:新增：Loadtest feature by [@heqingpan](https://github.com/heqingpan) in [#5](https://github.com/nacos-group/r-nacos/pull/5)
* :sparkles:新增：Clippy and fmt by [@heqingpan](https://github.com/heqingpan) in [#6](https://github.com/nacos-group/r-nacos/pull/6)





# [v0.1.10](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.10)

- :sparkles:新增：Develop by [@heqingpan](https://github.com/heqingpan) in [#4](https://github.com/nacos-group/r-nacos/pull/4)



# [v0.1.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.9)

* :sparkles:新增：配置中心删除配置时也需要持久化。
* :sparkles:新增：前端版本更新到 0.1.9，配置变更前支持配置内容差异比较。



# [v0.1.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.8)

* :sparkles:新增：更新实例时，如果新实例来自 http，旧实例来自 grpc，则保持 grpc 的实例信息。



# [v0.1.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.7)

* :hammer_and_wrench:优化：调整重连机制。
* :hammer_and_wrench:优化：调整配置中心 grpc 错误时的返回对象名。
* :hammer_and_wrench:优化：调整 grpc 给 client 推送时参数 id 与模块内容。
* :hammer_and_wrench:优化：调整注册中心 grpc 错误时的返回对象名。



# [v0.1.6-3](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.6-3)

* :hammer_and_wrench:优化：调整重连机制。
* :hammer_and_wrench:优化：调整配置中心 grpc 错误时的返回对象名。
* :hammer_and_wrench:优化：调整 grpc 给 client 推送时参数 id 与模块内容。
* :hammer_and_wrench:优化：调整注册中心 grpc 错误时的返回对象名。



# [v0.1.6-2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.6-2)

* :sparkles:新增：删除服务实例时校验 grpc client_id是否一致。



# [v0.1.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.6)

* :sparkles:新增：配置中心支持 grpc 取消监听。
* :sparkles:新增：核心服务 actor 实现 Supervised 以支持 actor 错误后重启。
* :sparkles:新增：配置中心增加控制台查询历史记录接口。
* :sparkles:新增：配置中心查询历史记录接口增加内容字段。
* :sparkles:新增：配置中心查询历史记录接口增加 id 字段。
* :bug:修复：grpc 处理日志中时长一直为 0 的问题。



# [v0.1.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.5)

* :hammer_and_wrench:优化：调整接收 grpc 请求时对链路注册的验证机制，没有注册前不支持访问，调整 grpc 请求的日志打印，增加处理时长信息。
* :bug:修复：更新过滤 ServerCheckRequest 请求的链接报错。
* :hammer_and_wrench:优化：调整 build.rs 不使用 env，避免 docs.rs 文档构建异常。
* :hammer_and_wrench:优化：调整 docker 打包方式，alpha和beta不更新 latest。
* :sparkles:新增：增加 rnacos 架构图。
* :sparkles:新增：初步完成按条件导出配置接口。
* :hammer_and_wrench:优化：调整 rnacos-web-dist-wrap 引入方式，不通过 build 做二次处理。



# [v0.1.5-beta2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.5-beta2)

* :hammer_and_wrench:优化：调整接收 grpc 请求时对链路注册的验证机制，没有注册前不支持访问，调整 grpc 请求的日志打印，增加处理时长信息。
* :bug:修复：更新过滤 ServerCheckRequest 请求的链接报错。
* :hammer_and_wrench:优化：调整 build.rs 不使用 env，避免 docs.rs 文档构建异常。
* :hammer_and_wrench:优化：调整 docker 打包方式，alpha和beta不更新 latest。
* :sparkles:新增：增加 rnacos 架构图。
* :sparkles:新增：初步完成按条件导出配置接口。
* :hammer_and_wrench:优化：调整 rnacos-web-dist-wrap 引入方式，不通过 build 做二次处理。



# [v0.1.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.4)

* :bug:修复：2.0 版本注册心跳的问题，注册中心支持 grpc 统一维持心跳。
* :sparkles:新增：配置中心支持导入配置文件，配置文件兼容 nacos 格式。



# [v0.1.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.3)

* :hammer_and_wrench:优化：更新前端资源的加载方式。



# [v0.1.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.2)

* :sparkles:新增：压测性能说明。



# [v0.1.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.1)

* :hammer_and_wrench:优化：调整清理空服务的判断逻辑，避免多次标记清除导致提前清理的问题。
* :sparkles:新增：naming instance 使用 arc 并兼容 http，grpc的group_server。
* :hammer_and_wrench:优化：更新 Dockerfile 。



# [v0.1.0.beta3](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.0.beta3)

* :hammer_and_wrench:优化：更新 Dockerfile 。



# [v0.1.0.beta2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.0.beta2)

* :sparkles:新增：http 线程数支持通过 env 设置。
* :sparkles:新增：支持通过 env 设置配置文件、服务端口号。
* :hammer_and_wrench:优化：调整告警信息。
* :sparkles:新增：支持构建时从 github 加载控制台的前端资源。
* :sparkles:新增：支持打包控制台web资源。
* :sparkles:新增：初步完成实例高优先级元数据更新、过期逻辑。
* :sparkles:新增：instance 增加高优先级元数据。
* :sparkles:新增：instance 增加高优先级元数据。
* :sparkles:新增：实例元素 ip 使用 Arc。
* :sparkles:新增：实例元素使用 Arc。
* :sparkles:新增：grpc 不支持更新实例上线状态。
* :sparkles:新增：实例心跳不更新其是否开启状态。
* :sparkles:新增：增加 o 查询服务所有实例列表 ops 接口。
* :sparkles:新增：增加 o 查询服务所有实例列表 ops 接口。
* :hammer_and_wrench:优化：调整 ops 查询服务列表返回值类型。
* :sparkles:新增：服务中心增加创建、更新服务与删除空服务的功能逻辑。
* :sparkles:新增：查询配置信息返回值增加 md5 值。

