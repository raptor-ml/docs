# time

Module `time` is a  module of time-related functions and constants. The module defines the following functions:

### `from_timestamp(sec, nsec)`

Converts the given Unix time corresponding to the number of seconds and (optionally) nanoseconds since `January 1, 1970 UTC` into an object of type `Time`.

For more details, refer to [https://pkg.go.dev/time#Unix](https://pkg.go.dev/time#Unix).

### `is_valid_timezone(loc)`

Reports whether loc is a valid time zone name.

### `now()`

Returns the current local time. Applications may replace this function with a deterministic one.

### `parse_duration(d)`

Parses the given time string using a specific time format and location. The expected arguments are a time string (mandatory), a time format (optional, set to `RFC3339` by default, e.g. `"2021-03-22T23:20:50.52Z"`), and a name of the location (optional, set to UTC by default).

For more details, refer to [https://pkg.go.dev/time#Parse](https://pkg.go.dev/time#Parse) and [https://pkg.go.dev/time#ParseInLocation](https://pkg.go.dev/time#ParseInLocation).

### `parseTime(x, format, location)`

Parses the given time string using a specific time format and location. The expected arguments are a time string (mandatory), a time format (optional, set to RFC3339 by default, e.g. "2021-03-22T23:20:50.52Z") and a name of location (optional, set to UTC by default). For more details, refer to https://pkg.go.dev/time#Parse and https://pkg.go.dev/time#ParseInLocation.

### `time(year, month, day, hour, minute, second, nanosecond, location)`

Returns the Time corresponding to `yyyy-mm-dd hh:mm:ss + nse`c nanoseconds in the appropriate zone for that time in the given location. All the parameters are optional.



## Constant

The module also defines the following constants:

* `nanosecond` - A duration representing one nanosecond.
* `microsecond` - A duration representing one microsecond.
* `millisecond` - A duration representing one millisecond.
* `second` - A duration representing one second.
* `minute` - A duration representing one minute.
* `hour` - A duration representing one hour.
