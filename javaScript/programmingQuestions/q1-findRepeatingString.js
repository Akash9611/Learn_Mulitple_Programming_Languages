//* Question
// Q1. Write a function findLongestWord, that takes a string as input and returns the longest word in the string. If there are multiple longest word, return the first one encountered.

//* Constraints:
// The input string contains alphabetical characters, digits, space and punctuation.
// The input string is non-empty.
// The input string may contain multiple words separated by space. 

//* Note
// If the input string in empty or contains only whitespaces, function should return false

function findLongestWord(a) {
    if (!a || a.trim() === "") return false;

    let word = a.split(" "); // console.log(word) // [ 'The', 'moon', 'is', 'reallyl', 'brighter', 'than', 'ever' ]
    let longestWord='';  

    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longestWord.length) {
            longestWord = word[i];
        }
    }
    return longestWord;

}

console.log(findLongestWord("The moon is really brighter than ever"));