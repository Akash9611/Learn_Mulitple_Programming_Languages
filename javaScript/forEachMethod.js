// forEach - is an in-built array method in JavaScript that executes a provided function once for each array element.
// It is a callback function that is called for every element in the array.

// Syntax: array.forEach(function(currentValue, index, array){}, thisValue)
//Syntax with arrow function: array.forEach((currentValue, index, array) => {}, thisValue)

// Example 1: Using forEach to print each element of an array
let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

fruits.forEach(function(fruit, index){
    console.log(`Fruit at index ${index} is: ${fruit}`);
});

// Example 2: Using forEach with arrow function to calculate the sum of all numbers in an array
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
numbers.forEach((num) => {
    sum += num;
});
console.log(`Sum of all numbers is: ${sum}`);