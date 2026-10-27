# ✅ 1. Function Scope in JavaScript
## Definition

A variable has function scope when it is accessible only inside the function where it is declared.

Which keywords create function scope?
- var

### IMPORTANT NOTE:

**var** ignores the block and “escapes” to the nearest function (or global) scope. since var can be redeclared and re-assigned. so at each iteration it just get reassigned in the function(or global space).

## Example
```js
function test() {
  var x = 10;
  console.log(x); // 10
}

console.log(x); // ❌ Error: x is not defined
```

➡️ The variable x exists only inside the function test().

### 🔍 Problems with Function Scope (var)
Problem 1: var ignores block scope
```js
if (true) {
  var x = 5;
}
console.log(x); // 5 (unexpected!)
```

### ✔ Solution: Use let or const.
```js
if (true) {
  let x = 5;
}
console.log(x); // ❌ ReferenceError
```

# ✳️ 2. Block Scope in JavaScript
## Definition

A variable has block scope when it is only accessible inside the { } where it is declared.

## Which keywords create block scope?

- let
- const

### Example
```js
{
  let y = 20;
  const z = 30;
}

console.log(y, z); // ❌ Both are not accessible
```

### 🔍 Common Problems with Block Scope
### Problem 1: ReferenceError when accessing outside the block
```js
for (let i = 0; i < 3; i++) {}
console.log(i); // ❌ i is not defined
```
### ✔ Solution

Declare the variable outside the block if needed.
```js
let i;
for (i = 0; i < 3; i++) {}
console.log(i); // Works
```

### Problem 2: Using const but trying to reassign
```js
const name = "John";
name = "Bob"; // ❌ TypeError
```
### ✔ Solution

Use let if reassignment is needed.
```js
let name = "John";
name = "Bob"; // OK
```

## 🔍 3. Real-World Problems & Solutions
### Problem: var hoisting causes bugs
```js
console.log(a); // undefined (not error!)
var a = 10;
```

➡️ var is hoisted, but initialized as undefined.

### ✔ Solution

Use let or const, which are not hoisted the same way.
```js
console.log(a); // ❌ ReferenceError
let a = 10;
```

### Problem: accidentally overriding global variables
```js
var value = 1;

function test() {
  var value = 2; // shadows global
  console.log(value); // 2
}

test();
console.log(value); // 1 (maybe unexpected)
```

### ✔ Solution

- Use different variable names or use block-scoped variables.


## Problem: Loop closure bug with var

```js
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
```
## OUTPUT
```js
4
4
4
```

### More Explanation of var

- var does NOT have block scope.
- Blocks { } do NOT affect var.
Only functions create scope for var.

So if you use var inside:
- { }
- if
- for
- while
- switch

### IMPORTANT NOTE:

**var** ignores the block and “escapes” to the nearest function (or global) scope. since var can be redeclared and re-assigned. so at each iteration it just get reassigned in the function(or global space).

## SOLUTION : Use let (block scope)
```js
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000); // will get executed after 1000 ms.
}
```
## OUTPUT
```js
1
2
3
```

## IMPORTANT NOTE
- Every iteration of a for loop with let creates a new block scope.
- Each block gets its own separate i variable.
- These variables are not in global scope, they live in the loop’s block scope.