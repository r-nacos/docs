# Service Health Check and Liveness Detection

Offers a liveness detection interface to identify faulty nodes, enabling (through external scripts) the automatic removal or restart of problematic nodes within the cluster.

## Liveness HTTP Interface

```
GET /health
```

Successful response:

1. http status code: 200
2. http body: `success`

Response when a module is found to be malfunctioning: `error: $module ill`

## Example

Make a request

```
curl http://127.0.0.1:8848/health
```

Response:

```
success
```