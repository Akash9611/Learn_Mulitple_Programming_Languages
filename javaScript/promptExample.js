// Prompts are used to take input from the user in JavaScript.
// The prompt() function displays a dialog box that prompts the user for input.
// It returns the input value as a string.

// Question - Prompt the user to enter their name. Generate the username for them based on the input value. Start username with '@' followed by their fullname and ending with the length of their name.

const fullname = prompt('Enter user full_name: ');
console.log(`Username of user ${fullname}: @${fullname}${fullname.length}`)


//To run this code, I have create test.html file run that file and open console on chrome browser to see the output.