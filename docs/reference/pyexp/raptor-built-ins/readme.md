# Raptor Built-ins

Raptor has implemented a few built-in functions in the PyExp Runtime that can help you integrate feature operations in your code:

### Get Feature

`get_feature()` allow you to get the feature value for a given feature `fqdn` and an `entity_id`.

```python
value, metadata = get_feature(<fqn>,<entity_id>)
```

This function returns you a tuple of the feature's value and a metadata object:

| metadata field name | description                          |
|---------------------|--------------------------------------|
| Freshness           | The feature freshness in miliseconds |
| Staleness           | The feature staleness in miliseconds |
| Timestamp           | The timestamp of the feature value   |

:::tip **Hint:**
This should be your _"goto"_ when trying to join between two features
:::

:::info **Hint**:
You can also use the alias `f()` for this built-in.
:::
### Update Feature

`update_feature` allow you to update feature by respecting the feature underlying primitive -`set` for scalars, and `append` for lists(including features with aggregations).

```python
set_feature(<fqn>, <entity_id>, <value>, <timestamp>?)
```

:::warning **Notice:**
Unless you're changing a different feature - you probably should [return a value](./handler-function) in order to update and let the builder care about that for you.
:::

