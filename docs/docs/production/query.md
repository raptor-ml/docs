# Querying Features and Models in production

Get feature values in production is done using the Core API over gRPC or the REST API.


## Accessing the Core Kuberentes service
Installing Raptor Core will create a Kubernetes Service that exposes the Core API.

Service name: `raptor-core-service`
Namespace: `raptor-system`
gRPC port: `60000`
REST API port: `60001`

## The Core API
The Core API allows you to access the features values and models predictions in a low-latency and high-throughput manner,
as well as accessing the low-level operations of the engine(Such as setting/incrementing/

For more information about the Core API, please refer to the [Reference](/reference/) section.

## Accessing from production code
The Core API is exposed over gRPC and REST, and can be accessed from any language that supports gRPC or REST.


## Accessing Model predictions
Models can be accessed using the same API for feature values. Just use the Model FQN as the selector 🙃
