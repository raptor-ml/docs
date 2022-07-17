# Digestion

Digestion is the process of processing your "business logic" in order to calculate a feature value and store it inside of Raptor.

:::info
TL;DR - Raptor takes care of all of this for you, so you don't need to understand this to write features.

We wrote this article for the curious users that are looking to understand deeply how things are working 🤓
:::

The digestion is being done by the feature builder which is responsible to configure and handle the engineering aspects of it.

There are two kinds of digestions in Raptor:

* Synchronous Digestion
* Asynchronous Digestion

## Synchronous Digestion

Sync Digestions are digestions that are being processed in the "request-time".

That means that Raptor will try and calculate the feature value (respectfully to the [feature-sla.md](../features/feature-sla.md "mention")) at the time the feature is requested.

Examples of feature builders that use this type of mechanism are the "REST" and "Expression" builders.

## Asynchronous Digestion

Async Digestions are digestions that are being processed when something triggers them.

That means that Raptor will try and calculate the feature value (respectfully to the [feature-sla.md](../features/feature-sla.md "mention")) when an external trigger happened (such as "webhook" or "new event" on streaming).

Examples of feature builders that use this type of mechanism are the "Streaming" and "WebHook" builders.
