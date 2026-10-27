
# JavaScript For Loop – Detailed Guide + Gotchas

## 1. What Is a For Loop?
A for loop repeats code for a fixed number of iterations.

Syntax:
```js
for (initialization; condition; increment) {
    // code
}
```

---

## 2. Classic For Loop
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

## 3. for...in Loop (Iterates Keys)
```js
for (let key in obj) {
    console.log(key, obj[key]);
}
```
- Works on objects  
- Avoid for arrays  

---

## 4. for...of Loop (Iterates Values)
```js
for (let value of arr) {
    console.log(value);
}
```
Works on:
- arrays  
- strings  
- sets  
- maps  
- NodeList  

---

## 5. forEach Loop
```js
arr.forEach((item, index) => {
    console.log(item, index);
});
```
> Cannot break, continue, or return.

---

## 6. Infinite Loop
```js
for (;;) {
    console.log("infinite");
}
```

---

## 7. Nested Loops
```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
```

---

## 8. Loop Control
### break
```js
if (i === 5) break;
```

### continue
```js
if (i % 2 === 0) continue;
```

---

# 🔥 For Loop GOTCHAs

## 1. Using var Instead of let
```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}
```
Output:
```
5 5 5 5 5
```

---

## 2. for...in on Arrays (Dangerous)
```js
Array.prototype.extra = 100;
for (let index in arr) console.log(index);
```
Prints `extra` too.

---

## 3. forEach Cannot Break/Continue
```js
arr.forEach(x => {
  if (x === 3) break; // ❌ error
});
```

---

## 4. Off-by-One Errors
```js
for (let i = 0; i <= arr.length; i++) {} // ❌
```

---

## 5. Mutating Array While Looping
```js
arr.forEach((n, i) => arr.splice(i, 1)); // ❌ skips items
```

---

## 6. Floating-Point Counters
```js
for (let i = 0.1; i < 1; i += 0.1) {
  console.log(i);
}
```
Floating-point precision issues occur.

---

## 7. Async in forEach Does NOT Await
```js
arr.forEach(async x => {
  await doTask(x); // ❌ ignored
});
```

Correct:
```js
for (let x of arr) await doTask(x);
```

---

## 8. Missing Increment → Infinite Loop
```js
for (let i = 0; i < 10;) {}
```

---

## 9. Reverse Loop Bug
```js
for (let i = arr.length; i >= 0; i--) {} // ❌ index out of range
```

---

## 10. for...of on Non-Iterable Objects
```js
for (let x of {a:1}) {} // ❌ TypeError
```

---

# Summary
- Use `let` for loop counters  
- Avoid `for...in` on arrays  
- Use `for...of` for values  
- Avoid async inside forEach  
- Watch off-by-one and infinite loops  

