# JavaScript Boolean (Logical) Operators

Boolean operators are used to perform **logical operations** and return `true` or `false`.

---

## 1. AND (`&&`)

- Returns `true` **only if both operands are true**.
- **Short-circuits**: stops evaluating if the first operand is false.

```js
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

let a = 5, b = 10;
console.log(a > 0 && b > 5); // true
```

### Gotcha:

- Returns the first falsy value or last value if all are truthy (not always true/false).
```js
console.log(0 && 5);  // 0
console.log(5 && 10); // 10
```

## 2. OR (`||`)

The OR operator returns `true` if **at least one operand is true**.

- **Short-circuits:** stops evaluating if the first operand is `true`.

### Examples:

```javascript
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

let a = 5, b = 10;
console.log(a > 0 || b < 5); // true
```

### Gotcha:

- The OR operator returns the first truthy value or the last value if all are falsy. This means it can return non-boolean values:
```js
console.log(0 || 5);       // 5
console.log(null || 'Hi'); // 'Hi'
```

## 3. NOT (`!`)

The NOT operator returns the **opposite boolean value**.

- Converts the operand to boolean if it isn’t already.

### Examples:

```javascript
console.log(!true);  // false
console.log(!false); // true

let a = 0;
console.log(!a); // true, because 0 is falsy
```

## 4. Truthy and Falsy Values

JavaScript converts values to boolean in logical operations.

- **Falsy values:** `false`, `0`, `''` (empty string), `null`, `undefined`, `NaN`  
- **Truthy values:** everything else

### Examples:

```javascript
console.log(Boolean(0));       // false
console.log(Boolean('hello')); // true
console.log(Boolean(null));    // false
```

## 5. Special Notes / Gotchas

### Short-circuiting

- `&&` stops at the **first falsy value**  
- `||` stops at the **first truthy value**

### Non-boolean returns

Unlike many languages, JavaScript logical operators can return **non-boolean values**:

```javascript
console.log('' && 5);    // ''
console.log('Hi' || 0);  // 'Hi'
```

### Combining with Other Types

Always be careful when combining numbers, strings, objects with `&&` or `||` because the result may **not be strictly `true` or `false`**.

### Double NOT (`!!`)

- Use `!!value` to explicitly convert any value to a boolean:

```javascript
console.log(!!0);       // false
console.log(!!'Hello'); // true
```