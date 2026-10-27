
# JavaScript Functions – Detailed Guide + Gotchas

## 1. What Is a Function?
A function is a reusable block of code that performs a task.

---

## 2. Function Declaration
```js
function add(a, b) {
  return a + b;
}
```
- Hoisted  
- Preferred for named reusable functions  

---

## 3. Function Expression
```js
const add = function(a, b) {
  return a + b;
};
```
- Not hoisted

---

## 4. Arrow Function
```js
const add = (a, b) => a + b;
```
- Lexical `this`  
- No `arguments`  
- Cannot use `new`  

---

## 5. Anonymous Function
```js
setTimeout(function() {}, 1000);
```

---

## 6. Named Function Expression
```js
const calc = function multiply(x, y) {
  return x * y;
};
```

---

## 7. IIFE
```js
(function() {
  console.log("runs immediately");
})();
```

---

## 8. Constructor Function
```js
function Person(name) {
  this.name = name;
}
```

---

## 9. Class Methods
```js
class A {
  greet() { return "Hello"; }
}
```

---

## 10. Default Parameters
```js
function greet(name = "Guest") {}
```

---

## 11. Rest Parameters
```js
function sum(...nums) {
  return nums.reduce((a,b) => a+b);
}
```

---

## 12. Spread Operator
```js
function add(a, b, c) {}
add(...[1,2,3]);
```

---

## 13. Return Statement
```js
return value;
```

---

## 14. Hoisting Behavior
| Type | Hoisted |
|------|---------|
| Function declaration | ✔ |
| Function expression | ❌ |
| Arrow function | ❌ |

---

## 15. `this` in Functions
- Regular functions: dynamic `this`
- Arrow functions: lexical `this`

```js
const obj = {
  val: 10,
  show() { console.log(this.val); },
  showArrow: () => console.log(this.val)
};
```

---

## 16. Closures
```js
function counter() {
  let count = 0;
  return () => ++count;
}
```

---

## 17. Callback Functions
```js
process(() => console.log("done"));
```

---

## 18. Higher-Order Functions
- Accept functions  
- Return functions  
Examples: map, filter, reduce

---

## 19. Async Functions
```js
async function fetchData() {
  const res = await fetch("/api");
}
```

---

# 🔥 Function Gotchas

## 1. Hoisting Confusion
```js
test(); // works
function test(){}
```
```js
run(); // ❌ error
const run = function(){}
```

---

## 2. Arrow `this` Issue
```js
const obj = {
  name: "A",
  say: () => console.log(this.name)
};
```

---

## 3. Arrow Functions Cannot Be Constructors
```js
new (() => {})(); // ❌
```

---

## 4. No `arguments` in Arrow Functions
```js
const fn = () => console.log(arguments); // ❌
```

---

## 5. Implicit Return Gotcha
```js
const x = () => {5}; // ❌ returns undefined
```

---

## 6. Function Declaration Inside Block
Behavior differs in strict mode and environments.

---

## 7. Default Parameter Runs Every Time
```js
function f(a = Math.random()) {}
```

---

## 8. Returning Objects in Arrow Functions
```js
const fn = () => {name: "A"}; // ❌ undefined
```
Correct:
```js
const fn = () => ({name: "A"});
```

---

## 9. Missing Base Case in Recursion
```js
function loop(){ loop(); }
```

---

## 10. setTimeout + var
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```
Output:  
```
3 3 3
```

---

# Summary
- Use declarations for reusable functions  
- Use arrow functions for callbacks  
- Beware of hoisting & `this`  
- Understand closures and async behavior  

