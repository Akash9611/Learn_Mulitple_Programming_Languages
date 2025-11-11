// forEach - is an in-built array method in JavaScript that executes a provided function once for each array element.
// It is a callback function that is called for every element in the array.

// Syntax: array.forEach(function(currentValue, index, array){})
//Syntax with arrow function: array.forEach((currentValue, index, array) => {})

// Example 1: Using forEach to print each element of an array
let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

fruits.forEach(function (fruit, index) {
    console.log(`Fruit at index ${index} is: ${fruit}`);
});

// Example 2: Using forEach with arrow function to calculate the sum of all numbers in an array
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
numbers.forEach((num) => {
    sum += num;
});
console.log(`Sum of all numbers is: ${sum}`);

// Interview Level Question:
// Q. What is higher order function or method in JavaScript?
// -> Higher order function- are the javascript function that can take another function as an argument or return a function as a result.


//Example- For given array find square of each number using forEach method and higher order function concept.
let arr = [1, 2, 3, 4, 5];

const squareOfNumbers = (num) => {
    console.log(num * num); // num**2
}

arr.forEach(squareOfNumbers); // passing function as argument to forEach method