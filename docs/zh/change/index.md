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


## [v0.8.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.8.2) 2026-03-30
Released by @github-actions[bot] on 2026-03-30T00:57:08Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.8.1...v0.8.2

## [v0.8.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.8.1) 2026-03-15
Released by @github-actions[bot] on 2026-03-15T16:30:15Z

## What's Changed
* refactor: 使用惯用 Rust 写法简化 Option 工具函数 by @lly835 in https://github.com/nacos-group/r-nacos/pull/285
* refactor: 提取 datetime_utils 中的共享 since_epoch() 辅助函数 by @lly835 in https://github.com/nacos-group/r-nacos/pull/286

- 新增: r-nacos监听的ip支持自定义，支持监听ipv6地址运行；
- 修复：修复控制台出现两个默认命名空间的问题；

## New Contributors
* @lly835 made their first contribution in https://github.com/nacos-group/r-nacos/pull/285

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.8.0...v0.8.1

## [v0.8.1-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.8.1-beta) 2026-02-04
Released by @github-actions[bot] on 2026-02-04T01:29:00Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.8.0...v0.8.1-beta

## [v0.8.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.8.0) 2026-02-01
Released by @github-actions[bot] on 2026-02-01T17:03:16Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.10...v0.8.0

1. 优化: 将缓存从原来的异步更新raft调整为同步更新，以避免部分场景创建token后有概率没有马上生效的问题； #281
2. 修复: 修复部分sdk版本中ConfigListenContext md5为null为兼容性问题; #284
3. 优化: 兼容nacos部分非sdk接口，增加支持 /nacos/v1/ns/catalog/instances 服务实例分页查询接口；#284
4. 优化：前端监控组件默认选择第一个节点，避免集群场景下默认直接节点多次自动刷新获取的内容不是同一份数据的问题；

本次更新缓存表结构有变更，升级后不支持回退到v0.7.0版本

## [v0.7.10](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.10) 2025-12-15
Released by @github-actions[bot] on 2025-12-15T01:42:07Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.9...v0.7.10

1. 新增：发版支持龙芯linux应用包；
2. 调整：因github已不支持MacOS x86目标平台，发版移除对应包；
3. 优化：注册中心永久实例接入数据导出导入以支持数据备份；
4. 优化：控制台mcp服务管理支持一键更新服务下的所有mcp工具到最新版本；
5. 优化：配置中心导入新增支持把yml后缀配置标记为yaml格式；

## [v0.7.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.9) 2025-12-08
Released by @github-actions[bot] on 2025-12-08T01:33:29Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.8...v0.7.9

1. 新增：注册中心正式支持永久实例；永久实例接入raft做持久化，控制台支持创建永久服务实例，支持对永久实例tcp探活。#276  #272
2. 更新：mcp工具编辑支持通过服务选择组件选择路由服务； #272
3. 修复：尝试通过延后初始化服务列表以规避部分场景注册中心服务找不到其它集群节点的问题; #277

## [v0.7.9-beta2](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.9-beta2) 2025-12-07
Released by @github-actions[bot] on 2025-12-07T15:02:53Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.8...v0.7.9-beta2

## [v0.7.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.8) 2025-12-01
Released by @github-actions[bot] on 2025-12-01T01:21:10Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.6...v0.7.8

+ 优化：支持GET /nacos/v1/ns/service接口，注册中心初步支持非临时实例，兼容支持php hyperf框架；
+ 优化：支持第三方内存分配器mimalloc，并多打一个使用mimalloc内存分配器的应用包；

## [v0.7.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.6) 2025-11-24
Released by @github-actions[bot] on 2025-11-24T00:53:34Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.5...v0.7.6

1. 新增：控制台增加MCP服务批量导出、导入功能；#272
2. 优化：MCP服务路由url支持pathParam,支持配置动态请求参数内容到url中；

## [v0.7.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.5) 2025-11-16
Released by @github-actions[bot] on 2025-11-16T15:32:42Z

## What's Changed
* feat: 添加OAuth2.0认证支持 by @seth-shi in https://github.com/nacos-group/r-nacos/pull/268

## New Contributors
* @seth-shi made their first contribution in https://github.com/nacos-group/r-nacos/pull/268

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.4...v0.7.5

## [v0.7.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.4) 2025-11-09
Released by @github-actions[bot] on 2025-11-09T16:11:14Z

## What's Changed
* fix: 修复assertion by @YichiZhang0613 in https://github.com/nacos-group/r-nacos/pull/267

* feat: 兼容nacos v3版本sdk；1) 支持v3的login 2) 默认命名空间适配空串与public,默认命名空间统一使用public即可。

## New Contributors
* @YichiZhang0613 made their first contribution in https://github.com/nacos-group/r-nacos/pull/267

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.3...v0.7.4

## [v0.7.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.3) 2025-10-26
Released by @github-actions[bot] on 2025-10-26T17:39:48Z

## What's Changed

- 优化: mcp http默认超时时间支持通过配置设置，默认值调整为30秒 #262 
- 优化: 为用户登陆cookie 添加 max_age by @LFlops in https://github.com/nacos-group/r-nacos/pull/263  #258


## New Contributors
* @LFlops made their first contribution in https://github.com/nacos-group/r-nacos/pull/263

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.2...v0.7.3

## [v0.7.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.2) 2025-09-27
Released by @github-actions[bot] on 2025-09-27T16:24:55Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.1...v0.7.2

1. 新增：mcp server支持把请求的头信息转发到目标接口； #255
2. 修复：修复服务引用工具维护不准确导致当前没有被引用的工具无法删除的问题； #254
3. 修复:  修复控制台MCP模块页面打开后，其对应的菜单没有展开的问题；

## [v0.7.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.1) 2025-09-16
Released by @github-actions[bot] on 2025-09-16T15:46:05Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.0...v0.7.1

## [v0.7.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.0) 2025-09-15
Released by @github-actions[bot] on 2025-09-15T01:35:26Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.22...v0.7.0

r-nacos支持mcp，内置mcp server与接口转发；支持让注册到r-nacos的普通http接口通过r-nacos直接转化成mcp服务对外提供服务。

## [v0.7.0-beta2](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.0-beta2) 2025-09-14
Released by @github-actions[bot] on 2025-09-14T17:02:38Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.0-beta...v0.7.0-beta2

r-nacos支持mcp，内置mcp server与接口转发；支持让注册到r-nacos的普通http接口通过r-nacos直接转化成mcp服务对外提供服务。

#241 

## [v0.7.0-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.0-beta) 2025-09-14
Released by @github-actions[bot] on 2025-09-14T16:24:35Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.7.0-alpha...v0.7.0-beta

## [v0.7.0-alpha](https://github.com/nacos-group/r-nacos/releases/tag/v0.7.0-alpha) 2025-09-14
Released by @github-actions[bot] on 2025-09-14T01:28:23Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.22...v0.7.0-alpha

#241 

## [v0.6.22](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.22) 2025-09-01
Released by @github-actions[bot] on 2025-09-01T01:08:24Z

## What's Changed
* docs: fix numbering and typo in architecture documentation by @GOODBOY008 in https://github.com/nacos-group/r-nacos/pull/245


**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.21...v0.6.22

- 优化: metrics接口补充content-type信息，以适配最新版本的prometheus；

## [v0.6.21](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.21) 2025-07-06
Released by @github-actions[bot] on 2025-07-06T16:50:23Z

## What's Changed
* feat: 批量导出配置文件 by @a981008 in https://github.com/nacos-group/r-nacos/pull/236
* feat: 历史记录增加操作用户 by @a981008 in https://github.com/nacos-group/r-nacos/pull/235

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.20...v0.6.21

变更内容：

+ 新增：批量、删除导出配置文件 （by @a981008 in #236 ）；
+ 新增：历史记录增加操作用户 （by @a981008 in #235 ）；
+ 优化：确认没有权限后自动切换命名空间 ；
+ 修复：修复登陆跳转失败问题 （by @a981008 in #228 ）；
+ 新增：切换支持移动端适配的控制台页面（by @peryiqiao in r-nacos/rnacos-console-web#29 );

## [v0.6.20](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.20) 2025-07-05
Released by @github-actions[bot] on 2025-07-05T04:00:42Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.19...v0.6.20

变更内容
+ [修复ldap因用户过滤条件不匹配不支持部分ldap服务的问题](https://github.com/nacos-group/r-nacos/issues/237)

## [v0.6.20-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.20-beta) 2025-06-30
Released by @github-actions[bot] on 2025-06-30T15:25:44Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.19...v0.6.20-beta

## [v0.6.19](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.19) 2025-06-30
Released by @github-actions[bot] on 2025-06-30T00:50:27Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.18...v0.6.19

+ 新增：支持接入ldap，控制台支持ldap用户登陆； #233

## [v0.6.18](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.18) 2025-06-15
Released by @github-actions[bot] on 2025-06-15T17:47:09Z

## What's Changed
* refactor: fix typos and improve error messages by @GOODBOY008 in https://github.com/nacos-group/r-nacos/pull/229
* ci: update GitHub Actions to use ubuntu-latest by @GOODBOY008 in https://github.com/nacos-group/r-nacos/pull/230

## New Contributors
* @GOODBOY008 made their first contribution in https://github.com/nacos-group/r-nacos/pull/229

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.17...v0.6.18

+ 修复：注册中心变更通知区分集群节点间通知与服务监听器通知，以修复集群场景部分服务监听不被触发的问题；#226
+ 增加：控制台注册中心服务订阅页面集群场景支持查询指定节点下的订阅者信息; #231
+ 优化：优化控制台注册中心服务订阅查询接口性能，支持服务分组与服务名模糊查询；#231
+ 优化：修复部分错别字并改进错误消息；#229


## [v0.6.17](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.17) 2025-06-02
Released by @github-actions[bot] on 2025-06-02T16:27:37Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.16...v0.6.17

+ 修复：回滚控制台移动端适配的前端版本，完成整体UI验证后再更新；#225
+ 修复：修复订阅者列表和数据迁移页面刷新跳转到No permission页面； #227

## [v0.6.16](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.16) 2025-05-26
Released by @github-actions[bot] on 2025-05-26T00:39:09Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.15...v0.6.16

+ 优化：增加控制台移动端适配 #223  r-nacos/rnacos-console-web#29

## [v0.6.15](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.15) 2025-05-19
Released by @github-actions[bot] on 2025-05-19T00:39:03Z

## What's Changed
* fix: 修复  cargo clippy 建议 by @mangerle in https://github.com/nacos-group/r-nacos/pull/215
* fix README.md by @Aurorxa in https://github.com/nacos-group/r-nacos/pull/219


**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.14...v0.6.15

+ 优化: 增加对nacos-sdk-python v2的适配 #213 

## [v0.6.15-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.15-beta) 2025-05-13
Released by @github-actions[bot] on 2025-05-13T01:00:46Z

## What's Changed
* fix: 修复  cargo clippy 建议 by @mangerle in https://github.com/nacos-group/r-nacos/pull/215
* fix README.md by @Aurorxa in https://github.com/nacos-group/r-nacos/pull/219


**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.14...v0.6.15-beta

+ feat: 增加对nacos-sdk-python v2的适配 #213 

## [v0.6.14](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.14) 2025-03-16
Released by @github-actions[bot] on 2025-03-16T05:06:32Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.13...v0.6.14

1. 注册中心集群功能优化：增强集群数据同步数据可观测性，增加测试模式下注入集群异常问题工具，补充集群节点间定时数据一致性校验与同步机制。#206

## [v0.6.13](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.13) 2025-03-09
Released by @github-actions[bot] on 2025-03-09T18:17:01Z

## What's Changed
* feat(openapi): add 2.x open api for namespace management by @sevetis in https://github.com/nacos-group/r-nacos/pull/200
* feat:cli.rs add missing version command since 0.6.0 by @liyunde in https://github.com/nacos-group/r-nacos/pull/202

## New Contributors
* @sevetis made their first contribution in https://github.com/nacos-group/r-nacos/pull/200
* @liyunde made their first contribution in https://github.com/nacos-group/r-nacos/pull/202

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.12...v0.6.13

+ 修复：修复k8s集群节点重启后grpc服务实例出现部分缺失的问题; #201

## [v0.6.12](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.12) 2025-02-09
Released by @github-actions[bot] on 2025-02-09T12:26:01Z

## What's Changed
* fix: helm模板的Values.persistence.storageClassName -> storageClass by @lazhenyi in https://github.com/nacos-group/r-nacos/pull/195

## New Contributors
* @lazhenyi made their first contribution in https://github.com/nacos-group/r-nacos/pull/195

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.11...v0.6.12

+ 修复： grpc协议中给客户端发送的请求中headers字段内容由None改成Some(HashMap::new())以兼容rust nacos-sdk #196
+ 修复：修复控制台创建服务切换到v2 json接口，但http header中没有指定json类型导致创建失败的问题  r-nacos/rnacos-console-web#28

## [v0.6.11](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.11) 2025-01-12
Released by @github-actions[bot] on 2025-01-12T16:16:35Z

## What's Changed
* feat(naming): query service subscriber list by @a981008 in https://github.com/nacos-group/r-nacos/pull/189
* support linux x64 gnu build by @leyou240 in https://github.com/nacos-group/r-nacos/pull/194

+ 新增：新增服务管理订阅者列表查看功能（目前只支持v2.x grpc协议的订阅查看）； #189 
+ 新增：更新打包构建脚本，增加支持x86_64-unknown-linux-gnu 应用包（如果部分老的linux系统不能运行，可以使用x86_64-unknown-linux-musl 应用包）； #193

## New Contributors
* @leyou240 made their first contribution in https://github.com/nacos-group/r-nacos/pull/194

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.10...v0.6.11

## [v0.6.10](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.10) 2024-12-30
Released by @github-actions[bot] on 2024-12-30T15:23:02Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.9...v0.6.10

+ 修复: 修复v0.6.9版本中控制台用户管理列表命名空间白名单内容显示不正确问题； #190 

## [v0.6.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.9) 2024-12-29
Released by @github-actions[bot] on 2024-12-29T16:51:42Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.8...v0.6.9

+  新增：控制台用户管理支持设置命名空间黑白名单数据权限；(#186)
+  新增：控制台管理接口支持按命名空间做数据权限控制; (#188)
+  更新：控制台前端接口统一切换到v2版本，之前老控制台接口后续计划废弃；(r-nacos/rnacos-console-web#24)

## [v0.6.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.8) 2024-12-09
Released by @github-actions[bot] on 2024-12-09T15:18:55Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.7...v0.6.8

+ 修复国际化引入的控制台页面报错问题 #185 

## [v0.6.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.7) 2024-12-08
Released by @github-actions[bot] on 2024-12-08T17:28:09Z

## What's Changed
* docs: fix typo by @mindfocus in https://github.com/nacos-group/r-nacos/pull/180

+  新增：控制台支持国际化，支持中、英两种语言，支持自动选择语言也支持手动切换语言； #181
+  修复：修复grpc协议的配置请求中的默认命名空间id为public与空字符串等价的兼容问题； #184
+  优化：控制台服务实例列表中增加注册到r-nacos的时间信息 ； #177
+  优化：控制台配置列表支持显示配置描述； #179

## New Contributors
* @mindfocus made their first contribution in https://github.com/nacos-group/r-nacos/pull/180

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.6...v0.6.7

## [v0.6.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.6) 2024-11-17
Released by @github-actions[bot] on 2024-11-17T17:09:08Z

## What's Changed
* feat: support extra runtime configs with env by @fengxsong in https://github.com/nacos-group/r-nacos/pull/169

## New Contributors
* @fengxsong made their first contribution in https://github.com/nacos-group/r-nacos/pull/169

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.5...v0.6.6


+  修复：修复变更集群部分节点地址导致注册中心集群不正常问题；#170
+  新增：提供服务探活接口以支持发现有问题的节点，可支持自动移除或重启集群中的问题节点； #171
+  新增：提供备份数据http接口，以支持通过外部定时脚本发起定时备份功能； #172
+  优化：调整k8s helm模板的参数配置项，支持设置r-nacos所有配置参数；from @fengxsong PR #169

## [v0.6.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.5) 2024-11-11
Released by @github-actions[bot] on 2024-11-11T01:09:03Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.4...v0.6.5

+  优化：兼容nacos-sdk-csharp中的grpc发布配置接口；#162 
+  新增：r-nacos增加子命令`mysql-to-data` ,支持把nacos mysql数据（包含配置、命名空间、用户数据）导出为中间数据文件；即支持间接把nacos数据导入到r-nacos中 ；#138
+  修复：修改控制台页面错别字，将`主角点`纠正为`主节点`；

## [v0.6.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.4) 2024-11-03
Released by @github-actions[bot] on 2024-11-03T17:30:36Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.3...v0.6.4

+  修复：修复控制台编辑配置时查找替换光标无法定位到输入框问题；#156
+  优化：控制台编辑器支持动态调整高度，并且支持切换全屏编辑；
+  修复：修复从v0.5.x升级到v0.6.x后部分命名空间的名称被重置为id问题；#161

## [v0.6.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.3) 2024-10-27
Released by @github-actions[bot] on 2024-10-27T18:03:59Z

## What's Changed
* fix: 移除不必要的前缀 by @MangerLe in https://github.com/nacos-group/r-nacos/pull/153
* refactor: 将打印语句替换为日志记录 by @MangerLe in https://github.com/nacos-group/r-nacos/pull/154

+  新增：控制台命名空间组件，支持查看、复制命名空间id。
+  新增：r-nacos增加子命令`openapi-to-data` ,支持通过openapi从nacos全量导出命名空间、配置信息到中间文件；即支持间接把nacos数据导入到r-nacos中 ；#138

## New Contributors
* @MangerLe made their first contribution in https://github.com/nacos-group/r-nacos/pull/153

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.2...v0.6.3

## [v0.6.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.2) 2024-10-21
Released by @github-actions[bot] on 2024-10-21T01:09:52Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.1...v0.6.2

+  修复：明确来源于集群的来自集群的更新不维护其实例心跳检测,尝试解决服务健康波动有问题；#139
+  新增：注册中心http注册实例的健康、过期时间支持参数配置；#139
+  修复：修复部分场景下openapi naming model中的使用unwrap解析空参数发生panic的问题；#151
+  新增：r-nacos增加子命令`data-to-sqlite`,`sqlite-to-data` 支持把r-nacos导出的中间文件与sqlite数据库文件相互转化；#138

## [v0.6.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.1) 2024-10-13
Released by @github-actions[bot] on 2024-10-13T16:13:10Z

## What's Changed
* feat(user): prevent deletion of the last admin user by @a981008 in https://github.com/nacos-group/r-nacos/pull/145

+  新增：控制台用户管理中限制删除最后一个管理员，避免误操作。#34
+  优化：命名空间管理支持与配置中心、注册中心的数据联动。#126
	+ 通过接口增加配置或服务，如果系统没有对应命名空间会自动创建；
	+ 对于存在配置或服务数据的命名空间不允许删除；

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.0...v0.6.1

## [v0.6.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.0) 2024-10-07
Released by @github-actions[bot] on 2024-10-07T17:42:27Z

## What's Changed

* 支持数据导出、导入功能，支持对数据的备份、恢复、迁移使用场景； #138
* linux,macos 默认使用绝对路径`~/.local/share/r-nacos/nacos_db`存储数据；#78
* 关闭控制台验证码支持前后端联动 `RNACOS_CONSOLE_ENABLE_CAPTCHA=false` 时，返回 data 为 null，前端以此屏蔽掉验证码；by @a981008 in https://github.com/nacos-group/r-nacos/pull/142
* 兼容v0.5.x 数据，支持从v0.5.x无缝升级；#123

## New Contributors
* @a981008 made their first contribution in https://github.com/nacos-group/r-nacos/pull/142

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.23...v0.6.0

## [v0.6.0-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.0-beta) 2024-09-27
Released by @github-actions[bot] on 2024-09-27T01:12:42Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.23...v0.6.0-beta


1. 支持数据导出、导入功能，支持对数据的备份、恢复、迁移使用场景；#138
2. linux,macos 默认使用绝对路径`~/.local/share/r-nacos/nacos_db`存储数据；#78
3. 兼容v0.5.x 数据，支持从v0.5.x无缝升级；

目前是beta版本，感兴趣的同学可以在测试环境尝试使用，正式环境最好等正式版本后再升级。

## [v0.5.23](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.23) 2024-09-17
Released by @github-actions[bot] on 2024-09-17T15:21:49Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.22...v0.5.23

1. 🐛修复：修复控制台新增用户时如果没有设置角色会导致系统异常问题； #136
2. 🛠️优化：控制台登陆接口用户名不存在与用户名密码校验错误使用同一个错误码避免机器人探测有校的用户名； #137

## [v0.5.22](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.22) 2024-09-08
Released by @github-actions[bot] on 2024-09-08T14:42:04Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.21...v0.5.22

1. 🐛修复：修复集群场景使用http接口更新grpc注册服务实例时部分节点元数据没有更新的问题； #132
2. 🛠️优化：调整控制台命名空间下拉组件以更好支持长命名空间内容展示； #133

## [v0.5.21](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.21) 2024-09-02
Released by @github-actions[bot] on 2024-09-02T01:11:46Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.20...v0.5.21


1. 🛠️优化：优化控制台编辑编辑器样式，区分光标行与选中内容的背景颜色；
2. 🛠️优化：优化管理页面中查询参数输入框回车后直接触发查询；
3. 🛠️优化：增加监控指标写日志开关，默认不写监控指标日志；

## [v0.5.20](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.20) 2024-08-18
Released by @github-actions[bot] on 2024-08-18T13:50:57Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.19...v0.5.20

r-nacos v0.5.20 版本发布

1. ✨新增：兼容nacos openapi命名空间模块接口 #127
2. 🛠️优化：调整控制台创建命名空间接口逻辑，创建时命名空间ID不填则系统自动生成 #127
3. 🛠️优化：优化控制台前端的交互。① 创建时命名空间时ID可不填 ② 配置管理、服务管理页面中，命名空间选择器支持文本筛选，优化多命名空间的交互体验 ③ 配置管理支持克隆配置，区分克隆与编辑的差异，使其交互不相互干扰。
4. 🛠️优化：前端资源缓存时间从1天调整为7天 

## [v0.5.20-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.20-beta) 2024-08-06
Released by @github-actions[bot] on 2024-08-06T00:51:49Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.19...v0.5.20-beta

修复 raft api工具，用于处理 #125 问题

## [v0.5.19](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.19) 2024-08-05
Released by @github-actions[bot] on 2024-08-05T00:32:57Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.18...v0.5.19

1. 🐛修复: 修复dubbo 3.2.14版本使用r-nacos有报错问题 #124　
2. 🛠️优化: 优化控制台页面的命名空间选择器，命名空间组件增加组件描述，命名空间选择值支持持久化到浏览器中。

## [v0.5.18](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.18) 2024-07-29
Released by @github-actions[bot] on 2024-07-29T00:50:58Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.17...v0.5.18

1. 兼容nacos注册中心1.x http协议中metadata同时支持json与nacos自定义格式 #121 
2. 优化r-naocs系统监控；间隔为1小时的指标时间展示增加日期，增加请求处理时长百分位统计监控视图 

## [v0.5.17](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.17) 2024-07-21
Released by @github-actions[bot] on 2024-07-21T17:16:34Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.16...v0.5.17

1. 优化r-naocs系统监控

	1. 监控指标数据增加间隔为1小时的指标缓存，以支持控制参按小时查询15天左右的资源使用情况；
	2. 监控指标不需要太高的精度，把浮点型从从f64调整为f32；
	3. 修改前端切出监控页面的自动加载数据没有停止的问题；
2. 优化控制台页面，配置管理、服务实例管理等页面中的数据表格分页支持选择不同分页数量展示数据。

## [v0.5.16](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.16) 2024-07-14
Released by @github-actions[bot] on 2024-07-14T23:11:17Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.15...v0.5.16

1. ✨新增: 可观测能力增强，控制台增加监控页面支持查看r-nacos监控指标数据
	1. r-nacos后端，内部采集并缓存最近指标数据，并提供查询监控指标数据接口给控制台页面使用。#117
	2. r-nacos前端，控制台增加基于echarts实现的监控页面，支持查看r-nacos监控指标数据。
2. 🐛修复: 通过调整数据加载与raft初始化顺序，修复windows环境快速关闭再启动r-nacos后偶尔出现配置列表为空的问题。 

## [v0.5.15](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.15) 2024-07-07
Released by @github-actions[bot] on 2024-07-07T16:02:19Z

## What's Changed
* feat: 增加验证码的开关 by @moyu-x in https://github.com/nacos-group/r-nacos/pull/113

1. 🐛修复：通过增加文件锁机制，修复windows环境快速关闭再启动r-nacos后偶尔出现配置列表为空的问题。  #86 #88
2. ✨新增：增加一个是否启用控制台验证码的开关，默认为启用，关闭的时候可暂时用于使用 openapi 对 console 接口进行管理 #113

## New Contributors
* @moyu-x made their first contribution in https://github.com/nacos-group/r-nacos/pull/113

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.14...v0.5.15

## [v0.5.14](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.14) 2024-06-30
Released by @github-actions[bot] on 2024-06-30T17:01:10Z

## What's Changed
* fix: ingress 503 by @linonetwo in https://github.com/nacos-group/r-nacos/pull/112

1. 🐛修复: 登录接口兼容问题，解决nacos-sdk-rust无法使用enable_auth_plugin_http进行账号密码登录的问题； #110
2. 🛠️优化: 增加指标采集间隔配置，默认15秒，与原日志打印指标间隔独立控制；以支持打印日志的间隔设置很长与就影响采集； #64
3. 🛠️优化: 支持采集summary类指标数据，对http/grpc请求响应时长分别采集其对应的histogram与summary指标；#64
4. ✨新增：实现prometheus metrics exporter，支持把监控指标数据接入prometheus，对应的接口为`http://127.0.0.1:8848/metrics` ; #64
5. 🛠️优化: 调整k8s helm中service ports的定义，增加10848端口，以支持ingress方式透出控制台 ；#112 

## New Contributors
* @linonetwo made their first contribution in https://github.com/nacos-group/r-nacos/pull/112

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.13...v0.5.14

## [v0.5.13](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.13) 2024-06-23
Released by @github-actions[bot] on 2024-06-23T16:41:33Z

## What's Changed
* 根据 data_id 匹配配置文件类型 by @bestK in https://github.com/nacos-group/r-nacos/pull/105

1. ✨新增: 增加系统运行状态可观测能力，支持定义、采集服务关键指标，支持打印指标到日志; #64
2. 🐛修复: 部分使用场景r-nacos连续长时间运行内存会缓慢增加问题; #108
3. 🐛修复: config grpc查询接口 lastModified 为 0的兼容性问题（官方sdk不依赖）; #107
4. 🛠️优化：[调整控制台API请求超时时长从1秒到15秒](https://github.com/r-nacos/rnacos-console-web/issues/7)；
5. 🛠️优化：控制台导入配置，支持根据 data_id 匹配配置文件类型 （用户rp); #105

## New Contributors
* @bestK made their first contribution in https://github.com/nacos-group/r-nacos/pull/105

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.12...v0.5.13


## [v0.5.12](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.12) 2024-06-10
Released by @github-actions[bot] on 2024-06-10T16:15:12Z

## What's Changed
* feat(*): 切换内存分配器到mimalloc以及添加编译发布优化 by @Clownsw in https://github.com/nacos-group/r-nacos/pull/99
* [polish]released文件名添加版本号 by @asmpg in https://github.com/nacos-group/r-nacos/pull/103


**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.11...v0.5.12

## [v0.5.11](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.11) 2024-06-02
Released by @github-actions[bot] on 2024-06-02T15:25:47Z

## What's Changed
* add RNACOS_ADMIN_USERNAME and RNACOS_ADMIN_PASSWORD env for support mod default admin username and password by @yimiaoxiehou in https://github.com/nacos-group/r-nacos/pull/97


1. 🐛修复: 解决开启鉴权后token过期后没有及时被客户端刷新的问题 #100
2. 🛠️优化：服务实例心跳接口支持light beat模式，解决运行中的应用从nacos切换rnacos时服务列表为空问题 #85
3. 🛠️优化：支持通过SDK接口设置配置中心的配置格式 #87
4. ✨新增：支持go sdk中使用SearchConfig查询接口 #101
5. ✨新增：支持通过启动配置设置初始化管理员用户名与密码 #97
6. 📖文档：补充接口鉴权过期时间参数RNACOS_API_LOGIN_TIMEOUT说明 #100

## New Contributors
* @yimiaoxiehou made their first contribution in https://github.com/nacos-group/r-nacos/pull/97

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.10...v0.5.11

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

