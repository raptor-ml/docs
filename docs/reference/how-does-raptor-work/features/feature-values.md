# Feature Values

Feature values are the actual values of the features that are calculated by Raptor. We store them in the State, and
they are available for querying by the API.

Feature values are always composed of the following parts:
1. **Value** - The actual value of the feature, which is stored as the **primitive type**.
2. **Timestamp** - The timestamp of the value, which is the time that the value was calculated.
3. **Entity ID** - The ID of the entity that the value is calculated for (such as the user that have this data trait).

## How are they calculated?

When defining a feature, you should specify a [Data Connector](../dataconnector/), which is a reference to the data that
will be used to calculate the feature value, and a [Builder](../feature-builders/), which is the set of instructions that will be
used to calculate the feature value.

When a feature value is requested, respectfully to the [SLA](./feature-sla.md), Raptor will use the Data Connector to
fetch the data, and then use the Builder to calculate the feature value.

