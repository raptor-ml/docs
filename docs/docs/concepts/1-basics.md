---
title: The basics
---
In this tutorial, we'll cover the basics of LabSDK to write features and models.

# Install the LabSDK

In order to use the LabSDK, you need to install it. The recommended way is to use
the [`pip`](https://pip.pypa.io/en/stable/) utility:

```bash
pip install --upgrade raptor-labsdk
```

To use the LabSDK, you need to import it:

```python
from raptor import *
```

# Hello world feature

The very first feature we'll build is the `Hello world` feature. It's a simple feature that simply
returns the string `"Hello world"`:

```python showLineNumbers
@feature(keys=[])
@freshness(max_age='1m', max_stale='10h')
def hello_world(_, _) -> str:
    """this is a hello world feature"""
    return f"hello world"
```

Pretty simple right? let's go through what we did here line by line:

1. We started by declaring the [`@feature`](/reference/labsdk/decorators). For now, we're not using any keys, so
   we're passing an empty list.
2. We define the feature's freshness:
    1. We set the `max_age` to `1m` - that means that feature value that calculated `1 minute` ago, is considered as
       fresh, and doesn't need to be recalculated.
    2. We set the `max_stale` to `10h` - that means that if we can't have a fresh value, and can't calculate a fresh
       value fast enough, we'll use a stale value as long as it's not older than `10 hours`.

   :::tip Freshness
   The Freshness defines a contract between the feature's author and the production engine.
   By setting the freshness, you can specify the amount of time that the value is considered fresh, and when it's must
   be discarded and recalculated.

   For more information about feature freshness, check out
   the [Freshness](/docs/how-it-works/freshness) section.
   :::
3. We defined the feature's logic, and naming our feature `hello_world` and returning `str` primitive type.
4. We defined the feature's description. This is a good place to put a description of the feature's logic that can help
   our colleagues to understand it.
5. We write our business-logic, and simply returned the string `"hello world"`.

# User age feature

The next feature we'll build is the `user_age` feature. It's a simple feature that simply returns the user's age in
years.
It's using the `birthdate` of the `user_id` to calculate the feature value.

```python showLineNumbers
@feature(keys=['user_id'], data_sources=[User])
@freshness(max_age='10d', max_stale='30d')
def user_age(this_row, ctx: Context) -> int:
    """age of the user in years"""
    return (ctx.timestamp - this_row['birthdate']).days // 365
```

:::info What's the calculation context?
The calculation context is a providing information about the calculation process. It contains the following fields:

* `fqn` - the feature's fully qualified name.
* `keys` - a dictionary of the feature's keys.
* `timestamp` - the timestamp of the calculation.

For more information about the calculation context, check out
the [Context](/docs/how-it-works/features/context) section.
:::

# Connecting the feature to data source

You might have noticed that we're using the `User` data source in the `user_age` feature. The data source is the way we
connect the feature to the data that we need to calculate the feature value.

```python
from typing_extensions import TypedDict


@data_source(
    training_data=df,
    keys=['user_id'],  # Optional
    production_config=StreamingConfig()  # Optional
)
class User(TypedDict):
    user_id: str
    first_name: str
    last_name: str
    birthdate: datetime
```

Data sources are composed of:

1. Declaring the data source using the [`@data_source`](/reference/labsdk/decorators) decorator.
    1. In line 4, we're configuring the `training_data` to be a pandas dataframe, that contains the data that we'll use
       to train the model. We can use pandas to import the data from any format that pandas supports, such as CSV,
       Parquet, JSON, etc
    2. In line 5, we're configuring the `keys` of the data source. The keys are the fields that we'll use to identify
       the data source's rows. In this case, we're using the `user_id` field.

       Although the keys are optional, it's highly recommended to use them, because it will help the Raptor engine to
       optimize the feature calculations.
    3. In line 6, we're configuring the `production_config` to be a `StreamingConfig`. This configuration is used to
       create a configuration stub for the production environment. This is basically hinting our DevOps team how to
       configure and connect our data source in production.
2. Then, we're defining the data source's schema using the `TypedDict` class. This is a python class that defines the
   data source's schema. In this case, we're defining the `User` data source to have the following fields:
    1. `user_id` - a string that contains the user's ID.
    2. `first_name` - a string that contains the user's first name.
    3. `last_name` - a string that contains the user's last name.
    4. `birthdate` - a datetime that contains the user's birthdate.

   Defining the schema is optional, but it's highly recommended to do so, since it can help your IDE to provide you with
   auto-completion and type hints, and can help you make the most of Raptor in the future (i.e. to discover drifts in
   the data).

# Replaying the feature calculations

When we're in development, we need to replay the feature calculations from an historical data we have to get a sense of
how the feature will behave in production.

To do that, we can use the `replay` function. It's a function that allows us to replay the feature calculations on the
DataSource's training data.

```python showLineNumbers
ages_df = user_age.replay()

# Let's see the result
ages_df.head()
```

# Model training

Now that we have the feature values, we can train a model.

To do that, we'll define a training function, and specify it's input features, label(also a feature).

```python showLineNumbers
@model(
    keys=['customer_id'],
    input_features=['total_spend+sum'],
    input_labels=[amount],
    model_framework='sklearn',
    model_server='sagemaker-ack',
)
@freshness(max_age='1h', max_stale='100h')
def amount_prediction(ctx: TrainingContext):
    from sklearn.linear_model import LinearRegression

    df = ctx.features_and_labels()

    trainer = LinearRegression()
    trainer.fit(df[ctx.input_features], df[ctx.input_labels])

    return trainer
```

In this example, we're defining a linear regression model that predicts the `amount` feature, using the `total_spend`
feature.

You can see that we're also specifying the `model_framework` and `model_server` that we're using. This will instruct
Raptor how to deploy the model in production.

:::info What's the training context?
The training context is a providing information about the training process. It contains the following fields:

* `fqn` - the model's fully qualified name.
* `keys` - a dictionary of the model's keys.
* `input_features` - a list of the model's input features.
* `input_labels` - a list of the model's input labels.
* `features_and_labels()` - a function that returns a pandas dataframe that contains the features and labels.
:::

For more information about the model training, check out the [Models](./6-models.md) section.

# Exporting our model

Once we're done with our model, we can export it, and all of it's dependencies, to the `out/` directory.

This will encapsulate our model, and transform our features and data-sources as production artifacts.

Also, it will create a `Makefile` so it would be easy for DevOps to integrate it in their regular CI/CD pipeline.

```python showLineNumbers
amount_prediction.export()
```