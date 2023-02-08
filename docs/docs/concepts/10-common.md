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
def time_since_last_purchase(_, ctx: FeatureContext):
  last_purchase = ctx.get_feature('last_purchase_time')
  return ctx.this_row['purchase_time'] - last_purchase
```

## How can I use python packages for my features and models?

You can use any python package that you want, as long as:

1. It's installed in your local environment.
2. You instructed Raptor to install it in the production environment using
   the [`@runtime` decorator](/reference/labsdk/decorators#runtime).
3. You imported it _inside_ your function.

```python {3}
@feature(keys=['user_id'], data_source=User)
@freshness(max_age='1h', max_stale='5h')
@runtime(packages=['phonenumbers==8.13.5'], env_name='default')
def is_valid_phone(this_row: User, ctx: FeatureContext):
  import phonenumbers
  p = phonenumbers.parse(this_row['phone'], "US")
  return phonenumbers.is_valid_number(p)
```

In the example above, we're using the `phonenumbers` package to validate a phone number.

We're also using the `default` environment, which comes with Raptor by default. The `environmet` acts exactly like "
virtualenv" in python - it's a separate python environment(bounded to specific python version), that you can install
packages in.

Spawning a new environment is usually done by the DevOps team, and it's not something that you should do yourself.