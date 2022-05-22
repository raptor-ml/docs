# Handler function

Implementing features with PyExp is easy. The only thing you need to implement is the function `handler`:

```python
def handler():
    """Implement city feature"""
    return "Tel-Aviv"
```

You can return multiple parameters via the return statements.

| field | description                                    | default value                                                                                                                         |
|-------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| 1     | Value - the returned value for the expression. |                                                                                                                                       |
| 2     | Timestamp - the timestamp of the digestment.   | Now(When set to None, Natun will default it to the current timestamp)                                                                 |
| 3     | Entity ID - the entity ID of the feature       | Synchronous digestment:Defaulted to the requested entity_id of the feature digestment request.Asynchronous digstment:This is required |

:::danger
Different feature builders require you to implement different return values.

I.e. the streaming features require you to return all the parameters since it's usually derived from the event {%
:::

```python
def handler():
    """Implements count clicks from a stream of clicks"""
    """This feature has a `count` aggregation attached"""
    return 1, timestamp, payload.client_id
```

### Global variables

You should have access to the following global variables within your PyExp that has been passed by the feature builder:

| variable    | description                                                                                                                                                                                                                       |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `payload`   | The payload that you should process.<br/>Usually, this will be a deserialized form of the raw data being processed by the builder.<br/><br/>For more information - see the specific builder's documentation.<br/><br/>Type: `any` |
| `headers`   | A dictionary of headers that have passed by the feature builder.<br/><br/>Type: `dict[string][]string   `                                                                                                                         |
| `entity_id` | The Entity ID of the feature.<br/><br/>Type: `string`                                                                                                                                                                             |
| `timestamp` | The timestamp of the digestion.                                                                                                                                                                                                   |

