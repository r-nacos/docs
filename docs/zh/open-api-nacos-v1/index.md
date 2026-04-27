# R-NACOS Nacos V1 Open API 文档

## 概述

本文档描述 R-NACOS 系统中以 `/nacos/v1` 为前缀的 HTTP Open API 接口，涵盖配置管理、命名管理、命名空间管理、集群管理等功能。这些接口兼容 Nacos 1.x/2.x SDK 协议。

基础地址：`http://127.0.0.1:8848`

---

## 一、配置管理

配置管理接口前缀为 `/nacos/v1/cs`。

### 1. 获取配置

**接口地址：** `GET /nacos/v1/cs/configs`

**接口描述：** 获取指定配置内容，也支持按条件模糊搜索和精确搜索配置。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| dataId | string | 是 | 配置ID |
| group | string | 否 | 配置分组，默认 `DEFAULT_GROUP` |
| tenant | string | 否 | 命名空间ID，默认为空（public） |
| search | string | 否 | 搜索类型：`blur`(模糊搜索)、`accurate`(精确搜索)。不传时为获取单个配置 |
| pageNo | number | 否 | 页码，默认1（搜索时使用） |
| pageSize | number | 否 | 每页大小（搜索时使用） |

### 响应参数

**获取单个配置时：**

- 成功：返回配置内容（body），响应头包含 `content-md5` 和对应的 `Content-Type`
- 失败：返回 `config data not exist`

**搜索配置时（search=blur 或 search=accurate）：**

| 参数名 | 类型 | 说明 |
|--------|------|------|
| totalCount | number | 总记录数 |
| pageNumber | number | 当前页码 |
| pagesAvailable | number | 总页数 |
| pageItems | array | 配置项列表 |
| pageItems[].tenant | string | 命名空间 |
| pageItems[].group | string | 分组 |
| pageItems[].dataId | string | 配置ID |
| pageItems[].content | string | 配置内容 |
| pageItems[].md5 | string | MD5校验值 |

### 示例

获取单个配置：

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=test.yaml&group=DEFAULT_GROUP&tenant="
```

响应信息为配置内容文本，响应头中包含 `content-md5`。

模糊搜索配置：

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?search=blur&dataId=test&pageNo=1&pageSize=10"
```

响应信息为：

```json
{"totalCount":1,"pageNumber":1,"pagesAvailable":1,"pageItems":[{"tenant":"","group":"DEFAULT_GROUP","dataId":"test.yaml","content":"key: value","md5":"d41d8cd98f00b204e9800998ecf8427e"}]}
```

---

### 2. 发布配置

**接口地址：** `POST/PUT /nacos/v1/cs/configs`

**接口描述：** 创建或更新配置。POST 和 PUT 方法均支持。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| dataId | string | 是 | 配置ID |
| group | string | 否 | 配置分组，默认 `DEFAULT_GROUP` |
| tenant | string | 否 | 命名空间ID，默认为空 |
| content | string | 是 | 配置内容 |
| type | string | 否 | 配置类型（如 `yaml`、`json`、`properties`、`text`、`html`、`xml`） |
| desc | string | 否 | 配置描述 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

- 成功：返回 `true`
- 失败：返回错误信息文本

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs" -d "dataId=test.yaml&group=DEFAULT_GROUP&content=key:%20value&type=yaml"
```

响应信息为：

```
true
```

---

### 3. 删除配置

**接口地址：** `DELETE /nacos/v1/cs/configs`

**接口描述：** 删除指定配置。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| dataId | string | 是 | 配置ID |
| group | string | 否 | 配置分组，默认 `DEFAULT_GROUP` |
| tenant | string | 否 | 命名空间ID，默认为空 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

- 成功：返回 `true`
- 失败：返回错误信息文本

### 示例

```sh
curl -X DELETE "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=test.yaml&group=DEFAULT_GROUP"
```

响应信息为：

```
true
```

---

### 4. 监听配置

**接口地址：** `POST /nacos/v1/cs/configs/listener`

**接口描述：** 长轮询监听配置变更。客户端通过此接口监听配置变化，当配置发生变更时，服务端会返回变更的配置Key。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Listening-Configs | string | 是 | 监听的配置列表，格式为 `dataId^2Group^2tenant^1md5...` |

### 请求头

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Long-Pulling-Timeout | string | 否 | 长轮询超时时间（毫秒），范围 10000~120000 |

### 响应参数

- 有配置变更时：返回变更的配置Key列表
- 无变更时：返回空字符串

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs/listener" \
  -H "Long-Pulling-Timeout: 30000" \
  -d "Listening-Configs=test.yaml%02DEFAULT_GROUP%02%01d41d8cd98f00b204e9800998ecf8427e"
```

响应信息为变更的配置Key（如有变更）：

```
test.yaml^2DEFAULT_GROUP^2
```

---

## 二、命名管理 - 实例

实例管理接口前缀为 `/nacos/v1/ns/instance`。

### 5. 注册/更新实例

**接口地址：** `POST/PUT/PATCH /nacos/v1/ns/instance`

**接口描述：** 注册一个实例或更新已有实例信息。POST 用于注册，PUT/PATCH 用于更新。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| ip | string | 是 | 实例IP |
| port | number | 是 | 实例端口 |
| serviceName | string | 是 | 服务名，格式为 `groupName@@serviceName` |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| weight | number | 否 | 权重，默认 1.0 |
| enabled | string | 否 | 是否启用（`true`/`false`），默认 `true` |
| healthy | string | 否 | 是否健康（仅更新时使用） |
| ephemeral | string | 否 | 是否临时实例（`true`/`false`），默认 `true` |
| metadata | string | 否 | 实例元数据，JSON格式，如 `{"version":"v1"}` |
| clusterName | string | 否 | 集群名称，默认 `DEFAULT` |
| groupName | string | 否 | 分组名，可通过 serviceName 或单独传入 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

- 成功：返回 `ok`
- 失败：返回错误信息文本

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/ns/instance" \
  -d "ip=127.0.0.1&port=8080&serviceName=DEFAULT_GROUP@@my-service&weight=1.0&enabled=true&ephemeral=true&metadata=%7B%22version%22%3A%22v1%22%7D"
```

响应信息为：

```
ok
```

---

### 6. 注销实例

**接口地址：** `DELETE /nacos/v1/ns/instance`

**接口描述：** 注销（删除）指定实例。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| ip | string | 是 | 实例IP |
| port | number | 是 | 实例端口 |
| serviceName | string | 是 | 服务名，格式为 `groupName@@serviceName` |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| clusterName | string | 否 | 集群名称，默认 `DEFAULT` |
| ephemeral | string | 否 | 是否临时实例 |
| groupName | string | 否 | 分组名 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

- 成功：返回 `ok`
- 失败：返回错误信息文本

### 示例

```sh
curl -X DELETE "http://127.0.0.1:8848/nacos/v1/ns/instance?ip=127.0.0.1&port=8080&serviceName=DEFAULT_GROUP@@my-service"
```

响应信息为：

```
ok
```

---

### 7. 查询实例详情

**接口地址：** `GET /nacos/v1/ns/instance`

**接口描述：** 查询指定实例的详细信息。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| ip | string | 是 | 实例IP |
| port | number | 是 | 实例端口 |
| serviceName | string | 是 | 服务名，格式为 `groupName@@serviceName` |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| clusterName | string | 否 | 集群名称 |
| groupName | string | 否 | 分组名 |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| service | string | 完整服务名 |
| ip | string | 实例IP |
| port | number | 实例端口 |
| clusterName | string | 集群名称 |
| weight | number | 权重 |
| healthy | boolean | 是否健康 |
| instanceId | string | 实例唯一ID |
| metadata | object | 实例元数据 |
| marked | boolean | 是否标记 |
| enabled | boolean | 是否启用 |
| serviceName | string | 服务名 |
| ephemeral | boolean | 是否临时实例 |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/ns/instance?ip=127.0.0.1&port=8080&serviceName=DEFAULT_GROUP@@my-service"
```

响应信息为：

```json
{"service":"DEFAULT_GROUP@@my-service","ip":"127.0.0.1","port":8080,"clusterName":"DEFAULT","weight":1.0,"healthy":true,"instanceId":"127.0.0.1#8080#DEFAULT#DEFAULT_GROUP@@my-service","metadata":{},"marked":true,"enabled":true,"serviceName":"DEFAULT_GROUP@@my-service","ephemeral":true}
```

---

### 8. 实例心跳

**接口地址：** `PUT /nacos/v1/ns/instance/beat`

**接口描述：** 发送实例心跳，用于临时实例的保活。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceName | string | 是 | 服务名，格式为 `groupName@@serviceName` |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| clusterName | string | 否 | 集群名称 |
| groupName | string | 否 | 分组名 |
| ephemeral | string | 否 | 是否临时实例 |
| beat | string | 否 | 心跳信息，JSON格式 |
| ip | string | 条件必填 | 实例IP（当beat为空时必填） |
| port | number | 条件必填 | 实例端口（当beat为空时必填） |

**beat 参数 JSON 结构：**

| 参数名 | 类型 | 说明 |
|--------|------|------|
| cluster | string | 集群名称 |
| ip | string | 实例IP |
| port | number | 实例端口 |
| metadata | object | 元数据 |
| period | number | 心跳间隔（毫秒） |
| scheduled | boolean | 是否已调度 |
| serviceName | string | 服务名 |
| stopped | boolean | 是否停止 |
| weight | number | 权重 |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| responseCode | number | 响应码，0 表示成功 |
| clientBeatInterval | number | 建议的客户端心跳间隔（毫秒） |
| lightBeatEnabled | boolean | 是否启用轻量心跳 |

### 示例

```sh
curl -X PUT "http://127.0.0.1:8848/nacos/v1/ns/instance/beat?serviceName=DEFAULT_GROUP@@my-service&ip=127.0.0.1&port=8080"
```

响应信息为：

```json
{"responseCode":0,"clientBeatInterval":5000,"lightBeatEnabled":true}
```

---

### 9. 查询实例列表

**接口地址：** `GET /nacos/v1/ns/instance/list`

**接口描述：** 查询指定服务下的实例列表。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceName | string | 是 | 服务名，格式为 `groupName@@serviceName` |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| groupName | string | 否 | 分组名 |
| clusters | string | 否 | 集群名称列表，多个用逗号分隔 |
| healthyOnly | string | 否 | 是否只返回健康实例（`true`/`false`），默认 `true` |
| clientIP | string | 否 | 客户端IP |
| udpPort | string | 否 | UDP端口 |

### 响应参数

返回 JSON 格式的实例列表（HostReactor格式），具体结构由 Nacos 协议定义。

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=DEFAULT_GROUP@@my-service&healthyOnly=true"
```

响应信息为服务实例列表的 JSON 字符串。

---

## 三、命名管理 - 服务

服务管理接口前缀为 `/nacos/v1/ns/service`。

### 10. 创建/更新服务

**接口地址：** `POST/PUT /nacos/v1/ns/service`

**接口描述：** 创建或更新服务信息。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceName | string | 是 | 服务名 |
| groupName | string | 否 | 分组名，默认 `DEFAULT_GROUP` |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| protectThreshold | number | 否 | 保护阈值，默认 0.0 |
| metadata | string | 否 | 服务元数据，JSON格式 |
| selector | string | 否 | 选择器 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

- 成功：返回 `ok`
- 失败：返回错误信息文本

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/ns/service" \
  -d "serviceName=my-service&groupName=DEFAULT_GROUP&protectThreshold=0.5&metadata=%7B%22version%22%3A%22v1%22%7D"
```

响应信息为：

```
ok
```

---

### 11. 删除服务

**接口地址：** `DELETE /nacos/v1/ns/service`

**接口描述：** 删除指定服务。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceName | string | 是 | 服务名 |
| groupName | string | 否 | 分组名，默认 `DEFAULT_GROUP` |
| namespaceId | string | 否 | 命名空间ID，默认为空 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

- 成功：返回 `ok`
- 失败：返回错误信息文本

### 示例

```sh
curl -X DELETE "http://127.0.0.1:8848/nacos/v1/ns/service?serviceName=my-service&groupName=DEFAULT_GROUP"
```

响应信息为：

```
ok
```

---

### 12. 查询服务详情

**接口地址：** `GET /nacos/v1/ns/service`

**接口描述：** 查询指定服务的详细信息。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceName | string | 是 | 服务名，格式为 `groupName@@serviceName` |
| namespaceId | string | 否 | 命名空间ID，默认为空 |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| namespaceId | string | 命名空间ID |
| groupName | string | 分组名 |
| name | string | 服务名 |
| protectThreshold | number | 保护阈值 |
| metadata | object | 服务元数据 |
| selector | object | 选择器信息 |
| clusters | array | 集群列表 |
| clusters[].name | string | 集群名称 |
| clusters[].healthChecker | object | 健康检查配置 |
| clusters[].metadata | object | 集群元数据 |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/ns/service?serviceName=DEFAULT_GROUP@@my-service"
```

响应信息为：

```json
{"namespaceId":"","groupName":"DEFAULT_GROUP","name":"my-service","protectThreshold":0.0,"metadata":{},"selector":{"type":"none","contextType":"NONE"},"clusters":[{"name":"DEFAULT","healthChecker":{"type":"TCP"},"metadata":{}}]}
```

---

### 13. 查询服务列表

**接口地址：** `GET /nacos/v1/ns/service/list`

**接口描述：** 分页查询指定命名空间下的服务列表。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| pageNo | number | 否 | 页码，默认1 |
| pageSize | number | 否 | 每页大小 |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| groupName | string | 否 | 分组名，默认 `DEFAULT_GROUP` |
| serviceName | string | 否 | 服务名（查询条件，非必填） |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| count | number | 总数 |
| doms | array | 服务名列表 |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/ns/service/list?pageNo=1&pageSize=10&namespaceId="
```

响应信息为：

```json
{"count":2,"doms":["DEFAULT_GROUP@@my-service","DEFAULT_GROUP@@another-service"]}
```

---

### 14. 查询服务订阅者

**接口地址：** `GET /nacos/v1/ns/service/subscribers`

**接口描述：** 分页查询指定服务的订阅者列表。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| pageNo | number | 否 | 页码，默认1 |
| pageSize | number | 否 | 每页大小 |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| groupName | string | 否 | 分组名 |
| serviceName | string | 是 | 服务名 |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| count | number | 总数 |
| subscribers | array | 订阅者信息列表 |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/ns/service/subscribers?serviceName=DEFAULT_GROUP@@my-service&pageNo=1&pageSize=10"
```

响应信息为：

```json
{"count":1,"subscribers":[{"addr":"127.0.0.1","ip":"127.0.0.1","port":0,"serviceName":"DEFAULT_GROUP@@my-service","agent":"nacos-sdk-rust","namespace":"","groupName":"DEFAULT_GROUP"}]}
```

---

## 四、命名管理 - 运维

运维管理接口前缀为 `/nacos/v1/ns/operator`。

### 15. 查询系统开关

**接口地址：** `GET /nacos/v1/ns/operator/switches`

**接口描述：** 查询命名服务的系统开关配置。R-NACOS 返回默认的 Mock 数据以兼容 Nacos SDK。

### 请求参数

无

### 响应参数

返回系统开关配置 JSON 对象（Mock 数据），包含以下主要字段：

| 参数名 | 类型 | 说明 |
|--------|------|------|
| masters | null | 主节点列表 |
| defaultPushCacheMillis | number | 默认推送缓存时间 |
| clientBeatInterval | number | 客户端心跳间隔 |
| defaultCacheMillis | number | 默认缓存时间 |
| healthCheckEnabled | boolean | 是否启用健康检查 |
| distroEnabled | boolean | 是否启用分布 |
| pushEnabled | boolean | 是否启用推送 |
| lightBeatEnabled | boolean | 是否启用轻量心跳 |
| defaultInstanceEphemeral | boolean | 默认实例是否临时 |
| name | string | 服务名称标识（`R-NACOS`） |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/ns/operator/switches"
```

响应信息为系统开关配置 JSON。

---

### 16. 更新系统开关

**接口地址：** `PUT /nacos/v1/ns/operator/switches`

**接口描述：** 更新系统开关配置。R-NACOS 为 Mock 实现，直接返回成功。

### 请求参数

参考 Nacos 开关参数。

### 响应参数

- 成功：返回 `ok`

### 示例

```sh
curl -X PUT "http://127.0.0.1:8848/nacos/v1/ns/operator/switches" -d "entry=pushEnabled&value=true"
```

响应信息为：

```
ok
```

---

### 17. 查询运维指标

**接口地址：** `GET /nacos/v1/ns/operator/metrics`

**接口描述：** 查询命名服务的运维指标。R-NACOS 返回 Mock 数据以兼容 Nacos SDK。

### 请求参数

无

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| status | string | 服务状态，固定为 `UP` |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/ns/operator/metrics"
```

响应信息为：

```json
{"status":"UP"}
```

---

## 五、命名管理 - 目录

目录接口前缀为 `/nacos/v1/ns/catalog`。

### 18. 分页查询服务列表（目录）

**接口地址：** `GET /nacos/v1/ns/catalog/services`

**接口描述：** 分页查询服务列表，返回服务的统计信息。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| pageNo | number | 否 | 页码，默认1 |
| pageSize | number | 否 | 每页大小 |
| namespaceId | string | 否 | 命名空间ID |
| groupNameParam | string | 否 | 分组名（模糊查询） |
| serviceNameParam | string | 否 | 服务名（模糊查询） |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| count | number | 总数 |
| serviceList | array | 服务列表 |
| serviceList[].name | string | 服务名 |
| serviceList[].groupName | string | 分组名 |
| serviceList[].clusterCount | number | 集群数量 |
| serviceList[].ipCount | number | 实例数量 |
| serviceList[].healthyInstanceCount | number | 健康实例数量 |
| serviceList[].triggerFlag | boolean | 触发标记 |
| serviceList[].metadata | string | 元数据JSON |
| serviceList[].protectThreshold | number | 保护阈值 |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/ns/catalog/services?pageNo=1&pageSize=10&namespaceId="
```

响应信息为：

```json
{"count":1,"serviceList":[{"name":"my-service","groupName":"DEFAULT_GROUP","clusterCount":1,"ipCount":2,"healthyInstanceCount":2,"triggerFlag":false,"metadata":"{}","protectThreshold":0.0}]}
```

---

### 19. 分页查询实例列表（目录）

**接口地址：** `GET /nacos/v1/ns/catalog/instances`

**接口描述：** 分页查询指定服务下的实例列表。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serviceName | string | 是 | 服务名，格式为 `groupName@@serviceName` |
| namespaceId | string | 否 | 命名空间ID |
| groupName | string | 否 | 分组名 |
| clusterName | string | 否 | 集群名称 |
| pageNo | number | 否 | 页码，默认1 |
| pageSize | number | 否 | 每页大小，默认20 |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| count | number | 总数 |
| list | array | 实例列表 |
| list[].service | string | 完整服务名 |
| list[].ip | string | 实例IP |
| list[].port | number | 实例端口 |
| list[].clusterName | string | 集群名称 |
| list[].weight | number | 权重 |
| list[].healthy | boolean | 是否健康 |
| list[].instanceId | string | 实例ID |
| list[].metadata | object | 实例元数据 |
| list[].marked | boolean | 是否标记 |
| list[].enabled | boolean | 是否启用 |
| list[].serviceName | string | 服务名 |
| list[].ephemeral | boolean | 是否临时实例 |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/ns/catalog/instances?serviceName=DEFAULT_GROUP@@my-service&pageNo=1&pageSize=10"
```

响应信息为：

```json
{"count":1,"list":[{"service":"DEFAULT_GROUP@@my-service","ip":"127.0.0.1","port":8080,"clusterName":"DEFAULT","weight":1.0,"healthy":true,"instanceId":"127.0.0.1#8080#DEFAULT#DEFAULT_GROUP@@my-service","metadata":{},"marked":true,"enabled":true,"serviceName":"DEFAULT_GROUP@@my-service","ephemeral":true}]}
```

---

## 六、命名空间管理

### 20. 查询命名空间列表（V1 Console）

**接口地址：** `GET /nacos/v1/console/namespaces`

**接口描述：** 查询所有命名空间列表。

### 请求参数

无

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 响应码 |
| message | string | 响应消息 |
| data | array | 命名空间列表 |
| data[].namespace | string | 命名空间ID |
| data[].namespaceShowName | string | 命名空间显示名称 |
| data[].namespaceDesc | string | 命名空间描述 |
| data[].quota | number | 配额 |
| data[].configCount | number | 配置数量 |
| data[].type | number | 类型（0:系统, 2:自定义） |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/console/namespaces"
```

响应信息为：

```json
{"code":0,"message":"success","data":[{"namespace":"","namespaceShowName":"public","namespaceDesc":null,"quota":200,"configCount":0,"type":0},{"namespace":"dev","namespaceShowName":"开发环境","namespaceDesc":null,"quota":200,"configCount":5,"type":2}]}
```

---

### 21. 添加命名空间（V1 Console）

**接口地址：** `POST /nacos/v1/console/namespaces`

**接口描述：** 添加一个新的命名空间。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| customNamespaceId | string | 否 | 自定义命名空间ID，不填时自动生成UUID |
| namespaceName | string | 是 | 命名空间名称 |
| namespaceDesc | string | 否 | 命名空间描述 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

- 成功：返回 `true`
- 失败：返回错误信息文本

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/console/namespaces" -d "customNamespaceId=dev&namespaceName=开发环境&namespaceDesc=开发环境命名空间"
```

响应信息为：

```
true
```

---

### 22. 更新命名空间（V1 Console）

**接口地址：** `PUT /nacos/v1/console/namespaces`

**接口描述：** 更新指定命名空间信息。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| namespace | string | 是 | 命名空间ID |
| namespaceShowName | string | 是 | 命名空间显示名称 |
| namespaceDesc | string | 否 | 命名空间描述 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

- 成功：返回 `true`
- 失败：返回错误信息文本

### 示例

```sh
curl -X PUT "http://127.0.0.1:8848/nacos/v1/console/namespaces" -d "namespace=dev&namespaceShowName=开发环境V2&namespaceDesc=更新后的描述"
```

响应信息为：

```
true
```

---

### 23. 删除命名空间（V1 Console）

**接口地址：** `DELETE /nacos/v1/console/namespaces`

**接口描述：** 删除指定命名空间。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| namespaceId | string | 是 | 命名空间ID |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

- 成功：返回 `true`
- 失败：返回错误信息文本

### 示例

```sh
curl -X DELETE "http://127.0.0.1:8848/nacos/v1/console/namespaces?namespaceId=dev"
```

响应信息为：

```
true
```

---

### 24. 查询命名空间列表（V2 Console）

**接口地址：** `GET /nacos/v2/console/namespace/list`

**接口描述：** 查询所有命名空间列表，使用 V2 版本响应格式。

### 请求参数

无

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 响应码，0 表示成功 |
| message | string | 响应消息 |
| data | array | 命名空间列表 |
| data[].namespace | string | 命名空间ID |
| data[].namespaceShowName | string | 命名空间显示名称 |
| data[].namespaceDesc | string | 命名空间描述 |
| data[].quota | number | 配额 |
| data[].configCount | number | 配置数量 |
| data[].type | number | 类型 |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v2/console/namespace/list"
```

响应信息为：

```json
{"code":0,"message":"success","data":[{"namespace":"","namespaceShowName":"public","namespaceDesc":null,"quota":200,"configCount":0,"type":0}]}
```

---

### 25. 查询命名空间详情（V2 Console）

**接口地址：** `GET /nacos/v2/console/namespace`

**接口描述：** 查询指定命名空间的详细信息。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| namespaceId | string | 是 | 命名空间ID |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 响应码 |
| message | string | 响应消息 |
| data | object | 命名空间详情 |
| data.namespace | string | 命名空间ID |
| data.namespaceShowName | string | 显示名称 |
| data.namespaceDesc | string | 描述 |
| data.quota | number | 配额 |
| data.configCount | number | 配置数量 |
| data.type | number | 类型 |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v2/console/namespace?namespaceId=dev"
```

---

### 26. 添加命名空间（V2 Console）

**接口地址：** `POST /nacos/v2/console/namespace`

**接口描述：** 添加一个新的命名空间，使用 V2 版本响应格式。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| customNamespaceId | string | 否 | 自定义命名空间ID |
| namespaceName | string | 是 | 命名空间名称 |
| namespaceDesc | string | 否 | 命名空间描述 |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 响应码，0 表示成功 |
| message | string | 响应消息 |
| data | boolean | 操作结果 |

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v2/console/namespace" -d "customNamespaceId=dev&namespaceName=开发环境"
```

响应信息为：

```json
{"code":0,"message":"success","data":true}
```

---

### 27. 更新命名空间（V2 Console）

**接口地址：** `PUT /nacos/v2/console/namespace`

**接口描述：** 更新指定命名空间信息，使用 V2 版本响应格式。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| namespace | string | 是 | 命名空间ID |
| namespaceShowName | string | 是 | 显示名称 |
| namespaceDesc | string | 否 | 描述 |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 响应码 |
| message | string | 响应消息 |
| data | boolean | 操作结果 |

### 示例

```sh
curl -X PUT "http://127.0.0.1:8848/nacos/v2/console/namespace" -d "namespace=dev&namespaceShowName=开发环境V2"
```

---

### 28. 删除命名空间（V2 Console）

**接口地址：** `DELETE /nacos/v2/console/namespace`

**接口描述：** 删除指定命名空间，使用 V2 版本响应格式。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| namespaceId | string | 是 | 命名空间ID |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 响应码 |
| message | string | 响应消息 |
| data | boolean | 操作结果 |

### 示例

```sh
curl -X DELETE "http://127.0.0.1:8848/nacos/v2/console/namespace?namespaceId=dev"
```

---

## 七、健康检查

### 29. 健康检查

**接口地址：** `GET /nacos/v1/console/health/readiness`

**接口描述：** 检查服务是否就绪。

### 请求参数

无

### 响应参数

- 就绪：返回 `OK`
- 未就绪：返回 `error: <错误信息>`（HTTP 503）
- 错误：返回 `request health_manager error`（HTTP 500）

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/console/health/readiness"
```

响应信息为：

```
OK
```

---

### 30. 健康检查（通用）

**接口地址：**
- `GET /health`
- `GET /nacos/health`

**接口描述：** 检查服务健康状态。

### 请求参数

无

### 响应参数

- 健康：返回 `success`
- 不健康：返回 `error: <错误信息>`（HTTP 503）

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/health"
```

---

### 31. 指标导出

**接口地址：**
- `GET /nacos/metrics`

**接口描述：** 导出 Prometheus 格式的指标数据。

### 请求参数

无

### 响应参数

返回 `text/plain` 格式的 Prometheus 指标数据。

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/metrics"
```

---

## 八、Raft 集群管理

Raft 集群管理接口前缀为 `/nacos/v1/raft`。

### 32. 加入集群节点

**接口地址：** `POST /nacos/v1/raft/joinnode`

**接口描述：** 将新节点加入 Raft 集群作为 Learner 节点。

### 请求参数

参考 Raft 集群管理相关参数。

### 响应参数

返回操作结果。

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/raft/joinnode" -d "..."
```

---

### 33. 变更成员关系

**接口地址：** `POST /nacos/v1/raft/change-membership`

**接口描述：** 变更 Raft 集群的成员关系。

### 请求参数

参考 Raft 集群管理相关参数。

### 响应参数

返回操作结果。

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/raft/change-membership" -d "..."
```

---

### 34. 查询 Raft 指标

**接口地址：** `GET /nacos/v1/raft/metrics`

**接口描述：** 查询 Raft 集群的指标信息。

### 请求参数

无

### 响应参数

返回 Raft 集群指标数据。

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/nacos/v1/raft/metrics"
```

---

## 九、数据备份

### 35. 数据备份导出

**接口地址：** `GET /rnacos/backup`

**接口描述：** 导出 R-NACOS 的数据备份文件。需要配置 `RNACOS_BACKUP_TOKEN` 才能使用此接口。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| token | string | 是 | 备份令牌，需与 `RNACOS_BACKUP_TOKEN` 配置一致 |

### 响应参数

- 成功：返回数据备份文件（二进制流）
- 未开放备份：返回 `backup api is not open`（HTTP 500）
- Token不匹配：返回 `backup token is not matched`（HTTP 500）

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/rnacos/backup?token=your_backup_token" -o backup.zip
```

### 注意事项

- 需要先配置环境变量 `RNACOS_BACKUP_TOKEN` 设置备份令牌
- 备份令牌不能为空，否则备份接口不可用
