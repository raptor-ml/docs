---
title: Aggregations
---

Aggregations are probably the most complex challenge while building a production-grade feature,
they require a [special mechanism](/reference/how-does-natun-work/features/aggregations.md) to handle the data in
production, but are relatively easy to implement in development.

Fortunately, it's relatively easy to build aggregations in Natun.

# Rolling window aggregations

Aggregations are usually being calculated on a rolling window, I.e. The amount of clicks over the last hour.

We can achieve that by using the [`@natun.aggr`](/reference/labsdk/decorators.md#aggregate) decorator.

```python showLineNumbers
@natun.register(int, freshness='1m', staleness='10h')
@natun.aggr([natun.AggrFn.Count])
def clicks(**req: NatunRequest):
    """clicks over 10 hours"""
    return 1, req["timestamp"], req['payload']['user_id']
```

Pretty simple right? let's go through what we did here line by line:

1. We registered the feature with the [`@natun.register`](/reference/labsdk/decorators.md) decorator:
    1. We set the feature primitive type to `int` (the type of the feature's output).
    2. We set the feature's freshness to `1m` - **that we're counting in a `1 minute` resolution**.
    3. We set the feature's staleness to `10h` - that means that the click will be stale after 10 hours, **and our
       window size is also 10 hours**.
2. We set the feature's aggregation to `Count` - We're running this aggregation function against the function's result.
3. We set the feature's description. This is a good place to put a description of the feature's logic that can help
   our colleagues to understand it.
4. We return:
    1. The calculated feature value, which is the number of clicks in this request. Since this function is called every
       time
       a user clicked on a button, it will be 1 every time.
    2. The timestamp of the request, which is the time when the request was received.
    3. The `user_id` of the user who clicked on the button that we extracted from the payload.

# Aggregation functions

Now that we know how to build aggregations, let's go ahead and build a feature that have multiple aggregation functions.

```python showLineNumbers
@natun.register(int, freshness='1m', staleness='10h')
@natun.builder("streaming")
@natun.aggr([natun.AggrFn.Sum, natun.AggrFn.Avg, natun.AggrFn.Max, natun.AggrFn.Min])
def deals_10h(**req: NatunRequest):
    """sum/avg/min/max of deal amount over 10 hours"""
    return req['payload']["amount"], req["timestamp"], req['payload']["account_id"]
```

In this example, we're building a feature that is calculating the sum, average, maximum and minimum of the deal amount.

This is actually generating for us multiple features, one for each aggregation function.
We can access them by specifying the aggregation function in the Feature's FQN:

```python showLineNumbers
feature_get("deals_10h.default[sum]")
```

:::note
Notice that we used here a `.default` suffix to the feature's FQN.
The `default` is the name of the namespace the feature is configured to be in.

When not specifying a namespace(using the [`@natun.namespace` decorator](/reference/labsdk/decorators.md)), the
feature is configured to be in the `default` namespace.
:::