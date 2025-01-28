# Deploying r-nacos with systemd

## 1. Introduction

[r-nacos](https://github.com/r-nacos/r-nacos) is a nacos service built using Rust. Compared to the Java-based nacos, it offers the same features but with faster startup times, lower system resource usage (initial memory under 10M), better performance, and greater stability.

r-nacos is designed to be fully compatible with the latest nacos client SDK protocols (including 1.x http OpenApi and 2.x grpc protocol), allowing applications using nacos to seamlessly transition to r-nacos.

While r-nacos is straightforward to use in local testing—simply run `./rnacos` to start the application—production environments require a more standardized deployment approach.

Most Linux services now support systemd for unified service management. This article documents the process of deploying r-nacos using systemd.

## 2. Planning the r-nacos Deployment

1. Place the service application in `/opt/rnacos/`
2. Use `/etc/rnacos/env.conf` for r-nacos configuration
3. Store data in `/var/rnacos/io/`
4. Place the systemd service configuration in `/lib/systemd/system/rnacos.service`

## 3. Deployment Steps

1. Download the service application

```sh
mkdir -p /opt/rnacos/
cd /opt/rnacos/
#download from github
curl -LO https://github.com/r-nacos/r-nacos/releases/download/v0.5.0/rnacos-x86_64-unknown-linux-musl.tar.gz

#download from gitee
#curl -LO https://gitee.com/hqp/rnacos/releases/download/v0.5.0/rnacos-x86_64-unknown-linux-musl.tar.gz

tar -xvf rnacos-x86_64-unknown-linux-musl.tar.gz
```

2. Add r-nacos service configuration

```sh 
mkdir -p /etc/rnacos/
cat >/etc/rnacos/env.conf <<EOF
# rnacos offers two ways to specify configuration files:
# 1. Default file (placed in the running directory, named ".env", automatically read)
# 2. Specified file (placed in any directory, specified via command line parameter "-e file path", e.g., "./rnacos -e /etc/rnacos/conf/default.cnf")
# For more details, visit https://r-nacos.github.io/r-nacos/deplay_env.html

# r-nacos http listening port, default: 8848
RNACOS_HTTP_PORT=8848

#r-nacos grpc listening port, default: HTTP port +1000 (i.e., 9848) 
#RNACOS_GRPC_PORT=9848

#r-nacos independent console port, default: HTTP port +2000 (i.e., 10848); set to 0 to disable independent console
#RNACOS_HTTP_CONSOLE_PORT=10848

#r-nacos console login failure limit per hour, default is 5; a user will be locked for 1 hour after 5 consecutive login failures, default: 1
RNACOS_CONSOLE_LOGIN_ONE_HOUR_LIMIT=5

#http worker threads, default: number of CPU cores 
#RNACOS_HTTP_WORKERS=8


#local database sled folder for configuration center, automatically created during system runtime, default: nacos_db
RNACOS_CONFIG_DB_DIR=nacos_db

#node id, default: 1
RNACOS_RAFT_NODE_ID=1

#node address Ip:GrpcPort, effective every time when running as a single node; when deploying in a multi-node cluster, only the value configured when joining the cluster is taken, default: 127.0.0.1:GrpcPort 
RNACOS_RAFT_NODE_ADDR=127.0.0.1:9848

#whether to initialize as the master node, (only effective during the first startup) default is true for node 1, false for other nodes 
#RNACOS_RAFT_AUTO_INIT=true


#whether to join the corresponding master node, LeaderIp:GrpcPort; only effective during the first startup; default: empty 
#RNACOS_RAFT_JOIN_ADDR=127.0.0.1:9848

#log level: debug, info, warn, error; all http, grpc requests will log info level, if not concerned, can set to error to reduce log volume, default: info
RUST_LOG=info
EOF
```

3. Initialize r-nacos data directory

```sh
mkdir -p /var/rnacos/io/

# If running with rnacos user, grant directory write permission to the user
# adduser rnacos
# chown -R rnacos:rnacos /var/rnacos
```


4. Initialize r-nacos service configuration

```sh

cat >/lib/systemd/system/rnacos.service <<EOF
[Unit]
Description=r-nacos server
After=network.target

[Service]
#Run with specified user
#User=rnacos
#Group=rnacos
ExecStart=/opt/rnacos/rnacos -e /etc/rnacos/env.conf
# Automatically restart on abnormal process shutdown
Restart=always
WorkingDirectory=/var/rnacos/io

[Install]
WantedBy=multi-user.target
EOF
```

5. Reload and start the service

```sh
# Reload configuration
systemctl daemon-reload
# Enable and start the service immediately
systemctl enable --now rnacos

# Check service status
systemctl status rnacos

```

By executing the above scripts together, the r-nacos service can be deployed.

For the integrated script, refer to: [linux-systemd-deploy.sh](https://github.com/nacos-group/r-nacos/blob/v0.5.17/tools/linux-systemd-deploy.sh)

## 4. Service Management

1. Managing Services with `systemctl`

Here are some commonly used commands:

```
# Check the status of a service
systemctl status rnacos

# Start a service
systemctl start rnacos

# Stop a service
systemctl stop rnacos

# Enable a service to start automatically on boot
systemctl enable rnacos

# Disable a service from starting automatically on boot
systemctl disable rnacos

```

2. Additionally, you can use `journalctl` to manage and view service logs

```sh
# View logs
journalctl -u rnacos
# View the latest logs in real-time
journalctl -u rnacos  -f
```

Other `journalctl` log management techniques can be explored separately and are not covered here.

## 5. Service Verification

### 5.1 Local HTTP Verification via Shell

1. Example of Configuration Center HTTP API

```
# Set configuration
curl -X POST 'http://127.0.0.1:8848/nacos/v1/cs/configs' -d 'dataId=t001&group=foo&content=contentTest'

# Query configuration
curl 'http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=t001&group=foo'

```

2. Example of Registration Center HTTP API

```
# Register a service instance
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' -d 'port=8000&healthy=true&ip=192.168.1.11&weight=1.0&serviceName=nacos.test.001&groupName=foo&metadata={"app":"foo","id":"001"}'

curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' -d 'port=8000&healthy=true&ip=192.168.1.12&weight=1.0&serviceName=nacos.test.001&groupName=foo&metadata={"app":"foo","id":"002"}'

curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' -d 'port=8000&healthy=true&ip=192.168.1.13&weight=1.0&serviceName=nacos.test.001&groupName=foo&metadata={"app":"foo","id":"003"}'

# Query service instances

curl "http://127.0.0.1:8848/nacos/v1/ns/instance/list?&namespaceId=public&serviceName=foo%40%40nacos.test.001&groupName=foo&clusters=&healthyOnly=true"

```

### 5.2 Nacos Client Application Verification

If the client application and the Nacos service are running on different machines, you need to open ports `8848` and `9848` for internal network use. (Important: Do not expose these ports to the external network.)

Once the Nacos service is properly configured in the client application, you can proceed to verify its functionality.

### 5.3 Using the r-nacos Console

After opening port `10848`, you can access the console by entering the corresponding IP address and port in your browser.

The new console features robust user management, login verification, and permission control, and it is designed to be safely exposed to the external network.

By default, the system creates a user named `admin` with the password `admin`.

## 6. Summary

r-nacos is a Nacos service implemented in Rust. We use it as a replacement for Java Nacos to reduce memory usage and enhance service stability.

systemd offers convenient service hosting capabilities, allowing you to easily convert a command-line application into a manageable background service.

Deploying r-nacos using systemd is a practical and production-ready solution.

----

Date: 2024-03-26

Author: [heqingpan](https://github.com/heqingpan)