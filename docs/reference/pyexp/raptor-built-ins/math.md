# math

Module `math` is a Starlark module of math-related functions and constants. The module defines the following functions:

```
ceil(x) - Returns the ceiling of x, the smallest integer greater than or equal to x.
copysign(x, y) - Returns a value with the magnitude of x and the sign of y.
fabs(x) - Returns the absolute value of x as float.
floor(x) - Returns the floor of x, the largest integer less than or equal to x.
mod(x, y) - Returns the floating-point remainder of x/y. The magnitude of the result is less than y and its sign agrees with that of x.
pow(x, y) - Returns x**y, the base-x exponential of y.
remainder(x, y) - Returns the IEEE 754 floating-point remainder of x/y.
round(x) - Returns the nearest integer, rounding half away from zero.

exp(x) - Returns e raised to the power x, where e = 2.718281… is the base of natural logarithms.
sqrt(x) - Returns the square root of x.

acos(x) - Returns the arc cosine of x, in radians.
asin(x) - Returns the arc sine of x, in radians.
atan(x) - Returns the arc tangent of x, in radians.
atan2(y, x) - Returns atan(y / x), in radians.
              The result is between -pi and pi.
              The vector in the plane from the origin to point (x, y) makes this angle with the positive X axis.
              The point of atan2() is that the signs of both inputs are known to it, so it can compute the correct
              quadrant for the angle.
              For example, atan(1) and atan2(1, 1) are both pi/4, but atan2(-1, -1) is -3*pi/4.
cos(x) - Returns the cosine of x, in radians.
hypot(x, y) - Returns the Euclidean norm, sqrt(x*x + y*y). This is the length of the vector from the origin to point (x, y).
sin(x) - Returns the sine of x, in radians.
tan(x) - Returns the tangent of x, in radians.

degrees(x) - Converts angle x from radians to degrees.
radians(x) - Converts angle x from degrees to radians.

acosh(x) - Returns the inverse hyperbolic cosine of x.
asinh(x) - Returns the inverse hyperbolic sine of x.
atanh(x) - Returns the inverse hyperbolic tangent of x.
cosh(x) - Returns the hyperbolic cosine of x.
sinh(x) - Returns the hyperbolic sine of x.
tanh(x) - Returns the hyperbolic tangent of x.

log(x, base) - Returns the logarithm of x in the given base, or natural logarithm by default.

gamma(x) - Returns the Gamma function of x.
```

All functions accept both int and float values as arguments.

The module also defines approximations of the following constants:

```
e - The base of natural logarithms, approximately 2.71828.
pi - The ratio of a circle's circumference to its diameter, approximately 3.14159.
```
