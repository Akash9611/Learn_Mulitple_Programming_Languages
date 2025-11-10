// Escape characters are used to represent certain special characters within strings.
// In JavaScript, the backslash (\) is used as an escape character.
// Such as newline (\n), tab (\t), backslash (\\), single quote (\'), double quote (\") etc.
// This comes under String Literals in JavaScript.

let str = "Hello, World!\nWelcome to JavaScript.\nThis is a tab:\tSee?";
console.log(str);
// Output:
// Hello, World!
// Welcome to JavaScript.
// This is a tab:	See?

let quoteStr = "He said, \"JavaScript is awesome!\"";
console.log(quoteStr);
// Output: He said, "JavaScript is awesome!"

let pathStr = "C:\\Program Files\\JavaScript";
console.log(pathStr);
console.log(pathStr.length); // Output: 27 - Each escape character is counted as a single character

// Output: C:\Program Files\JavaScript


// Summary:
// - Escape characters allow representation of special characters in strings.
// - The backslash (\) is used as an escape character in JavaScript.
// - Common escape sequences include \n (newline), \t (tab), \\ (backslash), \' (single quote), and \" (double quote).

// Each escape character has its own meaning and purpose in string manipulation and counted as a single character in the string length.
let lengthCountWithEscapeChar = "Hi\tAkash\nHello"; 
console.log(lengthCountWithEscapeChar.length); //output: 14
