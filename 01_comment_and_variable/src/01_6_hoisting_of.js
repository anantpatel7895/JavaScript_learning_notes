// Hoisting
// Variable declarations are hoisted to the top of their containing function or block.
// However, only the declarations are hoisted, not the initializations.

console.log(a); // Output: undefined (due to hoisting)
var a = 10;
console.log(a); // Output: 10

// var declarations are hoisted, but the assignment happens at the original line of code.
// So, before the assignment, the variable exists but is undefined. After the assignment, it holds the assigned value.  

// let and const declarations are also hoisted, but they are not initialized until their definition is evaluated. This means that accessing them before the declaration will result in a ReferenceError.
