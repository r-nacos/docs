# Quick Start

## 1. Install and Run r-nacos

【Standalone Deployment】

Method 1: Download the application package for your system from [github release](https://github.com/heqingpan/rnacos/releases), and run it after extracting.

```shell
# Extract
tar -xvf rnacos-x86_64-apple-darwin.tar.gz
```

```shell
# Run
./rnacos
```

> [!NOTE]
>
> On Windows, simply run rnacos.exe after extraction.

Method 2: Run using Docker

```shell
# stable is the latest official version, or you can specify an image version, such as: qingpan/rnacos:v0.4.0
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
> The Docker container's working directory is /io, where it reads and writes configuration files.

#### Docker Version Details

Each application build also includes a corresponding Docker package, qingpan/rnacos:$tag.

Each version has two types of Docker packages:

|Docker Package Type|tag Format| Example |Description |
|--|--|--|--|
|gnu debian package|$version| qingpan/rnacos:v0.4.0 | Based on debian-slim, larger in size (36M compressed, 102M uncompressed), with higher performance;|
|musl alpine package|$version-alpine| qingpan/rnacos:v0.4.0-alpine | Based on alpine, smaller in size (11M compressed, 34M uncompressed), with lower performance;|

If you don't care about the version, you can use the latest official version tag:

+ The latest gnu official version: `qingpan/rnacos:stable`
+ The latest alpine official version: `qingpan/rnacos:stable-alpine`

Method 3: Install via cargo compilation

```shell
# Install
cargo install rnacos
```

```shell
# Run
rnacos
```

Method 4: Download and compile the source code

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

Method 5: Install on MacOS using brew

```shell
# Add r-nacos to taps
brew tap r-nacos/r-nacos 
```

```shell
# Install r-nacos via brew
brew install r-nacos
```

```shell
# Run
rnacos
```

> [!IMPORTANT]
>
> You can update to the latest version with the following command:
>
> ```shell 
> brew upgrade r-nacos
> ```

> [!NOTE]
>
> For testing and trial purposes, the first and second methods are recommended, as they can be used immediately after downloading.
>
> On Linux, the first and second methods default to the musl version (which has slightly lower performance than the gnu version). For production environments where performance is critical, consider using the third and fourth methods to compile the gnu version in the appropriate environment for deployment.
>
> For startup configuration, refer to: [Running Parameter Description](../env_config/)

## 2. Running Nacos Applications

Once the service is up and running, you can proceed to run your existing Nacos applications.

### Configuration Center HTTP API Example

```shell
# Send a POST request to the Nacos configuration center to publish a configuration
curl -X POST 'http://127.0.0.1:8848/nacos/v1/cs/configs' \
    -d 'dataId=t001' \                    # Unique identifier for the configuration, e.g., t001
    -d 'group=foo' \                      # Group name to which the configuration belongs, e.g., foo
    -d 'content=contentTest'              # Content of the configuration, e.g., contentTest
```

```shell
# Query
curl 'http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=t001&group=foo'
```

### Registry Center HTTP API Example

```shell
# Register a service instance: Send a POST request to the Nacos registry to register a service instance
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' \
-d 'port=8000' \                       # Port number of the service instance, e.g., 8000
-d 'healthy=true' \                    # Health status of the service instance, true means healthy
-d 'ip=192.168.1.11' \                 # IP address of the service instance, e.g., 192.168.1.11
-d 'weight=1.0' \                      # Weight of the service instance, e.g., 1.0
-d 'serviceName=nacos.test.001' \      # Name of the service, e.g., nacos.test.001
-d 'groupName=foo' \                   # Group name to which the service instance belongs, e.g., foo
-d 'metadata={"app":"foo","id":"001"}' # Metadata of the service instance, represented as a JSON string
```

```shell
# Register a service instance: Send a POST request to the Nacos registry to register a service instance
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' \
-d 'port=8000' \                        # Port number of the service instance, e.g., 8000
-d 'healthy=true' \                     # Health status of the service instance, true means healthy
-d 'ip=192.168.1.12' \                  # IP address of the service instance, e.g., 192.168.1.12
-d 'weight=1.0' \                       # Weight of the service instance, e.g., 1.0
-d 'serviceName=nacos.test.001' \       # Name of the service, e.g., nacos.test.001
-d 'groupName=foo' \                    # Group name to which the service instance belongs, e.g., foo
-d 'metadata={"app":"foo","id":"002"}'  # Metadata of the service instance, represented as a JSON string
```

```shell
# Register a service instance: Send a POST request to the Nacos registry to register a service instance
curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance' \
-d 'port=8000' \      					# Port number of the service instance, e.g., 8000
-d 'healthy=true' \   					# Health status of the service instance, true means healthy
-d 'ip=192.168.1.13' \                  # IP address of the service instance, e.g., 192.168.1.13
-d 'weight=1.0' \                       # Weight of the service instance, e.g., 1.0
-d 'serviceName=nacos.test.001' \       # Name of the service, e.g., nacos.test.001
-d 'groupName=foo' \                    # Group name to which the service instance belongs, e.g., foo
-d 'metadata={"app":"foo","id":"003"}'	# Metadata of the service instance, represented as a JSON string
```

```shell
# Query service instances
curl "http://127.0.0.1:8848/nacos/v1/ns/instance/list?&namespaceId=public&serviceName=foo%40%40nacos.test.001&groupName=foo&clusters=&healthyOnly=true"
```

For more detailed usage, please refer to the Nacos user guide on nacos.io.

[JAVA-SDK](https://nacos.io/zh-cn/docs/sdk.html)

[Other Languages](https://nacos.io/zh-cn/docs/other-language.html)

[Open-API](https://nacos.io/zh-cn/docs/open-api.html)

## III. Using the r-nacos Console

Starting from version 0.4.0, r-nacos introduces a new console with its own dedicated port. This new console offers comprehensive user management, login verification, and permission control, and it can be exposed to external networks.

Once the service is up and running, you can access the new r-nacos console by navigating to `http://127.0.0.1:10848/rnacos/` in your browser.

The old console, accessible at `http://127.0.0.1:8848/rnacos/`, is now deprecated and is not enabled by default. However, it can still be activated through configuration settings. Unlike the new console, the old one does not require login authentication and lacks user management features.

The console provides several key functionalities, including user management, namespace management, configuration management, service management, and service instance management.

> Console Online Demo

Address: [https://www.bestreven.top/rnacos/](https://www.bestreven.top/rnacos/) 
(This demo service and URL are generously provided by a community user.)

Demo Users:

+ Developer:
    + Username: `dev`, Password: `dev`
+ Guest:
    + Username: `guest`, Password: `guest`

Demo Content:

+ Configuration Center: Nearly 5,000 configurations
+ Service Center: 30 services, each with 15 instances, totaling 450 service instances.

> 1. User Login

When you try to access a page in the new console without being logged in, you'll be automatically redirected to the login page.
If a user fails to log in 5 times consecutively, their account will be locked for 1 hour. The number of allowed failed attempts can be adjusted via startup parameters.

<img style="width: 400px;" width="400" src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20231223220425.png" />

> 2. User Management

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20231223222325.png)

By default, the system creates an `admin` user with the password `admin`.

Once inside the console, you can manage users as needed.

User Role Permissions:

1. Administrator: Full access to all console features
2. Developer: Access to all console features except user management
3. Guest: Can only view data in the configuration center and registry, with no editing capabilities.

**Note:** Before making the nacos console accessible externally, it's advisable to create a custom administrator and either delete or disable the default `admin` user.

> 3. Configuration Management

Configuration List Management

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155441.png)

Create, Edit Configuration

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155545.png)

> 4. Service List Management

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155133.png)

> 5. Service Instance Management

![](https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155158.png)

> 6. Namespace Management

![](https://user-images.githubusercontent.com/1174480/268299574-4947b9f8-79e1-48e2-97fe-e9767e26ddc0.png)