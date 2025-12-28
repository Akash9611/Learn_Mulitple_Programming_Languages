//* We are given array of marks of student. Filter out the marks of student that scored 90+.

let marks = [99, 80, 90, 69, 78, 93];

let topper = marks.filter((val)=>{
    return val>=90;
})

console.log(topper);