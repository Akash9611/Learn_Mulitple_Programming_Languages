// Function - A reusable block of code that performs a specific task
// It can take inputs (parameters) and return an output (return value)
// Two ways to define functions in JavaScript: Function Declaration and Function Expression


//Q. Create a function using "function" keyword, that takes string as an arguments and returns the number of vowels in the string.


function vowels(str) {
    let vowel = [];
    let count = 0;
    let strVal = str.toLowerCase();
    for (val of strVal) {
        if ((val == 'a') || (val == 'e') || (val == 'i') || (val == 'o') || (val == 'u')) {
            count++
            vowel.push(val);
        }
    }
    console.log(vowel);
    console.log(`Number of Vowels in given ${str} is: ` + count);
    // console.log(`Number of Vowels in given ${str} is: `+vowel.length); // or we can directly print the array length
}

vowels('AkashHello World')