# Cluster Deployment

r-nacos has supported cluster deployment since version v0.3.0.

## Overview of Cluster Functionality

The primary goal of cluster deployment is to enable horizontal scaling of services through multi-instance deployment, ensure service continuity in the event of partial node failures, and enhance overall system stability.

### Configuration Center

The configuration center utilizes the raft cluster protocol combined with local storage to persist data, eliminating the dependency on MySQL for configuration storage. Its persistence mechanism is similar to that of `etcd`.

| Request Method | Description | Performance |
|--|--|--|
| Write | Only the master node can handle write requests. Other nodes forward write requests to the master node. | The cluster achieves approximately 2,000 transactions per second (tps), with potential for optimization. |
| Read | Each node can read the complete dataset. | A single node achieves around 80,000 queries per second (qps), with the total cluster capacity being n * 80,000. |

### Registration Center

The registration center employs a distor-like protocol to synchronize data across the cluster.

It reuses the node list information from the configuration center, although the protocols are implemented independently.

| Request Method | Description | Performance |
|--|--|--|
| Write | Each node in the registration center is equal, with responsibilities divided by hash. Nodes can write to the services they are responsible for; otherwise, they forward requests to the appropriate node. | The cluster achieves around 10,000 tps. |
| Read | Each node can read the complete dataset. | A single node achieves approximately 30,000 qps, with the total cluster capacity being n * 30,000. |

## Cluster Deployment

The steps for cluster deployment are identical to those for single-node deployment, except for the runtime parameters, which include additional configurations for cluster nodes.

### 1. Obtain the r-nacos Installation Package

The method for obtaining the installation package is the same as described in [Quick Start](../quick_started/).

### 2. Configure Cluster Rules

There are four key configuration parameters for cluster deployment: `RNACOS_RAFT_NODE_ID`, `RNACOS_RAFT_NODE_ADDR`, `RNACOS_RAFT_AUTO_INIT`, and `RNACOS_RAFT_JOIN_ADDR`.

For detailed parameter descriptions, refer to [Runtime Parameter Descriptions](../env_config/).

Cluster configuration rules:

1. All cluster nodes must set `RNACOS_RAFT_NODE_ID` and `RNACOS_RAFT_NODE_ADDR`, ensuring that `node_id` and `node_addr` are unique for each node. `node_id` is a positive integer, and `node_addr` follows the format `ip:grpc_port`.
2. Master node: Initially set `RNACOS_RAFT_AUTO_INIT` to `true` (if the node is the first one, it defaults to `true` and does not require additional configuration).
3. Follower nodes: Initially set `RNACOS_RAFT_AUTO_INIT` to `false` (if the node is not the first one, it defaults to `false` and does not require additional configuration). Additionally, set `RNACOS_RAFT_JOIN_ADDR` to the address of the current master node to enable automatic cluster joining upon startup.
4. Points 2 and 3 are only relevant for initial cluster setup. Once the cluster is operational, subsequent configurations are loaded from the raft database.
5. The number of cluster nodes is flexible; it can be 1, 2, 3, 4, etc. However, the raft protocol only supports continued write operations if fewer than half of the cluster nodes are down (queries remain unaffected). For example, a 3-node cluster can tolerate one node failure, while a 2-node cluster can operate normally but cannot provide services if a node fails.
6. Follower nodes can be added dynamically as needed. For instance, a 3-node cluster can be expanded by adding 2 nodes after some time.

#### Example: Plan Cluster Node Information and Write Corresponding Configuration Files

Following the above rules, we will configure a 3-node cluster example.

Initial node information:

1. Master node id is 1, address is 127.0.0.1:9848.
2. First follower node id is 2, address is 127.0.0.1:9849.
3. Second follower node id is 3, address is 127.0.0.1:9850.

For production cluster deployment, it is recommended to set the log level to `warn`, which logs only alarms or exceptions, reducing the overall log volume.

**Configuration details:**

env01

```
#file:env01 , Initialize with the leader node role
RUST_LOG=warn
RNACOS_HTTP_PORT=8848
RNACOS_RAFT_NODE_ADDR=127.0.0.1:9848
RNACOS_CONFIG_DB_DIR=db01
RNACOS_RAFT_NODE_ID=1
RNACOS_RAFT_AUTO_INIT=true
```

env02:

```
#file:env02 , Initialize with the follower node role
RUST_LOG=warn
RNACOS_HTTP_PORT=8849
RNACOS_RAFT_NODE_ADDR=127.0.0.1:9849
RNACOS_CONFIG_DB_DIR=db02
RNACOS_RAFT_NODE_ID=2
RNACOS_RAFT_JOIN_ADDR=127.0.0.1:9848
```

env03:

```
#file:env03 , Initialize with the follower node role
RUST_LOG=warn
RNACOS_HTTP_PORT=8850
RNACOS_RAFT_NODE_ADDR=127.0.0.1:9850
RNACOS_CONFIG_DB_DIR=db03
RNACOS_RAFT_NODE_ID=3
RNACOS_RAFT_JOIN_ADDR=127.0.0.1:9848
```

**Note:** The addresses provided are for running multiple instances on the same machine. In a real-world scenario, replace them with the actual service IP and port.

### 3. Starting the Cluster

#### First Startup

To start the cluster, you need to run the three nodes separately. The master node must be started successfully before the slave nodes.

First, start the master node:

```sh
nohup ./rnacos -e env01 > n01.log &
```

Once the master node is up and running, you can start the slave nodes:

```sh
nohup ./rnacos -e env02 > n02.log &
nohup ./rnacos -e env03 > n03.log &
```

Note that during this process, each node should run on a different server.

#### Cluster Restart

The configuration and startup process for restarting nodes is the same as the initial startup.

After the cluster is started, the node information is stored in the local database of each node. When a node restarts, it loads the cluster node information directly from this local database. At this point, there is no need to read the address of the cluster to join, and the `RNACOS_RAFT_JOIN_ADDR` parameter is no longer used (though leaving it in the configuration won't cause any issues).

For partial node restarts, the node will be re-added to the cluster within one heartbeat interval (0.5 seconds).

For a full cluster restart, Raft requires a 5-second silent period followed by a 3-second election timeout before re-electing the master node. The cluster will be fully operational and able to handle configuration write requests after about 10 seconds. During this time, configuration queries and read/write operations to the registry will continue to function normally.

### 4. Running Applications Using the Cluster

Once the cluster service is up and running, you can proceed to run your existing Nacos applications.

#### Example of Configuration Center HTTP API

```sh
echo "\npublish config t001:contentTest to node 1"
curl -X POST 'http://127.0.0.1:8848/nacos/v1/cs/configs' -d 'dataId=t001&group=foo&content=contentTest'
sleep 1

echo "\nget config info t001 from node 1, value:"
curl 'http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=t001&group=foo'

echo "\nget config info t001 from node 2, value:"
curl 'http://127.0.0.1:8849/nacos/v1/cs/configs?dataId=t001&group=foo'

echo "\nget config info t001 from node 3, value:"
curl 'http://127.0.0.1:8850/nacos/v1/cs/configs?dataId=t001&group=foo'
sleep 1

echo "\npublish config t002:contentTest02 to node 2"
curl -X POST 'http://127.0.0.1:8849/nacos/v1/cs/configs' -d 'dataId=t002&group=foo&content=contentTest02'
sleep 1

echo "\nget config info t002 from node 1, value:"
curl 'http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=t002&group=foo'

echo "\nget config info t002 from node 2, value:"
curl 'http://127.0.0.1:8849/nacos/v1/cs/configs?dataId=t002&group=foo'

echo "\nget config info t002 from node 3, value:"
curl 'http://127.0.0.1:8850/nacos/v1/cs/configs?dataId=t002&group=foo'
```

#### Example of Registry HTTP API

```sh
echo "\nregister instance nacos.test.001 to node 1"
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' -d 'port=8000&healthy=true&ip=192.168.1.11&weight=1.0&serviceName=nacos.test.001&groupName=foo&metadata={"app":"foo","id":"001"}'
echo "\nregister instance nacos.test.001 to node 2"
curl -X POST 'http://127.0.0.1:8849/nacos/v1/ns/instance' -d 'port=8000&healthy=true&ip=192.168.1.12&weight=1.0&serviceName=nacos.test.001&groupName=foo&metadata={"app":"foo","id":"002"}'
echo "\nregister instance nacos.test.001 to node 3"
curl -X POST 'http://127.0.0.1:8850/nacos/v1/ns/instance' -d 'port=8000&healthy=true&ip=192.168.1.13&weight=1.0&serviceName=nacos.test.001&groupName=foo&metadata={"app":"foo","id":"003"}'
sleep 1
echo "\n\nquery service instance nacos.test.001 from node 1, value:"
curl "http://127.0.0.1:8848/nacos/v1/ns/instance/list?&namespaceId=public&serviceName=foo%40%40nacos.test.001&groupName=foo&clusters=&healthyOnly=true"
echo "\n\nquery service instance nacos.test.001 from node 2, value:"
curl "http://127.0.0.1:8849/nacos/v1/ns/instance/list?&namespaceId=public&serviceName=foo%40%40nacos.test.001&groupName=foo&clusters=&healthyOnly=true"
echo "\n\nquery service instance nacos.test.001 from node 3, value:"
curl "http://127.0.0.1:8850/nacos/v1/ns/instance/list?&namespaceId=public&serviceName=foo%40%40nacos.test.001&groupName=foo&clusters=&healthyOnly=true"
echo "\n"

```

If you are compiling the source code locally, you can use or refer to [test_cluster.sh](https://github.com/heqingpan/rnacos/blob/master/test_cluster.sh) to create and test a cluster.

For specific usage, refer to the user guide on nacos.io.

[JAVA-SDK](https://nacos.io/zh-cn/docs/sdk.html)

[Other Languages](https://nacos.io/zh-cn/docs/other-language.html)

[open-api](https://nacos.io/zh-cn/docs/open-api.html)

## Cluster Management Tools

### Checking Cluster Status via Console

![](https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230915000345.png)

On the console page, the main focus is on the status of the cluster node list and ensuring the raft leader node is functioning properly.

### Checking Cluster Status via API

1. Query the raft cluster status of a specific node

```sh
curl "http://127.0.0.1:8848/nacos/v1/raft/metrics"
# {"id":1,"state":"Leader","current_term":1,"last_log_index":10,"last_applied":10,"current_leader":1,"membership_config":{"members":[1,2,3],"members_after_consensus":null}}
# Pay attention to current_leader and members
```

2. Add a node

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/raft/add-learner" -H "Content-Type: application/json" -d '[2, "127.0.0.1:9849"]'
```

It's recommended to set `RNACOS_RAFT_JOIN_ADDR` when launching a new node to join the cluster.
If the leader node is uncertain during configuration, you can start the node first and then use the leader node's API to add the new node to the cluster.

This API can also be used to update cluster node addresses while the cluster is running.

3. Update the cluster node list

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/raft/change-membership" -H "Content-Type: application/json" -d '[1, 2, 3]'
```

If nodes are added manually, this API must be called to update the cluster node list.

This API can also be used to scale down the cluster and remove specific nodes.

## Appendix Introduction

[rnacos implements raft and distro-like protocols, supporting cluster deployment](https://www.cnblogs.com/shizioo/p/17710328.html)