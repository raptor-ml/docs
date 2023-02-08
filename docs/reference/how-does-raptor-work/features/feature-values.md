# Feature Values

Feature values are the actual values of the features that are calculated by Raptor. We store them in the State, and
they are available for querying by the API.

Feature values are always composed of the following parts:

1. **Value** - The actual value of the feature, which is stored as the **primitive type**.
2. **Timestamp** - The timestamp of the value, which is the time that the value was calculated.
3. **Keys** - An encoded version of the keys with the value, which is used to identify the value's owner in the State.

## How are they calculated?

When defining a feature, you should specify a [Data Source](../datasources/), which is a reference to the data that
will be used to calculate the feature value, and a [Builder](../feature-builders/), which is the set of instructions
that will be used to calculate the feature value.

When a feature value is requested, respectfully to the [Freshness](../freshness.md), Raptor will use the Data Source to
fetch the data, and then use the Builder to calculate the feature value.

