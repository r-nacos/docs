# Performance and Capacity Overview

## Stress Testing Tools

We primarily use the goose tool for stress testing.

Refer to the sub-project [loadtest](https://github.com/heqingpan/rnacos/tree/master/loadtest) in the project for more details.

## Performance Stress Testing Results

| Module | Scenario | Single Node qps/tps | Cluster qps/tps | Summary/Remarks |
|--|--|--|--|--|
| Configuration Center | Configuration Write, HTTP Protocol | 17.6k | 7.6k | Cluster write stress testing was performed on a single machine running 3 nodes. Deploying on multiple machines could further improve tps. |
| Configuration Center | Configuration Query, HTTP Protocol | 80k | n*80k | The total query qps of the cluster is a multiple of the node. |
| Registry | Service Instance Registration, HTTP Protocol | 48k | 24k | Cluster write stress testing was performed on a single machine running 3 nodes. Deploying on multiple machines could further improve tps. |
| Registry | Service Instance Registration, gRPC Protocol | 48k | 24k | The stress testing tool does not support gRPC protocol, so no actual stress testing has been conducted. Theoretically, it should not be lower than the HTTP protocol. |
| Registry | Service Instance Heartbeat, HTTP Protocol | 48k | 24k | Heartbeat is calculated per instance and shares qps with service instance registration. |
| Registry | Service Instance Heartbeat, gRPC Protocol | 80k+ | n*80k | Heartbeat is calculated per request link and does not go through the registry processing thread. Each node only manages the heartbeat of the current node. The total heartbeat qps of the cluster is a multiple of the node. |
| Registry | Query Service Instance | 54k | n*54k | The total query qps of the cluster is a multiple of the node. |

**Note:** Specific results depend on the stress testing environment.

### Stress Testing Records

Registry Query:

![](https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230903202816.png)

Configuration Center Query, two processes each limited to 40k qps for simultaneous stress testing (total 80k qps), one of the stress testing records:

![](https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230903205737.png)

## Capacity Analysis

### Configuration Center

1. The single-node query capacity of the configuration center is 80k qps, which is very high and supports horizontal scaling; the cluster has no query bottleneck.
2. The memory usage of the configuration center depends on the configuration memory. As long as the memory is not full, there is no bottleneck.
3. The cluster write operation of the configuration center is centralized on the master node, which may create a write bottleneck; currently, it is 1.5k tps, but it should reach over 10k tps after optimization.

### Registry

1. The single-node query capacity of the registry is 30k qps, which is relatively high and supports horizontal scaling; the cluster has no query bottleneck.
2. The memory usage of the registry depends on the configuration memory. As long as the memory is not full, there is no bottleneck.
3. The cluster write operation of the registry requires each node to write once, so the overall cluster write performance tps is theoretically equivalent to that of a single node.
4. The heartbeat maintenance mechanisms of the HTTP protocol (v1.x version) and gRPC protocol (v2.x) are different; HTTP heartbeat is calculated per instance and shares qps with service instance registration, while gRPC heartbeat is calculated per request link and does not go through the registry processing thread. Therefore, the theoretical capacity supported by these protocols varies significantly.

#### Registry Cluster Registration Capacity Inference

1. The HTTP protocol registration + heartbeat qps is 10k, with each instance having a heartbeat every 5 seconds; theoretically, it can only support about 50k service instances.
2. For the gRPC protocol, assuming the registration qps is also 10k, the heartbeat qps per instance is 80k, and the total heartbeat qps for a 3-node cluster is 240k; if an application instance reconnects once per hour on average, the total number of service instances supported for registration is: 60*60*10000 = 36 million, and the total number of link instances supported by heartbeat is: 5*240k = 1.2 million link instances (related to the cluster nodes).

Conclusion:
If using v1.0x HTTP protocol, the supported instances are around 50k.
If using v2.0x gRPC protocol, theoretically, there is no bottleneck.

## Performance Comparison between r-nacos and Java Nacos (Single Machine Mode)

Historical single-machine performance test records, comparing r-nacos with the Java version of Nacos.

### Test Environment and Tools

Test environment: macOS i7 quad-core / 16GB RAM. The same machine is used for both applying and receiving pressure (which may lower the test results).
Test tools:
	* wrk, achieving around 24,450 qps
	* goose, achieving around 17,000 qps (single process with rate limiting, lower than wrk)
	* Single process pressure application, wrk output is higher than goose

r-nacos server version: v0.1.1
Java nacos server version: 2.1.0

**Since wrk and goose do not currently support the gRPC protocol, only HTTP protocol interfaces were tested.**

### Configuration Center

The configuration center is not frequently updated, so write operations were not tested.

#### Rust r-nacos server:

1. Configuration center single-machine query with wrk achieved around 24,000 qps.

#### Java nacos server:

1. Configuration center single-machine query with wrk achieved around 7,700 qps.

### Registration Center

#### Rust r-nacos server:

2. Naming registration of 1000 x 1 instance, 200 qps per second, single-core CPU usage: around 4.5%
3. Naming single query achieved around 15,000 QPS
	1. wrk query for a single service, 16,500 qps
	2. goose query for 1000 services, 15,000 qps
4. Naming single service registration
	1. goose, 50,000 to 70,000 instances, around 7,000 qps.
4. Mixed query and registration
	1. wrk query for a single service (15,000 qps) + goose registration (750 qps) [5,000 instances]
	2. goose query for 1000 services (13,000 qps) + goose registration (700 qps) [5,000 instances]
	3. wrk query for a single service (15,000 qps) + goose registration (1,500 qps) [10,000 instances]
	4. goose query for 1000 services (13,000 qps) + goose registration (1,300 qps) [10,000 instances]

#### Java nacos server:

1. Configuration center query with wrk achieved around 7,700 qps
2. Naming registration of 1000 x 1 instance, 200 qps per second, single-core CPU usage: around 17%
3. Naming single query
	1. wrk query for a single service, 13,500 qps.
	2. goose query for 1000 services, 10,000 qps (should be able to go higher initially). Can stabilize around 10,000 in the first 30 seconds, then drops to around 200 after 30 seconds and fluctuates, possibly due to GC.
4. Naming single registration
	1. goose, 50,000 to 70,000 instances, around 4,500 qps.
5. Mixed query and registration
	1. wrk query for a single service (13,000 qps) + goose registration (700 qps) [5,000 instances]
	2. goose query for 1000 services (10,000 qps) + goose registration (700 qps) [5,000 instances]; can maintain initially, but qps fluctuates significantly later, dropping below 50 at the lowest.
	3. wrk query for a single service (9,000 qps) + goose registration (1,200 qps) [10,000 instances]
	4. goose query for 1000 services (6,000 qps) + goose registration (800 qps) [10,000 instances]

### Performance Test Summary

1. r-nacos, except for service registration which cannot stabilize above 10,000, other interfaces can stabilize above 10,000 qps.

2. Java's query interface can generally reach above 10,000, but it is not stable, with significant fluctuations later. Reducing the test flow can make qps relatively stable.
3. In scenarios with multiple service queries and multiple service registrations, r-nacos qps can stabilize around 13,000, while Java Nacos qps drops significantly to around 6,000.
4. r-nacos overall qps is more than double that of the Java version. Due to Java's GC, the stability of qps levels is worse in Java (with the same pressure flow, qps can drop from a peak of 10,000 to below 100).
5. r-nacos service, thread count stabilizes at 7, CPU usage rate maximum around 200% (equivalent to using 2 cores), memory below 50MB.
6. Java Nacos service, maximum thread count around 300, CPU usage rate maximum around 500%, memory 600MB to 900MB.