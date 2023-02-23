# Context

The Context provides context information for the feature calculation request. This includes information such as the
fully-qualified name (FQN) of the feature, the keys associated with the feature, and the timestamp when the request was
made.

## Parameters

* `fqn (str)`: Is a string includes the Fully Qualified Name of the requested feature.
* `keys (Dict[str,str])`: Is a dictionary includes the keys (identifiers) for the feature request.
* `timestamp (datetime)`: Is the timestamp when the request for this feature was made by the user.

## Methods

### `get_feature(selector: str, keys: Dict[str, str] = None)`

Get feature value for a dependant feature.

This method will return the value for the requested Feature Selector and keys at the appropriate timestamp of the
request. That means that it will use the request's timestamp when returning features.

#### Parameters

* `selector (str)`: Feature Selector of the feature, including aggregation function if exists.
* `keys (Dict[str, str])`: The keys (identifiers) for which the value is requested. Default value is the keys of the
  current context.

#### Returns

A tuple of `(value, timestamp)`

### `get_prediction(selector: str, keys: Dict[str, str] = None)`

Get the predicted value from a model.

This method will call the model server and deliver back the prediction from the requested Model's FQN and keys at the
appropriate timestamp of the request. That means that it will use the request's timestamp when returning features.

#### Parameters

* `selector (str)`: Fully Qualified Name of the model.
* `keys (Dict[str, str])`: The keys (identifiers) for which the value is requested. Default value is the keys of the
  current context.

#### Returns

A tuple of `(prediction, timestamp)`