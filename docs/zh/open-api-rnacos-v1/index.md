# R-NACOS RNacos V1 Open API 文档

## 概述

本文档描述 R-NACOS 系统中以 `/rnacos/v1` 为前缀的 HTTP Open API 接口，以及 `/rnacos` 前缀下的 MCP 代理、健康检查、指标导出和数据备份接口。这些接口是 R-NACOS 自有协议，不兼容 Nacos SDK。

基础地址：`http://127.0.0.1:8848`

---

## 一、MCP 服务管理

### 1. 查询 MCP 服务器列表

**接口地址：** `GET /rnacos/v1/mcp/server/list`

**接口描述：** 分页查询 MCP 服务器列表。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| pageNo | number | 否 | 页码，默认1（不能为0） |
| pageSize | number | 否 | 每页大小，默认20（最大1000） |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| nameFilter | string | 否 | 服务器名称过滤（模糊匹配） |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | string | 响应码 |
| message | string | 错误信息 |
| data | object | 分页结果 |
| data.totalCount | number | 总记录数 |
| data.list | array | MCP服务器列表 |
| data.list[].name | string | 服务器名称 |
| data.list[].description | string | 服务器描述 |
| data.list[].namespace | string | 命名空间 |
| data.list[].uniqueKey | string | 唯一标识键 |
| data.list[].tools | array | 工具列表 |
| data.list[].tools[].name | string | 工具名称 |
| data.list[].tools[].description | string | 工具描述 |
| data.list[].tools[].inputSchema | object | 工具输入参数的 JSON Schema |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/rnacos/v1/mcp/server/list?pageNo=1&pageSize=10&namespaceId="
```

响应信息为：

```json
{"code":"SUCCESS","message":null,"data":{"totalCount":1,"list":[{"name":"my-mcp-server","description":"示例MCP服务器","namespace":"","uniqueKey":"abc123","tools":[{"name":"query","description":"查询工具","inputSchema":{"type":"object","properties":{}}}]}}}
```

---

### 2. 查询工具规格列表

**接口地址：** `GET /rnacos/v1/mcp/toolspec/list`

**接口描述：** 分页查询 MCP 工具规格列表。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| pageNo | number | 否 | 页码，默认1（不能为0） |
| pageSize | number | 否 | 每页大小，默认20（最大1000） |
| namespaceId | string | 否 | 命名空间ID，默认为空 |
| groupFilter | string | 否 | 分组过滤 |
| toolNameFilter | string | 否 | 工具名称过滤（模糊匹配） |

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | string | 响应码 |
| message | string | 错误信息 |
| data | object | 分页结果 |
| data.totalCount | number | 总记录数 |
| data.list | array | 工具规格列表 |
| data.list[].namespace | string | 命名空间 |
| data.list[].group | string | 分组 |
| data.list[].tool | object | 工具信息 |
| data.list[].tool.name | string | 工具名称 |
| data.list[].tool.description | string | 工具描述 |
| data.list[].tool.inputSchema | object | 工具输入参数的 JSON Schema |

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/rnacos/v1/mcp/toolspec/list?pageNo=1&pageSize=10&namespaceId="
```

响应信息为：

```json
{"code":"SUCCESS","message":null,"data":{"totalCount":2,"list":[{"namespace":"","group":"DEFAULT_GROUP","tool":{"name":"query","description":"查询工具","inputSchema":{"type":"object","properties":{}}}}]}}
```

---

## 二、MCP 代理接口

MCP 代理接口基于 JSON-RPC 2.0 协议和 SSE（Server-Sent Events）协议，支持 MCP（Model Context Protocol）客户端直接连接 R-NACOS 代理的 MCP 服务。

### 3. MCP JSON-RPC 请求

**接口地址：** `POST /rnacos/mcp/{serverKey}/{authKey}`

**接口描述：** 通过 JSON-RPC 2.0 协议与 MCP 服务器交互。支持流式和非流式两种模式，由请求头 `Accept` 决定。

### 路径参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serverKey | string | 是 | MCP 服务器唯一标识 |
| authKey | string | 是 | 认证密钥 |

### 请求头

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Accept | string | 是 | 必须包含 `application/json` 或 `text/event-stream` |
| mcp-session-id | string | 否 | MCP 会话ID，首次请求可不传，服务端会自动生成 |

### 请求体（JSON-RPC 2.0）

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| jsonrpc | string | 是 | 固定为 `2.0` |
| method | string | 是 | 方法名 |
| params | object | 否 | 方法参数 |
| id | any | 否 | 请求ID |

### 支持的 Method

| Method | 说明 | 参数 |
|--------|------|------|
| `initialize` | 初始化连接 | `protocolVersion` 等 |
| `notifications/initialized` | 通知客户端已初始化 | 无（返回 202 Accepted） |
| `ping` | 心跳检测 | 无 |
| `tools/list` | 获取工具列表 | 无 |
| `tools/call` | 调用工具 | `name`(工具名), `arguments`(参数) |
| `resources/list` | 获取资源列表（返回空） | 无 |
| `resources/templates/list` | 获取资源模板列表（返回空） | 无 |
| `prompts/list` | 获取提示列表（返回空） | 无 |

### 响应参数（JSON-RPC 2.0）

| 参数名 | 类型 | 说明 |
|--------|------|------|
| jsonrpc | string | 固定为 `2.0` |
| result | object | 成功时的返回结果（与 error 互斥） |
| error | object | 失败时的错误信息 |
| error.code | number | 错误码 |
| error.message | string | 错误描述 |
| error.data | any | 附加错误数据 |
| id | any | 对应的请求ID |

**initialize 响应 result 结构：**

| 参数名 | 类型 | 说明 |
|--------|------|------|
| protocolVersion | string | 协议版本 |
| capabilities | object | 服务器能力 |
| capabilities.tools | object | 工具能力 |
| capabilities.tools.listChanged | boolean | 是否支持工具变更通知 |
| capabilities.resources | object | 资源能力 |
| capabilities.prompts | object | 提示能力 |
| serverInfo | object | 服务器信息 |
| serverInfo.name | string | 服务器名称（`r-nacos-mcp-server`） |
| serverInfo.version | string | 服务器版本 |

**tools/list 响应 result 结构：**

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tools | array | 工具列表 |
| tools[].name | string | 工具名称 |
| tools[].description | string | 工具描述 |
| tools[].inputSchema | object | 输入参数 JSON Schema |

**tools/call 响应 result 结构：**

| 参数名 | 类型 | 说明 |
|--------|------|------|
| content | array | 内容列表 |
| content[].type | string | 内容类型，固定为 `text` |
| content[].text | string | 内容文本 |

### 错误码说明

| 错误码 | 说明 |
|--------|------|
| -32700 | 解析错误（Parse error） |
| -32600 | 无效请求（Invalid Request） |
| -32601 | 方法未找到（Method not found） |
| -32602 | 无效参数（Invalid params） |
| -32000 | 服务端错误（Server error） |

### 示例

初始化连接：

```sh
curl -X POST "http://127.0.0.1:8848/rnacos/mcp/my-server/my-auth-key" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"jsonrpc":"2.0","method":"initialize","params":{"protocolVersion":"2025-03-26"},"id":1}'
```

响应信息为：

```json
{"jsonrpc":"2.0","result":{"protocolVersion":"2025-03-26","capabilities":{"experimental":{},"prompts":{"listChanged":false},"resources":{"subscribe":false,"listChanged":false},"tools":{"listChanged":false}},"serverInfo":{"name":"r-nacos-mcp-server","version":"0.1.0"}},"id":1}
```

获取工具列表：

```sh
curl -X POST "http://127.0.0.1:8848/rnacos/mcp/my-server/my-auth-key" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "mcp-session-id: abc123" \
  -d '{"jsonrpc":"2.0","method":"tools/list","id":2}'
```

调用工具：

```sh
curl -X POST "http://127.0.0.1:8848/rnacos/mcp/my-server/my-auth-key" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "mcp-session-id: abc123" \
  -d '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"query","arguments":{"key":"value"}},"id":3}'
```

---

### 4. MCP GET 请求

**接口地址：** `GET /rnacos/mcp/{serverKey}/{authKey}`

**接口描述：** MCP 的 GET 请求，当前返回 `405 Method Not Allowed`。

### 路径参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serverKey | string | 是 | MCP 服务器唯一标识 |
| authKey | string | 是 | 认证密钥 |

### 响应参数

返回 `405 METHOD_NOT_ALLOWED`。

---

### 5. MCP DELETE 请求

**接口地址：** `DELETE /rnacos/mcp/{serverKey}/{authKey}`

**接口描述：** MCP 的 DELETE 请求，用于断开连接。

### 路径参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serverKey | string | 是 | MCP 服务器唯一标识 |
| authKey | string | 是 | 认证密钥 |

### 响应参数

- 成功：返回 `ok`

---

### 6. MCP SSE 连接

**接口地址：** `GET /rnacos/mcp/sse/{serverKey}/{authKey}`

**接口描述：** 建立 MCP 的 SSE（Server-Sent Events）长连接。连接成功后，服务端会推送一个 `endpoint` 事件，包含后续消息发送的 URL。

### 路径参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| serverKey | string | 是 | MCP 服务器唯一标识 |
| authKey | string | 是 | 认证密钥 |

### 响应

- 响应类型：`text/event-stream`
- 响应头包含：`Content-Type: text/event-stream`、`Cache-Control: no-cache`、`X-Accel-Buffering: no`

### SSE 事件

连接建立后，服务端首先推送 `endpoint` 事件：

```
event: endpoint
data: /rnacos/mcp/sse/messages/{nodeId}/{serverKey}/{sessionId}

```

后续根据客户端发送的消息，服务端通过 SSE 推送 `message` 事件：

```
event: message
data: {"jsonrpc":"2.0","result":{...},"id":1}

```

### 示例

```sh
curl -N "http://127.0.0.1:8848/rnacos/mcp/sse/my-server/my-auth-key"
```

---

### 7. MCP SSE 消息

**接口地址：** `POST /rnacos/mcp/sse/messages/{nodeId}/{serverKey}/{sessionId}`

**接口描述：** 通过 SSE 消息通道发送 JSON-RPC 请求。路径中的 `nodeId`、`serverKey`、`sessionId` 由 SSE 连接建立时的 `endpoint` 事件提供。

### 路径参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| nodeId | number | 是 | Raft 节点ID |
| serverKey | string | 是 | MCP 服务器唯一标识 |
| sessionId | string | 是 | SSE 会话ID |

### 请求体

与 MCP JSON-RPC 请求相同的 JSON-RPC 2.0 格式。

### 响应参数

- 成功：返回 `202 Accepted`

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/rnacos/mcp/sse/messages/1/my-server/abc123def456" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"tools/list","id":1}'
```

响应信息为：

```
Accepted
```

### 注意事项

- 如果请求的 `nodeId` 与当前节点不一致，请求会被转发到正确的节点
- 消息处理完成后，结果通过 SSE 连接推送给客户端，HTTP 响应仅返回 `Accepted`

---

## 三、健康检查

### 8. 健康检查

**接口地址：** `GET /rnacos/health`

**接口描述：** 检查 R-NACOS 服务健康状态。

### 请求参数

无

### 响应参数

- 健康：返回 `success`
- 不健康：返回 `error: <错误信息>`（HTTP 503）

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/rnacos/health"
```

响应信息为：

```
success
```

---

## 四、指标导出

### 9. 指标导出

**接口地址：** `GET /rnacos/metrics`

**接口描述：** 导出 Prometheus 格式的指标数据。

### 请求参数

无

### 响应参数

返回 `text/plain;version=0.0.4;charset=utf-8` 格式的 Prometheus 指标数据。

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/rnacos/metrics"
```

---

## 五、数据备份

### 10. 数据备份导出

**接口地址：** `GET /rnacos/backup`

**接口描述：** 导出 R-NACOS 的数据备份文件。需要配置 `RNACOS_BACKUP_TOKEN` 才能使用此接口。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| token | string | 是 | 备份令牌，需与 `RNACOS_BACKUP_TOKEN` 配置一致 |

### 响应参数

- 成功：返回数据备份文件（二进制流）
- 未开放备份：返回 `backup api is not open`（HTTP 500）
- Token 不匹配：返回 `backup token is not matched`（HTTP 500）

### 示例

```sh
curl -X GET "http://127.0.0.1:8848/rnacos/backup?token=your_backup_token" -o backup.zip
```

### 注意事项

- 需要先配置环境变量 `RNACOS_BACKUP_TOKEN` 设置备份令牌
- 备份令牌不能为空，否则备份接口不可用
