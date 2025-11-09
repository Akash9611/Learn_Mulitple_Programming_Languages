// Check if a number is even or odd
let oddNum=[];
for (let num = 0; num <= 100; num++) {
    if (num % 2 == 0) { // even number. Other condition to find even number is (num & 1) === 0
// Or if ((num & 1) === 0){ // this Bitwise[AND] operator is the faster way to check even number
        console.log(num);
    } else {  // odd number (num % 2 !== 0)
        oddNum.push(num);
    }
}
console.log("Odd Numbers from 0 to 100 are:");
console.log(...oddNum);

// Summary:
// - A number is even if it is divisible by 2 (i.e., num % 2 === 0).
// - A number is odd if it is not divisible by 2 (i.e., num % 2 !== 0).
// - The code iterates through numbers from 0 to 100, printing even numbers and collecting odd numbers in an array.

// - Bitwise AND operation (num & 1) can also be used to determine if a number is even or odd.
// for example : 
// if num = 4 (which is even), in binary it is represented as 100
// 1 in binary is represented as 001
// Performing bitwise AND operation: 100 & 001 = 000 (which is 0 in decimal), indicating that 4 is even.

// num 4 = 100
//  &  1 = 001
//        -----
//         000 = 0 (even)

// Similarly, if num = 5 (which is odd), in binary it is represented as 101
// Performing bitwise AND operation: 101 & 001 = 001 (which is 1 in decimal), indicating that 5 is odd.

// which one is faster? (num & 1) or (num % 2) -> (num & 1) is generally faster than (num % 2) because bitwise operations are typically more efficient for the processor to execute compared to arithmetic operations like modulus.