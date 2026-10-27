JavaScript has two main categories of data types: Primitive and Non-Primitive (Reference). Here’s a clear breakdown:

---

1. Primitive Data Types

These are immutable and stored directly in the variable’s memory.


| Data Type     | Example              | Description                                                  |
| ------------- | -------------------- | ------------------------------------------------------------ |
| **Number**    | `42`, `3.14`         | Represents both integers and floating-point numbers.         |
| **BigInt**    | `9007199254740991n`  | For integers larger than `Number.MAX_SAFE_INTEGER`.          |
| **String**    | `'Hello'`, `"World"` | Represents text, enclosed in quotes.                         |
| **Boolean**   | `true`, `false`      | Logical values.                                              |
| **Undefined** | `let a;`             | Variable declared but not assigned a value.                  |
| **Null**      | `let b = null;`      | Represents “no value” or empty.                              |
| **Symbol**    | `Symbol('id')`       | Unique and immutable identifier (often used as object keys). |

---

2. Non-Primitive (Reference) Data Types

These are mutable and stored as references (memory address pointing to the value).

| Data Type    | Example                            | Description                               |
| ------------ | ---------------------------------- | ----------------------------------------- |
| **Object**   | `{ name: 'Alice', age: 25 }`       | Collection of key-value pairs.            |
| **Array**    | `[1, 2, 3, 4]`                     | Ordered list of values.                   |
| **Function** | `function add(a,b){ return a+b; }` | Functions are objects in JS.              |
| **Date**     | `new Date()`                       | Represents date and time.                 |
| **RegExp**   | `/ab+c/`                           | Regular expressions for pattern matching. |


## IMPORTANT NOTES

### JavaScript: Primitive Types are Copied by Value

# JavaScript: Primitive Types are Copied by Value

In JavaScript, **primitive types** (Number, String, Boolean, Null, Undefined, Symbol, BigInt) are **copied by value**. This means that when you assign a primitive value to another variable, **a completely new copy is created in memory**. Changing one variable does **not** affect the other.

---

## Example

```js
let a = 10;
let b = a; // copy the value of a into b so new memory will be alloted for b, not referenct the same memory as a

b = 20;    // modify b

console.log(a); // 10 → a is unaffected
console.log(b); // 20 → b changed independently
```

# JavaScript: Non-Primitive Types are Copied by Reference

In JavaScript, **non-primitive types** (Objects, Arrays, Functions, Dates, etc.) are **copied by reference**. This means that when you assign a non-primitive value to another variable, **both variables point to the same memory location**. Changing the object through one variable **affects the other**.

---

## Example with Object

```js
let obj1 = { name: 'Alice' };
let obj2 = obj1; // copy the reference of obj1 into obj2

obj2.name = 'Bob'; // modify the object through obj2

console.log(obj1.name); // "Bob" → obj1 is affected
console.log(obj2.name); // "Bob"
```
