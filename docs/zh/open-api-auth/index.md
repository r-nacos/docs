# R-NACOS 登录鉴权 Open API 文档

## 概述

本文档描述 R-NACOS 系统的登录鉴权相关 HTTP 接口。R-NACOS 兼容多种 Nacos SDK 的登录协议，提供统一的鉴权入口。

基础地址：`http://127.0.0.1:8848`

### 鉴权模式说明

R-NACOS 支持两种鉴权模式：

- **开启鉴权模式**：当 `RNACOS_OPENAPI_ENABLE_AUTH=true` 时，需要通过登录接口获取 `accessToken`，后续请求需携带 token 进行鉴权。
- **关闭鉴权模式**：当 `RNACOS_OPENAPI_ENABLE_AUTH=false` 时，登录接口会返回固定 token `AUTH_DISABLED`，所有请求无需真实鉴权。

### 登录限流

系统对登录接口做了限流保护，同一用户名在每分钟内的登录次数受 `RNACOS_OPENAPI_LOGIN_ONE_MINUTE_LIMIT` 配置控制，超出限制会返回 `LOGIN_LIMITE_ERROR` 错误。

### Token 有效期

Token 有效期由配置 `RNACOS_OPENAPI_LOGIN_TIMEOUT` 控制，默认单位为秒。

---

## 1. Nacos V1 登录接口（标准）

**接口地址：** `POST/GET /nacos/v1/auth/login`

**接口描述：** Nacos V1 版本的标准登录接口，兼容 Nacos 1.x SDK。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递，两者可合并使用。

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| accessToken | string | 访问令牌，用于后续接口鉴权 |
| tokenTtl | number | Token 有效期（秒） |
| globalAdmin | boolean | 是否为全局管理员 |

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/auth/login" -d "username=admin&password=admin"
```

响应信息为：

```json
{"accessToken":"a1b2c3d4e5f6...","tokenTtl":18000,"globalAdmin":false}
```

---

## 2. Nacos V1 用户登录接口

**接口地址：** `POST/GET /nacos/v1/auth/users/login`

**接口描述：** Nacos V1 版本的用户登录接口，部分 Nacos 1.x SDK 使用此路径。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| accessToken | string | 访问令牌 |
| tokenTtl | number | Token 有效期（秒） |
| globalAdmin | boolean | 是否为全局管理员 |

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v1/auth/users/login" -d "username=admin&password=admin"
```

响应信息为：

```json
{"accessToken":"a1b2c3d4e5f6...","tokenTtl":18000,"globalAdmin":false}
```

---

## 3. Nacos V3 用户登录接口

**接口地址：** `POST/GET /nacos/v3/auth/user/login`

**接口描述：** Nacos V3 版本的用户登录接口，兼容 Nacos 2.x/3.x SDK。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| accessToken | string | 访问令牌 |
| tokenTtl | number | Token 有效期（秒） |
| globalAdmin | boolean | 是否为全局管理员 |

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/nacos/v3/auth/user/login" -d "username=admin&password=admin"
```

响应信息为：

```json
{"accessToken":"a1b2c3d4e5f6...","tokenTtl":18000,"globalAdmin":false}
```

---

## 4. R-NACOS 用户登录接口

**接口地址：** `POST/GET /rnacos/v1/auth/user/login`

**接口描述：** R-NACOS 自有的用户登录接口，功能和参数与其他登录接口完全一致。

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |

> 参数支持通过 Query 参数或请求体（form-urlencoded）传递。

### 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| accessToken | string | 访问令牌 |
| tokenTtl | number | Token 有效期（秒） |
| globalAdmin | boolean | 是否为全局管理员 |

### 示例

```sh
curl -X POST "http://127.0.0.1:8848/rnacos/v1/auth/user/login" -d "username=admin&password=admin"
```

响应信息为：

```json
{"accessToken":"a1b2c3d4e5f6...","tokenTtl":18000,"globalAdmin":false}
```

---

## 错误码说明

| HTTP状态码 | 说明 |
|-----------|------|
| 200 | 登录成功 |
| 403 | 登录失败（用户名或密码错误、登录频率超限等） |

### 常见错误信息

- `unknown user!` - 用户名或密码错误
- `LOGIN_LIMITE_ERROR,Frequent login, please try again later` - 登录频率超限
- `SYSTEM_ERROR` - 系统内部错误

### 关闭鉴权时的响应

当 `RNACOS_OPENAPI_ENABLE_AUTH=false` 时，即使传入错误的用户名密码，也会返回：

```json
{"accessToken":"AUTH_DISABLED","tokenTtl":18000,"globalAdmin":true}
```

---

## Token 使用方式

登录成功后获取的 `accessToken` 可通过以下方式在后续请求中使用：

1. **Query 参数方式**：在请求 URL 后附加 `?accessToken=xxx`
2. **Header 方式**：在请求头中添加 `accessToken: xxx`

---

## 接口路径对照表

| 接口路径 | 适用场景 | 版本兼容 |
|---------|---------|---------|
| `/nacos/v1/auth/login` | Nacos 1.x SDK | Nacos 1.x |
| `/nacos/v1/auth/users/login` | Nacos 1.x SDK（部分客户端） | Nacos 1.x |
| `/nacos/v3/auth/user/login` | Nacos 2.x/3.x SDK | Nacos 2.x/3.x |
| `/rnacos/v1/auth/user/login` | R-NACOS 自有接口 | R-NACOS |
