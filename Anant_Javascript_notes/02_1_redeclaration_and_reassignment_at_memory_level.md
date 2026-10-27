# A. Redeclaration in JavaScript
- You declare a variable again using the **same name** in the **same scope**.
- Important: Redeclaration does not always create a new memory slot — it depends on the type of variable.

## 3 1️⃣ var redeclaration
```js
var a = 10;
var a = 20;  // redeclaration
console.log(a); // 20
```
- ✅ Allowed
- ✅ Does not create new memory
- ✅ Updates the existing variable’s value
- Meaning: JS sees that a already exists and reuses the same variable

Memory:
```js
Global Scope:
a → 20  // single memory slot updated
```

## 2️⃣ let redeclaration
```js
let b = 10;
let b = 20;  // ❌ Error: Identifier 'b' has already been declared
```
- ❌ Not allowed in the same block scope
- Meaning: JS prevents creating a second variable with the same name in the same scope
- ✅ Ensures safer code

## 3️⃣ const redeclaration
```js
const c = 10;
const c = 20;  // ❌ Error
```
- ❌ Not allowed
- Also cannot reassign

## ✅ So what really happens when we say “redeclaration”?
| Keyword | Redeclaration allowed? | Memory created? | Notes                     |
| ------- | ---------------------- | --------------- | ------------------------- |
| var     | ✔ Yes                  | ❌ No            | Updates existing variable |
| let     | ❌ No                   | ❌ N/A           | Throws error              |
| const   | ❌ No                   | ❌ N/A           | Throws error              |



# B. JavaScript Variable Reassignment

In JavaScript, **reassignment** means changing the **value of an existing variable** after it has been declared. How reassignment works depends on the keyword used: `var`, `let`, or `const`.

---

### 1. `var` Reassignment

```js
var x = 10;
x = 20; // ✅ Reassigned
console.log(x); // 20
```
- ✅ Allowed
- var variables can be reassigned freely within their scope
- Memory location is reused; only the value is updated

### 2. let Reassignment
```js
let y = 5;
y = 15; // ✅ Reassigned
console.log(y); // 15
```
- ✅ Allowed
- let variables are block-scoped
- Can be reassigned, but cannot be redeclared in the same 

### 3. const Reassignment
```js 
const z = 50;
z = 100; // ❌ Error: Assignment to constant variable
```
- ❌ Not allowed
- const variables cannot be reassigned
- They are read-only references, but if they hold an object or array, the contents of the object/array can be modified:

```js
const obj = { a: 1 };
obj.a = 2; // ✅ Allowed
console.log(obj.a); // 2

obj = { b: 3 }; // ❌ Not allowed
```

## SUMMARY:

| Feature                     | `var`                                    | `let`                                  | `const`                                           |
| --------------------------- | ---------------------------------------- | -------------------------------------- | ------------------------------------------------- |
| **Reassignment**            | ✅ Allowed                                | ✅ Allowed                              | ❌ Not allowed                                     |
| **Redeclaration**           | ✅ Allowed (in same scope)                | ❌ Not allowed (in same scope)          | ❌ Not allowed                                     |
| **Scope**                   | Function-scoped                          | Block-scoped                           | Block-scoped                                      |
| **Hoisting**                | ✅ Hoisted (initialized with `undefined`) | ✅ Hoisted (not initialized)            | ✅ Hoisted (not initialized)                       |
| **Mutable if object/array** | ✅ Can modify contents                    | ✅ Can modify contents                  | ✅ Can modify contents                             |
| **Memory behavior**         | Reuses memory location when reassigned   | Reuses memory location when reassigned | Reference is constant; object contents can change |
