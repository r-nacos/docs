
# 使用systemd部署r-nacos

## 1、 前言

[r-nacos](https://github.com/r-nacos/r-nacos)是一个用rust实现的nacos服务。相较于java nacos来说，是一个提供相同功能，启动更快、占用系统资源更小（初始内存小于10M）、性能更高、运行更稳定的服务。

r-nacos设计上完全兼容最新版本nacos面向client sdk 的协议（包含1.x的http OpenApi，和2.x的grpc协议）, 支持使用nacos服务的应用平迁到 r-nacos。


r-nacos在本地测试使用很简单,通过`./rnacos`直接启动应用即可。
但是生产环境中还是需要更规范的方式部署运行。

目前的linux服务基本默认支持systemd统一管理服务。
本文主要记录使用systemd部分r-nacos的过程说明。

## 2、规划r-nacos运行位置

1. 服务应用放到 `/opt/rnacos/` 中
2. r-nacos配置使用 `/etc/rnacos/env.conf`
3. 数据放到 `/var/rnacos/io/` 中
4. systemd 服务配置放到 `/lib/systemd/system/rnacos.service`

## 3、部署

1. 下载服务应用

```sh
mkdir -p /opt/rnacos/
cd /opt/rnacos/
#download from github
curl -LO https://github.com/r-nacos/r-nacos/releases/download/v0.5.0/rnacos-x86_64-unknown-linux-musl.tar.gz

#download from gitee
#curl -LO https://gitee.com/hqp/rnacos/releases/download/v0.5.0/rnacos-x86_64-unknown-linux-musl.tar.gz

tar -xvf rnacos-x86_64-unknown-linux-musl.tar.gz
```

2. 增加r-nacos服务配置

```sh 
mkdir -p /etc/rnacos/
cat >/etc/rnacos/env.conf <<EOF
# rnacos 指定配置文件有两种方式：
# 1. 默认文件（放置于运行目录下，文件名为“.env”，自动读取）
# 2. 指定文件（放置于任意目录下， 通过 命令行参数“-e 文件路径”形式指定， 如“./rnacos -e /etc/rnacos/conf/default.cnf”）
# 更多说明请参照  https://r-nacos.github.io/r-nacos/deplay_env.html

# r-nacos监听http端口，默认值：8848
RNACOS_HTTP_PORT=8848

#r-nacos监听grpc端口，默认值：HTTP端口+1000(即9848） 
#RNACOS_GRPC_PORT=9848

#r-nacos独立控制台端口，默认值：HTTP端口+2000(即10848）;设置为0可不开启独立控制台
#RNACOS_HTTP_CONSOLE_PORT=10848

#r-nacos控制台登录1小时失败次数限制默认是5,一个用户连续登陆失败5次，会被锁定1个小时 ，默认值：1
RNACOS_CONSOLE_LOGIN_ONE_HOUR_LIMIT=5

#http工作线程数，默认值：cpu核数 
#RNACOS_HTTP_WORKERS=8


#配置中心的本地数据库sled文件夹, 会在系统运行时自动创建 ，默认值：nacos_db
RNACOS_CONFIG_DB_DIR=nacos_db

#节点id，默认值：1
RNACOS_RAFT_NODE_ID=1

#节点地址Ip:GrpcPort,单节点运行时每次启动都会生效；多节点集群部署时，只取加入集群时配置的值，默认值：127.0.0.1:GrpcPort 
RNACOS_RAFT_NODE_ADDR=127.0.0.1:9848

#是否当做主节点初始化,(只在每一次启动时生效)节点1时默认为true,节点非1时为false 
#RNACOS_RAFT_AUTO_INIT=true


#是否当做节点加入对应的主节点,LeaderIp:GrpcPort；只在第一次启动时生效；默认值：空 
#RNACOS_RAFT_JOIN_ADDR=127.0.0.1:9848

#日志等级:debug,info,warn,error;所有http,grpc请求都会打info日志,如果不关注，可以设置为error 减少日志量，默认值：info
RUST_LOG=info
EOF
```

3. 初始化r-nacos数据目录

```sh
mkdir -p /var/rnacos/io/

# 如果使用rnacos用户运行，则要开放目录写权限给用户
# adduser rnacos
# chown -R rnacos:rnacos /var/rnacos
```


4. 初始化r-nacos 服务配置

```sh

cat >/lib/systemd/system/rnacos.service <<EOF
[Unit]
Description=r-nacos server
After=network.target

[Service]
#使用指定用户运行
#User=rnacos
#Group=rnacos
ExecStart=/opt/rnacos/rnacos -e /etc/rnacos/env.conf
# 进程异常关闭时会自动重启
Restart=always
WorkingDirectory=/var/rnacos/io

[Install]
WantedBy=multi-user.target
EOF
```

5. 重新加载并启动服务

```sh
# 重新加载配置
systemctl daemon-reload
# 启用服务并马上启动
systemctl enable --now rnacos

# 查看服务状态
systemctl status rnacos

```

把上以的脚本连起来执行，r-nacos服务即可部署完成。
## 4、管理服务

1. 使用`systemctl`管理服务

常用的命令

```
# 查看服务状态
systemctl status rnacos

# 启动服务
systemctl start rnacos

# 关闭服务
systemctl stop rnacos

# 启动服务，开机自动启动
systemctl enable rnacos

# 禁用服务，开机不启动
systemctl disable rnacos

```

2. 同时可以结合使用`journalctl` 管理查看服务日志

```sh
# 查看日志
journalctl -u rnacos
# 查看最新日志
journalctl -u rnacos  -f
```

其它journalctl日志管理方式，可以单独支了解，这里不展开。


## 5、验证服务


### 5.1 shell 本地 http验证

 1. 配置中心http api例子

```
# 设置配置
curl -X POST 'http://127.0.0.1:8848/nacos/v1/cs/configs' -d 'dataId=t001&group=foo&content=contentTest'

# 查询
curl 'http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=t001&group=foo'

```

2. 注册中心http api例子

```
# 注册服务实例
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' -d 'port=8000&healthy=true&ip=192.168.1.11&weight=1.0&serviceName=nacos.test.001&groupName=foo&metadata={"app":"foo","id":"001"}'

curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' -d 'port=8000&healthy=true&ip=192.168.1.12&weight=1.0&serviceName=nacos.test.001&groupName=foo&metadata={"app":"foo","id":"002"}'

 curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' -d 'port=8000&healthy=true&ip=192.168.1.13&weight=1.0&serviceName=nacos.test.001&groupName=foo&metadata={"app":"foo","id":"003"}'

# 查询服务实例

curl "http://127.0.0.1:8848/nacos/v1/ns/instance/list?&namespaceId=public&serviceName=foo%40%40nacos.test.001&groupName=foo&clusters=&healthyOnly=true"

```


### 5.2 nacos客户端应用验证

如果客户端应用与nacos服务不在同一台机器，需要开放`8848`,`9848`端口给内网应用使用。（注意`8848`,`9848`端口不能暴露到外网上）

在客户端应用中配置好nacos服务后，即可运行验证。


### 5.3 使用r-nacos控制台

开放`10848` 端口后，可以通过对应ip+端口在浏览器访问控制台。

新控制台有完备的用户管理、登陆校验、权限控制，支持对外网暴露。

系统会默认创建一个名为admin的用户，密码为admin。

## 6、总结

r-nacos是一个用rust实现的nacos服务，我们用它平替java nacos以降低服务占用内存，提升服务的稳定性。

systemd提供便捷的服务托管功能，可以方便的将一个命令运行的应用，转化成一个可方便控制的后台服务。

使用systemd部署r-nacos，是一个比较和合适的、可用于生产环境的部署方案。
