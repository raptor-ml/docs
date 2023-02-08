# Common use-cases

In this section, we'll go over some common use-cases that you might encounter when using Raptor.

## How can I "join" between two data sources?

Rather than joining between two data sources, we can use the concept of **"dependencies"** or **"derived features"** to
achieve the same result.

To do that, we can use the `ctx.get_feature()` function to request the value of a feature from another data source.

For more information, check out the [Derived feature](./5-derived.md) section.

## How can I use have aggregations without time windows?

Unfortunately, Raptor doesn't support aggregations without time windows at the moment. It's in our **near** roadmap.

As a workaround, you can specify a very big time window(`over`) with a `granularity` of the window size.

## How can I use a feature that's not a column in my data source?
Features can be any value that you can calculate from your data source, or from another feature.

## How can I calculate the time difference between two events?
To calculate the time difference between two events, you should assist another derived feature.

For example, let's say we want to calculate the time difference between the purchases of a customer.

```python
@feature(keys=['customer_id'], datasource=CustomerPurchases)
@keep_previous(versions=1, over='1d')
@freshness(max_age='1h', max_stale='1d')
def last_purchase_time(this_row: CustomerPurchases, ctx: FeatureContext):
    return this_row['purchase_time']

@feature(keys=['customer_id'], sourceless_markers_df=CustomerPurchases)
@freshness(max_age='1h', max_stale='1d')
def time_since_last_purchase(ctx: FeatureContext):
    last_purchase = ctx.get_feature('last_purchase_time')
    return ctx.this_row['purchase_time'] - last_purchase
```
