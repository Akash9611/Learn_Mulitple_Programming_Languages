// How to use the modulus operator in JavaScript
// The modulus operator (%) returns the remainder of a division operation between two numbers.

// Remainder is Modulus

let mod1 = {};
let mod2 = [];
for (let num = 1; num<=100; num++){
    let modulus = num % 3; // Get the remainder when num is divided by 3
    mod1[num] = modulus;

    let modulus2 = num % 12; // Get the remainder when num is divided by 12
    mod2.push(modulus2);
}

console.log("Modulus of numbers from 1 to 100 when divided by 3 are as follows:");
console.log(mod1);

console.log("Modulus of numbers from 1 to 100 when divided by 12 are as follows:");
console.log(mod2);