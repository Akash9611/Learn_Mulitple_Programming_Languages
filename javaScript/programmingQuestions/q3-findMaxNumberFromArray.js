function findMax(arr) {
    let maxVal = arr.reduce((acc, currentVal) => {
        if (acc < currentVal) {
            acc = currentVal;
        }
        return acc;
    })

    // OR using Math function
    // let maxVal = Math.max(...arr); //only works on comma separated numbers. For ex- Math.max(10,2,30,4,15)
    return maxVal;
}

let a = [6, 8, 2, 10, 14];
console.log(findMax(a)); // 14
console.log(findMax([-10, -11, -8, -2, -4])); // -2
console.log(findMax([5])); //5