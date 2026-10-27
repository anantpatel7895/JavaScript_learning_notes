// Scope
// Variables can be scoped to the function or block in which they are declared.
// var is function-scoped, while let and const are block-scoped.

// Function scope example
function exampleFunction() {
    var x = 10; // x is function-scoped
    console.log(x); // Output: 10
}
exampleFunction();
// console.log(x); // ❌ Error: x is not defined (x is not accessible outside the function)

// Block scope example
if (true) {
    let y = 20; // y is block-scoped
    const z = 30; // z is block-scoped
    console.log(y); // Output: 20
    console.log(z); // Output: 30
}
// console.log(y); // ❌ Error: y is not defined (y is not accessible outside the block)
// console.log(z); // ❌ Error: z is not defined (z is not accessible outside the block)
