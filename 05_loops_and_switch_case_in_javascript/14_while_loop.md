
# JavaScript While Loops – Detailed Guide + Gotchas

## 1. What Is a While Loop?
A while loop runs as long as a condition is true.

---

## 2. Basic While Loop
```js
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
```

---

## 3. do...while Loop
Runs at least once.
```js
let i = 5;
do {
    console.log(i);
    i++;
} while (i < 5);
```

---

## 4. Infinite Loops
```js
while (true) {
    console.log("running");
}
```

---

## 5. break and continue
### break
```js
while (true) {
    if (Math.random() > 0.8) break;
}
```

### continue
```js
let n = 0;
while (n < 5) {
  n++;
  if (n === 3) continue;
  console.log(n);
}
```

---

## 6. Nested While Loops
```js
let i = 1;
while (i <= 3) {
  let j = 1;
  while (j <= 2) {
    console.log(i, j);
    j++;
  }
  i++;
}
```

---

## 7. While vs For Loop
| Use Case | Preferred |
|---------|-----------|
| Exact number of iterations | for |
| Unknown iterations | while |
| Must run at least once | do...while |
| Async operations | for/for...of |

---

# 🔥 While Loop Gotchas

## 1. Missing Increment → Infinite Loop
```js
let i = 0;
while (i < 5) {
  console.log(i); // ❌ i never changes
}
```

---

## 2. Wrong Variable Direction
```js
let x = 10;
while (x > 0) {
  x++;   // ❌ increasing instead of decreasing
}
```

---

## 3. Floating-Point Loop Bugs
```js
let x = 0.1;
while (x !== 1) {
  x += 0.1; // floating-point issues
}
```

---

## 4. Assignment Instead of Comparison
```js
while (x = 5) { } // ❌ infinite loop
```

---

## 5. Breaking Only One Loop in Nested Loops
```js
while (i < 3) {
  while (j < 3) {
    break; // breaks only inner loop
  }
}
```

Use label:
```js
outer:
while (i < 3) {
  while (j < 3) {
    break outer;
  }
}
```

---

## 6. Modifying Array Length While Looping
```js
while (i < arr.length) {
  arr.pop(); // ❌ changes loop target
  i++;
}
```

---

## 7. Async Calls Inside While Without Await
```js
while (true) {
  fetch("/data"); // ❌ floods API
}
```

---

## 8. do...while Runs Even If Condition False
```js
do {
  run();
} while (false);
```

---

## 9. External State Never Changes
```js
while (!ready) {} // ❌ freezes browser
```

---

## 10. Negative Increment Mistake
```js
let i = 5;
while (i >= 0) {
  i += 1; // ❌ goes opposite direction
}
```

---

# Summary
- Use while when iterations unknown  
- Always update variables inside while  
- Avoid infinite loops  
- Beware of async, floating points, and wrong conditions  

