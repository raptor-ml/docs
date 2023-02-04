# Data Sources

Data sources are the way we connect the features to the data that we need to calculate the feature value.

Data sources are composed of:

1. Declaring the data source using the [`@data_source`](/docs/reference/labsdk/decorators) decorator.
2. The data source class itself which represents the data source's schema (specifying the schema is optional, you
   can simply `pass` the class body).


## Declaring the data source

In order to declare a data source, we use the [`@data_source`](/docs/reference/labsdk/decorators) decorator.

```python
from typing_extensions import TypedDict

@data_source(
    training_data=df,
    keys=['user_id'],  # Optional
    timestamp='timestamp',  # Optional
    production_config=StreamingConfig()  # Optional
)
class User(TypedDict):
    user_id: str
    first_name: str
    last_name: str
    birthdate: datetime
```

The `@data_source` decorator accepts the following arguments:

1. `training_data` - the data that we'll use to train the model. We can use pandas to import the data from any format that
   pandas supports, such as CSV, Parquet, JSON, etc
2. `keys` - the fields that we'll use to identify the data source's rows. In this case, we're using the `user_id` field.

   Although the keys are optional, it's highly recommended to use them, because it will help the Raptor engine to optimize
   the feature calculations.
3. `timestamp` - the timestamp field of the data source. If the data source doesn't have a timestamp field, you can
   simply pass `None` or `pass` the argument.
4. `production_config` - the production configuration of the data source. The production configuration is the way we
   configure the data source to be used in production.
