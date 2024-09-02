# 快速开始


## 一、 安装运行 r-nacos

【单机部署】

方式1：从 [github release](https://github.com/heqingpan/rnacos/releases) 下载对应系统的应用包，解压后即可运行。

```shell
# 解压
tar -xvf rnacos-x86_64-apple-darwin.tar.gz
```

```shell
# 运行
./rnacos
```

> [!NOTE]
>
> Windows 解压后直接运行 rnacos.exe 即可。

方式2:  通过docker 运行

```shell
# stable 是最新正式版本号，也可以指定镜像版本号，如： qingpan/rnacos:v0.4.0
docker pull qingpan/rnacos:stable 
```

```shell
docker run -d \
	--name mynacos \
	-p 8848:8848 -p 9848:9848 -p 10848:10848 \
	qingpan/rnacos:stable
```

> [!NOTE]
>
> docker 的容器运行目录是 /io，会从这个目录读写配置文件。

#### docker 版本说明

应用每次打包都会同时打对应版本的docker包 ，qingpan/rnacos:$tag 。

每个版本会打两类docker包

|docker包类型|tag 格式| 示例 |说明 |
|--|--|--|--|
|gnu debian包|$version| qingpan/rnacos:v0.4.0 | docker包基于debian-slim,体积比较大(压缩包36M,解压后102M),运行性能相对较高;|
|musl alpine包|$version-alpine| qingpan/rnacos:v0.4.0-alpine | docker包基于alpine,体积比较小(压缩包11M,解压后34M),运行性能相对较低;|


如果不观注版本，可以使用最新正式版本tag: 

+ 最新的gnu正式版本: `qingpan/rnacos:stable`
+ 最新的alpine正式版本: `qingpan/rnacos:stable-alpine`


方式3：通过 cargo 编译安装

```shell
# 安装
cargo install rnacos
```

```shell
# 运行
rnacos
```

方式4: 下载源码编译运行

```shell
git clone https://github.com/heqingpan/rnacos.git
```

```shell
cd rnacos
```

```shell
cargo build --release
```

```shell
cargo run
```

方式5: MacOS 支持通过 brew 安装

```shell
# 把r-nacos加入taps
brew tap r-nacos/r-nacos 
```

```shell
# brew 安装 r-nacos
brew install r-nacos
```

```shell
# 运行
rnacos
```

> [!IMPORTANT]
>
> 后续可以直接通过以下命令更新到最新版本：
>
> ```shell 
> brew upgrade r-nacos
> ```

> [!NOTE]
>
> 测试、试用推荐使用第1、第2种方式，直接下载就可以使用。
>
> 在 Linux 下第 1、第 2 种方式默认是 musl 版本(性能比 gnu 版本差一些)，在生产服务对性能有要求的可以考虑使用第 3、第 4种在对应环境编译 gnu 版本部署。
>
> 启动配置可以参考： [运行参数说明](../env_config/)

## 二、运行nacos 应用

服务启动后，即可运行原有的 nacos 应用。

### 配置中心http api例子

```shell
# 发送 POST 请求到 Nacos 配置中心以发布配置
curl -X POST 'http://127.0.0.1:8848/nacos/v1/cs/configs' \
    -d 'dataId=t001' \                    # 配置的唯一标识符，例如 t001
    -d 'group=foo' \                      # 配置所属的分组名称，例如 foo
    -d 'content=contentTest'              # 配置的内容，例如 contentTest
```

```shell
# 查询
curl 'http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=t001&group=foo'
```



### 注册中心http api例子

```shell
# 注册服务实例：发送 POST 请求到 Nacos 注册中心以注册服务实例
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' \
-d 'port=8000' \                       # 服务实例的端口号，例如 8000
-d 'healthy=true' \                    # 服务实例的健康状态，true 表示健康
-d 'ip=192.168.1.11' \                 # 服务实例的 IP 地址，例如 192.168.1.11
-d 'weight=1.0' \                      # 服务实例的权重，例如 1.0
-d 'serviceName=nacos.test.001' \      # 服务的名称，例如 nacos.test.001
-d 'groupName=foo' \                   # 服务实例所属的分组名称，例如 foo
-d 'metadata={"app":"foo","id":"001"}' # 服务实例的元数据，以 JSON 字符串形式表示
```

```shell
# 注册服务实例：发送 POST 请求到 Nacos 注册中心以注册服务实例
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' \
-d 'port=8000' \                        # 服务实例的端口号，例如 8000
-d 'healthy=true' \                     # 服务实例的健康状态，true 表示健康
-d 'ip=192.168.1.12' \                  # 服务实例的 IP 地址，例如 192.168.1.12
-d 'weight=1.0' \                       # 服务实例的权重，例如 1.0
-d 'serviceName=nacos.test.001' \       # 服务名称，例如 nacos.test.001
-d 'groupName=foo' \                    # 服务实例所属的分组名称，例如 foo
-d 'metadata={"app":"foo","id":"002"}'  # 服务实例的元数据，格式为 JSON 字符串
```

```shell
# 注册服务实例：发送 POST 请求到 Nacos 注册中心以注册服务实例
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' \
-d 'port=8000' \      					# 服务实例的端口号，例如 8000
-d 'healthy=true' \   					# 服务实例的健康状态，true 表示健康
-d 'ip=192.168.1.13' \                  # 服务实例的 IP 地址，例如 192.168.1.13
-d 'weight=1.0' \                       # 服务实例的权重，例如 1.0
-d 'serviceName=nacos.test.001' \       # 服务名称，例如 nacos.test.001
-d 'groupName=foo' \                    # 服务实例所属的分组名称，例如 foo
-d 'metadata={"app":"foo","id":"003"}'	# 服务实例的元数据，格式为 JSON 字符串
```

```shell
# 查询服务实例
curl "http://127.0.0.1:8848/nacos/v1/ns/instance/list?&namespaceId=public&serviceName=foo%40%40nacos.test.001&groupName=foo&clusters=&healthyOnly=true"
```

具体的用法参考 nacos.io 的用户指南。

[JAVA-SDK](https://nacos.io/zh-cn/docs/sdk.html)

[其它语言](https://nacos.io/zh-cn/docs/other-language.html)

[open-api](https://nacos.io/zh-cn/docs/open-api.html)

## 三、使用r-nacos控制台

从0.4.0版本开始，支持独立端口号的新控制台。新控制台有完备的用户管理、登陆校验、权限控制，支持对外网暴露。

启动服务后可以在浏览器通过 `http://127.0.0.1:10848/rnacos/` 访问r-nacos新控制台。 

老控制台`http://127.0.0.1:8848/rnacos/` 标记废弃，默认不开启，可通过配置开启。老控制台不需要登陆鉴权、不支持用户管理。

控制台主要包含用户管理、命名空间管理、配置管理、服务管理、服务实例管理。

> 控制台线上演示

地址： [https://www.bestreven.top/rnacos/](https://www.bestreven.top/rnacos/) 
(演示服务与网址由一位热心用户提供）

演示用户：

+ 开发者:
    + 用户名: `dev` ,密码: `dev`
+ 访客:
    + 用户名: `guest`, 密码: `guest`

演示内容：

+ 配置中心：接近5千个配置
+ 服务中心：30个服务，每个服务有15个实例，共450个服务实例。




> 1、用户登陆

在新控制台打开一个地址，如果检测到没有登陆，会自动跳转到登陆页面。
一个用户连续登陆失败5次，会被锁定1个小时。这个次数可以通过启动参数配置。

<img style="width: 400px;" width="400" src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20231223220425.png" />

> 2、用户管理

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20231223222325.png)

系统会默认创建一个名为`admin`的用户，密码为`admin`。 

进去控制台后可按需管理用户。 

用户角色权限说明：

1. 管理员: 所有控制台权限
2. 开发者：除了用户管理的所有控制台权限
3. 访客：只能查询配置中心与注册中心的数据，没有编辑权限。


**注意：** 对外暴露的nacos控制台端口前，建议增加一个自定义管理员，把admin用户删除或禁用。


> 3、配置管理

配置列表管理

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155441.png)

新建、编辑配置

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155545.png)

> 4、服务列表管理

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155133.png)

> 5、服务实例管理

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155158.png)

> 6、命名空间管理

![](https://user-images.githubusercontent.com/1174480/268299574-4947b9f8-79e1-48e2-97fe-e9767e26ddc0.png)

