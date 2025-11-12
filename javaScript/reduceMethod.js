// Reduce method/ Reducer Function - is an in-built array method in JavaScript that executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// It is a callback function that is called for every element in the array.
// Syntax: array.reduce(function(accumulator, currentValue, index, array){}, initialValue)
// Syntax with arrow function: array.reduce((accumulator, currentValue, index, array) => {}, initialValue)

let numbers = [10, 20, 30, 40, 50];

let initialValue = 10;

let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});
console.log(sum);

// now by using initial value
let sumWithInitialValue = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, initialValue); // how it works - The initial value is added to the sum of the array elements. because the accumulator starts with the initial value (10 in this case) instead of the first element of the array.
console.log(sumWithInitialValue); 
