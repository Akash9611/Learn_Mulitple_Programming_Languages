// Loops in JavaScript
// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration: ", i);
}


console.log("-------------------------");
// 2. while loop
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration: ", j);
    j++;
}

console.log("-------------------------");

// 3. do...while loop
let k = 0;
do {
    console.log("Do...While Loop Iteration: ", k);
    k++;
} while (k < 5);

console.log("-------------------------");


// 4. for...in loop (used for iterating over object properties)
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log("For...In Loop Key: ", key, "Value: ", obj[key]);
}

console.log("-------------------------");

let arr2 = [100, 200, 300];
for (let index in arr2){
    console.log("For...In Loop Index: ", index, "Value: ", arr2[index]);
} 

console.log("-------------------------");


// 5. for...of loop (used for iterating over iterable objects like arrays)
let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log("For...Of Loop Value: ", value);
}

console.log("-------------------------");

let str = "HelloWorld";
let size=0
for(let char of str){
    console.log("For...Of Loop- Print each character: ", char);
    size++;
}
console.log("Total characters in string: ", size);

// Summary:
// - JavaScript provides several types of loops to handle repetitive tasks.
// - The for loop is commonly used when the number of iterations is known.
// - The while loop is useful when the number of iterations is not known beforehand.
// - The do...while loop ensures that the code block is executed at least once.
// - The for...in loop is used for iterating over object properties.
// - The for...of loop is used for iterating over iterable objects like arrays and strings.