# json

Module `json` is a module of JSON-related functions.

### Members

* [#decode](json.md#decode "mention")
* [#encode](json.md#encode "mention")
* [#indent](json.md#indent "mention")

### decode

```
unknown json.decode(x)
```

The decode function accepts one positional parameter, a JSON string. It returns the Starlark value that the string denotes.

* 'null', 'true', and 'false' are parsed as None, True, and False.
* Numbers are parsed as int, or as a float if they contain a decimal point or an exponent. Although JSON has no syntax for non-finite values, very large values may be decoded as infinity.
* a JSON object is parsed as a new unfrozen Starlark dict. Keys must be unique strings.
* a JSON array is parsed as new unfrozen Starlark list.

Decoding fails if x is not a valid JSON encoding.

#### Parameters

| Parameter | Description |
|-----------|-------------|
| `x`       | required    |

### encode

```
string json.encode(x)
```

The encode function accepts one required positional argument, which it converts to JSON by cases:

* None, True, and False are converted to 'null', 'true', and 'false', respectively.
* An int, no matter how large, is encoded as a decimal integer. Some decoders may not be able to decode very large integers.
* A float is encoded using a decimal point or an exponent or both, even if its numeric value is an integer. It is an error to encode a non-finite floating-point value.
* A string value is encoded as a JSON string literal that denotes the value. Each unpaired surrogate is replaced by U+FFFD.
* A dict is encoded as a JSON object, in key order. It is an error if any key is not a string.
* A list or tuple is encoded as a JSON array.
* A struct-like value is encoded as a JSON object, in field name order.

An application-defined type may define its own JSON encoding. Encoding any other value yields an error.

#### Parameters

| Parameter | Description |
|-----------|-------------|
| `x`       | required    |

### indent

```
string json.indent(s, *, prefix='', indent='\t')
```

The indent function returns the indented form of a valid JSON-encoded string. Each array element or object field appears on a new line, beginning with the prefix string followed by one or more copies of the indent string, according to its nesting depth. The function accepts one required positional parameter, the JSON string, and two optional keyword-only string parameters, prefix, and indent, that specify a prefix of each new line, and the unit of indentation. If the input is not valid, the function may fail or return invalid output.

#### Parameters

| Parameter | Description    |
|-----------|----------------|
| `s`       | required       |
| `prefix`  | default = ''   |
| `indent`  | default = '\t' |


