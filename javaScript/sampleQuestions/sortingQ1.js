
const sorting = (arr) =>{
    let newArr = arr.map(Number); // [8,4,10,5,9] // Converting string to number// even if you don't convert it to number still sort and give the correct output because it is able to compare string numbers correctly. But it is a good practice to convert it to number.
    
    // return newArr.sort(); // output: [ 10, 4, 5, 8, 9 ] // Why this behavior exists (important). JavaScript was originally designed to: 1. Sort strings by default. 2.Treat numbers as strings when no comparator is supplied
    
    return newArr.sort((a,b)=> a-b); // Correct way to sort numbers (ALWAYS use this)
}


let arr = ['8',4,10,5,9];
console.log(sorting(arr));


// * Note :
// 1. The map(Number) method is used to convert each element of the input array from a string to a number.
// 2. The sort((a,b)=> a-b) method sorts the array in ascending order using a comparator function that subtracts b from a. This ensures numerical sorting rather than lexicographical sorting.
// if you want to sort in descending order use (b-a) instead of (a-b)

// 3. If we use sort() without a comparator function, JavaScript treats the elements as strings and sorts them lexicographically, which can lead to unexpected results when sorting numbers.
//* JavaScript was originally designed to: 
//? - Sort strings by default. 
//? - Treat numbers as strings when no comparator is supplied 
// Internally, JavaScript does this: 
//? > newArr.sort((a, b) => String(a).localeCompare(String(b)));
// So it compares: 
//? > "10" < "4"  → true
// That’s why the result is: 
//? > [10, 4, 5, 8, 9]