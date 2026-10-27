# JavaScript: Hoisting and Temporal Dead Zone (TDZ)

In JavaScript, **hoisting** is a behavior where **variable and function declarations are moved to the top of their scope during compilation**. The **Temporal Dead Zone (TDZ)** is a special period for `let` and `const` variables where they exist in memory but **cannot be accessed** until their declaration is evaluated.

---

## 1. Hoisting

### **Definition**
Hoisting is the process where **JavaScript moves declarations to the top of their scope** before code execution.  
- Applies to **`var`, `let`, `const`, and function declarations**.
- Only the **declaration** is hoisted, not the **initialization/assignment**.

---

### **1.1 Variable Hoisting**

#### **`var`**

- Hoisted **and initialized with `undefined`**.  
- Can be accessed before declaration, but value is `undefined`.

```js
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

Memory-wise:
```js
Before execution:
a → undefined (hoisted)
```

#### let and const
- Hoisted but not initialized.
- Exist in Temporal Dead Zone (TDZ) until declaration is reached.
- Accessing them before declaration throws a ReferenceError.
```js
console.log(b); // ReferenceError
let b = 20;

console.log(c); // ReferenceError
const c = 30;
```

### 1.2 Function Hoisting
#### Function Declarations
- Entire function (declaration + body) is hoisted.
- Can be called before declaration.

```js
greet(); // "Hello!"

function greet() {
  console.log("Hello!");
}
```
### OUTPUT
```js
Hello!
```

#### Function Expressions

- Only the variable declaration is hoisted, not the function body.
- Using them before assignment may throw **TypeError**.
```js
hello(); // TypeError: hello is not a function
var hello = function() {
  console.log("Hi");
};
```

## 2. Temporal Dead Zone (TDZ)
### Definition

The Temporal Dead Zone is the period from entering a scope until a let or const variable is declared.
- During TDZ, the variable exists in memory but cannot be accessed.
- Accessing it before declaration results in ReferenceError.
```js
Example
{
  console.log(a); // ReferenceError
  let a = 10;     // TDZ ends here
  console.log(a); // 10
}
```

- TDZ starts when the block is entered and ends when the variable is declared.

### Why TDZ Exists
- Prevents accessing variables before they are initialized.
- Avoids subtle bugs that occur with var (which is initialized as undefined).
```js
console.log(b); // undefined (var)
var b = 20;
```

- With let/const, TDZ helps catch mistakes early.

# Hoisting vs TDZ Summary Table

| Feature                     | Hoisted?  | Initial Value Before Line | Access Before Declaration |
| --------------------------- | --------- | ------------------------- | ------------------------- |
| `var`                       | ✅ Yes     | `undefined`               | Allowed (`undefined`)     |
| `let`                       | ✅ Yes     | Not initialized           | ❌ ReferenceError (TDZ)    |
| `const`                     | ✅ Yes     | Not initialized           | ❌ ReferenceError (TDZ)    |
| Function Declaration        | ✅ Yes     | Full function             | Allowed                   |
| Function Expression (`var`) | ✅ Partial | `undefined`               | TypeError if called       |
