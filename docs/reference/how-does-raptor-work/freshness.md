# Freshness Guarantees

Production systems expect strict **service guarantees** that ensures the quality of the service for the end-user.

To implement that, you should define a desired **Service Layer Agreement** for your features, and Raptor will build a
customized implementation for you features that meet these guarantees.

Another way to look at it is to think of the Freshness Guarantees as a set of rules that defines what is the "current
state" of the world.

## Freshness definition

When creating the Feature or a Model Definition, you specify three important values: **`max_age`, `max_stale`,
and `timeout`.**

![Freshness Guarantees illustration](pathname:///assets/freshness.png)

- **`max_age`** - Is the age of a data that is considered fresh. When the data is fresh, we don't need to compute it
  again.
- **`max_stale`** - If we don't have a fresh value, we might use a stale value as a fallback, as long as it's not too
  stale(as defined in the `max_stale`.
- **`timeout`** - Is the maximum time that we can wait for the data to be computed. If the timeout is exceeded, we
  will either return a stale data(if we have it), or through an error.

## How does it work?

Under the hood, Raptor configures the necessary data-sources, storage, and compute resources to ensure that your
features meet the Freshness guarantees.

When a value is requested, Raptor:

1. Check if we have a **fresh** value for the feature. If we do, return it.
2. If the data we have is not *fresh*, but it's not past the *max_stale* yet, we will compute the data again, and return
   it.
    1. If the data is computed **before the `timeout`**, return it.
    2. If the data is computed **after the `timeout`**, return the stale data, and compute the data in the background
       for future usage.
3. If we don't have a stale data, and the timeout is exceeded, return an error.
4. Stale data past the `max_stale` age is never returned. Instead, the Historian is recording it for future usage, and
   we delete it from the State.
