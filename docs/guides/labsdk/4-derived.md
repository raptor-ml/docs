---
title: Derived feature (or How to do Joins?)
---

Raptor is introducing a new way to join between pieces of data - "dependencies".

As explained [earlier](./1-basics.md), we write features as functions and working in the context of a "row-level"
approach.

To implement a feature that "joins" a data from two different sources, we just need to call another feature that
calculates the data we need.

# Rate of two features

A relatively simple example for this is the following "rate" feature:

```python showLineNumbers
@raptor.register(float, freshness='1m', staleness='10h')
def views_purchases_rate(**req: RaptorRequest):
    """rate of two features"""
    views, ts = get_feature("views.default[count], req["entity_id"])
    purchases, ts = get_feature("purchases.default[count], req["entity_id"])
    return views / purchases
```

In this code, we're using the [`feature_get()`](/docs/reference/pyexp/raptor-built-ins#get-feature) function to request
the values of `views.default[count]` and `purchases.default[count]` for our `entity_id`. Then, we are returning the rate
of the two. Simple right?

:::tip Shorthand for `feature_get`
You can use the function `f()` as an alias for `feature_get()`
:::

