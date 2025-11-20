// Print the following pattern using loops in JavaScript:
// output: 
// 1
// 22
// 333
// 4444

// print the above pattern
//Method 1
for (let i = 1; i <= 4; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    console.log(str);
}

// Method 2
for (let i = 1; i <= 5; i++) {
    console.log(i.toString().repeat(i));
}


// Method 3 
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(i);
    }
};