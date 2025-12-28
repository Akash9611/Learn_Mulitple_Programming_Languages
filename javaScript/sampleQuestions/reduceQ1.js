// Take number of n as a input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all the numbers in the array. 
// Use the reduce method to calculate Product of all the numbers in the array. 

// Prompt only work on browser environment - so we can test this code on online compilers

let n = prompt("Enter array size: ");
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt(`Enter number ${i + 1}: `));
}
let sum = arr.reduce((acc, val) => {
    return acc + Number(val); // Converting string to number. By default prompt returns string
}, 0);
console.log(sum);

let product = arr.reduce((acc, val) => { // Product means multiplying all the numbers together. Ex- arr=[2,3,4]: 2*3*4=24
    return acc * Number(val);
}, 1);
console.log(product);


//* Note :
// 1. In the reduce method, we have provided an initial value for accumulator (0 for sum and 1 for product).
// 2. We have converted the string input from prompt to number using Number() function before performing arithmetic operations.
// 3. This code will work in a browser environment where prompt is supported.

//* IMP :
// product means multiplying all the numbers together.

//* Syntax of reduce method:
// array.reduce(function(accumulator, currentValue, currentIndex, array){
//      logic to be executed
// }, initialValue);

// OR we can use arrow function syntax:
// array.reduce((accumulator, currentValue, currentIndex, array) => {
//      logic to be executed
// }, initialValue);