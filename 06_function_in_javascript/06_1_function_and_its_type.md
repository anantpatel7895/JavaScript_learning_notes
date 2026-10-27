# JavaScript Functions

In JavaScript, a **function** is a block of reusable code that performs a specific task.  
Functions can take **parameters** and **return values**.

---

## 🔹 Function Syntax

```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // prints: Hello, Alice
```

- function → keyword to define a function
- greet → function name
- (name) → parameter(s)
- { ... } → function body

# type of function in javascript

| Type                 | Syntax / Example              | Hoisted? | Notes                               |
| -------------------- | ----------------------------- | -------- | ----------------------------------- |
| Named Function       | `function add(a,b){}`         | ✅ Yes    | Named function, hoisted             |
| Function Expression  | `const mul = function(a,b){}` | ❌ No     | Assigned to variable                |
| Arrow Function       | `const div = (a,b) => a/b`    | ❌ No     | Short syntax, no `this`             |
| Anonymous Function   | `function(){ ... }`           | ❌ No     | Usually used as callback            |
| IIFE                 | `(function(){ ... })();`      | ❌ No     | Executes immediately, private scope |
