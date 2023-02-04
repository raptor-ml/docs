# Feature Selector

The Feature Selector is a special string that allow you to select a feature value composition.

## Components of the Feature Selector

The Feature Selector is composed of several parts:

```
namespace.name+aggregation_function@version[encoding]
```

* **Namespace**: an optional part that can be used to identify the namespace of the feature. It must start and end with
  a letter or digit, and can contain letters, digits, and underscores. The maximum length is 256 characters.
  If the namespace is not specified, we'll use the namespace of the request.
* **Name**: the name of the feature. It must start and end with a letter or digit, and can contain letters, digits, and
  underscores. The maximum length is 256 characters.
* **Aggregation function**: an optional part that can be used to specify an aggregation function. The function must
  consist of only lowercase letters and underscores.

  :::caution 
    Aggregation functions can't be used in conjunction with the `@version` part.
  :::
* **Version**: an optional part that can be used to specify a version number. The version must be an integer.
* **Encoding**: an optional part that can be used to specify an encoding format. The encoding format must consist of
  only lowercase letters and underscores.

## Examples

Here are some examples of valid Feature Selectors:

* `feature_name`: a simple feature name with no namespace, aggregation function, version, or encoding specified.
* `namespace.feature_name`: a feature name with a namespace specified.
* `feature_name+sum`: a feature name with an aggregation function specified.
* `feature_name@-2`: a feature name with a version number specified.
* `feature_name[encoding]`: a feature name with an encoding format specified.
* `namespace.feature_name@-2[encoding]`: a feature name with a namespace, version, and encoding format specified.
