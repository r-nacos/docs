# Deployment Parameter Guide

To support various scenarios, the same application package must allow custom parameter settings.

r-nacos runtime parameters can be configured via environment variables or a specified configuration file. If not set, it will operate with default parameters.

## Methods to Configure Runtime Parameters

### Setting Parameters via Environment Variables

Example:

```sh
RNACOS_HTTP_PORT=8848 ./rnacos
```

This approach is handy for customizing a few parameters.

### Setting Parameters via Configuration File

Example:

```sh
# Starting from version 0.3.0, the -e env_file runtime parameter is supported
./rnacos -e env_file
```

If no file is specified, it will attempt to load configuration parameters from the .env file in the current directory.

The env_file content format is:

```
KEY1=VALUE1
KEY2=VALUE2
KEY3=VALUE3
```

r-nacos supports these environment variables at runtime; if not set, it will use default configurations.

## Runtime Parameter Details

| Parameter KEY | Description | Default Value | Example | Version Supported From |
|--|--|--|--|--|
| RNACOS_HTTP_PORT | rnacos http listening port | 8848 | 8848 | 0.1.x |
| RNACOS_GRPC_PORT | rnacos grpc listening port | Default is HTTP port + 1000 | 9848 | 0.1.x |
| RNACOS_HTTP_CONSOLE_PORT | r-nacos independent console port | Default is HTTP port + 2000; set to 0 to disable the independent console | 10848 | 0.4.x |
| RNACOS_CONSOLE_LOGIN_ONE_HOUR_LIMIT | r-nacos console login failure limit within one hour | Default is 5; a user will be locked for one hour after 5 consecutive login failures | 5 | 0.4.x |
| RNACOS_HTTP_WORKERS | Number of http worker threads | Number of CPU cores | 8 | 0.1.x |
| RNACOS_CONFIG_DB_FILE | Local database file address for the configuration center [no longer used after 0.2.x] | config.db | config.db | 0.1.x |
| RNACOS_CONFIG_DB_DIR | Local database directory for the configuration center, automatically created during system runtime [recommended to use RNACOS_DATA_DIR after v0.6.x due to semantic reasons] | nacos_db | nacos_db | 0.2.x |
| RNACOS_DATA_DIR | Local database directory, automatically created during system runtime [equivalent to RNACOS_CONFIG_DB_DIR, used to replace RNACOS_CONFIG_DB_DIR] | Default is ~/.local/share/r-nacos/nacos_db for Linux, MacOS; nacos_db for Windows, Docker | nacos_db | 0.6.x |
| RNACOS_RAFT_NODE_ID | Node ID | 1 | 1 | 0.3.0 |
| RNACOS_RAFT_NODE_ADDR | Node address Ip:GrpcPort, effective every time when running as a single node; for multi-node cluster deployment, only the value configured when joining the cluster is taken | 127.0.0.1:GrpcPort | 127.0.0.1:9848 | 0.3.0 |
| RNACOS_RAFT_AUTO_INIT | Whether to initialize as the master node (only effective during the first startup) | Default is true for node 1, false for other nodes | true | 0.3.0 |
| RNACOS_RAFT_JOIN_ADDR | Whether to join the corresponding master node as a node, LeaderIp:GrpcPort; only effective during the first startup | Empty | 127.0.0.1:9848 | 0.3.0 |
| RNACOS_RAFT_SNAPSHOT_LOG_SIZE | Number of logs for raft to package a snapshot; a snapshot will be triggered when the change log exceeds this value | Default is 10000 | 10000 | 0.5.0 |
| RUST_LOG | Log level: debug, info, warn, error; all http, grpc requests will log info, if not concerned, set to error to reduce log volume | info | error | 0.3.0 |
| RNACOS_ENABLE_NO_AUTH_CONSOLE | Whether to enable no-auth console | false | false | 0.5.2 |
| RNACOS_CONSOLE_LOGIN_TIMEOUT | Console login validity period (in seconds) | One day, 86400 seconds | 86400 | 0.5.0 |
| RNACOS_GMT_OFFSET_HOURS | Timezone for log time, in hours; default is local timezone, needs to be specified when running in Docker | local | 8 (UTC+8), -5 (UTC-5) | 0.5.7 |
| RNACOS_ENABLE_OPEN_API_AUTH | Whether to enable authentication for openapi (Note: do not enable authentication when switching from nacos to r-nacos) | false | true | 0.5.8 |
| RNACOS_API_LOGIN_TIMEOUT | Open api authentication validity period, in seconds (Note: when switching from no authentication to enabling authentication, the corresponding duration needs to be waited to ensure client token updates take effect) | One hour, 3600 seconds | 3600 | 0.5.8 |
| RNACOS_CLUSTER_TOKEN | Communication request verification token between clusters, empty means no verification, only nodes with the same token can communicate | Empty string | 1234567890abcdefg | 0.5.8 |
| RNACOS_BACKUP_TOKEN | Data backup interface request verification token, empty or less than 32 characters means no backup interface is enabled | Empty string | 1234567890abcdefg1234567890abcdefg | 0.6.6 |
| RNACOS_INIT_ADMIN_USERNAME | Initial admin username, only effective during the first startup of the master node | admin | rnacos | 0.5.11 |
| RNACOS_INIT_ADMIN_PASSWORD | Initial admin password, only effective during the first startup of the master node | admin | rnacos123456 | 0.5.11 |
| RNACOS_ENABLE_METRICS | Whether to enable monitoring metrics | true | true | 0.5.13 |
| RNACOS_METRICS_ENABLE_LOG | Whether to enable printing monitoring metrics logs | false | false | 0.5.21 |
| RNACOS_METRICS_COLLECT_INTERVAL_SECOND | Monitoring metrics collection interval, in seconds, minimum interval is 1 second, cannot be less than RNACOS_METRICS_LOG_INTERVAL_SECOND | 15 | 5 | 0.5.14 |
| RNACOS_METRICS_LOG_INTERVAL_SECOND | Monitoring metrics log printing interval, in seconds, minimum interval is 5 seconds | 60 | 30 | 0.5.13 |
| RNACOS_CONSOLE_ENABLE_CAPTCHA | Captcha switch | true | true | 0.5.14 |

Note: Starting from v0.3.0, nodes started with default parameters will be treated as a single-node cluster deployment where the current node is the master node. Supports joining additional slave nodes.