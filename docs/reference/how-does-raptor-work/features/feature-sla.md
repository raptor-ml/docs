# Features SLA

Production systems expect strict **service guarantees** that ensures the quality of the service for the end-user.

To implement that, you should define a desired **Service Layer Agreement** for your features, and Raptor will build a
customized implementation for you features that meet these guarantees.

Another way to look at it is to think of the Feature SLA as a set of rules that defines what is the "current state" of
the world.

## SLA Types

When creating the Feature Definition, you specify three important values: **Freshness, Staleness, and Deadline.**

![](../../../assets/feature-sla.png)

- **Staleness** - Is the maximum age of the data lifespan. Beyond this age, the data is considered stale, and is not
  valid to be used.
- **Freshness** - Is the age of a data that is considered fresh. When the data is fresh, we don't need to compute it
  again.
- **Valid data** - Is a data that it's not considered fresh anymore, but is not stale yet. In this case, we need to
  compute the data again, but it would be okay to use it.
- **Deadline** - Is the maximum time that we can wait for the data to be computed. If the deadline is exceeded, we
  will either return a valid data(if we have it), or through an error.


## How does it work?
Under the hood, Raptor configures the necessary data-connectors, storage, and compute resources to ensure that your
features meet the SLA.


When a feature value is requested, Raptor:
1. Check if we have a **fresh** value for the feature. If we do, return it.
2. If the data we have is not *fresh*, but it's not *stale* yet, we will compute the data again, and return it.
   1. If the data is computed **before the deadline**, return it.
   2. If the data is computed **after the deadline**, return the valid data, and compute the data in the background for future usage.
3. If we don't have a valid data, and the deadline is exceeded, return an error.
4. Stale data is never returned. Instead, the Historian is recording it for future usage, and we delete it from the State.
