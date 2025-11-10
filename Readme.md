# 📚 Learn Multiple Programming Languages

<div align="center">

![Language Distribution](https://img.shields.io/badge/JavaScript-64.9%25-yellow)
![Java](https://img.shields.io/badge/Java-24.5%25-orange)
![Python](https://img.shields.io/badge/Python-8.6%25-blue)
![C++](https://img.shields.io/badge/C++-1.2%25-purple)
![HTML](https://img.shields.io/badge/HTML-0.8%25-red)

**A comprehensive repository for learning and mastering multiple programming languages**

</div>

---

## 🎯 Overview

This repository is designed to help developers learn and compare different programming languages side by side. Whether you're a beginner or an experienced developer looking to expand your skillset, you'll find valuable resources and examples here.

## 🌟 Supported Languages

<table>
<tr>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" width="60" height="60" alt="C++"/>
<br><strong>C++</strong>
<br>Systems Programming
</td>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" width="60" height="60" alt="Java"/>
<br><strong>Java</strong>
<br>Enterprise Applications
</td>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="60" height="60" alt="Python"/>
<br><strong>Python</strong>
<br>Data Science & Automation
</td>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="60" height="60" alt="JavaScript"/>
<br><strong>JavaScript</strong>
<br>Web Development
</td>
</tr>
</table>

---

## 📖 Table of Contents

- [Key Concepts](#-key-concepts)
  - [1. Data Types](#1-data-types)
  - [2. Operators](#2-operators)
  - [3. Control Flow](#3-control-flow)
  - [4. Loops](#4-loops)
  - [5. Strings](#5-strings)
  - [6. Arrays](#6-arrays)
  - [7. Functions](#7-functions)
- [Language-Specific Guides](#-language-specific-guides)
  - [C++ Guide](#c-guide)
  - [Java Guide](#java-guide)
  - [Python Guide](#python-guide)
  - [JavaScript Guide](#javascript-guide)
- [Learning Resources](#-learning-resources)
- [Getting Started](#-getting-started)
- [Contributing](#-contributing)

---

## 🔑 Key Concepts

### 1. Data Types

Understanding data types is fundamental to programming. Data types define the kind of data a variable can hold and the operations that can be performed on it.

#### 🔹 Primitive Data Types
Basic types built into a programming language (e.g., `int`, `char`, `float`, `boolean`).

#### 🔹 Non-Primitive Data Types
Also known as reference types, these include classes, arrays, and interfaces.

---

### 2. Operators

Operators are symbols that perform operations on variables and values.

#### Common Operator Types:
- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%` (modulus)
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT)
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
- **Bitwise Operators**: `&`, `|`, `^`, `~`, `<<`, `>>`

---

### 3. Control Flow

Control flow statements determine the order in which code is executed.

- **Conditional Statements**: `if`, `else if`, `else`, `switch`
- **Ternary Operator**: `condition ? value1 : value2`

---

### 4. Loops

Loops allow you to execute a block of code repeatedly.

- **For Loop**: When the number of iterations is known
- **While Loop**: When the condition is checked before execution
- **Do-While Loop**: When the code must execute at least once
- **For-Each Loop**: For iterating over collections

---

### 5. Strings

Strings are sequences of characters used to represent text.

#### Common String Operations:
- Length/Size calculation
- Concatenation
- Substring extraction
- Character access
- Case conversion
- String interpolation/formatting

---

### 6. Arrays

Arrays are collections of elements stored at contiguous memory locations.

#### Common Array Operations:
- Accessing elements by index
- Adding/removing elements
- Iterating over elements
- Searching and sorting
- Array methods (map, filter, reduce, etc.)

---

### 7. Functions

Functions are reusable blocks of code that perform specific tasks.

#### Function Concepts:
- Function declaration and definition
- Parameters and arguments
- Return values
- Scope and closures
- Anonymous functions
- Arrow functions (in modern languages)

---

## 🗂️ Language-Specific Guides

### C++ Guide

<details>
<summary><b>📘 Click to expand C++ Data Types</b></summary>

#### 🟦 Primitive Data Types in C++

| Type | Description | Size | Range |
|------|-------------|------|-------|
| `int` | Integer type | 4 bytes | -2,147,483,648 to 2,147,483,647 |
| `char` | Character type | 1 byte | -128 to 127 or 0 to 255 |
| `bool` | Boolean type | 1 byte | true or false |
| `float` | Single precision floating-point | 4 bytes | ±3.4e±38 (~7 digits) |
| `double` | Double precision floating-point | 8 bytes | ±1.7e±308 (~15 digits) |
| `void` | Represents absence of type | - | - |
| `wchar_t` | Wide character type | 2 or 4 bytes | 1 wide character |

#### 🟦 Non-Primitive Data Types in C++

- **Array**: Collection of elements of the same type
- **Pointers**: Variables that hold memory addresses
- **References**: Alias for another variable
- **Structure (struct)**: Custom data types grouping different data types
- **Union**: Similar to structure but with shared memory
- **Classes**: User-defined data types (with methods and properties)
- **Enums**: Enumeration types

**📚 Learning Resources:**
- [C++ Official Documentation](https://isocpp.org/)
- [LearnCpp.com](https://www.learncpp.com/)
- [GeeksforGeeks C++](https://www.geeksforgeeks.org/c-plus-plus/)

</details>

---

### Java Guide

<details>
<summary><b>☕ Click to expand Java Data Types</b></summary>

#### 🟨 Primitive Data Types in Java

| Type | Description | Size | Range |
|------|-------------|------|-------|
| `byte` | 8-bit integer | 1 byte | -128 to 127 |
| `short` | 16-bit integer | 2 bytes | -32,768 to 32,767 |
| `int` | 32-bit integer | 4 bytes | -2³¹ to 2³¹-1 |
| `long` | 64-bit integer | 8 bytes | -2⁶³ to 2⁶³-1 |
| `float` | Single precision floating-point | 4 bytes | ±3.4e±38 (~7 digits) |
| `double` | Double precision floating-point | 8 bytes | ±1.7e±308 (~15 digits) |
| `char` | 16-bit Unicode character | 2 bytes | 0 to 65,535 |
| `boolean` | Boolean type | 1 bit | true or false |

#### 🟨 Non-Primitive Data Types in Java

- **String**: Sequence of characters (immutable)
- **Arrays**: Collection of elements of the same type
- **Classes**: User-defined data types (with methods and properties)
- **Interfaces**: Abstract types used to specify behavior
- **Enums**: Enumeration types
- **Collections**: ArrayList, LinkedList, HashMap, HashSet, etc.

**📚 Learning Resources:**
- [Oracle Java Documentation](https://docs.oracle.com/en/java/)
- [Java Tutorial - W3Schools](https://www.w3schools.com/java/)
- [Java Programming - GeeksforGeeks](https://www.geeksforgeeks.org/java/)

</details>

---

### Python Guide

<details>
<summary><b>🐍 Click to expand Python Data Types</b></summary>

#### 🟩 Primitive Data Types in Python

| Type | Description | Example |
|------|-------------|---------|
| `int` | Integer type (unlimited precision) | `42`, `-17`, `1000000` |
| `float` | Floating-point type | `3.14`, `-0.001`, `2.0` |
| `complex` | Complex number type | `3+4j`, `2.5-1.5j` |
| `bool` | Boolean type | `True`, `False` |
| `str` | String type (sequence of characters) | `"Hello"`, `'Python'` |

#### 🟩 Non-Primitive Data Types in Python

- **List**: Ordered, mutable collection of elements → `[1, 2, 3, "hello"]`
- **Tuple**: Ordered, immutable collection of elements → `(1, 2, 3)`
- **Set**: Unordered collection of unique elements → `{1, 2, 3}`
- **Dictionary**: Collection of key-value pairs → `{"name": "John", "age": 30}`
- **Classes**: User-defined data types (with methods and properties)
- **Functions**: First-class objects representing callable functions

**📚 Learning Resources:**
- [Python Official Documentation](https://docs.python.org/3/)
- [Real Python](https://realpython.com/)
- [Python Tutorial - W3Schools](https://www.w3schools.com/python/)
- [Learn Python - Codecademy](https://www.codecademy.com/learn/learn-python-3)

</details>

---

### JavaScript Guide

<details open>
<summary><b>⚡ Click to expand JavaScript Comprehensive Guide</b></summary>

#### 🟧 1. Data Types in JavaScript

##### Primitive Data Types

| Type | Description | Example |
|------|-------------|---------|
| `number` | Numeric type (integers and floating-points) | `42`, `3.14`, `-17` |
| `string` | Sequence of characters | `"Hello"`, `'JavaScript'`, `` `Template` `` |
| `boolean` | Boolean type | `true`, `false` |
| `undefined` | Variable not assigned a value | `let x;` |
| `null` | Intentional absence of any object value | `let x = null;` |
| `symbol` | Unique and immutable identifier (ES6) | `Symbol('id')` |
| `bigint` | Arbitrary-precision integers (ES2020) | `9007199254740991n` |

##### Non-Primitive Data Types

- **Object**: Collection of key-value pairs → `{name: "John", age: 30}`
- **Array**: Ordered collection of elements → `[1, 2, 3, "hello"]`
- **Function**: First-class objects representing callable code
- **Date**: Represents date and time → `new Date()`
- **RegExp**: Represents regular expressions → `/pattern/g`
- **Map**: Collection of key-value pairs with ordered keys (ES6) → `new Map()`
- **Set**: Collection of unique values (ES6) → `new Set()`

---

#### 🟧 2. Operators in JavaScript

##### Comparison Operators

| Operator | Name | Description | Example |
|----------|------|-------------|---------|
| `==` | Loose Equality | Compares values (with type coercion) | `5 == '5'` → `true` |
| `===` | Strict Equality | Compares value AND type | `5 === '5'` → `false` |
| `!=` | Loose Inequality | Not equal (with type coercion) | `5 != '5'` → `false` |
| `!==` | Strict Inequality | Not equal (value OR type) | `5 !== '5'` → `true` |
| `>` | Greater Than | Left value is greater | `10 > 5` → `true` |
| `<` | Less Than | Left value is less | `5 < 10` → `true` |
| `>=` | Greater Than or Equal | Left value is greater or equal | `5 >= 5` → `true` |
| `<=` | Less Than or Equal | Left value is less or equal | `5 <= 10` → `true` |

**⚠️ Important Notes:**
- Use `===` and `!==` to avoid unexpected type coercion
- Objects are compared by reference, not by value
- `NaN` is not equal to anything, including itself (use `isNaN()` to check)

##### Arithmetic Operators

| Operator | Name | Description | Example |
|----------|------|-------------|---------|
| `+` | Addition | Adds two values | `5 + 3` → `8` |
| `-` | Subtraction | Subtracts right from left | `5 - 3` → `2` |
| `*` | Multiplication | Multiplies two values | `5 * 3` → `15` |
| `/` | Division | Divides left by right | `15 / 3` → `5` |
| `%` | Modulus | Returns the remainder | `10 % 3` → `1` |
| `**` | Exponentiation | Raises to power (ES7) | `2 ** 3` → `8` |

**Modulus Operator (`%`)**:
- Returns the remainder after division
- Useful for: checking even/odd numbers, cycling through arrays, pattern detection
- Example: `num % 2 === 0` checks if a number is even

##### Bitwise Operators

| Operator | Name | Description | Example |
|----------|------|-------------|---------|
| `&` | AND | Bitwise AND | `5 & 1` → `1` |
| `\|` | OR | Bitwise OR | `5 \| 1` → `5` |
| `^` | XOR | Bitwise XOR | `5 ^ 1` → `4` |
| `~` | NOT | Bitwise NOT | `~5` → `-6` |
| `<<` | Left Shift | Shifts bits left | `5 << 1` → `10` |
| `>>` | Right Shift | Shifts bits right | `5 >> 1` → `2` |

**💡 Performance Tip:** Bitwise AND (`num & 1`) is faster than modulus (`num % 2`) for checking even/odd numbers!

---

#### 🟧 3. Control Flow & Conditionals

```javascript
// If-Else Statement
if (condition) {
    // code if true
} else if (anotherCondition) {
    // code if anotherCondition is true
} else {
    // code if all conditions are false
}

// Ternary Operator
let result = condition ? valueIfTrue : valueIfFalse;

// Switch Statement
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default code
}
```

---

#### 🟧 4. Loops in JavaScript

| Loop Type | Use Case | Syntax |
|-----------|----------|--------|
| **for** | Known number of iterations | `for (let i = 0; i < 5; i++) { }` |
| **while** | Condition-based iteration | `while (condition) { }` |
| **do...while** | Execute at least once | `do { } while (condition);` |
| **for...in** | Iterate over object properties | `for (let key in obj) { }` |
| **for...of** | Iterate over iterable values | `for (let value of array) { }` |

**📌 Key Differences:**

```javascript
// for...in - iterates over KEYS/INDICES
let arr = [10, 20, 30];
for (let index in arr) {
    console.log(index); // Output: 0, 1, 2
}

// for...of - iterates over VALUES
for (let value of arr) {
    console.log(value); // Output: 10, 20, 30
}
```

---

#### 🟧 5. String Methods

**🔤 Strings are Immutable in JavaScript** - Methods return new strings without modifying the original.

| Method | Description | Example |
|--------|-------------|---------|
| `toUpperCase()` | Convert to uppercase | `"hello".toUpperCase()` → `"HELLO"` |
| `toLowerCase()` | Convert to lowercase | `"HELLO".toLowerCase()` → `"hello"` |
| `charAt(index)` | Get character at index | `"Hello".charAt(0)` → `"H"` |
| `indexOf(substr)` | Find index of substring | `"Hello".indexOf("e")` → `1` |
| `slice(start, end)` | Extract substring | `"Hello".slice(0, 2)` → `"He"` |
| `replace(old, new)` | Replace substring | `"Hi".replace("H", "B")` → `"Bi"` |
| `split(delimiter)` | Split into array | `"a,b,c".split(",")` → `["a","b","c"]` |
| `trim()` | Remove whitespace | `"  hi  ".trim()` → `"hi"` |

**String Interpolation (Template Literals):**

```javascript
let name = "Akash";
let age = 27;
let message = `${name} is ${age} years old`; // Template literals use backticks
```

---

#### 🟧 6. Array Methods

**📊 Arrays are Mutable in JavaScript** - You can modify array elements directly.

##### Basic Array Operations

| Method | Description | Example |
|--------|-------------|---------|
| `length` | Get array length | `arr.length` |
| `push(item)` | Add to end | `arr.push(4)` |
| `pop()` | Remove from end | `arr.pop()` |
| `unshift(item)` | Add to beginning | `arr.unshift(0)` |
| `shift()` | Remove from beginning | `arr.shift()` |
| `slice(start, end)` | Extract portion (non-destructive) | `arr.slice(1, 3)` |
| `splice(start, count)` | Remove/replace elements | `arr.splice(1, 2)` |
| `concat(arr2)` | Merge arrays | `arr1.concat(arr2)` |
| `join(separator)` | Convert to string | `arr.join(", ")` |
| `toString()` | Convert to string | `arr.toString()` |

##### Iteration Methods

| Method | Description | Example |
|--------|-------------|---------|
| `forEach()` | Execute function for each element | `arr.forEach(item => console.log(item))` |
| `map()` | Transform each element | `arr.map(x => x * 2)` |
| `filter()` | Filter elements | `arr.filter(x => x > 5)` |
| `reduce()` | Reduce to single value | `arr.reduce((sum, x) => sum + x, 0)` |
| `find()` | Find first matching element | `arr.find(x => x > 5)` |
| `findIndex()` | Find index of element | `arr.findIndex(x => x > 5)` |

**📝 Practical Example:**

```javascript
let marks = [88, 99, 77, 66, 55, 44, 36, 40, 70];

// Calculate average
let sum = marks.reduce((total, mark) => total + mark, 0);
let average = sum / marks.length;

console.log(average.toFixed(2)); // 63.89
console.log(Math.round(average)); // 64
```

---

#### 🟧 7. User Input & Prompt

```javascript
// prompt() displays a dialog box for user input
const fullname = prompt('Enter your full name: ');
console.log(`Username: @${fullname}${fullname.length}`);
```

**💡 Note:** `prompt()` works in browser environments. For Node.js, use the `readline` module.

---

#### 🟧 8. Advanced Concepts

##### Shallow Copy vs Deep Copy

```javascript
// Shallow copy - nested objects remain references
const obj1 = {a: 10, b: {c: 2}};
const obj2 = {...obj1}; // Spread operator creates shallow copy
obj2.b.c = 40;

console.log(obj1.b.c); // 40 - Original changed!
console.log(obj2.b.c); // 40

// Deep copy - creates completely independent copy
const obj3 = JSON.parse(JSON.stringify(obj1));
```

**⚠️ Important:**
- Objects are assigned by reference
- Shallow copies only copy the first level
- Nested objects still share the same reference

---

#### 🟧 9. Special Values & Edge Cases

```javascript
// NaN (Not-a-Number)
console.log(NaN == NaN);    // false
console.log(NaN === NaN);   // false
console.log(isNaN(NaN));    // true - Use this!

// Undefined vs Null
let x;              // undefined - declared but not assigned
let y = null;       // null - explicitly assigned "no value"

// Type coercion
console.log(5 + "5");    // "55" (number + string = string)
console.log(5 - "5");    // 0 (string converted to number)
console.log(true + 1);   // 2 (true = 1, false = 0)
```

---

**📚 JavaScript Learning Resources:**
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [FreeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [You Don't Know JS (Book Series)](https://github.com/getify/You-Dont-Know-JS)

</details>

---

## 📚 Additional Learning Resources

### 🎓 Online Platforms

| Platform | Description | Best For |
|----------|-------------|----------|
| [freeCodeCamp](https://www.freecodecamp.org/) | Free coding bootcamp | Web Development |
| [Codecademy](https://www.codecademy.com/) | Interactive learning | Beginners |
| [LeetCode](https://leetcode.com/) | Coding challenges | Interview Prep |
| [HackerRank](https://www.hackerrank.com/) | Practice problems | All levels |
| [Coursera](https://www.coursera.org/) | University courses | In-depth learning |
| [Udemy](https://www.udemy.com/) | Video courses | Practical projects |

### 📖 Documentation

- **C++**: [cppreference.com](https://en.cppreference.com/)
- **Java**: [Oracle Java Docs](https://docs.oracle.com/en/java/)
- **Python**: [Python.org Docs](https://docs.python.org/)
- **JavaScript**: [MDN Web Docs](https://developer.mozilla.org/)

### 💡 Practice & Challenges

- [Project Euler](https://projecteuler.net/) - Mathematical programming challenges
- [Codewars](https://www.codewars.com/) - Coding kata practice
- [Exercism](https://exercism.org/) - Mentored learning tracks
- [CodinGame](https://www.codingame.com/) - Gamified coding challenges

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **C++**: GCC/G++ compiler or Visual Studio
- **Java**: JDK 11 or higher
- **Python**: Python 3.8 or higher
- **JavaScript**: Node.js and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Akash9611/Learn_Mulitple_Programming_Languages.git

# Navigate to the project directory
cd Learn_Mulitple_Programming_Languages
```

### Running JavaScript Examples

```bash
# Run any JavaScript file with Node.js
node javaScript/loops.js
node javaScript/arrayExample.js
node javaScript/stringMethods.js

# For browser-based examples (like prompt)
# Open test.html in your browser and check the console
```

---

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🔧 Create a new branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔃 Open a Pull Request

---

## 📊 Repository Stats

![GitHub stars](https://img.shields.io/github/stars/Akash9611/Learn_Mulitple_Programming_Languages?style=social)
![GitHub forks](https://img.shields.io/github/forks/Akash9611/Learn_Mulitple_Programming_Languages?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Akash9611/Learn_Mulitple_Programming_Languages?style=social)

---

## 📝 License

This project is open source and available for educational purposes.

---

## 👤 Author

**Akash9611**

- GitHub: [@Akash9611](https://github.com/Akash9611)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Happy Learning! 🎉**

</div>