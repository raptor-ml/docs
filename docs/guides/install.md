---
id: install
title: Installing Natun on your Kubernetes cluster
sidebar_position: 5
---
:::tip
**Natun installation is not required for training purposes**.
You need to install Natun *only when deploying to production* (or staging).
:::

# Prerequisites

1. Kubernetes cluster

   (You can use [Kind](https://kind.sigs.k8s.io/) to install Natun locally)
    1. `kubectl` installed and configured to your cluster.
2. Redis server

:::tip
You can also use a managed Redis solution such as [AWS ElasticCache](https://aws.amazon.com/elasticache/)
or [GCP Memorystore](https://cloud.google.com/memorystore), or via
the [K8s Redis Operator](https://operatorhub.io/operator/redis-operator)
:::

## Choosing your Historical Data Provider

Historical Data Provider is the driver that Natun uses to save historical snapshots of your production data.
This is very useful for training purposes, but *technically* is not required for production.

At the moment, Natun supports the following historical data providers:

| Provider      | Data retrieval support | Description                                                       | Required configuration                                                                                                                                                |
|---------------|------------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *`snowflake`* | Yes                    | Historical data is stored in a Snowflake database                 | A valid snowflake URI shold be provided via the `snowflake-uri` configuration<br/> Example: username:password@account-id/NATUN_SYSTEM/HISTORICAL?warehouse=COMPUTE_WH |
| `s3-parquet`  | No                     | Historical data is partitioned and stored in S3 in Parquet format | The following configurations should be set:<br/>`aws-access-key`, `aws-region`, `aws-secret-key`,`s3-basedir`, `s3-bucket`                                            | 

:::warning
It's highly recommended to use Kubernetes Secrets to store your credentials, and then to configure Natun's Deployment
with
Environment Variables.
:::

# Installing Natun

There are a few ways to install Natun. The easiest way is to use
the [OperatorHub installer](https://operatorhub.io/operator/natun).

## OperatorHub Installation

```yaml
apiVersion: v1
kind: Secret
metadata:
   name: natun-providers-creds
   namespace: natun-system
data:
   REDIS: "my-redis.default.svc.cluster.local"
   AWS_ACCESS_KEY: ""
   AWS_SECRET_KEY: ""
   SNOWFLAKE_URI: <user>:<pass>@<account-id>/<db>/<schema>?warehouse=<warehouse-name>
---
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: natun
spec:
  package: natun
  channel: alpha
  config:
    env:
      - name: HISTORICAL_WRITER_PROVIDER
        value: "snowflake"
    envFrom:
      - secretRef:
          name: natun-providers-credentials
```

## Configuration Parameters

The configuration parameters below can be used to customize Natun deployments:

### Core Configuration

| flag                          | environment variable        | type           | description                                                                                                                                                                        |
|-------------------------------|-----------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--accessor-grpc-address`     | `ACCESSOR_GRPC_ADDRESS`     | `string`       | The address the grpc accessor binds to. (default ":60000")                                                                                                                         |
| `--accessor-http-address`     | `ACCESSOR_HTTP_ADDRESS`     | `string`       | The address the http accessor binds to. (default ":60001")                                                                                                                         |
| `--accessor-http-prefix`      | `ACCESSOR_HTTP_PREFIX`      | `string`       | The the http accessor path prefix. (default "/api")                                                                                                                                |
| `--accessor-service`          | `ACCESSOR_SERVICE`          | `string`       | The the accessor service URL (that points the this application).                                                                                                                   |
| `--aws-access-key`            | `AWS_ACCESS_KEY`            | `string`       | AWS Access Key - for historical data                                                                                                                                               |
| `--aws-region`                | `AWS_REGION`                | `string`       | AWS Region - for historical data                                                                                                                                                   |
| `--aws-secret-key`            | `AWS_SECRET_KEY`            | `string`       | AWS Secret Key - for historical data                                                                                                                                               |
| `--disable-cert-management`   | `DISABLE_CERT_MANAGEMENT`   | `bool`         | Setting this flag will disable the automatically certificate binding to the K8s API webhooks.                                                                                      |
| `--health-probe-bind-address` | `HEALTH_PROBE_BIND_ADDRESS` | `string`       | The address the probe endpoint binds to. (default ":8081")                                                                                                                         |
| `--kubeconfig`                | `KUBECONFIG`                | `string`       | Paths to a kubeconfig. Only required if out-of-cluster.                                                                                                                            |
| `--leader-elect`              | `LEADER_ELECT`              | `bool`         | Enable leader election for controller manager.Enabling this will ensure there is only one active controller manager.                                                               |
| `--metrics-bind-address`      | `METRICS_BIND_ADDRESS`      | `string`       | The address the metric endpoint binds to. (default ":8080")                                                                                                                        |
| `--no-webhooks`               | `NO_WEBHOOKS`               | `bool`         | Setting this flag will disable the K8s API webhook.                                                                                                                                |
| `--notifier-provider`         | `NOTIFIER_PROVIDER`         | `string`       | The notifier provider. (default "redis")                                                                                                                                           |
| `--production`                | `PRODUCTION`                | `bool`         | Set as production (default true)                                                                                                                                                   |
| `--redis` (alias: `--r`)      | `REDIS`                     | `stringArray`  | Redis servers                                                                                                                                                                      |
| `--redis-db`                  | `REDIS_DB`                  | `int`          | Redis DB                                                                                                                                                                           |
| `--redis-master`              | `REDIS_MASTER`              | `string`       | Redis Sentinel master name                                                                                                                                                         |
| `--redis-pass`                | `REDIS_PASS`                | `string`       | Redis password                                                                                                                                                                     |
| `--redis-sentinel-pass`       | `REDIS_SENTINEL_PASS`       | `string`       | Redis Sentinel password                                                                                                                                                            |
| `--redis-sentinel-user`       | `REDIS_SENTINEL_USER`       | `string`       | Redis Sentinel username                                                                                                                                                            |
| `--redis-tls`                 | `REDIS_TLS`                 | `bool`         | Enable TLS for Redis                                                                                                                                                               |
| `--redis-user`                | `REDIS_USER`                | `string`       | Redis username                                                                                                                                                                     |
| `--s3-basedir`                | `S3_BASEDIR`                | `string`       | S3 Base directory for storing features - for historical data (default "natun/features/")                                                                                           |
| `--s3-bucket`                 | `S3_BUCKET`                 | `string`       | S3 Bucket - for historical data                                                                                                                                                    |
| `--snowflake-uri`             | `SNOWFLAKE_URI`             | `string`       | Snowflake DSN URI                                                                                                                                                                  |
| `--state-provider`            | `STATE_PROVIDER`            | `string`       | The state provider. (default "redis")                                                                                                                                              |
| `--usage-reporting`           | `USAGE_REPORTING`           | `bool`         | Allow us to anonymously report usage statistics to improve Natun 🪄 (default true)                                                                                                 |
| `--usage-reporting-uid`       | `USAGE_REPORTING_UID`       | `string`       | Usage reporting Unique Identifier. You can use this to set a unique identifier for your cluster.                                                                                   |
| `--watch-namespaces`          | `WATCH_NAMESPACES`          | `stringArray`  | Enable namespace-level only by specify a list ofnamespaces that the operator is watching. If not specify, the operator will run on cluster level.                                  |
| `--zap-devel`                 | `ZAP_DEVEL`                 | `bool`         | Development Mode defaults(encoder=consoleEncoder,logLevel=Debug,stackTraceLevel=Warn). Production Mode defaults(encoder=jsonEncoder,logLevel=Info,stackTraceLevel=Error)           |
| `--zap-encoder`               | `ZAP_ENCODER`               | `encoder`      | Zap log encoding (one of 'json' or 'console')                                                                                                                                      |
| `--zap-log-level`             | `ZAP_LOG_LEVEL`             | `level`        | Zap Level to configure the verbosity of logging. Can be one of 'debug', 'info', 'error', or any integer value > 0 which corresponds to custom debug levels of increasing verbosity |
| `--zap-stacktrace-level`      | `ZAP_STACKTRACE_LEVEL`      | `level`        | Zap Level at and above which stacktraces are captured (one of 'info', 'error', 'panic').                                                                                           |
| `--zap-time-encoding`         | `ZAP_TIME_ENCODING`         | `timeEncoding` | Zap time encoding (one of 'epoch', 'millis', 'nano', 'iso8601', 'rfc3339' or 'rfc3339nano'). Defaults to 'epoch'.                                                                  |

### Historian Configuration

| flag                           | environment variable         | type         | description                                                                                                                                                                        |
|--------------------------------|------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--aws-access-key`             | `AWS_ACCESS_KEY`             | string       | AWS Access Key - for historical data                                                                                                                                               |
| `--aws-region`                 | `AWS_REGION`                 | string       | AWS Region - for historical data                                                                                                                                                   |
| `--aws-secret-key`             | `AWS_SECRET_KEY`             | string       | AWS Secret Key - for historical data                                                                                                                                               |
| `--health-probe-bind-address`  | `HEALTH_PROBE_BIND_ADDRESS`  | string       | The address the probe endpoint binds to. (default ":8081")                                                                                                                         |
| `--historical-writer-provider` | `HISTORICAL_WRITER_PROVIDER` | string       | The historical writer provider. (default "s3-parquet")                                                                                                                             |
| `--kubeconfig`                 | `KUBECONFIG`                 | string       | Paths to a kubeconfig. Only required if out-of-cluster.                                                                                                                            |
| `--leader-elect`               | `LEADER_ELECT`               | bool         | Enable leader election for controller manager.Enabling this will ensure there is only one active controller manager.                                                               |
| `--metrics-bind-address`       | `METRICS_BIND_ADDRESS`       | string       | The address the metric endpoint binds to. (default ":8080")                                                                                                                        |
| `--notifier-provider`          | `NOTIFIER_PROVIDER`          | string       | The notifier provider. (default "redis")                                                                                                                                           |
| `--production`                 | `PRODUCTION`                 | bool         | Set as production (default true)                                                                                                                                                   |
| `--redis` (alias `-r`)         | `REDIS`                      | stringArray  | Redis servers                                                                                                                                                                      |
| `--redis-db`                   | `REDIS_DB`                   | int          | Redis DB                                                                                                                                                                           |
| `--redis-master`               | `REDIS_MASTER`               | string       | Redis Sentinel master name                                                                                                                                                         |
| `--redis-pass`                 | `REDIS_PASS`                 | string       | Redis password                                                                                                                                                                     |
| `--redis-sentinel-pass`        | `REDIS_SENTINEL_PASS`        | string       | Redis Sentinel password                                                                                                                                                            |
| `--redis-sentinel-user`        | `REDIS_SENTINEL_USER`        | string       | Redis Sentinel username                                                                                                                                                            |
| `--redis-tls`                  | `REDIS_TLS`                  | bool         | Enable TLS for Redis                                                                                                                                                               |
| `--redis-user`                 | `REDIS_USER`                 | string       | Redis username                                                                                                                                                                     |
| `--s3-basedir`                 | `S3_BASEDIR`                 | string       | S3 Base directory for storing features - for historical data (default "natun/features/")                                                                                           |
| `--s3-bucket`                  | `S3_BUCKET`                  | string       | S3 Bucket - for historical data                                                                                                                                                    |
| `--snowflake-uri`              | `SNOWFLAKE_URI`              | string       | Snowflake DSN URI                                                                                                                                                                  |
| `--state-provider`             | `STATE_PROVIDER`             | string       | The state provider. (default "redis")                                                                                                                                              |
| `--zap-devel`                  | `ZAP_DEVEL`                  | bool         | Development Mode defaults(encoder=consoleEncoder,logLevel=Debug,stackTraceLevel=Warn). Production Mode defaults(encoder=jsonEncoder,logLevel=Info,stackTraceLevel=Error)           |
| `--zap-encoder`                | `ZAP_ENCODER`                | encoder      | Zap log encoding (one of 'json' or 'console')                                                                                                                                      |
| `--zap-log-level`              | `ZAP_LOG_LEVEL`              | level        | Zap Level to configure the verbosity of logging. Can be one of 'debug', 'info', 'error', or any integer value > 0 which corresponds to custom debug levels of increasing verbosity |
| `--zap-stacktrace-level`       | `ZAP_STACKTRACE_LEVEL`       | level        | Zap Level at and above which stacktraces are captured (one of 'info', 'error', 'panic').                                                                                           |
| `--zap-time-encoding`          | `ZAP_TIME_ENCODING`          | timeEncoding | Zap time encoding (one of 'epoch', 'millis', 'nano', 'iso8601', 'rfc3339' or 'rfc3339nano'). Defaults to 'epoch'.                                                                  |
