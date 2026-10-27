
# JavaScript Conditional Statements – Detailed Guide + Gotchas

## 1. What Are Conditional Statements?
Conditional statements allow JavaScript to make decisions based on conditions.

---

## 2. if Statement
```js
if (condition) {
  // runs when condition is true
}
```

---

## 3. if...else Statement
```js
if (condition) {
  // true
} else {
  // false
}
```

---

## 4. else if (Multiple Conditions)
```js
if (score >= 90) console.log("A");
else if (score >= 75) console.log("B");
else console.log("Fail");
```

---

## 5. switch Statement
```js
switch (day) {
  case 1: console.log("Mon"); break;
  case 2: console.log("Tue"); break;
  default: console.log("Invalid");
}
```

- Uses strict comparison (`===`)
- Missing `break` causes fall-through

---

## 6. Ternary Operator
```js
let msg = age >= 18 ? "Adult" : "Minor";
```

---

## 7. Logical Operators in Conditions
### AND (&&)
```js
isLoggedIn && console.log("Welcome");
```

### OR (||)
```js
name = input || "Guest";
```

### NOT (!)
```js
if (!isValid) {}
```

---

## 8. Nullish Coalescing (??)
```js
username = input ?? "Guest";
```
Only triggers on `null` or `undefined`.

---

## 9. Optional Chaining (?.)
```js
let city = user?.address?.city;
```

---

# 🔥 Conditional Gotchas (Important)

## 1. Falsy Values Confusion
JavaScript falsy values:
- `0`, `-0`
- `""`
- `null`
- `undefined`
- `NaN`
- `false`

Examples:
```js
if ("0") console.log("truthy"); // true
if (" ") console.log("space");  // true
if ([]) console.log("array");   // true
```

---

## 2. String "false" is truthy
```js
if ("false") console.log("true"); // true
```

---

## 3. Empty Array/Object Are Truthy
```js
if ([]) console.log("runs");
if ({}) console.log("runs");
```

But:
```js
[] == false  // true
"" == false  // true
```

---

## 4. Loose Equality (==) Problems
```js
0 == ""          // true
"" == false      // true
0 == "0"         // true
null == undefined // true
```

Use `===` instead.

---

## 5. Assignment Instead of Comparison
```js
if (x = 5) {} // always true
```

Correct:
```js
if (x === 5) {}
```

---

## 6. NaN Comparison Fails
```js
NaN === NaN // false
```

Correct:
```js
Number.isNaN(value)
```

---

## 7. switch Uses Strict Matching
```js
switch ("1") {
  case 1: // no match
}
```

---

## 8. OR (||) Returns Values, Not Boolean
```js
0 || "hi"    // "hi"
"test" || 0  // "test"
```

---

## 9. AND (&&) Returns Values Too
```js
1 && "yes"  // "yes"
0 && "no"   // 0
```

---

## 10. Nullish (??) cannot mix with && or ||
```js
a || b ?? c // SyntaxError
```

Use:
```js
a || (b ?? c)
```

---

## 11. typeof null Bug
```js
typeof null // "object"
```

---

## 12. Optional Chaining May Hide Bugs
```js
user.profile?.name // undefined instead of error
```

---

## 13. Space vs Empty String
```js
if ("") {}   // false
if (" ") {}  // true
```

---

## 14. Boolean Object Always Truthy
```js
if (new Boolean(false)) console.log("true"); // true
```

---

## 15. Double Negation
```js
!!"0"  // true
!!0    // false
```

---

# Summary
- Prefer `===`
- Understand truthy/falsy values
- Beware of empty arrays/objects
- Avoid relying on implicit coercion
- Understand logical operator behavior

