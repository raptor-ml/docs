# Digestion

Digestion is the process of processing your "business logic" in order to calculate a feature value and store it inside
of Raptor.

:::info "TL;DR"
Raptor takes care of all of this for you, so you don't need to understand this to write features.
:::

The digestion is being done by the feature builder which is responsible to configure and handle the engineering aspects
of it.

There are two kinds of digestions in Raptor:

* Synchronous Digestion
* Asynchronous Digestion

## On-Request Digestion

On-Request Digestions are digestions procedures that are being processed in the "request-time".

Raptor will calculate the feature value (respectfully to the [feature-sla.md](../features/feature-sla.md "mention")) at
the time the feature is requested.

## Asynchronous Digestion

Async Digestions are digestions that are being processed when something triggers them.

Raptor will calculate the feature value (respectfully to the [feature-sla.md](../features/feature-sla.md "mention"))
when an external trigger happened (such as "webhook" or "new event" on streaming).
