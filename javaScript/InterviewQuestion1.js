//! Question 1

const aa = {a: 10,b:{c: 2}}
const bb = {...aa}
bb.b.c=40

console.log(bb.b.c) // what will be the output? answer is 40 because bb is a shallow copy of aa and bb.b is a reference to the same object as aa.b
console.log(aa.b.c) // what will be the output? answer is 40 because aa.b is a reference to the same object as bb.b

console.log(aa.a.c) // what will be the output? answer is undefined because aa.a is a number not an object so aa.a.c is trying to access property 'c' of a number which is undefined


// Summary:
// - In JavaScript, objects are assigned and copied by reference.
// - Shallow copies (like using the spread operator) copy the top-level properties, but nested objects remain references to the same objects.
// - Accessing properties of primitive data types (like numbers) that do not exist will result in 'undefined'.