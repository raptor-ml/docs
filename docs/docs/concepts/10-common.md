# Common use-cases

In this section, we'll go over some common use-cases that you might encounter when using Raptor.

## How can I "join" between two data sources?

Rather than joining between two data sources, we can use the concept of **"dependencies"** or **"derived features"** to
achieve the same result.

To do that, we can use the `ctx.get_feature()` function to request the value of a feature from another data source.

For more information, check out the [Derived feature](./5-derived.md) section.

## How can I use define