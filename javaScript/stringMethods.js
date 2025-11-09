// String Methods in JavaScript
// String methods are built-in functions that allow you to manipulate and interact with string data types in JavaScript.
// Sting is Immutable in JavaScript

// ------------str.toUpperCase() Method------------
// The toUpperCase() method converts a string to uppercase letters and returns a new string.
// It does not change the original string since strings are immutable in JavaScript.

let str1 = "Hello, JavaScript!";
str1.toUpperCase(); // This does not change str1, Because strings are immutable. Instead, it returns a new string.
console.log(str1); // Output: "Hello, JavaScript!"

let str2 = str1.toUpperCase(); // Assigning the returned value to a new variable str2
// str1 = str1.toUpperCase(); // Reassigning the returned value to str1
console.log(str2); // Output: "HELLO, JAVASCRIPT!"

// ------------str.toLowerCase() Method------------
// The toLowerCase() method converts a string to lowercase letters and returns a new string.
let str3 = "Hello, JavaScript!";
str3 = str3.toLowerCase();
console.log(str3); // Output: "hello, javascript!"

// ------------str.charAt() Method------------
let str5 = "Hello, JavaScript!";
console.log(str5.charAt(0)); // Output: "H"

// ------------str.indexOf() Method------------
let str6 = "Hello, JavaScript!";
console.log(str6.indexOf("Java")); // Output: 7
// console.log(str6.indexOf(7)); // Output: -1 (not found) - We can only search for string in indexOf method by passing string as argument not the index number

// ------------str.slice() Method------------
let str7 = "Hello, JavaScript!";
console.log(str7.slice(7, 11)); // Output: "Java" // Extracts characters from index 7 to 10 (11 is not included)

// ------------str.replace() Method------------
let str8 = "Hello, JavaScript!";
let newStr = str8.replace("JavaScript", "World");
console.log(newStr); // Output: "Hello, World!"

// ------------str.split() Method------------
let str9 = "Hello, JavaScript!";
let strArray = str9.split(", "); // Splits the string into an array of substrings based on the delimiter ", "
console.log(strArray); // Output: ["Hello", "JavaScript!"]  

// ------------str.trim() Method------------
let str10 = "   Hello, JavaScript!   ";
let trimmedStr = str10.trim();
console.log(trimmedStr); // Output: "Hello, JavaScript!"

// Summary:
// - String methods in JavaScript allow for various manipulations of string data.
// - Strings are immutable, meaning methods return new strings rather than modifying the original.
// - Common string methods include toUpperCase(), toLowerCase(), charAt(), indexOf(), slice(), replace(), split(), and trim().
