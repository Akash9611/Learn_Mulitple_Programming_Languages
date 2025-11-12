// Filter method - is an in-built array method in JavaScript that creates a new array with all elements that pass the test implemented by the provided function.
// It is a callback function that is called for every element in the array.
// Is a function that returns a filtered array based on condition provided in the callback function.
// Syntax: array.filter(function(currentValue, index, array){ condition })
// Syntax with arrow function: array.filter((currentValue, index, array) => {condition})

let numbers = [10, 25, 30, 45, 50, 65, 70, 85, 90];

let even = numbers.filter((value, index) => {
    return value % 2 === 0;
})
console.log(even)

let odd = numbers.filter((value) => value % 2 !== 0);
console.log(odd)

// Example 2: Filter names starting with letter 'A'
let names = ['Alice', 'Bob', 'Anita', 'Charlie', 'Arun', 'David'];

let namesStartsWithA = names.filter((name) => name.startsWith('A'));
console.log(namesStartsWithA); // ['Alice', 'Anita', 'Arun']

let filteredArr = names.filter((name) => console.log(name.startsWith('A'))); // this console.log will print true or false for each name, because filter method calls the callback for each element in the array. and checks the condition with returning boolean value. 
//! But since there is no return statement here, it will return undefined for each element and thus the filtered array will be empty.
// Because the filter method expects a boolean return value to determine whether to include the element in the new array or not.
console.log(filteredArr); // [] 
