# Sourceless features

Sourceless features are features that don't have a source. They are used to calculate features that are derived from
the keys and timestamp or from other features.


## Sourceless feature definition
```python
@feature(keys=['name'])
@freshness(max_age='1m', max_stale='10h')
def greeter(_, _) -> str:
  """this is a hello world feature"""
  return f"hello {name}"
```

In this example, we're defining a feature that returns a string with the name of the user. The feature doesn't have a
source, so we're not using the `data_sources` decorator argument.

## Training sourceless features
Since sourceless features don't have a source, we need to provide a training data for the feature. This is necessary to
allow the LabSDK to know the point in time that the feature was calculated.

```python {8}
# create a dataframe with the feature's keys and the feature's value
markers_df = pd.DataFrame({
  'name': ['john', 'jane'],
  'timestamp': [datetime(2021, 1, 1), datetime(2021, 1, 1)]
})

# build the feature
@feature(keys=['name'], sourceless_markers_df=markers_df)
@freshness(max_age='1m', max_stale='10h')
def greeter(_, _) -> str:
  """this is a hello world feature"""
  return f"hello {name}"
```

Sometimes, it might be useful to use the data from an existing data source to mark the feature calculation points.
To do that, we can pass the data source to the `sourceless_markers_df` argument.

```python
@feature(keys=['name'], sourceless_markers_df=User)
```