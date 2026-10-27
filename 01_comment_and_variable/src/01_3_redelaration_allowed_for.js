
// redeclaration is allowed only for var, not for let and const.

// var example
var a = 10;
var a = 20; // No error, redeclaration is allowed for var
console.log(a); // Output: 20

// let example
let b = 10;
// let b = 20; // Error: Identifier 'b' has already been declared
console.log(b); // Output: 10

// const example
const c = 10;
// const c = 20; // Error: Identifier 'c' has already been declared
console.log(c); // Output: 10

