// Function - A reusable block of code that performs a specific task
// It can take inputs (parameters) and return an output (return charue)
// Two ways to define functions in JavaScript: Function Declaration and Function Expression


//Q. Create a function using "function" keyword, that takes string as an arguments and returns the number of vowels in the string.


function vowels(str) {
    let vowel = [];
    let count = 0;
    let strVal = str.toLowerCase();
    for (char of strVal) {
        if ((char == 'a') || (char == 'e') || (char == 'i') || (char == 'o') || (char == 'u')) {
            count++
            vowel.push(char);
        }
    }
    console.log(vowel);
    console.log(`Number of Vowels in given ${str} is: ` + count);
    // console.log(`Number of Vowels in given ${str} is: `+vowel.length); // or we can directly print the array length
}

vowels('AkashHello World')


//Q. Create arrow function to perform same action
const vowels2 = (str) => {
    let vowel = [];
    let strVal = str.toLowerCase();
    for (char of strVal) {
        if ((char == 'a') || (char == 'e') || (char == 'i') || (char == 'o') || (char == 'u')) {
            vowel.push(char);
        }
    }
    console.log(vowel);
    console.log(`Number of Vowels in given ${str} is: ` + vowel.length);
}


console.log("-------Arrow Function-----------");
vowels2("Master keeps life safe");




// In javaScript, function can be passed as an argument to another function and can also be returned from another function.
function abc(){
    console.log("Hello");
}

function xyz(abc){
    return abc;
}

xyz(abc)(); xyz(abc()); // function passed as argument and invoked inside another function