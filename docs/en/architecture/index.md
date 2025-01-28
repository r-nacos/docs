# Architecture

## r-nacos Architecture Diagram

![Architecture Diagram](https://raw.githubusercontent.com/r-nacos/r-nacos/master/doc/assets/imgs/r-nacos_L2_0.3.7.svg)

Description:

+ r-nacos is designed to support cluster deployment by default. A single machine acts as a one-node cluster, and additional nodes can be added as needed.
+ Data persistence is handled by a distributed database using the raft protocol (raft protocol + node file storage), similar to etcd.
+ To back up and restore data, you only need to manage the files in the `RNACOS_CONFIG_DB_DIR:nacos_db` directory.
+ The r-nacos console follows a front-end and back-end separation architecture. The front-end, which relies on nodejs, is hosted in a separate project [r-nacos-console-web](https://github.com/r-nacos/rnacos-console-web). The front-end resources are then integrated into this project using cargo, eliminating the need for nodejs during Rust development.

Details on multi-instance raft and distro distributed protocols will be provided later.

## Configuration Center

Configuration Model Diagram

![](https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/rnacos_L4_config001_LR.svg)

## Configuration Center Raft Protocol

Key aspects of the raft protocol:
1. Nodes are categorized into roles: leader (primary node), follower (secondary node), and candidate (election node).
2. The stable state consists of one primary node and multiple secondary nodes.
3. The primary node handles write operations. Before committing a write, it must synchronize the log with other nodes. The log is only committed to the state machine once a majority of nodes have successfully written it.
4. The primary node periodically sends heartbeats to the secondary nodes. If a secondary node misses a heartbeat, it initiates an election. If it secures votes from a majority of nodes, it becomes the new primary node.

For more details, refer to the [raft protocol paper](https://docs.qq.com/doc/DY0VxSkVGWHFYSlZJ).

How r-nacos integrates raft:

1. The raft protocol is implemented using the async-raft library, focusing on the network and storage layers. In r-nacos, the storage layer's state machine is the configuration center.
2. The configuration center connects to the raft protocol's state machine, which drives updates to the configuration center.

Example of a three-node configuration center request processing in r-nacos:

![](https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230917182416.png)

Write Process:

1. A client sends an update configuration request to a random node.
2. At the request entry layer, a raft routing check is performed. If the node is the primary, it processes the request; otherwise, it routes the request to the primary node.
3. The primary node writes the request to the raft log.
4. The request is synchronized with other secondary nodes.
5. Once a majority of nodes (including the primary) have successfully written the log, the request log is committed to the state machine, updating the configuration center. (Other secondary nodes commit during the next log sync or heartbeat.)
6. The result is returned to the client.

Query Process:
1. A client sends a query configuration request to a random node.
2. The node processes the request like a single machine, directly querying its configuration center data and returning the result.

## Registry Class Distro Protocol

Key aspects of the protocol:

1. Each node holds a complete dataset and can provide registration information query services.
2. All nodes in the registry are equal, with responsibilities divided by hash. A node can write to the services it manages; otherwise, it forwards the request to the responsible node.
3. Services registered via the gRPC protocol are handled directly by the receiving node.
4. After a node updates service instance information, it synchronizes the changes with other nodes.

For more details, refer to the distro protocol implementation in Java Nacos.
r-nacos follows the same main logic as the Java version but differs in some implementation details.

Example of a three-node registry request processing in r-nacos:

![](https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230917182622.png)

HTTP Write Process:

1. A client sends a register service instance request to a random node.
2. The request bypasses service routing checks. If the node is responsible for the service, it processes the request; otherwise, it routes it to the responsible node.
3. The responsible node registers the request in the registry.
4. The result is returned to the client.
5. The updated data is asynchronously synchronized with other nodes.

gRPC Write Process (no routing, handled directly by the node):

1. A client establishes a gRPC long connection with a random node.
2. The client sends a register service instance request.
3. The request is registered in the registry as if it were a single machine.
4. The result is returned to the client.
5. The updated data is asynchronously synchronized with other nodes.

Query Process:

1. A client sends a query service information request to a random node.
2. The node processes the request like a single machine, directly querying its registry data and returning the result.

### Why is the routing logic for HTTP writes different from gRPC writes?

This is because gRPC heartbeats are managed as long-lived connections. If a client's connection drops, all requests on that connection become invalid. [Efficient]

In contrast, HTTP instance registration is stateless, and the status of instances can only be updated based on their registration time using a timer. Moreover, instances in the registration center are organized by service categories.
As a result, HTTP-registered instances need to be routed by service, enabling different nodes to handle different service ranges. [Inefficient]

Therefore, using the gRPC protocol in the registration center will significantly outperform the HTTP protocol.
