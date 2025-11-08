// Variable Scope in JavaScript
// var - function-scoped or globally-scoped, can be reassigned
// let - block-scoped, can be reassigned
// const - block-scoped, cannot be reassigned

function variableScopeExample() {
    if (true) {
        var functionScopedVar = "I am function-scoped (var)";
        let blockScopedLet = "I am block-scoped (let)";
        const blockScopedConst = "I am block-scoped (const)";
    }
    
    console.log(functionScopedVar); // can be accessed outside the block but withing the function
    console.log(blockScopedLet); // can not accessible outside the if block here
    console.log(blockScopedConst); // can not accessible outside the if block here
}

variableScopeExample();
// Summary:
// - Variables declared with var are accessible outside the block they are defined in, but within the function.
// - Variables declared with let and const are only accessible within the block they are defined in.
// - It is generally recommended to use let and const for better scope management and to avoid unintended behaviors associated with var.