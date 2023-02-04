---
title: Aggregations
---

Aggregations are probably the most complex challenge while building a production-grade feature,
they require a [special mechanism](/reference/how-does-raptor-work/features/aggregations.md) to handle the data in
production, but are relatively easy to implement in development.

Fortunately, it's relatively easy to build aggregations in Raptor.

# Rolling window aggregations

Aggregations are usually being calculated on a rolling window, I.e. The amount of clicks over the last hour.

We can achieve that by using the [`@aggregation`](/reference/labsdk/decorators.md#aggregation) decorator.

```python showLineNumbers
@feature(keys='user_id', data_source=Click)
@aggregation(
    function=AggregationFunction.Count,
    over='10h',
    granularity='1m'
)
def clicks(this_row: Click, ctx: Context) -> int:
    """clicks over 10 hours"""
    return 1
```

Pretty simple right? let's go through what we did here line by line:

1. We registered the feature with the [`@feature`](/reference/labsdk/decorators.md#feature) decorator.
2. We defined the aggregation function with the [`@aggregation`](/reference/labsdk/decorators.md#aggregation) decorator.
    1. We set the aggregation function to be `count`.
    2. We set the rolling window to be 10 hours.
    3. We set the granularity to be 1 minute.
3. We defined the feature function, which is a simple function that returns 1.
   This is because we're counting the number of clicks, so we don't need to do any calculations.

   This will actually count the number of clicks over the last 10 hours, and will return the number of clicks.

# Aggregation functions

Now that we know how to build aggregations, let's go ahead and build a feature that have multiple aggregation functions.

```python showLineNumbers
@feature(keys='account_id', data_source=Deal)
@aggregation(
    function=[AggregationFunction.Sum, AggregationFunction.Avg, AggregationFunction.Max, AggregationFunction.Min],
    over='10h',
    granularity='1m'
)
def deals_10h(this_row: Deal, ctx: Context) -> float:
    """sum/avg/min/max of deal amount over 10 hours"""
    return this_row['amount']
```

In this example, we're building a feature that is calculating the sum, average, maximum and minimum of the deal amount.

This is actually generating for us multiple features, one for each aggregation function.
We can access them by specifying the aggregation function in the Feature Selector:

```python showLineNumbers
ctx.feature_get("default.deals_10h+sum")
```
