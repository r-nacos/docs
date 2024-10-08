  > 常用的符号说明：\
  > ✨新增：用于表示添加新功能或新特性的任务。\
  > 🛠️优化：用于表示代码重构或性能优化的任务。\
  > 📖文档：用于表示更新或添加文档的任务。\
  > 🐛修复：用于表示修复错误或问题的任务。\
  > 💥破坏性变更：指的是对代码、API、协议或系统的更改，这些更改可能会导致依赖旧版本的系统、库或应用程序无法正常工作。
# Changelog

## [Unreleased](https://github.com/nacos-group/r-nacos/tree/HEAD)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.6.0...HEAD)

**Closed issues:**

- 项目开发计划\(2024-08,2024-09\) —— v0.6新版本计划 [\#123](https://github.com/nacos-group/r-nacos/issues/123)

## [v0.6.0](https://github.com/nacos-group/r-nacos/tree/v0.6.0) (2024-10-07)
### What's Changed

* 支持数据导出、导入功能，支持对数据的备份、恢复、迁移使用场景； #138
* linux,macos 默认使用绝对路径`~/.local/share/r-nacos/nacos_db`存储数据；#78
* 关闭控制台验证码支持前后端联动 `RNACOS_CONSOLE_ENABLE_CAPTCHA=false` 时，返回 data 为 null，前端以此屏蔽掉验证码；by @a981008 in https://github.com/nacos-group/r-nacos/pull/142
* 兼容v0.5.x 数据，支持从v0.5.x无缝升级；#123

### New Contributors
* @a981008 made their first contribution in https://github.com/nacos-group/r-nacos/pull/142


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.6.0-beta...v0.6.0)

**Closed issues:**

- 登陆后闪退 [\#140](https://github.com/nacos-group/r-nacos/issues/140)

**Merged pull requests:**

- 新增 `RNACOS_CONSOLE_ENABLE_CAPTCHA=false` 时，返回 data 为 null，前端以此屏蔽掉验证码 [\#142](https://github.com/nacos-group/r-nacos/pull/142) ([a981008](https://github.com/a981008))

## [v0.6.0-beta](https://github.com/nacos-group/r-nacos/tree/v0.6.0-beta) (2024-09-27)


1. 支持数据导出、导入功能，支持对数据的备份、恢复、迁移使用场景；#138
2. linux,macos 默认使用绝对路径`~/.local/share/r-nacos/nacos_db`存储数据；#78
3. 兼容v0.5.x 数据，支持从v0.5.x无缝升级；

目前是beta版本，感兴趣的同学可以在测试环境尝试使用，正式环境最好等正式版本后再升级。

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.23...v0.6.0-beta)

**Implemented enhancements:**

- 两天用下来提几个建议 [\#75](https://github.com/nacos-group/r-nacos/issues/75)

**Closed issues:**

- 控制台登陆接口用户名不存在与用户名密码校验错误使用同一个错误码避免机器人探测有校的用户名 [\#137](https://github.com/nacos-group/r-nacos/issues/137)
- 控制台新增用户时如果没有设置角色会导致系统异常 [\#136](https://github.com/nacos-group/r-nacos/issues/136)
- 建议创建命名空间时自动创建命名空间ID [\#84](https://github.com/nacos-group/r-nacos/issues/84)

## [v0.5.23](https://github.com/nacos-group/r-nacos/tree/v0.5.23) (2024-09-17)

1. 🐛修复：修复控制台新增用户时如果没有设置角色会导致系统异常问题； #136
2. 🛠️优化：控制台登陆接口用户名不存在与用户名密码校验错误使用同一个错误码避免机器人探测有校的用户名； #137

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.22...v0.5.23)

**Closed issues:**

- 开源的前端代码是放在哪个目录啊 [\#135](https://github.com/nacos-group/r-nacos/issues/135)
- 【界面优化】顶部左侧展示命名空间 [\#133](https://github.com/nacos-group/r-nacos/issues/133)
- 集群场景使用http接口更新grpc注册服务实例时部分节点元数据没有更新的问题 [\#132](https://github.com/nacos-group/r-nacos/issues/132)
- 0.5.17docker部署使用ip能正常访问，使用域名登录不上 [\#119](https://github.com/nacos-group/r-nacos/issues/119)

## [v0.5.22](https://github.com/nacos-group/r-nacos/tree/v0.5.22) (2024-09-08)

1. 🐛修复：修复集群场景使用http接口更新grpc注册服务实例时部分节点元数据没有更新的问题； #132
2. 🛠️优化：调整控制台命名空间下拉组件以更好支持长命名空间内容展示； #133

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.21...v0.5.22)

**Closed issues:**

- 增加监控指标写日志关闭，默认不写监控指标日志 [\#131](https://github.com/nacos-group/r-nacos/issues/131)

## [v0.5.21](https://github.com/nacos-group/r-nacos/tree/v0.5.21) (2024-09-02)


1. 🛠️优化：优化控制台编辑编辑器样式，区分光标行与选中内容的背景颜色；
2. 🛠️优化：优化管理页面中查询参数输入框回车后直接触发查询；
3. 🛠️优化：增加监控指标写日志开关，默认不写监控指标日志；

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.20...v0.5.21)

**Closed issues:**

- nginx反代nacos之后，Spring项目无法使用http协议连接rnacos [\#130](https://github.com/nacos-group/r-nacos/issues/130)
- 似乎登陆接口也被登录态校验拦截了 [\#128](https://github.com/nacos-group/r-nacos/issues/128)
-  兼容nacos openapi中命名空间模块接口 [\#127](https://github.com/nacos-group/r-nacos/issues/127)

## [v0.5.20](https://github.com/nacos-group/r-nacos/tree/v0.5.20) (2024-08-18)

r-nacos v0.5.20 版本发布

1. ✨新增：兼容nacos openapi命名空间模块接口 #127
2. 🛠️优化：调整控制台创建命名空间接口逻辑，创建时命名空间ID不填则系统自动生成 #127
3. 🛠️优化：优化控制台前端的交互。① 创建时命名空间时ID可不填 ② 配置管理、服务管理页面中，命名空间选择器支持文本筛选，优化多命名空间的交互体验 ③ 配置管理支持克隆配置，区分克隆与编辑的差异，使其交互不相互干扰。
4. 🛠️优化：前端资源缓存时间从1天调整为7天 

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.20-beta...v0.5.20)

**Closed issues:**

- 服务器断电，再次启动查询出现问题 [\#125](https://github.com/nacos-group/r-nacos/issues/125)

## [v0.5.20-beta](https://github.com/nacos-group/r-nacos/tree/v0.5.20-beta) (2024-08-06)

修复 raft api工具，用于处理 #125 问题

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.19...v0.5.20-beta)

**Closed issues:**

- dubbo 3.2.14版本使用r-nacos有报错 [\#124](https://github.com/nacos-group/r-nacos/issues/124)

## [v0.5.19](https://github.com/nacos-group/r-nacos/tree/v0.5.19) (2024-08-05)

1. 🐛修复: 修复dubbo 3.2.14版本使用r-nacos有报错问题 #124　
2. 🛠️优化: 优化控制台页面的命名空间选择器，命名空间组件增加组件描述，命名空间选择值支持持久化到浏览器中。

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.18...v0.5.19)

**Closed issues:**

- failed to run custom build command for `openssl-sys v0.9.103` [\#122](https://github.com/nacos-group/r-nacos/issues/122)
- 兼容nacos注册中心1.x http协议中metadata同时支持json与自定义k1=v1,k2=v2格式 [\#121](https://github.com/nacos-group/r-nacos/issues/121)
- 添加一下 docker compsoe 方便部署 [\#120](https://github.com/nacos-group/r-nacos/issues/120)
- 项目开发计划\(2024-06,2024-07\) [\#104](https://github.com/nacos-group/r-nacos/issues/104)

## [v0.5.18](https://github.com/nacos-group/r-nacos/tree/v0.5.18) (2024-07-29)

1. 兼容nacos注册中心1.x http协议中metadata同时支持json与nacos自定义格式 #121 
2. 优化r-naocs系统监控；间隔为1小时的指标时间展示增加日期，增加请求处理时长百分位统计监控视图 

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.17...v0.5.18)

## [v0.5.17](https://github.com/nacos-group/r-nacos/tree/v0.5.17) (2024-07-21)

1. 优化r-naocs系统监控

	1. 监控指标数据增加间隔为1小时的指标缓存，以支持控制参按小时查询15天左右的资源使用情况；
	2. 监控指标不需要太高的精度，把浮点型从从f64调整为f32；
	3. 修改前端切出监控页面的自动加载数据没有停止的问题；
2. 优化控制台页面，配置管理、服务实例管理等页面中的数据表格分页支持选择不同分页数量展示数据。

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.16...v0.5.17)

**Fixed bugs:**

- rnacos启动后偶尔出现配置列表为空 [\#86](https://github.com/nacos-group/r-nacos/issues/86)

**Closed issues:**

- 可观测能力增强，控制台增加监控页面支持查看r-nacos监控指标数据 [\#117](https://github.com/nacos-group/r-nacos/issues/117)

## [v0.5.16](https://github.com/nacos-group/r-nacos/tree/v0.5.16) (2024-07-14)

1. ✨新增: 可观测能力增强，控制台增加监控页面支持查看r-nacos监控指标数据
	1. r-nacos后端，内部采集并缓存最近指标数据，并提供查询监控指标数据接口给控制台页面使用。#117
	2. r-nacos前端，控制台增加基于echarts实现的监控页面，支持查看r-nacos监控指标数据。
2. 🐛修复: 通过调整数据加载与raft初始化顺序，修复windows环境快速关闭再启动r-nacos后偶尔出现配置列表为空的问题。 

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.15...v0.5.16)

**Fixed bugs:**

- 重启可能会导致数据丢失假象 [\#88](https://github.com/nacos-group/r-nacos/issues/88)

**Closed issues:**

- r-nacos是个人项目么 [\#116](https://github.com/nacos-group/r-nacos/issues/116)
- 尽快支持nacos-config-spring-boot-starter [\#115](https://github.com/nacos-group/r-nacos/issues/115)

## [v0.5.15](https://github.com/nacos-group/r-nacos/tree/v0.5.15) (2024-07-07)
### What's Changed
* feat: 增加验证码的开关 by @moyu-x in https://github.com/nacos-group/r-nacos/pull/113

1. 🐛修复：通过增加文件锁机制，修复windows环境快速关闭再启动r-nacos后偶尔出现配置列表为空的问题。  #86 #88
2. ✨新增：增加一个是否启用控制台验证码的开关，默认为启用，关闭的时候可暂时用于使用 openapi 对 console 接口进行管理 #113

### New Contributors
* @moyu-x made their first contribution in https://github.com/nacos-group/r-nacos/pull/113


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.14...v0.5.15)

**Closed issues:**

- nacos-sdk-rust无法使用enable\_auth\_plugin\_http进行账号密码登录 [\#110](https://github.com/nacos-group/r-nacos/issues/110)
- 增加系统运行状态可观测能力，支持定义、采集服务关键指标，支持打印指标到日志，并提供prometheus metrics数据接口 [\#64](https://github.com/nacos-group/r-nacos/issues/64)

**Merged pull requests:**

- feat: 增加验证码的开关 [\#113](https://github.com/nacos-group/r-nacos/pull/113) ([moyu-x](https://github.com/moyu-x))

## [v0.5.14](https://github.com/nacos-group/r-nacos/tree/v0.5.14) (2024-06-30)
### What's Changed
* fix: ingress 503 by @linonetwo in https://github.com/nacos-group/r-nacos/pull/112

1. 🐛修复: 登录接口兼容问题，解决nacos-sdk-rust无法使用enable_auth_plugin_http进行账号密码登录的问题； #110
2. 🛠️优化: 增加指标采集间隔配置，默认15秒，与原日志打印指标间隔独立控制；以支持打印日志的间隔设置很长与就影响采集； #64
3. 🛠️优化: 支持采集summary类指标数据，对http/grpc请求响应时长分别采集其对应的histogram与summary指标；#64
4. ✨新增：实现prometheus metrics exporter，支持把监控指标数据接入prometheus，对应的接口为`http://127.0.0.1:8848/metrics` ; #64
5. 🛠️优化: 调整k8s helm中service ports的定义，增加10848端口，以支持ingress方式透出控制台 ；#112 

### New Contributors
* @linonetwo made their first contribution in https://github.com/nacos-group/r-nacos/pull/112


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.13...v0.5.14)

**Closed issues:**

- K8S Helm Chart 部署后 503  [\#111](https://github.com/nacos-group/r-nacos/issues/111)
- 验证码校验失败 [\#109](https://github.com/nacos-group/r-nacos/issues/109)
- 部分使用场景r-nacos连续长时间运行内存会缓慢增加问题 [\#108](https://github.com/nacos-group/r-nacos/issues/108)
- config 查询接口 lastModified 为 0 [\#107](https://github.com/nacos-group/r-nacos/issues/107)

**Merged pull requests:**

- fix: ingress 503 [\#112](https://github.com/nacos-group/r-nacos/pull/112) ([linonetwo](https://github.com/linonetwo))

## [v0.5.13](https://github.com/nacos-group/r-nacos/tree/v0.5.13) (2024-06-23)
### What's Changed
* 根据 data_id 匹配配置文件类型 by @bestK in https://github.com/nacos-group/r-nacos/pull/105

1. ✨新增: 增加系统运行状态可观测能力，支持定义、采集服务关键指标，支持打印指标到日志; #64
2. 🐛修复: 部分使用场景r-nacos连续长时间运行内存会缓慢增加问题; #108
3. 🐛修复: config grpc查询接口 lastModified 为 0的兼容性问题（官方sdk不依赖）; #107
4. 🛠️优化：[调整控制台API请求超时时长从1秒到15秒](https://github.com/r-nacos/rnacos-console-web/issues/7)；
5. 🛠️优化：控制台导入配置，支持根据 data_id 匹配配置文件类型 （用户rp); #105

### New Contributors
* @bestK made their first contribution in https://github.com/nacos-group/r-nacos/pull/105



[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.12...v0.5.13)

**Closed issues:**

- 与java 版本接口行为不一致 [\#102](https://github.com/nacos-group/r-nacos/issues/102)

**Merged pull requests:**

- 根据 data\_id 匹配配置文件类型 [\#105](https://github.com/nacos-group/r-nacos/pull/105) ([bestK](https://github.com/bestK))

## [v0.5.12](https://github.com/nacos-group/r-nacos/tree/v0.5.12) (2024-06-10)
### What's Changed
* feat(*): 切换内存分配器到mimalloc以及添加编译发布优化 by @Clownsw in https://github.com/nacos-group/r-nacos/pull/99
* [polish]released文件名添加版本号 by @asmpg in https://github.com/nacos-group/r-nacos/pull/103



[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.11...v0.5.12)

**Closed issues:**

- 支持go sdk中使用SearchConfig查询接口 [\#101](https://github.com/nacos-group/r-nacos/issues/101)
- go的客户端SDK注册json配置项界面显示的配置类型为text [\#87](https://github.com/nacos-group/r-nacos/issues/87)
- 运行中的应用从nacos切换rnacos时服务列表为空 [\#85](https://github.com/nacos-group/r-nacos/issues/85)

**Merged pull requests:**

- \[polish\]released文件名添加版本号 [\#103](https://github.com/nacos-group/r-nacos/pull/103) ([asmpg](https://github.com/asmpg))
- feat\(\*\): 切换内存分配器到mimalloc以及添加编译发布优化 [\#99](https://github.com/nacos-group/r-nacos/pull/99) ([Clownsw](https://github.com/Clownsw))

## [v0.5.11](https://github.com/nacos-group/r-nacos/tree/v0.5.11) (2024-06-02)
### What's Changed
* add RNACOS_ADMIN_USERNAME and RNACOS_ADMIN_PASSWORD env for support mod default admin username and password by @yimiaoxiehou in https://github.com/nacos-group/r-nacos/pull/97


1. 🐛修复: 解决开启鉴权后token过期后没有及时被客户端刷新的问题 #100
2. 🛠️优化：服务实例心跳接口支持light beat模式，解决运行中的应用从nacos切换rnacos时服务列表为空问题 #85
3. 🛠️优化：支持通过SDK接口设置配置中心的配置格式 #87
4. ✨新增：支持go sdk中使用SearchConfig查询接口 #101
5. ✨新增：支持通过启动配置设置初始化管理员用户名与密码 #97
6. 📖文档：补充接口鉴权过期时间参数RNACOS_API_LOGIN_TIMEOUT说明 #100

### New Contributors
* @yimiaoxiehou made their first contribution in https://github.com/nacos-group/r-nacos/pull/97


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.10...v0.5.11)

**Closed issues:**

- grpc连接token过期后直接崩坏 [\#100](https://github.com/nacos-group/r-nacos/issues/100)
- grpc ConfigBatchListenRequest unknown user [\#98](https://github.com/nacos-group/r-nacos/issues/98)
- raft实现替换提案 [\#96](https://github.com/nacos-group/r-nacos/issues/96)
- 历史记录拿到的都是当前的值 [\#95](https://github.com/nacos-group/r-nacos/issues/95)
- 疑似资源不释放, 导致内存只涨不降 [\#94](https://github.com/nacos-group/r-nacos/issues/94)

**Merged pull requests:**

- add RNACOS\_ADMIN\_USERNAME and RNACOS\_ADMIN\_PASSWORD env for support mod default admin username and password [\#97](https://github.com/nacos-group/r-nacos/pull/97) ([yimiaoxiehou](https://github.com/yimiaoxiehou))

## [v0.5.10](https://github.com/nacos-group/r-nacos/tree/v0.5.10) (2024-05-27)


新版本控制台前端还有点小问题 #95 ，先把控制台前端回切到旧版本规避这个问题，以保证最新正式版本的控制台功能稳定可用。

新版本控制台前端问题全部处理好后再切回新版。

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.9...v0.5.10)

**Closed issues:**

- 支持开启集群间的通信请求校验cluster token [\#93](https://github.com/nacos-group/r-nacos/issues/93)
- 你好, 不支持/nacos/v1/auth/users/login这个接口吗 [\#83](https://github.com/nacos-group/r-nacos/issues/83)
- 面向SDK的接口增加鉴权 [\#65](https://github.com/nacos-group/r-nacos/issues/65)

## [v0.5.9](https://github.com/nacos-group/r-nacos/tree/v0.5.9) (2024-05-21)
### What's Changed
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

### New Contributors
* @Clownsw made their first contribution in https://github.com/nacos-group/r-nacos/pull/90


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.8...v0.5.9)

**Closed issues:**

- 命名空间相关问题 [\#92](https://github.com/nacos-group/r-nacos/issues/92)
- 0.5.8添加配置会直接添加到public内 [\#82](https://github.com/nacos-group/r-nacos/issues/82)
- 界面404 [\#81](https://github.com/nacos-group/r-nacos/issues/81)
- 调整github workflows以增加支持打包MacOS arm64安装包 [\#77](https://github.com/nacos-group/r-nacos/issues/77)

**Merged pull requests:**

- feat\(\*\): 代码片段优化 [\#90](https://github.com/nacos-group/r-nacos/pull/90) ([Clownsw](https://github.com/Clownsw))

## [v0.5.8](https://github.com/nacos-group/r-nacos/tree/v0.5.8) (2024-05-20)
### What's Changed
* Rebuild the structure of openapi by @Freedomfirebody in https://github.com/nacos-group/r-nacos/pull/70

---

发布后收到问题：添加配置会直接添加到public内 #82 

有使用控制台编辑配置的暂时先使用v0.5.7版本,
这两天我抽空处理下再发一个新版本出来。

### New Contributors
* @Freedomfirebody made their first contribution in https://github.com/nacos-group/r-nacos/pull/70


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.8-beta.1...v0.5.8)

**Closed issues:**

- 强烈建议把控制台配置编辑器换成MonacoEditor这个CodeMirror实在是一言难尽 [\#80](https://github.com/nacos-group/r-nacos/issues/80)
- 日志文件占用过大 [\#79](https://github.com/nacos-group/r-nacos/issues/79)

## [v0.5.8-beta.1](https://github.com/nacos-group/r-nacos/tree/v0.5.8-beta.1) (2024-05-12)
### What's Changed
* Rebuild the structure of openapi by @Freedomfirebody in https://github.com/nacos-group/r-nacos/pull/70

1. 调整github workflows以增加支持打包MacOS arm64安装包 #77
2. 面向SDK的接口增加鉴权  #65
3. 切换重构后的新版控制台 0.4.0-beta.2 ，目前功能基本一致；后续会基于新版适配支持移动端，支持国际化等。
4. openapi接口代码结构调整重构 #62


### New Contributors
* @Freedomfirebody made their first contribution in https://github.com/nacos-group/r-nacos/pull/70


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.7...v0.5.8-beta.1)

**Closed issues:**

- readme 问题 [\#76](https://github.com/nacos-group/r-nacos/issues/76)
- 缺失能力：基于命名空间切换配置列表 [\#74](https://github.com/nacos-group/r-nacos/issues/74)
- 修改配置 id 保存, 会生成多份配置 [\#72](https://github.com/nacos-group/r-nacos/issues/72)
- window环境rnaocs登录失败,未知错误 [\#71](https://github.com/nacos-group/r-nacos/issues/71)
- BUG 反馈：配置ID没有强验证，导致无法删除。 [\#69](https://github.com/nacos-group/r-nacos/issues/69)
- 关于日志打印中的时间不能按时区显示问题 [\#56](https://github.com/nacos-group/r-nacos/issues/56)

**Merged pull requests:**

- Rebuild the structure of openapi [\#70](https://github.com/nacos-group/r-nacos/pull/70) ([Freedomfirebody](https://github.com/Freedomfirebody))

## [v0.5.7](https://github.com/nacos-group/r-nacos/tree/v0.5.7) (2024-05-05)
### What's Changed
* 将文档链接旧地址更新 by @Aurorxa in https://github.com/nacos-group/r-nacos/pull/63
* merge Develop update version to v0.5.7-beta by @heqingpan in https://github.com/nacos-group/r-nacos/pull/67


1. 解决日志打印中的时间不能按时区打印题；默认以本机时区打印日志时间，支持通过配置指定时区。 #56
2. 修复因控制台切换v2版本接口，导致dataId为空的配置可以增加不能删除的问题。 #69

### New Contributors
* @Aurorxa made their first contribution in https://github.com/nacos-group/r-nacos/pull/63


----

2024-05-08 09:00

本版本由github actions打出来的mac包`rnacos-x86_64-apple-darwin.tar.gz`在x86中提示 `bad CPU type in executable` (可能是MacOS最新的打包平台已经切换到arm64架构)。

我今天在我电脑重新打个包手动上传，后续再调整对应的github actions。

如果还有问题，可以先用v0.5.6版本。



[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.6...v0.5.7)

**Closed issues:**

- r-nacos加入到nacos社区，代码仓库即将迁移到nacos-group [\#66](https://github.com/nacos-group/r-nacos/issues/66)
- r-nacos 独立控制台不支持监听本地端口吗？ [\#61](https://github.com/nacos-group/r-nacos/issues/61)
- 集群部署，是必须用IP地址吗？我用域名测试一直不通过 [\#59](https://github.com/nacos-group/r-nacos/issues/59)
- 控制台接口与页面优化与重构 [\#58](https://github.com/nacos-group/r-nacos/issues/58)
- yaml的配置文件不支持... [\#57](https://github.com/nacos-group/r-nacos/issues/57)
- 关于配置中心代码显示能力 [\#55](https://github.com/nacos-group/r-nacos/issues/55)

**Merged pull requests:**

- merge Develop update version to v0.5.7-beta [\#67](https://github.com/nacos-group/r-nacos/pull/67) ([heqingpan](https://github.com/heqingpan))
- 将文档链接旧地址更新 [\#63](https://github.com/nacos-group/r-nacos/pull/63) ([Aurorxa](https://github.com/Aurorxa))

## [v0.5.6](https://github.com/nacos-group/r-nacos/tree/v0.5.6) (2024-04-19)

1. 重构控制台接口，把控制台接口独立出来不依赖openapi。这样控制台接口能灵活的支持控制台功能，同时也方便系统对nacos openapi后续的持续兼容。 #58
2. 配置中心，配置信息内容增加配置格式和配置描述两个字段。 #55 #57
3. 控制台页面，配置中心配置编辑器换成代码编辑器，支持高亮显示配置内容，对编辑配置内容操作更友好。 #55 #57
4. 修复重启后配置中心历史记录id从1计数的问题。(配置历史记录id只用于控制台显示，不影响使用)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.5...v0.5.6)

**Closed issues:**

- 简化控制台登录验证码 [\#54](https://github.com/nacos-group/r-nacos/issues/54)

## [v0.5.5](https://github.com/nacos-group/r-nacos/tree/v0.5.5) (2024-04-13)

1. 简化控制台登录验证码 #54
2. 修复控制台使用nginx代理时，退出后重新登陆跳转的页面路径不对的问题；
3. 控制台登陆默认过期设置为一天，可通过配置设置过期时间；

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.4...v0.5.5)

**Closed issues:**

- 支持css/js 缓存提高页面加载效率 [\#53](https://github.com/nacos-group/r-nacos/issues/53)

## [v0.5.4](https://github.com/nacos-group/r-nacos/tree/v0.5.4) (2024-04-07)

1. 控制台增加支持css/js 缓存提高页面加载效率 #53
2. 修复控制台已登陆的用户修改密码没有权限问题

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.3...v0.5.4)

**Closed issues:**

- docker stable 包在arm架构苹果系统运行失败问题，目前暂时只能用stable-alpine包运行 [\#37](https://github.com/nacos-group/r-nacos/issues/37)

## [v0.5.3](https://github.com/nacos-group/r-nacos/tree/v0.5.3) (2024-04-02)

+ 修复控制台配置列表页面下载和上传文件使用旧接口，不支持请求转发到/rnacos/二级目录下的问题。

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.2...v0.5.3)

**Implemented enhancements:**

- 控制台前后端路径放到二级目录,支持以二级目录把r-nacos转发到已有的域名上。 [\#46](https://github.com/nacos-group/r-nacos/issues/46)

**Closed issues:**

- 只保留一个控制台 [\#51](https://github.com/nacos-group/r-nacos/issues/51)

## [v0.5.2](https://github.com/nacos-group/r-nacos/tree/v0.5.2) (2024-03-31)

+ 修复控制台查询用户接口用户参数字段不正确的问题
+ 控制台前后端路径放到二级目录,支持以二级目录把r-nacos转发到已有的域名上。#46
+ 默认只保留鉴权控制台，关闭无鉴权控制台，支持通过配置开启。#51
+ 打包增加对linux arm64包支持

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.1...v0.5.2)

**Fixed bugs:**

- 修复v0.5.0版本raft在初始化index文件分两次写入弟一次写入成功弟二次写入失败，导致重启时index内容不全启动失败的问题。 [\#50](https://github.com/nacos-group/r-nacos/issues/50)

**Closed issues:**

- Open API兼容性问题和token生成问题 [\#52](https://github.com/nacos-group/r-nacos/issues/52)
- 控制台前端资源请求支持开启gzip以提升页面首屏加载速度 [\#43](https://github.com/nacos-group/r-nacos/issues/43)

## [v0.5.1](https://github.com/nacos-group/r-nacos/tree/v0.5.1) (2024-03-27)
### What's Changed
* [config]打包加入默认配置文件 by @asmpg in https://github.com/r-nacos/r-nacos/pull/47
* 控制台前端资源请求支持开启gzip以提升页面首屏加载速度 #43
* 修复raft在初始化index文件分两次写入弟一次写入成功弟二次写入失败，导致重启时index内容不全启动失败的问题。 #50



[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.0...v0.5.1)

**Closed issues:**

- nacos鉴权 [\#49](https://github.com/nacos-group/r-nacos/issues/49)

**Merged pull requests:**

- \[config\]打包加入默认配置文件 [\#47](https://github.com/nacos-group/r-nacos/pull/47) ([asmpg](https://github.com/asmpg))

## [v0.5.0](https://github.com/nacos-group/r-nacos/tree/v0.5.0) (2024-03-18)
### What's Changed
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

### New Contributors
* @asmpg made their first contribution in https://github.com/r-nacos/r-nacos/pull/45


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.5.0-beta...v0.5.0)

**Implemented enhancements:**

- 优化raft集群写入机制，目标提升配置中心写入tps到1万左右 [\#19](https://github.com/nacos-group/r-nacos/issues/19)

## [v0.5.0-beta](https://github.com/nacos-group/r-nacos/tree/v0.5.0-beta) (2024-03-10)
### What's Changed
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

### New Contributors
* @asmpg made their first contribution in https://github.com/r-nacos/r-nacos/pull/45


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.4.3...v0.5.0-beta)

**Fixed bugs:**

- 修复集群从节点在控制台导入配置不生效的问题 [\#41](https://github.com/nacos-group/r-nacos/issues/41)

**Closed issues:**

- 太牛了，我这儿刚想学学rust，你这人rnacos已经挫出来了。 [\#44](https://github.com/nacos-group/r-nacos/issues/44)
- nginx服务器配置 [\#42](https://github.com/nacos-group/r-nacos/issues/42)

**Merged pull requests:**

- \[polish\] Update the repository URL in the README file to r-nacos [\#45](https://github.com/nacos-group/r-nacos/pull/45) ([asmpg](https://github.com/asmpg))

## [v0.4.3](https://github.com/nacos-group/r-nacos/tree/v0.4.3) (2024-03-01)
### What's Changed
* feat: add helm chart by @dickens7 in https://github.com/r-nacos/r-nacos/pull/40
* 修复集群从节点在控制台导入配置不生效的问题 #41

### New Contributors
* @dickens7 made their first contribution in https://github.com/r-nacos/r-nacos/pull/40


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.4.2...v0.4.3)

**Closed issues:**

- 尝试使用k8s部署，节点 IP 地址变更问题 [\#39](https://github.com/nacos-group/r-nacos/issues/39)
- 关于建议使用组织来管理r-nacos 项目，正在推进中 [\#38](https://github.com/nacos-group/r-nacos/issues/38)
- 关于项目名称更改，初步确定更改为 r-nacos [\#30](https://github.com/nacos-group/r-nacos/issues/30)

**Merged pull requests:**

- feat: add helm chart [\#40](https://github.com/nacos-group/r-nacos/pull/40) ([dickens7](https://github.com/dickens7))

## [v0.4.2](https://github.com/nacos-group/r-nacos/tree/v0.4.2) (2024-01-09)
更新版本到v0.4.2,修复控制台前端时间转化成字符串格式取值错误的问题。


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.4.1...v0.4.2)

**Closed issues:**

- 期望日常测试中加入 nacos-sdk-rust 客户端 [\#36](https://github.com/nacos-group/r-nacos/issues/36)
- 关于使用其他客户端链接的时候GRPC报错的问题 [\#35](https://github.com/nacos-group/r-nacos/issues/35)

## [v0.4.1](https://github.com/nacos-group/r-nacos/tree/v0.4.1) (2024-01-08)
1. 调整r-nacos部分出入参类型处理以支持nacos-sdk-go #35
2. 调整r-nacos部分出入参类型处理以支持nacos-sdk-rust #36


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.4.0...v0.4.1)

**Closed issues:**

- 开发r-nacos新控制台，支持新开一个http端口、支持用户密码登陆、支持对外网暴露。 [\#29](https://github.com/nacos-group/r-nacos/issues/29)

## [v0.4.0](https://github.com/nacos-group/r-nacos/tree/v0.4.0) (2023-12-23)
1. 支持另开一个http独立端口专门用于新控制台，可以单独开放新控制台的端口到外网使用 。 [#29](https://github.com/heqingpan/rnacos/issues/29)
2. 新控制台http端口请求，增加一个统一的登录校验拦截，支持登录校验频率等必要的校验，以支持对外网暴露 。 [#29](https://github.com/heqingpan/rnacos/issues/29)
3. 启用新控制台时，默认增加一个管理员。 [#29](https://github.com/heqingpan/rnacos/issues/29)
4. 新控制台增加一个用户管理模块，管理用户，与用户权限。 [#29](https://github.com/heqingpan/rnacos/issues/29)
5. 新控制台维护一个简易权限控制模块. [#29](https://github.com/heqingpan/rnacos/issues/29)
6. 新控制台 web前端页面实现,更新rnacos-web-dist-wrap版本到v0.3.1。 [#29](https://github.com/heqingpan/rnacos/issues/29)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.4.0-beta.4...v0.4.0)

## [v0.4.0-beta.4](https://github.com/nacos-group/r-nacos/tree/v0.4.0-beta.4) (2023-12-17)
1. 新控制台前端增加页面权限控制；
2. 新控制台后端增加接口与页面的请求的权限控制；
3. 发布r-nacos新版本 v0.4.0-beta.4

角色权限说明：

1. 管理员: 所有控制台权限
2. 开发者：除了用户管理的所有控制台权限
3. 访客：只能查询配置中心与注册中心的数据，没有编辑权限。

新控制台总体功能已完成，还有登录校验失败频率限制等一部分安全增强内容待补充，完成后再发正式版本。



[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.4.0-beta.3...v0.4.0-beta.4)

## [v0.4.0-beta.3](https://github.com/nacos-group/r-nacos/tree/v0.4.0-beta.3) (2023-12-17)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.4.0-beta.2...v0.4.0-beta.3)

## [v0.4.0-beta.2](https://github.com/nacos-group/r-nacos/tree/v0.4.0-beta.2) (2023-12-17)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.4.0-beta.1...v0.4.0-beta.2)

## [v0.4.0-beta.1](https://github.com/nacos-group/r-nacos/tree/v0.4.0-beta.1) (2023-12-09)

开发r-nacos新控制台，支持新开一个http端口、支持用户密码登陆、支持对外网暴露。

1. 新控制台单据开一个http端口，以支持外网访问，可以单独开放新控制台的端口到外网。端口号：http_port+2000，默认为10848，本地可以通过 http://127.0.0.1:10848/ 访问。 
2. 新控制台增加用户管理模块，支持管理控制台用户。默认用户名为 admin,对应的密码为 admin；对外网开放前需要更新密码。
3. 新控制台所有的接口都控制加上登陆校验，登录页面接口增加验证码校验（后继正式版本还会增加错误校验频率拦截）。

新控制台后面还差最后一个角色权限控制功能模块待开发。具体计划可参考： https://github.com/heqingpan/rnacos/issues/29

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.9...v0.4.0-beta.1)

**Closed issues:**

- 想先了解下该项目重写的方式 [\#33](https://github.com/nacos-group/r-nacos/issues/33)
- 实现raft缓存表，用于支持缓存功能、支持维护用户登陆时效状态。 [\#28](https://github.com/nacos-group/r-nacos/issues/28)
- 扩展raft存储内容支持存储用户信息，以支持系统后继计划开启访问验证。 [\#17](https://github.com/nacos-group/r-nacos/issues/17)

## [v0.3.9](https://github.com/nacos-group/r-nacos/tree/v0.3.9) (2023-10-16)
### What's Changed
* 更新rnacos-web-dist-wrap版本到v0.2.2，优化控制台页面样式，解决控制台在windows浏览器默认显示滚动条样式不美观的问题
* znb 20231014 配置中心校验tenant by @zhangyubo in https://github.com/heqingpan/rnacos/pull/24
* znb 20231015  配置中心校验data_id、group、content等参数 by @zhangyubo in https://github.com/heqingpan/rnacos/pull/25
* Develop by @heqingpan in https://github.com/heqingpan/rnacos/pull/26
* znb 20231016 删除配置时对 tenant、group、data_id的字符有效性校验 by @zhangyubo in https://github.com/heqingpan/rnacos/pull/27

### New Contributors
* @zhangyubo made their first contribution in https://github.com/heqingpan/rnacos/pull/24


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.8...v0.3.9)

**Closed issues:**

- 关于 rnacos 中使用 raft 协议的疑问 [\#22](https://github.com/nacos-group/r-nacos/issues/22)
- java.io.FileNotFoundException: /nacos/v1/ns/operator/metrics [\#21](https://github.com/nacos-group/r-nacos/issues/21)

**Merged pull requests:**

- znb 20231016 删除配置时对 tenant、group、data\_id的字符有效性校验 [\#27](https://github.com/nacos-group/r-nacos/pull/27) ([zhangyubo](https://github.com/zhangyubo))
- Develop [\#26](https://github.com/nacos-group/r-nacos/pull/26) ([heqingpan](https://github.com/heqingpan))
- znb 20231015  配置中心校验data\_id、group、content等参数 [\#25](https://github.com/nacos-group/r-nacos/pull/25) ([zhangyubo](https://github.com/zhangyubo))
- znb 20231014 配置中心校验tenant [\#24](https://github.com/nacos-group/r-nacos/pull/24) ([zhangyubo](https://github.com/zhangyubo))

## [v0.3.8](https://github.com/nacos-group/r-nacos/tree/v0.3.8) (2023-09-29)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.7...v0.3.8)

**Closed issues:**

- docker打包应用目前是musl包,计划支持使用gnu包提升运行性能 [\#20](https://github.com/nacos-group/r-nacos/issues/20)

## [v0.3.7](https://github.com/nacos-group/r-nacos/tree/v0.3.7) (2023-09-28)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/t0.3.7-beta.4...v0.3.7)

## [t0.3.7-beta.4](https://github.com/nacos-group/r-nacos/tree/t0.3.7-beta.4) (2023-09-27)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/t0.3.7-beta.3...t0.3.7-beta.4)

## [t0.3.7-beta.3](https://github.com/nacos-group/r-nacos/tree/t0.3.7-beta.3) (2023-09-27)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/t0.3.7-beta.2...t0.3.7-beta.3)

## [t0.3.7-beta.2](https://github.com/nacos-group/r-nacos/tree/t0.3.7-beta.2) (2023-09-27)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/t0.3.7-beta.1...t0.3.7-beta.2)

## [t0.3.7-beta.1](https://github.com/nacos-group/r-nacos/tree/t0.3.7-beta.1) (2023-09-27)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.6...t0.3.7-beta.1)

**Implemented enhancements:**

- 接入依赖注入容器，简化有相互依赖的actor实例构造【feature】 [\#16](https://github.com/nacos-group/r-nacos/issues/16)

## [v0.3.6](https://github.com/nacos-group/r-nacos/tree/v0.3.6) (2023-09-27)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.5...v0.3.6)

**Implemented enhancements:**

- 兼容 java nacos-client 1.3.x [\#18](https://github.com/nacos-group/r-nacos/issues/18)

## [v0.3.5](https://github.com/nacos-group/r-nacos/tree/v0.3.5) (2023-09-24)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.4...v0.3.5)

## [v0.3.4](https://github.com/nacos-group/r-nacos/tree/v0.3.4) (2023-09-20)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.3...v0.3.4)

**Closed issues:**

- nacos-client 2.2.1的auth、query和configChange问题 [\#14](https://github.com/nacos-group/r-nacos/issues/14)
- /nacos/v1/ns/instance/beat exception [\#13](https://github.com/nacos-group/r-nacos/issues/13)

## [v0.3.3](https://github.com/nacos-group/r-nacos/tree/v0.3.3) (2023-09-18)
### What's Changed
* Fix issue #14 by @zzyandzzy in https://github.com/heqingpan/rnacos/pull/15

### New Contributors
* @zzyandzzy made their first contribution in https://github.com/heqingpan/rnacos/pull/15

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.2...v0.3.3)

**Closed issues:**

- Task Track: 支持查询服务监听列表 [\#7](https://github.com/nacos-group/r-nacos/issues/7)
- 大佬，我想参与到开发当中，请问是否可以？ [\#2](https://github.com/nacos-group/r-nacos/issues/2)

**Merged pull requests:**

- Fix issue \#14 [\#15](https://github.com/nacos-group/r-nacos/pull/15) ([zzyandzzy](https://github.com/zzyandzzy))

## [v0.3.2](https://github.com/nacos-group/r-nacos/tree/v0.3.2) (2023-09-17)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.1...v0.3.2)

## [v0.3.1](https://github.com/nacos-group/r-nacos/tree/v0.3.1) (2023-09-17)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.3.0...v0.3.1)

**Closed issues:**

- 配置中心导出配置文件为空 [\#12](https://github.com/nacos-group/r-nacos/issues/12)

## [v0.3.0](https://github.com/nacos-group/r-nacos/tree/v0.3.0) (2023-09-16)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.2.3...v0.3.0)

## [v0.2.3](https://github.com/nacos-group/r-nacos/tree/v0.2.3) (2023-09-16)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.2.2...v0.2.3)

**Closed issues:**

- 实现类Distro协议使注册中心支持集群信息同步。 [\#10](https://github.com/nacos-group/r-nacos/issues/10)

## [v0.2.2](https://github.com/nacos-group/r-nacos/tree/v0.2.2) (2023-09-15)
### What's Changed
* raft_feature v0.2.1-beta.1 by @heqingpan in https://github.com/heqingpan/rnacos/pull/9

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.2.2-beta.1...v0.2.2)

## [v0.2.2-beta.1](https://github.com/nacos-group/r-nacos/tree/v0.2.2-beta.1) (2023-08-26)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.2.1...v0.2.2-beta.1)

**Fixed bugs:**

- gateway链接rnacos异常 [\#11](https://github.com/nacos-group/r-nacos/issues/11)

## [v0.2.1](https://github.com/nacos-group/r-nacos/tree/v0.2.1) (2023-08-25)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.2.1-beta.2...v0.2.1)

## [v0.2.1-beta.2](https://github.com/nacos-group/r-nacos/tree/v0.2.1-beta.2) (2023-08-25)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.2.1-beta.1...v0.2.1-beta.2)

**Closed issues:**

- 配置中心使用raft协议支持集群部署 [\#8](https://github.com/nacos-group/r-nacos/issues/8)

## [v0.2.1-beta.1](https://github.com/nacos-group/r-nacos/tree/v0.2.1-beta.1) (2023-08-07)
### What's Changed
* raft_feature v0.2.1-beta.1 by @heqingpan in https://github.com/heqingpan/rnacos/pull/9

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.2.0...v0.2.1-beta.1)

**Closed issues:**

- 配置数据单机存储从 sqlite 切换到sled [\#3](https://github.com/nacos-group/r-nacos/issues/3)

**Merged pull requests:**

- raft\_feature v0.2.1-beta.1 [\#9](https://github.com/nacos-group/r-nacos/pull/9) ([heqingpan](https://github.com/heqingpan))

## [v0.2.0](https://github.com/nacos-group/r-nacos/tree/v0.2.0) (2023-07-03)
### What's Changed
* Loadtest feature by @heqingpan in https://github.com/heqingpan/rnacos/pull/5
* Clippy and fmt by @heqingpan in https://github.com/heqingpan/rnacos/pull/6

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.10...v0.2.0)

**Merged pull requests:**

- Clippy and fmt [\#6](https://github.com/nacos-group/r-nacos/pull/6) ([heqingpan](https://github.com/heqingpan))
- Loadtest feature [\#5](https://github.com/nacos-group/r-nacos/pull/5) ([heqingpan](https://github.com/heqingpan))

## [v0.1.10](https://github.com/nacos-group/r-nacos/tree/v0.1.10) (2023-06-18)
### What's Changed
* Develop by @heqingpan in https://github.com/heqingpan/rnacos/pull/4

### New Contributors
* @heqingpan made their first contribution in https://github.com/heqingpan/rnacos/pull/4

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.9...v0.1.10)

**Merged pull requests:**

- Develop [\#4](https://github.com/nacos-group/r-nacos/pull/4) ([heqingpan](https://github.com/heqingpan))

## [v0.1.9](https://github.com/nacos-group/r-nacos/tree/v0.1.9) (2023-06-10)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.8...v0.1.9)

## [v0.1.8](https://github.com/nacos-group/r-nacos/tree/v0.1.8) (2023-06-01)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.7...v0.1.8)

## [v0.1.7](https://github.com/nacos-group/r-nacos/tree/v0.1.7) (2023-05-31)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.6-3...v0.1.7)

## [v0.1.6-3](https://github.com/nacos-group/r-nacos/tree/v0.1.6-3) (2023-05-30)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.6-2...v0.1.6-3)

## [v0.1.6-2](https://github.com/nacos-group/r-nacos/tree/v0.1.6-2) (2023-05-29)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.6...v0.1.6-2)

## [v0.1.6](https://github.com/nacos-group/r-nacos/tree/v0.1.6) (2023-05-28)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.5...v0.1.6)

## [v0.1.5](https://github.com/nacos-group/r-nacos/tree/v0.1.5) (2023-05-19)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/0.1.5-beta1...v0.1.5)

## [0.1.5-beta1](https://github.com/nacos-group/r-nacos/tree/0.1.5-beta1) (2023-05-15)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.5-beta2...0.1.5-beta1)

## [v0.1.5-beta2](https://github.com/nacos-group/r-nacos/tree/v0.1.5-beta2) (2023-05-15)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.4...v0.1.5-beta2)

## [v0.1.4](https://github.com/nacos-group/r-nacos/tree/v0.1.4) (2023-05-11)

v0.1.4

1. 修复2.0版本注册心跳的问题，注册中心支持grpc统一维持心跳。
2. 配置中心支持导入配置文件，配置文件兼容 nacos 格式。（导出计划后继版本支持）

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.3...v0.1.4)

**Closed issues:**

- 服务注册出现500错误 [\#1](https://github.com/nacos-group/r-nacos/issues/1)

## [v0.1.3](https://github.com/nacos-group/r-nacos/tree/v0.1.3) (2023-05-07)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.2...v0.1.3)

## [v0.1.2](https://github.com/nacos-group/r-nacos/tree/v0.1.2) (2023-05-06)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.1...v0.1.2)

## [v0.1.1](https://github.com/nacos-group/r-nacos/tree/v0.1.1) (2023-05-05)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.0.beta3...v0.1.1)

## [v0.1.0.beta3](https://github.com/nacos-group/r-nacos/tree/v0.1.0.beta3) (2023-05-05)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.0.beta2...v0.1.0.beta3)

## [v0.1.0.beta2](https://github.com/nacos-group/r-nacos/tree/v0.1.0.beta2) (2023-05-03)


[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.0.beta...v0.1.0.beta2)

## [v0.1.0.beta](https://github.com/nacos-group/r-nacos/tree/v0.1.0.beta) (2023-05-03)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/v0.1.0...v0.1.0.beta)

## [v0.1.0](https://github.com/nacos-group/r-nacos/tree/v0.1.0) (2023-05-03)

[Full Changelog](https://github.com/nacos-group/r-nacos/compare/b0c9b6f0ee5cc6f7a923f002323454fc2052f00e...v0.1.0)



\* *This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)*
