# Version Description

## R-NACOS Version Description

|Version| Compatibility with nacos |Version Features|Applicable Scenarios|
|--|------------------------------------|--|--|
|v0.3.3 and above| Supports the latest 2.x nacos SDK protocol |Supports cluster deployment, using a single-node cluster as a standalone mode. The configuration center raft protocol is not fully optimized, with a cluster write TPS of around 1.5k|Recommended for applications without high-frequency configuration center write requirements (configuration write performance will be optimized later)|
|v0.2.3 (No longer recommended, new version bugfixes will not be synchronized)| Supports the latest 2.x nacos SDK protocol |Standalone deployment version, configuration center database uses sled, initial memory usage is about 25M more, standalone configuration center write TPS is over 15k|Consider using for applications with high-frequency configuration center write requirements|
|v0.1.10 (No longer recommended, new version bugfixes will not be synchronized)| Supports 1.x service interfaces; supports most 2.x interfaces except for querying service center service lists |Standalone deployment version, configuration center database uses sqlite, low memory usage, but configuration write TPS is not high, around 700|Consider using for small applications that do not use 2.x registration center services and are sensitive to memory usage|

### Docker Version Description

Each application build will also generate a corresponding Docker image, qingpan/rnacos:$tag.

Each version will generate two types of Docker images

|Docker Image Type|Tag Format| Example |Description |
|--|--|--|--|
|gnu debian package|$version| qingpan/rnacos:v0.4.2 | Docker image based on debian-slim, larger in size (compressed package 36M, unpacked 102M), relatively higher runtime performance|
|musl alpine package|$version-alpine| qingpan/rnacos:v0.4.2-alpine | Docker image based on alpine, smaller in size (compressed package 11M, unpacked 34M), relatively lower runtime performance|

If you do not care about the version, you can use the latest stable version tag.

+ Latest gnu stable version: `qingpan/rnacos:stable`
+ Latest alpine stable version: `qingpan/rnacos:stable-alpine`

## nacos client sdk

### java nacos sdk

**nacos-client**

```xml
<dependency>
    <groupId>com.alibaba.nacos</groupId>
    <artifactId>nacos-client</artifactId>
    <version>${nacos.version}</version>
</dependency>
```

|Protocol|Tested Version|Recommended Version|
|--|--|--|
|grpc protocol (2.x)|2.1.0|>2.1.x|
|http protocol (1.x)|1.4.1|>1.4.x|


### go nacos sdk

**nacos-sdk-go**

```
nacos-sdk-go/v2 v2.2.5
```

|Protocol|Tested Version|Recommended Version|
|--|--|--|
|grpc protocol (2.x)|2.2.5|>=2.2.5|

### rust nacos sdk

**nacos-sdk-rust**

```
nacos-sdk = "0.3.3"
```

|Protocol|Tested Version|Recommended Version|
|--|--|--|
|grpc protocol|0.3.3|>=0.3.3|


**nacos_rust_client**

```
nacos_rust_client = "0.3.0"
```

|Protocol|Tested Version|Recommended Version|
|--|--|--|
|Supports both http and grpc protocols|0.3.0|>=0.3.0|
|http protocol|0.2.2|>=0.2.2|