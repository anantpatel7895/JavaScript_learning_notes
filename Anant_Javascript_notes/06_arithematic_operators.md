# JavaScript Arithmetic Operators Cheat Sheet

Arithmetic operators are used to perform **mathematical operations** in JavaScript.

---

## **1. Basic Operators**

| Operator | Description                  | Example             | Result |
|----------|------------------------------|-------------------|--------|
| `+`      | Addition / Concatenation     | `5 + 3`            | 8      |
| `-`      | Subtraction                  | `10 - 4`           | 6      |
| `*`      | Multiplication               | `6 * 3`            | 18     |
| `/`      | Division                     | `15 / 3`           | 5      |
| `%`      | Modulus (Remainder)          | `10 % 3`           | 1      |
| `**`     | Exponentiation (Power)       | `2 ** 3`           | 8      |
| `++`     | Increment                    | `let a = 5; a++;` | 6      |
| `--`     | Decrement                    | `let b = 5; b--;` | 4      |

---

## **2. Examples**

```js
// Addition
console.log(5 + 3); // 8

// Subtraction
console.log(10 - 4); // 6

// Multiplication
console.log(6 * 3); // 18

// Division
console.log(15 / 3); // 5

// Modulus
console.log(10 % 3); // 1

// Exponentiation
console.log(2 ** 3); // 8

// Increment / Decrement
let a = 5;
console.log(a++); // 5 (postfix)
console.log(++a); // 7 (prefix)
```

## 3. Special Notes / Gotchas

### ** + Operator is Special**
- Can **add numbers** or **concatenate strings**:

```js
console.log(5 + '5'); // '55' (string) 
console.log('5' + 5); // '55' (string)
console.log(5 + 5);   // 10 (number)
```

## Division by Zero
```js
console.log(10 / 0);   // Infinity
console.log(-10 / 0);  // -Infinity
console.log(0 / 0);    // NaN
```

## Modulus with Negative Numbers
- The result of the modulus operator (`%`) has the **same sign as the dividend**:

```js
console.log(10 % 3);  // 1
console.log(-10 % 3); // -1
```

## Increment / Decrement

- **Prefix (`++a`)**: increments **before returning** the value  
- **Postfix (`a++`)**: increments **after returning** the value

```js
let c = 5;

console.log(c++); // 5 (returns first, then increments)
console.log(++c); // 7 (increments first, then returns)
```

## Automatic Type Conversion(IMPORTANT)

- JavaScript converts types automatically for arithmetic:
```js
console.log('10' - 2); // 8
console.log('10' * 2); // 20
console.log('10' / 2); // 5
console.log('10' + 2); // '102' (string concatenation)
```

## Exponentiation (**)

- Equivalent to Math.pow(a, b):
```js
console.log(2 ** 3);   // 8
console.log(4 ** 0.5); // 2 (square root)
```

Quick Tips
- + → Addition or string concatenation
- -, *, /, %, ** → Always numeric
- Division by zero → Returns Infinity
- Modulus → Sign matches dividend
- ++ / -- → Mind prefix vs postfix behavior
- JavaScript performs **automatic type conversion** in arithmetic