# Feature Values

Features are there to provide **feature** **values** to your models.

Feature values are always of a **primitive type**. This can be an integer, float, string, or a list (vector) of integers, floats or strings.

Feature Values may be computed **on demand** (when requested), or **eagerly** (for example when a new event arrives on a streaming data source).

Feature Values are always **cached**, to ensure the [Feature SLA ](feature-sla.md)and to provide historical data. You control how old of a feature value in cache is considered fresh, stale or in between.



More on on demand vs eager computation

Some features are computed on-demand when a model or another feature tries to read the feature value. For example, a feature might be defined as the country code of a customer, and it's calculated by calling into a REST service with the customer's IP.   Values for such features would usually be cached in the **Integrated Feature Store** to avoid overloading external systems, as well as to provide the value quickly to the model.  Caching implies a tradeoff between freshness and system load (memory, computing, external API calls, etc.), and you can control this tradeoff using the [**Freshness**, **Staleness,** and **Deadline**](feature-sla.md) values for your feature definition.

Other features are computed when an event arrives, for example when a Kafka message is available on a topic.  The value resulting from these computations would be stored in the **Feature Store** for later access by the models, or by other features.

