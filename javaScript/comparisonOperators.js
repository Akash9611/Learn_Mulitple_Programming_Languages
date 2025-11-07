// Comparison Operators in JavaScript
let numA = 5;
let numB = '5'; // string

console.log("Loose Equality (==): ", numA == numB); // true
console.log("Strict Equality (===): ", numA === numB); // false

// Summary:
// - The == operator compares values for equality after converting both values to a common type (type coercion).
// - The === operator compares both value and type for equality without type coercion.
// - It is generally recommended to use === for comparisons to avoid unexpected results due to type coercion.

console.log("Loose Inequality (!=): ", numA != numB); // false
console.log("Strict Inequality (!==): ", numA !== numB); // true

// Summary:
// - The != operator compares values for inequality after converting both values to a common type (type coercion).
// - The !== operator compares both value and type for inequality without type coercion.
// - It is generally recommended to use !== for comparisons to avoid unexpected results due to type coercion.


console.log("Greater Than (>): ", numA > numB); // false
console.log("Less Than (<): ", numA < numB); // false
console.log("Greater Than or Equal To (>=): ", numA >= numB); // true
console.log("Less Than or Equal To (<=): ", numA <= numB); // true
// Summary:
// - The >, <, >=, and <= operators compare values based on their numeric value after type coercion if necessary.
// - These operators can be used to compare numbers and strings that represent numbers.

console.log("Object Equality by Reference:");
let obj1 = { key: 'value' };
let obj2 = { key: 'value' };
let obj3 = obj1;
console.log("obj1 == obj2: ", obj1 == obj2); // false
console.log("obj1 === obj2: ", obj1 === obj2); // false
console.log("obj1 === obj3: ", obj1 === obj3); // true
// Summary:
// - Objects in JavaScript are compared by reference, not by value.
// - Two different objects with the same properties are not considered equal.
// - Only references to the same object in memory are considered equal.

console.log("NaN Comparison:");
let nanValue = NaN;
console.log("NaN == NaN: ", nanValue == NaN); // false
console.log("NaN === NaN: ", nanValue === NaN); // false
console.log("isNaN(nanValue): ", isNaN(nanValue)); // true
// Summary:
// - NaN (Not-a-Number) is a special numeric value that represents an undefined or unrepresentable value. 
// - NaN is not equal to any value, including itself, when using == or ===.
// - The isNaN() function should be used to check if a value is NaN.