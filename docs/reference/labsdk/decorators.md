# Decorators

The LabSDK provides a set of decorators that can be used to configure the assets in a way that can be translated to an
optimized production-ready solution by Raptor.

## Shared Decorators

### `namespace`

This decorator is used to register a namespace for the asset.

#### Parameters

* `namespace_name` - The name of the namespace.

#### Example

```python
@namespace('namespace_name')
```

### `runtime`

This decorator is used to register the runtime environment for the asset.

#### Parameters

* `packages` - A list of packages to install in the runtime environment.
* `env_name` - The name of the runtime environment. The environment should be pre-configured in Raptor Core by your
  DevOps
  team. By default, only the `default` environment is available.

#### Example

```python
@runtime(packages=['numpy==1.21.1', 'phonenumbers'], env_name='default')
```

### `freshness`

This decorator is used to set the freshness policy and timeout of a feature or model. It must be used in conjunction
with a feature or model decorator.

Feature or Model values are considered fresh if they are younger than the `max_age`.
If the value is older than `max_age`, we'll try to recompute it with a timeout of `timeout`.
If we fail to recompute the value within `timeout`, we'll return the stale value as long as it is younger than
`max_stale`.

#### Parameters

* `max_age` - The maximum age of a feature or model value. If the value is older than `max_age`, we'll try to recompute
  it.
* `max_stale` - The maximum age of a stale feature or model value. If the value is older than `max_stale`, we'll return
  `None`.
* `timeout` - The timeout for re-computing a feature or model value.

#### Example

```python
@freshness(max_age="2h", max_stale="3h", timeout="1m")
```

### `labels`

This decorator is used to register labels for the asset.

#### Parameters

* `labels` - A dictionary of labels.

#### Example

```python
@labels({"owner": "Almog", "team": "ds"})
```

## `data_source`

This decorator is used to register a DataSource for the Feature Definition.

#### Class

This decorator should wrap a class that inherits from `typing_extensions.TypedDict`, the class content is optional and
should reflect the schema of the data source.

#### Parameters

* `training_data` - DataFrame of training data. This should reflect the schema of the data source in production.
* `keys` - List of columns that are keys.
* `name` - Name of the data source. Defaults to the class name.
* `timestamp` - Name of the timestamp column. If not specified, the timestamp is inferred from the training data.
* `production_config` - This is a stub for the production configuration. It is not used in training, but is helpful
  for making sense of the source, the production behavior, and a preparation for the production deployment.

#### Returns

It returns a wrapped class with a few additional methods/properties:

* `raptor_spec` - The Raptor specification of the data source.
* `manifest(to_file=False)` - A function that returns the manifest of the data source.
* `export()` - A function that exports the data source to the `out` directory.

#### Example

```python
@data_source(
    training_data=pd.read_csv(
        'https://gist.githubusercontent.com/AlmogBaku/8be77c2236836177b8e54fa8217411f2/raw/deals.csv'),
    keys=['id', 'account_id'],
    timestamp='event_at',
)
class Deal(TypedDict):
    id: int
    event_at: pd.Timestamp
    account_id: str
    amount: float
```

## Feature Decorators

### `aggregation`

Register aggregations for the Feature Definition.

#### Parameters

* `function` - A list of :func:`AggrFn` or a list of aggregation functions as strings.
* `over` - The time period over which to aggregate.
* `granularity` - The granularity of the aggregation (this is overriding the freshness).

#### Example

```python
@aggregation(
    function=['sum', 'count', 'avg'],
    over='1d',
    granularity='1h',
)
```

### `keep_previous`

Keep previous versions of the feature.

#### Parameters

* `versions` - The number of versions to keep (excluding the current value).
* `over` - The maximum time period to keep a previous values in the history since the last update. You can specify `0`
  to keep the value until the next update.

#### Example

```python
@keep_previous(versions=3, over='1d')
```

### `feature`

Register a Feature Definition within the LabSDK.

A feature definition is a Python handler function that process a calculation request and calculates the feature value.

#### Parameters

* `keys` - A list of indexing keys, indicated the owner of the feature value.
* `name` - The name of the feature. If not provided, the function name will be used.
* `data_source` - The (fully qualified) name of the DataSource.
* `sourceless_markers_df` - A DataFrame with the timestamp and keys markers for training sourceless features. It
  a timestamp column, and a column for each key.

### Function Signature

The function signature of a feature definition must accept two arguments:

1. `this_row` - A dictionary of the current row (this is reflects the schema of the data source).
2. `Context` - A dictionary of the context. See [Context](/docs/reference/how-does-raptor-work/features/context) for
   more details.

It must use a return type annotation to indicate the primitive type of the feature value.

#### Returns

It returns a wrapped function with a few additional methods/properties:

* `raptor_spec` - The Raptor specification of the feature.
* `replay()` - A function that can be used to replay the feature calculation using the training sata of the source.
* `manifest(to_file=False)` - A function that returns the manifest of the feature.
* `export(with_dependent_source=True)` - A function that exports the feature to `out` directory.

### Example

```python
@feature(keys='account_id', data_source=Deal)
@freshness(max_age='1h', max_stale='2h')
def last_amount(this_row: Deal, ctx: Context) -> float:
    return this_row['amount']

```

## Model Decorators

### `model`

Register a Model Definition within the LabSDK.

#### Function Signature

This decorator should wrap a training function that returns a trained model.

The function signature of a model definition must accept `TrainingContext` as an argument.

#### Parameters

* `keys` - The keys of the model. The keys are required for fetching the features.
* `input_features` - The features that are used as input to the model.
* `input_labels` - The labels that are used as input to the model.
* `model_framework` - The model framework used to train the model.
* `model_server` - The model server used to serve the model.
* `key_feature` - The feature that is used for joining the features together.
* `prediction_output_schema` - The schema of the prediction output.
* `name` - The name of the model. If not provided, the name will be the function name.

#### Return

A training function with provided context.

It also provides a few new methods/properties to the returned function:

* `raptor_spec` - The Raptor spec of the model.
* `train()` - The training function.
* `features_and_labels()` - A function that returns a DataFrame of the features and labels.
* `manifest(to_file=False)` - A function that returns the manifest of the model.
* `export(with_dependent_features=True, with_dependent_sources=True)` - A function that exports the model to the `out` directory.
* `keys` - the keys of the model.
* `input_features` - the input features of the model.
* `input_labels` - the input labels of the model.

#### Example

```python
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