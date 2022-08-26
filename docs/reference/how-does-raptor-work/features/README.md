# Features

In data science, a **Feature** is an input to your models.

Each feature in Raptor is built using a [**Feature Builder**](feature-builders/), which defines the feature inputs,
how the feature is calculated and stored, what freshness and latency guarantees (link) it should keep, and anything that
a production system might need to know about your feature.

You can define features using [**Feature Definitions**](feature-definitions.md), which are YAML files that describes the
business logic of the feature and some metadata about it.

Feature Definitions become **live** once they are [**Deployed**](deployment/) into a Kubernetes cluster.
This can be a production cluster or one dedicated for staging or experimentation.
Once the feature is deployed, Raptor will spin up the necessary workers, stores and connections to calculate feature
values and make sure your feature values are available to your models.

[**Feature Values**](./features/feature-values) are the results of the computation and inputs of the feature.
Feature Values have a Primitive Type (int, float, string, or a list of ints, floats, or strings), and in some cases are
stored to the Raptor Feature Store for later access.

Models usually require a group of features, which are called [**Feature Sets**](./feature-sets) in Raptor.
A model can consume a feature set in one line of code.

Custom features logic be written in [**PyExp**](../pyexp/), which is a Python dialect that
can be run at scale.

