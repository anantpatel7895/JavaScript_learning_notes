// Reassignment is allowed for var and let, but not for const.

// var example
var a = 10;
a = 20; // Allowed
console.log(a); // Output: 20

// let example
let b = 10;
b = 20; // Allowed
console.log(b); // Output: 20

// const example
const c = 10;
// c = 20; // ❌ Error: Assignment to constant variable.
console.log(c); // Output: 10
