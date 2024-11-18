# 服务健康检测、探活


提供服务探活接口以支持发现有问题的节点，可（通过外部脚本）支持自动移除或重启集群中的问题节点

## 探活http接口

```
GET /health
```

成功返回值:

1. http status code: 200
2. http body: `success`

检测到不模块不正常是返回内容为： `error: $module ill`

## 示例

发起请求

```
curl http://127.0.0.1:8848/health
```

返回值：

```
success
```

