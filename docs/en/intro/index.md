# Chapter 1: Overview

* r-nacos is a nacos service implemented in Rust. Compared to Java-based nacos, it offers the same features but with faster startup times, lower system resource usage (initial memory under 10M), higher performance, and greater stability.

* r-nacos is designed to be fully compatible with the latest version of nacos's client SDK protocols (including 1.x http OpenApi and 2.x grpc protocol). This allows applications that rely on nacos services to migrate seamlessly to r-nacos without any code changes.

![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/r-nacos/r-nacos/total)
![Docker Pulls](https://img.shields.io/docker/pulls/qingpan/rnacos)  

# Chapter 2: Application Scenarios and Features

## 2.1 Application Scenarios

* ① For development and testing environments using nacos, you can replace nacos with r-nacos, which starts up in seconds.
* ② For personal cloud service deployments using nacos, consider switching to r-nacos. It has low resource usage, with a package size just over 10M, no dependency on JDK, runtime CPU usage under 0.5%, and memory usage under 5M (depending on the instance).
* ③ For non-custom nacos services, if you want to enhance performance and stability, consider migrating to r-nacos.

## 2.2 Features

### 2.2.1 Overview

* r-nacos features are categorized into:
  * ① SDK-oriented features.
  * ② Console-oriented features.
  * ③ Deployment and clustering-oriented features.

### 2.2.2 SDK-Oriented Features

* Access authentication:
  * Provides an interface to obtain authentication tokens.
  * Actual requests currently do not support authentication; all are considered authenticated.

* Configuration center:
  * Supports basic configuration center functions, including maintaining configuration history.
  * Compatible with the configuration center's SDK protocol.
  * Does not currently support gray release or tag isolation.

* Registration center:
  * Supports basic registration center functions.
  * Compatible with the configuration center's SDK protocol.
  * Does not currently support real-time instance change notifications via 1.x udp, only supports real-time notifications via 2.x grpc.

> [!WARNING]
>
> For the registration center, the initial version supported udp instance change notifications, but it was later removed due to inconsistency with grpc support. It may be reintroduced in the future.

### 2.2.3 Console-Oriented Features

* Access authentication: Authentication is not currently enabled.

* Namespaces:
  * Supports managing namespace lists.
  * Supports switching namespaces to query configuration and service data.

* Configuration center:
  * Supports configuration center information management.
  * Supports configuration import and export, with file formats compatible with nacos.
  * Supports viewing and restoring configuration history.
  * Does not currently support advanced tag queries.
  * Does not currently support querying configuration listening records.

* Service center:
  * Supports service and service instance management in the registration center.
  * Does not currently support querying listening records.

### 2.2.4 Deployment and Clustering-Oriented Features

![Architecture Diagram](https://raw.githubusercontent.com/r-nacos/r-nacos/master/doc/assets/imgs/r-nacos_L2_0.3.7.svg)

Explanation:

* r-nacos supports both standalone and cluster deployment by default; standalone mode is essentially a single-node cluster, and additional nodes can be added as needed.
* Data persistence is handled by a raft protocol distributed database (raft protocol + node file storage), similar to etcd, **with no dependency on MySQL**.