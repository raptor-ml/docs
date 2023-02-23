# DataSources

DataSources are the glue that connect your Feature Definitions to the production data sources (such as streaming,
databases, CRM systems, etc.).

The DataSources takes care of the production concerns of handling high-volume data. And responsible for many related
tasks, such as: Authentication, Rate-limiting, Schema Normalization, Retry, etc.

## DataSource definition

DataSources are usually configured by DevOps and are defined as a Kubernetes resource:

```yaml
apiVersion: k8s.raptor.ml/v1alpha1
kind: DataSource
metadata:
  name: clicks
spec:
  kind: streaming
  config:
    - name: kind
      value: kafka
    - name: brokers
      value: :9093
    - name: topics
      value: clickstream
    - name: consumer_group
      value: clicks-consumer-group
    - name: tls_disable
      value: "true"
  keyFields:
    - client_id
  timestampField: timestamp
  schema: https://raw.githubusercontent.com/raptor-ml/massivedynamic-protos/master/click.proto#Click
```

The `DataSource` definition is composed by the metadata(which defines its name), the `kind` of this connector, and
the `config` of this particular kind.

For more information, see the relevant DataConnector documentation.

## DataSource usage

They are then referenced in your Feature Definitions:

```yaml
apiVersion: k8s.raptor.ml/v1alpha1
kind: Feature
metadata:
  name: clicks
  namespace: default #production
  annotations:
    a8r.io/owner: "@AlmogBaku"
    a8r.io/description: "Demonstration of a simple aggr function"
spec:
  primitive: int
  freshness: 10s
  staleness: 1m
  dataSource:
    name: clicks
  keys:
    - client_id
  builder:
    aggr:
      - sum
      - count
    code: |
      def handler(data, ctx) -> int:
        return 1, ctx.timestamp, ctx.keys["client_id"].split(":")[1]

```

:::tip
If you are not defining the `namespace`, the Feature's namespace will be used.
:::