// Map method- is an in-built array method in JavaScript that creates a new array populated with the results of calling a provided function on every element in the calling array.
// It is a callback function that is called for every element in the array.
// Syntax: array.map(function(currentValue, index, array){})
// Syntax with arrow function: array.map((currentValue, index, array) => {})


let arr = [10, 20, 30, 40, 50, 60];

arr.map((value, index) => {
    console.log(index + " index value: " + value);
})

let student = ["Ganesh", "Akash", "Ram", "Sham", "Hanuman"];


console.log("\n-----------Example 2-----------")
student.map((value) => {
    console.log('Student Names:', value);
})