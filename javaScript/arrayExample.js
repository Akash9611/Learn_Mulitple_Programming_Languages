// Question - For given array with marks of students [88,99,77,66,55,44,33,22,11], find the average marks scored by students/class.


let marks = [88, 99, 77, 66, 55, 44, 36, 40, 70];

let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i]; // sum = sum + marks[i];
    // console.log(marks[i]);
}
let average = sum / marks.length; // sum of all elements / number of elements = average
console.log(average); // Output: 63.88888888888886


// converting average to fixed 2 decimal places
console.log(average.toFixed(2)); // Output: 63.89

// converting average to integer by rounding off
console.log(Math.round(average)); // Output: 64
// another way to convert to integer by parsing
console.log(parseInt(average)); // Output: 63
// another way to convert to integer by type coercion
console.log(average.toFixed(0)); // Output: 64



// Array Methods Summary:
// Array is collection of items stored at contiguous memory locations.
// Arrays are mutable in JavaScript.
// Common array methods include:
// - length: Returns the number of elements in an array.
// - index access: Access elements using their index (e.g., arr[0] for the first element).
// - push(): Adds one or more elements to the end of an array and returns the new length of the array.
// - pop(): Removes the last element from an array and returns that element.