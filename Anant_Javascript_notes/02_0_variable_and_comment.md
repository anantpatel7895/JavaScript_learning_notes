# How to Execute JavaScript Code
1. Execute in browser console
2. execute in terminal using Nodejs


# JavaScript Variables – Complete Notes

## 1. Introduction

In JavaScript, a **variable** is a container for storing data values.  
Variables allow you to store, update, and retrieve information while your code runs.

JavaScript provides three ways to declare variables:

- `var`
- `let`
- `const`

---

## 2. `var` – Function-Scoped (Old Way)

`var` is the oldest keyword used to declare variables.

### Characteristics
- Function-scoped  
- Not block-scoped  
- Can be redeclared  
- Can be updated  
- Hoisted (but initialized with `undefined`)

### Example
```js
var x = 10;
x = 20; // allowed, updated or reassigned
var x = 30; // allowed (but dangerous), redeclared
```

## 3. let – Block-Scoped (Modern & Recommended)

Introduced in ES6 (2015), let is commonly used in modern JavaScript.
### Characteristics
- Block-scoped
- Cannot be redeclared in the same scope
- Can be updated
- Not hoisted in a usable way (Temporal Dead Zone)

### Example
```js
let age = 25;
age = 26; // allowed, can be reassigned
let age = 30; // ❌ error, can not redeclared
```


## 4. const – Constant Variables (Block-Scoped)
- Also introduced in ES6.
### Characteristics
- Block-scoped
- Cannot be updated
- Cannot be redeclared
- Must be initialized immediately

### Example:
```js
const pi = 3.14;
pi = 3.2; // ❌ not allowed, can not be redeassigned
```

**IMPORTANT NOTE :** const prevents reassignment, but objects/arrays can still be modified.
```js
const person = { name: "John" };
person.name = "Doe"; // ✔️ allowed
```

## 5. Variable Naming Rules
### Valid:
- Start with letter, underscore (_), or dollar sign ($)
- Can include numbers (but not as first character)
- Case-sensitive

### Examples:
```js
let name;
let _value;
let $price;
let user1;
```

### Invalid:
```js
let 1name;   // ❌ cannot start with number
let my-name; // ❌ hyphens not allowed
```

## 6. JavaScript Data Types (Stored in Variables)
### Primitive Types:
```js
let name = "Alice";       // string
let age = 30;             // number
let isHappy = true;       // boolean
let score = null;         // null
let value;                // undefined
let big = 123n;           // bigint
let id = Symbol("id");    // symbol
```

### Non-Primitive Types:
```js
let person = { name: "Alice" }; // object
let numbers = [1, 2, 3];        // array
let greet = function() {};      // function
```

## 7. Difference Between var, let, and const
| Feature       | var                  | let                  | const                 |
| ------------- | -------------------- | -------------------- | --------------------- |
| Scope         | Function-scoped      | Block-scoped         | Block-scoped          |
| Redeclaration | ✔️ Allowed           | ❌ Not allowed        | ❌ Not allowed         |
| Reassignment  | ✔️ Allowed           | ✔️ Allowed           | ❌ Not allowed         |
| Hoisting      | ✔️ Yes (undefined)   | ⚠️ Yes (TDZ)         | ⚠️ Yes (TDZ)          |
| Best use case | Avoid in modern code | Changeable variables | Constants / Safe vars |

## 8. Best Practices
- Use let for values that change.
- Use const for values that should not change.
- Avoid var entirely in modern JavaScript.
- Use meaningful variable names.
- Follow camelCase naming:
```js
let userName;
let totalAmount;
```

## 9. 
| Keyword | Scope Type     | Re-declare? | Re-assign?       | Hoisted?                         |
| ------- | -------------- | ----------- | ---------------- | -------------------------------- |
| `var`   | Function scope | Yes         | Yes              | Yes (initialized as `undefined`) |
| `let`   | Block scope    | No          | Yes              | Yes (but in TDZ)                 |
| `const` | Block scope    | No          | No (value fixed) | Yes (but in TDZ)                 |


## 10. 