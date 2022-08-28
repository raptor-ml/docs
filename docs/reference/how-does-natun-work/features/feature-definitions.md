# Feature Definitions



**Feature Definitions** are written by Data Scientists and describe the desired features. Natun uses these definitions to create your features in research and production environments, provision the necessary connections, compute and storage resources, and offer collaboration, management and governance layers around features.

Specifically, Feature Definitions are written as [**YAML**](https://www.redhat.com/en/topics/automation/what-is-yaml) **** files, which carry certain advantages. YAML manifests are both human and machine-readable, and you can create, view, edit, and compare them manually. Alternatively, you can also use the **Natun IDE** to create, view, edit and compare features.

Feature Definitions are also fully compatible Kubernetes Manifests, which means DevOps, DataOps and Data Engineering teams are in familiar terrain when it comes to assigning access and resource usage policies.

Here's how a basic feature definition file might look like:

```
apiVersion: k8s.natun.ai/v1alpha1
kind: Feature
metadata:
  ...
spec:
  ...
```

A feature definition file has two main parts: the **Spec** (specification), and the **Metadata**.

The Spec describes how feature values are to be calculated, stored, and what input they are based on. The Metadata describes the feature bookkeeping items - feature name, descriptions, owners, et cetera. 

Here's an example of the metadata:

```
...
metadata:
  name: hello-world-feature
  namespace: default
  labels:
    app: TODO
  annotations:
    natun.ai/friendly_name: Hello World Feature
    natun.ai/icon: ''
    natun.ai/readme: |-
      # Hello World Feature
       
       By: @AlmogBaku
    a8r.io/owner: AlmogBaku
    a8r.io/description: ''
    natun.ai/friendly_identifier_name: first_name


```

Here's an example of a spec:

```
...
spec: 
  primitive: string
  freshness: 1m
  staleness: 1h
  deadline: 100ms
  aggr: ~
  builder:
    type: expression
    expression: |-
      def handler():
         return "Hello world " + entity_id

```

Specs contain Builder items that configure the feature builder. Read about feature builders in [Feature Builders](../feature-builders/).

Feature Definitions become **Features** once they are Deployed on the cluster. **Deployment** in Natun is based on **Kubernetes** - the manifests are uploaded to the Kubernetes cluster either manually (using `kubectl apply`) or using your CI/CD system.  Once deployed, Natun will spin up the necessary workers to make sure your feature is available to your models.
