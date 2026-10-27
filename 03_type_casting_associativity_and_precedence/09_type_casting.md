# JavaScript Type Conversion -- Full Detailed Guide

JavaScript performs **type conversion** in two ways: 
1. **Implicit** (Coercion)** -- JS automatically converts data types. 
2. **Explicit** Developer intentionally converts using functions.

This guide covers **everything in depth**, including rules, tables,
examples, and weird corner cases.

------------------------------------------------------------------------

# 1. JavaScript Data Types

## Primitive Types

-   number\
-   string\
-   boolean\
-   undefined\
-   null\
-   bigint\
-   symbol

## Non-Primitive

-   object (arrays, functions, plain objects)

------------------------------------------------------------------------

# 2. Explicit Type Conversion

## Convert to Number

### Using Number()

``` js
Number("100")        // 100
Number("100px")      // NaN
Number(true)         // 1
Number(false)        // 0
Number(null)         // 0
Number(undefined)    // NaN
Number("  20  ")     // 20
```

### Using Unary +

``` js
+"50"        // 50
+true        // 1
+false       // 0
+""          // 0
```

### parseInt / parseFloat

``` js
parseInt("100px")       // 100
parseFloat("10.5kg")    // 10.5
```

------------------------------------------------------------------------

## Convert to String

### String()

``` js
String(123)          // "123"
String(true)         // "true"
String(null)         // "null"
String(undefined)    // "undefined"
```

### toString()

``` js
(123).toString();    // "123"
true.toString();     // "true"
```

------------------------------------------------------------------------

## Convert to Boolean

Falsy values: - 0 - "" - null - undefined - NaN - false

Everything else → **true**

``` js
Boolean("")        // false
Boolean("hi")      // true
Boolean(0)         // false
Boolean(1)         // true
Boolean([])        // true
Boolean({})        // true
```

------------------------------------------------------------------------

# 3. Implicit Type Conversion (Coercion)

JS automatically converts types during expressions.

------------------------------------------------------------------------

## String Coercion

Occurs with `+` when one operand is a string.

``` js
"5" + 1          // "51"
"5" + true       // "5true"
"5" + null       // "5null"
"5" + undefined  // "5undefined"
```

------------------------------------------------------------------------

## Number Coercion

Occurs with `-`, `*`, `/`, `%`.

``` js
"10" - 5         // 5
"10" * 2         // 20
"10" / "2"       // 5
"10" - true      // 9
```

------------------------------------------------------------------------

## Boolean Coercion

Used in: - if() - logical operators - `!value`

``` js
if("hello"){}   // true
!!"hello"       // true
!!0             // false
```

------------------------------------------------------------------------

# 4. Loose Equality (==) Rules

Loose equality performs type coercion.

``` js
5 == "5"           // true
0 == false         // true
"" == false        // true
null == undefined  // true
"0" == false       // true
[] == false        // true
[] == ""           // true
```

------------------------------------------------------------------------

# 5. Strict Equality (===)

No type conversion.

``` js
5 === "5"         // false
0 === false       // false
null === undefined // false
```

------------------------------------------------------------------------

# 6. Object → Primitive Conversion

JavaScript uses: 1. `valueOf()` 2. `toString()`

``` js
let obj = { valueOf() { return 10; } };
obj + 5;    // 15

let obj2 = { toString() { return "20"; } };
obj2 - 5;   // 15
```

------------------------------------------------------------------------

# 7. Important Corner Cases

## null vs undefined

``` js
null + 1         // 1
undefined + 1    // NaN
```

## Empty array coercion

``` js
[] + []          // ""
[] + 5           // "5"
[] == 0          // true
```

## true & false numeric conversion

``` js
true + true      // 2
false + 1        // 1
```

## NaN

``` js
Number("abc")    // NaN
"abc" - 10       // NaN
```

------------------------------------------------------------------------

# 8. Operator Conversion Rules

## For +

-   If either operand is **string** → string concatenation
-   Else → number addition

## For other operators (- \* /)

→ Convert both operands to **numbers**

## For comparisons (\< \> \<= \>=)

→ Convert both sides to **numbers**

------------------------------------------------------------------------

# 9. Summary Table

  Expression      Result
  --------------- --------
  "5" + 1         "51"
  "5" - 1         4
  true + 1        2
  false + 1       1
  null + 5        5
  undefined + 5   NaN
  \[\] + 5        "5"
  \[\] == false   true
  "0" == false    true

------------------------------------------------------------------------

# 10. Interview Questions

## Q1:

``` js
[] == ![]
```

Explanation: 1. `![]` → false\
2. `[] == false` → `"" == false` → `0 == 0` → true

Answer: **true**

------------------------------------------------------------------------

## Q2:

``` js
"5" - -2
```

= 5 - (-2) = **7**

------------------------------------------------------------------------

## Q3:

``` js
true + false + "5"
```

1 + 0 + "5" = **"15"**

------------------------------------------------------------------------

# End
