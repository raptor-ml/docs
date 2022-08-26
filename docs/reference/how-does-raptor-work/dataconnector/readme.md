# DataConnectors

DataConnectors are the glue that connect your Feature Definitions to the production data sources (such as streaming,
databases, CRM systems, etc.).

The DataConnectors takes care of the production concerns of handling high-volume data. And responsible for many related tasks, such as:
Authentication, Rate-limiting, Schema Normalization, Retry, etc.


## DataConnector definition
DataConnectors are usually configured by DevOps and are defined as a Kubernetes resource:

```yaml
apiVersion: k8s.raptor.ml/v1alpha1
kind: DataConnector
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
```
The `DataConnector` definition is composed by the metadata(which defines its name), the `kind` of this connector, and
the `config` of this particular kind.

For more information, see the relevant DataConnector documentation.

## DataConnector usage

They are then referenced in your Feature Definitions:

```yaml
apiVersion: k8s.raptor.ml/v1alpha1
kind: Feature
metadata:
  name: last-click-time
spec:
  primitive: timestamp
  freshness: -1
  staleness: -1
// highlight-start
  connector:
    name: clicks
    namespace: default
// highlight-end
  builder:
    pyexp: |
      def handler(**req):
        return req["timestamp"]
```

:::tip
If you are not defining the `namespace`, the Feature's namespace will be used.
:::