title: The basics
---
In this tutorial, we'll cover the basics of using the LabSDK to write features.

# Install the LabSDK

In order to use the LabSDK, you need to install it. The recommended way is to use
the [`pip`](https://pip.pypa.io/en/stable/) utility:

```bash
pip install --upgrade natun-labsdk
```

To use the LabSDK, you need to import it:

```python
import natun
from natun.stub import *  # <-- this prevents the IDE/Notebookfrom detecting PyExp built-in as errors
```

:::note
Notice that we are also importing the `natun.stub` module. This is because the LabSDK is a Python library
this is a way to prevent the IDE/Notebook from detecting [PyExp built-in](/docs/reference/pyexp/natun-built-ins) as
errors.

# Production mindset

With Natun, we're building features that are ready to be deployed and run in production. That's means that in production
, unlike when we're looking at historical data, we can't see the future.

Because of that, when we're calculating features we need to think about the data we have available, and work in the
context of it in a **transactional** approach("row-level"), instead of a batch approach("dataset-level"). This *tiny* shift in the mindset can help us to build
features that can run on production.

To do that, we write functions that calculate the feature values for a given "row" of data.

# Hello world feature

The very first feature we'll build is the `Hello world` feature. It's a simple feature that simply
returns the string `"Hello world"`:

```python showLineNumbers
@natun.register(str, freshness='1m', staleness='10h')
def hello_world(**req: NatunRequest):
    """this is a hello world feature"""
    return "hello world"
```

Pretty simple right? let's go through what we did here line by line:

1. We started by declaring the feature with the [`@natun.register`](/docs/reference/labsdk/decorators.md) decorator:
    1. We set the feature primitive type to `str` (the type of the feature's output).
    2. We set the feature's freshness to `1m` - that means that feature value that calculated `1 minute` ago, is
       considered as fresh, and doesn't need to be recalculated.
    3. We set the feature's staleness to `10h` - that means that feature value that calculated `10 hours` ago, is
       considered as stale, and MUST be recalculated.
    
    :::tip Feature's SLA
    The Feature's SLA defines a contract between the feature's author and the production engine.
    By setting the feature's freshness and staleness, you can specify the amount of time that the feature's value is
    considered fresh, and when it's must be discarded and recalculated.

    When feature is not fresh and not stale either - the value is considered as fair to use. In this case, we'll try to
    recalculate the value (and get a fresh result), but will default to the data we have if we couldn't make it.
    
    For more information, check out the [Feature's SLA](/docs/reference/how-does-natun-work/features/feature-sla.md)
    section.
    :::
2. We defined the feature's logic, and named our feature `hello_world`.
3. We defined the feature's description. This is a good place to put a description of the feature's logic that can help
   our colleagues to understand it.
4. We write our business-logic in [PyExp](/docs/reference/pyexp), and simply returned the string `"hello world"`.

:::note What's PyExp?
PyExp is a variant of Python. It's allows us to compile your code, and run it in scale while running in "production mode".
This way, you can keep focus on the business-logic, while Natun takes care of the production optimizations.

For more information, check out the [PyExp](/docs/reference/pyexp/natun-built-ins) section.
:::

# Greeter feature

The next feature we'll build is the `Greeter` feature. It's a simple feature that simply greets the `entity_id` we got.

:::note What's an `entity_id`?
The `entity_id` is the entity that owns this piece of information. I.e., the feature `user_age` belongs to the
entity `user`.
:::

```python showLineNumbers
@natun.register(str, freshness='1m', staleness='10h')
def greeter(**req: NatunRequest):
    """this is a greeter feature"""
    return "Hello world " + req["entity_id"]
```

This is looking pretty similar to the `hello_world` feature, but this time we're using the `entity_id` as the input.
We're getting the `entity_id` from the calculation request, and returning a greeting with the `entity_id` in it.

:::info What's the calculation request?
The calculation request is providing us all the relevant information that can be used to calculate the feature value.

It's a dictionary that contains the following keys:

1. `entity_id` - the ID of the entity that the feature is being calculated for.
2. `timestamp` - the time when the data was requested.
3. `payload` - this is usually a dictionary that contains the relevant data from the connected data source.
4. `headers` - this is a dictionary that contains the headers from the connected data source.
   :::

# Connecting the feature to data source

So far so good, but in real life we used to have a data that is helping us to calculate the feature.

Because Natun is act differently in "production" and "development" environments:

- **In production**, we'll connect a data source to the feature. When running in production, the platform will
  automatically calculate the feature values when needed, and use the data source to get the data.
- **In development**, we need to "replay" the feature calculations from an historical data we have. We'll talk about it
  in the next section.

For now, we'll connect the feature in production-mode to a data-source by using
the [`@natun.connector`](/docs/reference/labsdk/decorators.md) decorator:

```python
@natun.connector("user_names.default")
```

# Replaying the feature calculations

When we're in development, we need to replay the feature calculations from an historical data we have.

First, we're utilizing Pandas to read the historical data, and then replaying the feature with this dataframe:

```python
import pandas as pd
df = pd.read_parquet("names.csv")
greeter.replay(df, entity_id_field="name")
```

:::note
Although the `replay` function automatically detect some fields from the dataframe and set them in the NatunRequest, it's
it is not always able to detect all the fields.

We can use the following arguments to specify the fields that we want to use:

    * `entity_id_field` - the field that contains the entity ID.
    * `timestamp_field` - the field that contains the timestamp.
    * `payload_field` - the field that contains the payload.
    * `headers_field` - the field that contains the headers.
:::


# Exporting the feature
To run the feature in production, we need to export it to a Kubernetes manifest:
    
```python
greeter.manifest()
```

This will generate a Standard Kubernetes manifest that can be used to deploy the feature.