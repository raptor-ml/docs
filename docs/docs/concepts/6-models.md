# Models

Building production-ready models with Raptor is easy. You can use any model framework you want, and Raptor will take
care of the rest.

To do that, you'll need to define the training function, and specify it's input features, label(also a feature), and
the model framework you're using.

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

:::note When should we use Feature Selectors?
You might notice that we're using a feature selector in the `input_features` field. Feature Selectors are a way to reference a specific representation of a feature.

When we want to add a feature that have an aggregation, we must use a selector to reference it: `<name>+<aggrFn>`.

For more information, see [Feature Selectors](/docs/how-it-works/selectors.md).
:::

## Getting the training data
To get the training data, we can use the `features_and_labels()` function of the training context.

```python showLineNumbers
df = ctx.features_and_labels()
```
This will return a pandas dataframe that contains the features and labels.

To get the features, we can use the `input_features` field of the training context.

```python showLineNumbers
df[ctx.input_features]
```

Or, we can split the data to training set and test set:

```python showLineNumbers
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
  df[ctx.input_features],
  df[ctx.input_labels],
  test_size=0.2,
  random_state=42,
)
```

## Training the model locally before exporting it
Sometimes, we want to train the model locally before exporting it. This is useful when we want to iterate and experiment
with the model.

To do that, we can use the new `train()` method of training function

```python showLineNumbers
mymodel = amount_prediction()

# %%

data = amount_prediction.features_and_labels()

from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

x = data[amount_prediction.input_features]
y = data[amount_prediction.input_labels]
_, x_test, _, y_test = train_test_split(x, y, test_size=0.2, stratify=y, random_state=1234)

y_pred = mymodel.predict(x_test)
res = classification_report(y_pred, y_test.values.ravel())
```

## Key Feature

The key feature is the feature that we used to join the rest of the features with, i.e.:

| timestamp | entity_id | *feature_1* | feature_2 | feature_3 |
|-----------|-----------|-------------|-----------|-----------|
| 10:00     | 10        | ...         | ...       | ...       |
| 10:01     | 10        | ...         | ...       | ...       |
| 10:02     | 10        | ...         | ...       | ...       |

As you see in the table below, we are using the key feature (`feature_1`) timestamps to join the rest of the features -
that means that we are getting the feature value of the rest of the features at the same time as the key feature.

### Setting the key feature

The key feature is defined as the **first** feature in the feature set. Alternatively, you can set the key feature using
the options of the decorator:

```python showLineNumbers
@model(
  key_feature='feature_1',
  ...
)
```