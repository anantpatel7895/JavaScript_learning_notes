# JavaScript Comparison Operators

Comparison operators are used to **compare two values**. They return a **boolean** value: `true` or `false`.

---

## 1. Equality (`==`) and Strict Equality (`===`)

- `==` → **loose equality**, converts types before comparison.
- `===` → **strict equality**, no type conversion.

```js
console.log(5 == '5');   // true (type conversion)
console.log(5 === '5');  // false (different types)
console.log(5 === 5);    // true
```

### Gotcha: Always prefer === over == to avoid unexpected type coercion.

## 2. Inequality (!=) and Strict Inequality (!==)
- != → loose inequality, converts types before comparison.
- !== → strict inequality, no type conversion.
```js
console.log(5 != '5');   // false
console.log(5 !== '5');  // true
console.log(5 !== 5);    // false
```

## 3. Greater Than (>) and Less Than (<)
```js
console.log(10 > 5);  // true
console.log(5 < 10);  // true
console.log(5 > 10);  // false
```

### Gotcha: Comparisons convert strings to numbers if possible:
```js
console.log('10' > 5);   // true ('10' converted to 10)
console.log('apple' > 5); // false (NaN compared → false)
```

## 4. Greater Than or Equal (>=) and Less Than or Equal (<=)
```js
console.log(10 >= 10);  // true
console.log(5 <= 10);   // true
```

## 5. Special Notes / Gotchas

### Type Conversion

Loose equality (`==`) may produce unexpected results:

```javascript
console.log(null == undefined); // true
console.log(null === undefined);// false
console.log(0 == false);        // true
console.log(0 === false);       // false
```

### Strings vs Numbers

When comparing a number and a string, JavaScript **converts the string to a number**:

```javascript
console.log('5' > 3);   // true
console.log('5' < 3);   // false
console.log('5' == 5);  // true
```

## NaN

`NaN` is never equal to anything, **even itself**:

```javascript
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
```

- Use Number.isNaN(value) to check for NaN.

## Objects

Comparing objects in JavaScript checks **reference**, not content:

```javascript
let a = {x:1}, b = {x:1};
console.log(a == b);   // false
console.log(a === b);  // false

let c = a;
console.log(a === c);  // true
```

# IMPORTANT NOTES
- **JavaScript** performs type coercion: it automatically converts the string '5' to the number 5 before comparing.
- **Python** does not automatically convert types in comparisons.
