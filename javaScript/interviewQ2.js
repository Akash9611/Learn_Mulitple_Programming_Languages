//! Question 2- what will be the output and why?
console.log(num1) // Output: undefined due to hoisting
var num1 = 10; // 'var' declarations are hoisted and initialized with 'undefined'. [hoisted meaning to the top of their scope]. 'var' is function-scoped.

console.log(num2) // Output: ReferenceError: Cannot access 'num2' before initialization
let num2 = 20; // 'let' declarations are also hoisted, but not initialized. They are block-scoped. Accessing them before initialization results in a ReferenceError due to the temporal dead zone (TDZ).

// Summary:
// - 'var' allows access before declaration (returns undefined).
// - 'let' does not allow access before declaration (throws ReferenceError).