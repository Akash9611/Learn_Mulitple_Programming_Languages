// Slice Method and Splice Method in JavaScript
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Using slice() method
let slicedArr = arr.slice(2, 5); // Extracts elements from index 2 to 4 (5 is not included)
console.log(slicedArr); // Output: [30, 40, 50]
console.log(arr); // Original array remains unchanged: [10, 20, 30, 40, 50, 60, 70, 80, 90]

// Using splice() method
// i] Removing elements
let splicedArr = arr.splice(2, 3); // Removes 3 elements from index 2
console.log(splicedArr); // Output: [30, 40, 50]
console.log(arr); // Original array is changed: [10, 20, 60, 70, 80, 90]

// ii] Adding elements
arr.splice(2, 0, 35, 45); // Adds 35 and 45 at index 2 without removing any elements
console.log(arr); // Output: [10, 20, 35, 45, 60, 70, 80, 90]

// iii] Replacing elements
arr.splice(4, 2, 65, 75); // Replaces 2 elements at index 4 with 65 and 75
console.log(arr); // Output: [10, 20, 35, 45, 65, 75, 80, 90]


// Summary:
// - The slice() method returns a new array containing a portion of the original array without modifying it.
// - The splice() method modifies the original array by removing or replacing elements and can also add new elements.
// - Both methods are useful for manipulating arrays in JavaScript.