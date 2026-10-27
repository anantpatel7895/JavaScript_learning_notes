var a; // Declaration without assignment is allowed for var and let, but not for const.
console.log(a); // Output: undefined (due to hoisting)

let b; // Declaration without assignment is allowed for var and let, but not for const.
console.log(b); // Output: undefined (due to hoisting)

const c = 30; // ❌ Error: Missing initializer in const declaration.
console.log(c); // This line will not be reached due to the error above.

console.log(d); // ❌ Error: d is not defined (const must be initialized at the time of declaration).
var d; // Declaration without assignment is allowed for var, but not for const.

console.log(e)
let e; // Declaration without assignment is allowed for let, but not for const., hoi


