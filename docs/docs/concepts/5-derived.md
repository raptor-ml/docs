---
title: Derived feature (like "join")
---

Raptor is introducing a new way to join between pieces of data - "dependencies".

As explained [earlier](./1-basics.md), we write features as functions and working in the context of a "row-level"
approach.

To implement a feature that "joins" a data from two different sources, we just need to call another feature that
calculates the data we need.

## Quick example

A relatively simple example for this is the following "rate" feature:

```python showLineNumbers
@feature(keys=["user_id"], sourceless_markers_df=markers_df)  # sourceless_markers_df is used for training
@freshness(max_age='1m', max_stale='10h')
def views_purchases_rate(_, ctx: Context) -> float:
  """rate of two views and purchases"""
  views, _ = ctx.get_feature("views+count")
  purchases, _ = ctx.get_feature("purchases+count")
  return views / purchases
```

In this code, we're using the [`feature_get()`](/reference/how-does-raptor-work/features/context#get-feature) function
to request the values of `views+count` and `purchases+count` for our `user_id` key(by default, the function propagate
the keys). Then, we return the rate of the two. Simple right?


## Using with sourceless features