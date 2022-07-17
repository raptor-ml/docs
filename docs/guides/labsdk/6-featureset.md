---
title: Feature Set
---

Feature Sets are a way to group features together as a ready-to-use dataset for your model:

- **When in production** - the feature set is a "row" composed of the most recent feature values(considering the SLA)
  ready
  for inference.
- **When in training** - the feature set is a complete "dataframe" composed of all the features as columns, and all the
  feature values at the same time as rows.

When using the LabSDK, you can create a feature set by using
the [`feature_set()`](/docs/reference/labsdk/featureset.md) decorator:

```python showLineNumbers
@raptor.feature_set()
def my_feature_set():
    """this is a my feature set"""
    return hello_world, "feature_with_aggr.default[sum]"
```

When defining a feature set, we simply create a function that return a tuple.
Each element of the tuple is either a feature function, or an [FQN](/docs/reference/how-does-raptor-work/fqn) of a
feature function.

:::note When should we use FQNs?
The Fully Qualified Name (FQN) is a way to reference a feature function by its name.
It's composed by the feature's name, and it's namespace: `<name>.<namespace>` (the default namespace is `default`).

When we want to add a feature that have an aggregation, we must use FQN to reference it: `<name>.<namespace>[<aggrFn>]`.
:::

## Key Feature

The key feature is the feature that we used to join the rest of the features with, i.e.:

| timestamp | entity_id | *feature_1* | feature_2 | feature_3 |
|-----------|-----------|-------------|-----------|-----------|
| 10:00     | 10        | ...         | ...       | ...       |
| 10:01     | 10        | ...         | ...       | ...       |
| 10:02     | 10        | ...         | ...       | ...       |

As you see in the table below, we are using the key feature (`feature_1`) timestamps to join the rest of the features -
that means that we are getting the feature value of the rest of the features at the same time as the key feature.

### Setting the key feature

The key feature is defined as the **first** feature in the feature set. Alternatively, you can set the key feature using
the options of the decorator:

```python showLineNumbers
@raptor.feature_set(options={'key_feature': 'feature_1'})
def my_feature_set():
    """this is a my feature set"""
    return hello_world, "feature_with_aggr.default[sum]", "feature_1"
```