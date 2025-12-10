# JavaScript Variables

## Table of Contents
1. [Introduction](#introduction)
2. [Variable Declaration Keywords](#variable-declaration-keywords)
3. [Data Types](#data-types)
4. [Variable Scope](#variable-scope)
5. [Hoisting](#hoisting)
6. [Type Coercion](#type-coercion)
7. [Naming Conventions](#naming-conventions)
8. [Best Practices](#best-practices)

---

## Introduction

Variables are containers for storing data values. JavaScript is a **loosely typed language**, meaning variables can hold any data type and can change types at runtime.

### Basic Syntax:
```javascript
let variableName = value;
```

---

## Variable Declaration Keywords

JavaScript provides three ways to declare variables: `var`, `let`, and `const`.

| Keyword | Scope | Hoisting | Reassignment | Redeclaration | Use Case |
|---------|-------|----------|--------------|---------------|----------|
| `var` | Function | Yes | Yes | Yes | Legacy code |
| `let` | Block | No (TDZ) | Yes | No | Modern variables |
| `const` | Block | No (TDZ) | No | No | Constants & objects |

### var Keyword
- **Scope**: Function scope (not block scope)
- **Hoisting**: Yes (initialized with `undefined`)
- **Reassignment**: Yes
- **Redeclaration**: Yes
- **Use**: Avoid in modern JavaScript (legacy)

```javascript
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // 10 (accessible outside block!)
}

var a = 5;
var a = 10;  // Can redeclare
console.log(a);  // 10
```

### let Keyword
- **Scope**: Block scope (within `{}`)
- **Hoisting**: Yes, but in Temporal Dead Zone (TDZ)
- **Reassignment**: Yes
- **Redeclaration**: No
- **Use**: Default choice for variables

```javascript
function example() {
    if (true) {
        let x = 10;
    }
    console.log(x);  // ReferenceError: x is not defined
}

let a = 5;
a = 10;  // Can reassign
console.log(a);  // 10

let b = 5;
let b = 10;  // SyntaxError: Identifier 'b' has already been declared
```

### const Keyword
- **Scope**: Block scope
- **Hoisting**: Yes, but in Temporal Dead Zone (TDZ)
- **Reassignment**: No (but object properties can be modified)
- **Redeclaration**: No
- **Use**: For values that should not be reassigned

```javascript
const PI = 3.14159;
PI = 3.14;  // TypeError: Assignment to constant variable

const obj = { name: "John" };
obj.name = "Jane";  // Allowed! (modifying object properties)
obj = {};  // TypeError: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4);  // Allowed! (modifying array)
arr = [];  // TypeError: Assignment to constant variable
```

### Key Differences Summary:
```javascript
// var - Function scoped
for (var i = 0; i < 3; i++) {}
console.log(i);  // 3 (accessible outside loop)

// let - Block scoped
for (let j = 0; j < 3; j++) {}
console.log(j);  // ReferenceError: j is not defined

// const - Cannot be reassigned
const k = 5;
// k = 10;  // Error!
```

---

## Data Types

JavaScript has two categories of data types: **Primitive** and **Reference**.

### Primitive Data Types

Primitive types are immutable and passed by value.

| Type | Description | Example |
|------|-------------|---------|
| `number` | Integer or decimal | `42`, `3.14`, `-5`, `NaN`, `Infinity` |
| `string` | Text enclosed in quotes | `"hello"`, `'world'`, `` `template` `` |
| `boolean` | True or false | `true`, `false` |
| `undefined` | Variable declared but not assigned | `let x;` then `x` |
| `null` | Intentional absence of value | `let x = null;` |
| `symbol` | Unique identifier (ES6) | `Symbol("id")` |
| `bigint` | Large integers beyond 2^53 (ES2020) | `123n`, `BigInt(456)` |

### Reference Data Types

Reference types are mutable and passed by reference.

| Type | Description | Example |
|------|-------------|---------|
| `object` | Collection of key-value pairs | `{ name: "John", age: 30 }` |
| `array` | Ordered collection | `[1, 2, 3, "hello"]` |
| `function` | Reusable block of code | `function add(a, b) {}` |
| `date` | Date and time | `new Date()` |
| `regex` | Pattern matching | `/abc/g` |

### Examples:
```javascript
// Primitive types
let num = 42;
let str = "hello";
let bool = true;
let undef = undefined;
let nothing = null;
let sym = Symbol("unique");
let big = 1234567890123456789n;

console.log(typeof num);     // "number"
console.log(typeof str);     // "string"
console.log(typeof bool);    // "boolean"
console.log(typeof undef);   // "undefined"
console.log(typeof nothing); // "object" (quirk!)
console.log(typeof sym);     // "symbol"
console.log(typeof big);     // "bigint"

// Reference types
let obj = { name: "John" };
let arr = [1, 2, 3];
let func = function() {};
let date = new Date();
let regex = /hello/g;

console.log(typeof obj);     // "object"
console.log(typeof arr);     // "object" (arrays are objects)
console.log(typeof func);    // "function"
console.log(typeof date);    // "object"
console.log(typeof regex);   // "object"
```

### Passing by Value vs Reference:
```javascript
// Primitive (passed by value)
let a = 5;
let b = a;
b = 10;
console.log(a);  // 5 (unchanged)
console.log(b);  // 10

// Reference (passed by reference)
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name);  // "Jane" (changed!)
console.log(obj2.name);  // "Jane"

// To copy an object (shallow copy)
let obj3 = { ...obj1 };
obj3.name = "Bob";
console.log(obj1.name);  // "Jane" (unchanged)
```

---

## Variable Scope

Scope determines where a variable is accessible in your code.

### Global Scope
Variables accessible everywhere in the code.

```javascript
let globalVar = "I'm global";

function test() {
    console.log(globalVar);  // "I'm global"
}

console.log(globalVar);      // "I'm global"
```

### Function Scope
Variables declared with `var` are function-scoped.

```javascript
function example() {
    var funcVar = "I'm function scoped";
    console.log(funcVar);    // "I'm function scoped"
}

console.log(funcVar);        // ReferenceError
```

### Block Scope
Variables declared with `let` and `const` are block-scoped.

```javascript
{
    let blockVar = "I'm block scoped";
    const blockConst = "Also block scoped";
}

console.log(blockVar);   // ReferenceError
console.log(blockConst); // ReferenceError

// if statement block
if (true) {
    let x = 10;
}
console.log(x);  // ReferenceError

// for loop block
for (let i = 0; i < 3; i++) {
    // i is only accessible here
}
console.log(i);  // ReferenceError
```

### Lexical Scope (Closure)
Inner functions have access to outer function variables.

```javascript
function outer() {
    let outerVar = "outer";
    
    function inner() {
        let innerVar = "inner";
        console.log(outerVar);   // "outer" (can access)
        console.log(innerVar);   // "inner"
    }
    
    inner();
    console.log(innerVar);       // ReferenceError
}

outer();
```

---

## Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

### var Hoisting
`var` declarations are hoisted and initialized with `undefined`.

```javascript
console.log(x);  // undefined (not an error!)
var x = 5;
console.log(x);  // 5

// This is how JavaScript interprets it:
// var x;          // declaration hoisted
// console.log(x); // undefined
// x = 5;
// console.log(x); // 5
```

### let and const Hoisting
`let` and `const` are hoisted but not initialized. They remain in **Temporal Dead Zone (TDZ)** until the declaration is reached.

```javascript
console.log(y);  // ReferenceError: Cannot access 'y' before initialization
let y = 5;

console.log(z);  // ReferenceError: Cannot access 'z' before initialization
const z = 10;

// Temporal Dead Zone
{
    console.log(x);  // ReferenceError (in TDZ)
    let x = 5;
    console.log(x);  // 5
}
```

### Function Hoisting
Function declarations are fully hoisted.

```javascript
console.log(add(2, 3));  // 5 (works!)

function add(a, b) {
    return a + b;
}

// But function expressions are NOT hoisted
console.log(multiply(2, 3));  // TypeError: multiply is not a function

var multiply = function(a, b) {
    return a * b;
};
```

---

## Type Coercion

JavaScript automatically converts data types in certain situations.

### Implicit Type Coercion
```javascript
// String concatenation
console.log("5" + 3);        // "53" (number converted to string)
console.log("5" + true);     // "5true"
console.log("5" + null);     // "5null"
console.log("5" + undefined);// "5undefined"

// Arithmetic operations
console.log("5" - 3);        // 2 (string converted to number)
console.log("5" * 3);        // 15
console.log("5" / 3);        // 1.666...
console.log("5" % 3);        // 2

// Comparison
console.log("5" == 5);       // true (type coercion)
console.log("5" === 5);      // false (strict equality)
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Logical operations
console.log(1 && "hello");   // "hello" (first truthy)
console.log(0 || "hello");   // "hello" (first truthy)
```

### Explicit Type Conversion
```javascript
// String conversion
console.log(String(123));        // "123"
console.log(String(true));       // "true"
console.log((123).toString());   // "123"

// Number conversion
console.log(Number("123"));      // 123
console.log(Number("123.45"));   // 123.45
console.log(Number("hello"));    // NaN
console.log(parseInt("123"));    // 123
console.log(parseFloat("123.45"));// 123.45

// Boolean conversion
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("hello"));   // true
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
```

---

## Naming Conventions

### camelCase (Recommended for Variables and Functions)
```javascript
let firstName = "John";
let lastName = "Doe";
let isActive = true;
let myVariableName = 123;

function calculateTotal() {}
function getUserData() {}
```

### PascalCase (Used for Classes and Constructors)
```javascript
class Person {}
class UserAccount {}
function MyConstructor() {}
```

### UPPER_SNAKE_CASE (Used for Constants)
```javascript
const MAX_USERS = 100;
const API_KEY = "secret-key";
const DEFAULT_TIMEOUT = 5000;
```

### snake_case (Sometimes used in JavaScript, but less common)
```javascript
let first_name = "John";  // Not recommended
let user_account = {};    // Not recommended
```

### Rules for Valid Variable Names:
- Must start with a letter, underscore (_), or dollar sign ($)
- Can contain letters, digits, underscores, and dollar signs
- Are case-sensitive
- Cannot be JavaScript keywords

```javascript
let valid_name = 1;
let $name = 2;
let _name = 3;
let name123 = 4;

// let 123name = 5;  // Invalid - starts with digit
// let for = 6;      // Invalid - reserved keyword
```

---

## Best Practices

### 1. Use `const` by Default
Use `const` for values that won't be reassigned. It prevents accidental mutations.

```javascript
const PI = 3.14159;         // Won't change
const user = { name: "John" };  // Use const even if properties change
```

### 2. Use `let` for Variables That Need to Change
```javascript
let count = 0;
count++;  // Reassignment needed
```

### 3. Avoid `var` in Modern JavaScript
```javascript
// Don't do this
var oldStyle = 5;

// Do this instead
const modern = 5;
```

### 4. Declare Variables Close to Their Usage
```javascript
function process() {
    // Good: declare just before use
    let data = fetchData();
    return data;
    
    // Bad: declare at top
    // let data;
    // // ... many lines of code ...
    // data = fetchData();
}
```

### 5. Use Meaningful Names
```javascript
// Good
const maxRetries = 3;
const userEmail = "user@example.com";
const isAdmin = true;

// Bad
const x = 3;
const y = "user@example.com";
const z = true;
```

### 6. Initialize Variables
```javascript
// Avoid undefined values
const items = [];  // Instead of let items;
const config = {}; // Instead of let config;
const count = 0;   // Instead of let count;
```

### 7. Group Related Variables
```javascript
// Good: related variables together
const firstName = "John";
const lastName = "Doe";
const email = "john@example.com";

// Good: use objects for related data
const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com"
};
```

### 8. Avoid Global Variables
```javascript
// Bad: pollutes global scope
globalData = "something";

// Good: use functions to encapsulate
function getData() {
    let data = "something";
    return data;
}
```

### 9. Use Destructuring
```javascript
// Instead of
const user = { name: "John", age: 30 };
const name = user.name;
const age = user.age;

// Do this
const { name, age } = user;

// Array destructuring
const [first, second] = [1, 2, 3];
```

### 10. Be Careful with Hoisting
```javascript
// Avoid relying on hoisting
function example() {
    console.log(x);  // Don't do this
    let x = 5;
}

// Better: declare at top
function better() {
    let x = 5;
    console.log(x);
}
```

---

## Common Interview Questions

1. **What's the difference between var, let, and const?**
   - `var` is function-scoped and hoisted with undefined
   - `let` is block-scoped and hoisted but in TDZ
   - `const` is block-scoped, hoisted in TDZ, and cannot be reassigned

2. **What is hoisting?**
   - JavaScript moves declarations to the top of their scope before execution
   - `var` is initialized with `undefined`, while `let`/`const` remain in TDZ

3. **What is Temporal Dead Zone (TDZ)?**
   - The period between entering a block and reaching the declaration of `let`/`const`
   - Accessing the variable in TDZ throws ReferenceError

4. **Can you reassign a const variable?**
   - No, but you can modify its properties if it's an object or array
   - `const obj = {}; obj.prop = 1;` is allowed but `obj = {}` is not

5. **What's the difference between undefined and null?**
   - `undefined` means a variable hasn't been assigned a value
   - `null` is an intentional absence of value assigned by programmer

6. **Explain scope and lexical scope?**
   - Scope determines where variables are accessible
   - Lexical scope means inner functions can access outer function variables

7. **What is type coercion in JavaScript?**
   - Automatic conversion of data types in certain operations
   - Example: `"5" + 3` becomes `"53"` and `"5" - 3` becomes `2`

8. **Why use const for objects and arrays if they can be modified?**
   - It prevents reassignment of the variable itself
   - It signals that the reference won't change, even if contents do

---

## Summary Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Reassignable | Yes | Yes | No |
| Redeclarable | Yes | No | No |
| Must Initialize | No | No | Yes* |
| Modern Use | Avoid | Default | Default |

*const must be initialized at declaration in most cases
