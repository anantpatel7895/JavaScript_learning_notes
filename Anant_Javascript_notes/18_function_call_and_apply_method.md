
# JavaScript `call()` and `apply()` – Detailed Guide

## 1. What Are `call()` and `apply()`?
Both methods:
- invoke a function immediately  
- allow you to set `this` manually  
- allow passing arguments  

---

## 2. `call()`
Arguments are passed **individually**.

```js
function greet(msg) {
  console.log(msg + " " + this.name);
}

const person = { name: "Anant" };

greet.call(person, "Hello"); 
// Hello Anant
```

---

## 3. `apply()`
Arguments are passed **as an array**.

```js
function sum(a, b) {
  return a + b;
}

sum.apply(null, [5, 7]); // 12
```

---

## 4. Difference Between call() and apply()

| call() | apply() |
|--------|----------|
| args: a, b, c | args: [a, b, c] |
| Better when arguments known | Better when arguments dynamic |
| More common | Often replaced by spread |

```js
func.call(obj, 1, 2, 3);
func.apply(obj, [1, 2, 3]);
```

---

## 5. Why Use call/apply?

### 5.1 Method Borrowing
```js
function show() { console.log(this.name); }

const user1 = { name: "Ram" };
const user2 = { name: "Shyam" };

show.call(user1); 
show.call(user2);
```

---

### 5.2 Use methods from one object on another
```js
const obj1 = { nums: [1, 2, 3], print() { console.log(this.nums); } };
const obj2 = { nums: [4, 5, 6] };

obj1.print.call(obj2); // [4, 5, 6]
```

---

### 5.3 Use array methods on array-like objects
```js
const arr = [5, 8, 12];
Math.max.apply(null, arr); // 12
```

---

### 5.4 Convert arguments object to array
```js
function test() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
}
```

---

### 5.5 Explicitly control `this`
```js
function show() {
  console.log(this.id);
}

show.call({ id: 10 });
```

---

## 6. ES6 Alternative for apply()
```js
sum(...[1, 2, 3]);
```
But `call()` has no equivalent.

---

# Gotchas

## 1. Arrow functions ignore call/apply
```js
const fn = () => console.log(this);
fn.call({ x: 10 }); // ❌ still outer this
```

---

## 2. null/undefined map to global object (non-strict mode)
```js
function show() { console.log(this); }

show.call(null); // window in browser
```

Strict mode:
```js
"use strict";
show.call(null); // null
```

---

## 3. apply is slower than call in heavy loops
Due to internal argument unpacking.

---

## 4. Binding functions inside class methods
```js
class A {
  show() { console.log(this); }
}

const a = new A();
const fn = a.show;
fn.call(a); // required to keep context
```

---

## 5. Using apply with huge arrays may cause stack issues
```js
Math.max.apply(null, bigArray); // ❌ possible crash
```

Use:
```js
Math.max(...bigArray);
```

---

# Summary

| Method | Purpose | Arguments |
|--------|---------|-----------|
| call() | call function with explicit this | separated |
| apply() | call function with explicit this | array |
| bind() | return permanently bound function | separated |

