# JavaScript Operators

## Table of Contents
1. [Arithmetic Operators](#arithmetic-operators)
2. [Comparison Operators](#comparison-operators)
3. [Logical Operators](#logical-operators)
4. [Assignment Operators](#assignment-operators)
5. [Bitwise Operators](#bitwise-operators)
6. [Special Operators](#special-operators)

---

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `let x = 5; x++` | `6` |
| `--` | Decrement | `let x = 5; x--` | `4` |

### Key Points:
- **Pre-increment (++i)**: Increments and returns the new value
- **Post-increment (i++)**: Increments and returns the old value
- **Modulus (%)**: Returns remainder after division
- **Exponentiation (**)**: Raises base to the power of exponent

### Examples:
```javascript
let a = 10, b = 5;
console.log(a + b);  // 15
console.log(a % b);  // 0
console.log(2 ** 3); // 8

let x = 5;
console.log(x++);    // 5 (returns old value)
console.log(++x);    // 7 (returns new value)
```

---

## Comparison Operators

Comparison operators are used to compare two values and return a boolean (true/false).

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal to (loose equality) | `5 == "5"` | `true` |
| `===` | Equal to (strict equality) | `5 === "5"` | `false` |
| `!=` | Not equal to (loose) | `5 != "5"` | `false` |
| `!==` | Not equal to (strict) | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal | `10 >= 10` | `true` |
| `<=` | Less than or equal | `10 <= 5` | `false` |

### Key Points:
- **== vs ===**: 
  - `==` performs type coercion (e.g., `5 == "5"` is true)
  - `===` checks both value and type (e.g., `5 === "5"` is false)
- **Always prefer `===` for comparisons** to avoid unexpected behavior

### Examples:
```javascript
console.log(5 == "5");    // true (loose equality)
console.log(5 === "5");   // false (strict equality)
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

---

## Logical Operators

Logical operators are used to combine conditional statements.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `&&` | AND | `true && false` | `false` |
| `\|\|` | OR | `true \|\| false` | `true` |
| `!` | NOT | `!true` | `false` |

### Truthy and Falsy Values:
**Falsy Values:** `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`
**Truthy Values:** Everything else

### Short-circuit Evaluation:
- **&&**: Returns first falsy value or last value if all truthy
- **||**: Returns first truthy value or last value if all falsy

### Examples:
```javascript
console.log(true && true);   // true
console.log(true && false);  // false
console.log(true || false);  // true

// Short-circuit evaluation
console.log(5 && 10);        // 10 (returns last truthy)
console.log(0 || 10);        // 10 (returns first truthy)
console.log(!true);          // false
```

---

## Assignment Operators

Assignment operators are used to assign values to variables.

| Operator | Example | Equivalent |
|----------|---------|-----------|
| `=` | `x = 5` | - |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 5` | `x = x - 5` |
| `*=` | `x *= 5` | `x = x * 5` |
| `/=` | `x /= 5` | `x = x / 5` |
| `%=` | `x %= 5` | `x = x % 5` |
| `**=` | `x **= 5` | `x = x ** 5` |
| `&&=` | `x &&= 5` | `x && (x = 5)` |
| `\|\|=` | `x \|\|= 5` | `x \|\| (x = 5)` |
| `??=` | `x ??= 5` | `x ?? (x = 5)` |

### Logical Assignment Operators (ES2021):
- **&&=**: Assigns only if left side is truthy
- **||=**: Assigns only if left side is falsy
- **??=**: Assigns only if left side is null/undefined

### Examples:
```javascript
let x = 10;
x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24

let a = null;
a ||= 10; // a = 10
```

---

## Bitwise Operators

Bitwise operators work on binary representations of integers.

| Operator | Name | Example |
|----------|------|---------|
| `&` | AND | `5 & 3` = `1` |
| `\|` | OR | `5 \| 3` = `7` |
| `^` | XOR | `5 ^ 3` = `6` |
| `~` | NOT | `~5` = `-6` |
| `<<` | Left Shift | `5 << 1` = `10` |
| `>>` | Right Shift | `5 >> 1` = `2` |
| `>>>` | Unsigned Right Shift | `5 >>> 1` = `2` |

### How They Work (using 5 = 0101 and 3 = 0011):
- **&**: `0101 & 0011 = 0001` (1)
- **|**: `0101 | 0011 = 0111` (7)
- **^**: `0101 ^ 0011 = 0110` (6)
- **~**: `~0101 = 1010` (two's complement)
- **<<**: Left shift by 1 position
- **>>**: Right shift by 1 position (preserves sign)

### Examples:
```javascript
console.log(5 & 3);    // 1
console.log(5 | 3);    // 7
console.log(5 ^ 3);    // 6
console.log(~5);       // -6
console.log(5 << 1);   // 10 (5 * 2)
console.log(5 >> 1);   // 2 (5 / 2)
```

---

## Special Operators

### Ternary Operator (Conditional)
```javascript
condition ? valueIfTrue : valueIfFalse
```

Example:
```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

### Nullish Coalescing Operator (??)
Returns the right operand when the left is `null` or `undefined`.

```javascript
let a = null;
let b = a ?? "default"; // "default"

let c = 0;
let d = c ?? "default"; // 0 (0 is not nullish)
```

### Optional Chaining Operator (?.)
Safely accesses nested properties.

```javascript
let obj = { user: { name: "John" } };
console.log(obj.user?.name);     // "John"
console.log(obj.admin?.name);    // undefined (no error)
```

### Typeof Operator
Returns the type of a variable.

```javascript
console.log(typeof 5);        // "number"
console.log(typeof "hello");  // "string"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof {});       // "object"
console.log(typeof []);       // "object" (arrays are objects)
console.log(typeof null);     // "object" (quirk in JavaScript!)
```

### Instanceof Operator
Checks if an object is an instance of a class.

```javascript
let arr = [1, 2, 3];
console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true

let date = new Date();
console.log(date instanceof Date);   // true
```

### In Operator
Checks if a property exists in an object.

```javascript
let obj = { name: "John", age: 30 };
console.log("name" in obj);   // true
console.log("city" in obj);   // false
```

### Spread Operator (...)
Expands an iterable into individual elements.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### Delete Operator
Deletes a property from an object.

```javascript
let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }
```

---

## Operator Precedence (High to Low)

1. **()** - Parentheses
2. **. []** - Member access
3. **++ -- ~ !** - Unary operators
4. **\* / %** - Multiplication, Division, Modulus
5. **+ -** - Addition, Subtraction
6. **<< >> >>>** - Bitwise shifts
7. **< <= > >=** - Comparison
8. **== != === !==** - Equality
9. **&** - Bitwise AND
10. **^** - Bitwise XOR
11. **|** - Bitwise OR
12. **&&** - Logical AND
13. **||** - Logical OR
14. **??** - Nullish Coalescing
15. **? :** - Ternary
16. **= += -= \*= /= etc.** - Assignment

---

## Interview Questions & Answers

### 1. **Know the difference between == and ===** - This is crucial for JavaScript!

**Question:** What's the difference between `==` and `===` in JavaScript?

**Answer:**
- **`==` (Loose Equality)**: Compares values with type coercion. JavaScript tries to convert operands to the same type before comparing.
- **`===` (Strict Equality)**: Compares both value and type without any type coercion. Much safer and recommended.

**Examples:**
```javascript
5 == "5"      // true (type coercion converts string to number)
5 === "5"     // false (different types)
null == undefined   // true
null === undefined  // false
0 == false    // true
0 === false   // false
```

**Interview Answer:** "Always use `===` in production code. The loose equality operator `==` can lead to unexpected behavior due to type coercion. For example, `5 == '5'` returns true because JavaScript coerces the string to a number, but `5 === '5'` returns false because they're different types."

---

### 2. **Understand operator precedence** - Can affect code behavior significantly

**Question:** How does operator precedence affect code execution? Give an example.

**Answer:**
Operator precedence determines which operations are evaluated first. Without understanding it, you can get unexpected results.

**Examples:**
```javascript
// Multiplication before addition
console.log(2 + 3 * 4);    // 14 (not 20)
                           // Because * has higher precedence than +

// Parentheses override precedence
console.log((2 + 3) * 4);  // 20

// Assignment is lowest precedence
let x = y = z = 5;  // Right to left: z = 5, y = 5, x = 5

// Comparison operators vs logical operators
console.log(5 > 3 && 2 < 4);  // true (comparisons first, then &&)
```

**Interview Answer:** "Operator precedence determines the order of evaluation. For example, `2 + 3 * 4` evaluates to 14 because multiplication has higher precedence than addition. If you want different behavior, use parentheses: `(2 + 3) * 4` equals 20. When in doubt, use parentheses to make your intent clear."

---

### 3. **Be familiar with falsy/truthy values** - Important for logical operations

**Question:** What are falsy and truthy values in JavaScript? List all falsy values.

**Answer:**
Falsy values are those that coerce to `false` in a boolean context. Everything else is truthy.

**All Falsy Values (6 total):**
1. `false` - Boolean false
2. `0` - Zero
3. `""` - Empty string
4. `null` - No value
5. `undefined` - Uninitialized variable
6. `NaN` - Not a Number

**Everything else is truthy:** `1`, `"hello"`, `{}`, `[]`, `true`, `function(){}`, etc.

**Examples:**
```javascript
if ("") console.log("truthy");     // Won't execute
if ("hello") console.log("truthy"); // Executes

if (0) console.log("truthy");      // Won't execute
if (1) console.log("truthy");      // Executes

if ([]) console.log("truthy");     // Executes (arrays are truthy!)
if ({}) console.log("truthy");     // Executes (objects are truthy!)
```

**Interview Answer:** "There are exactly 6 falsy values in JavaScript: false, 0, empty string, null, undefined, and NaN. Everything else is truthy, including empty objects and arrays. This is important to understand when using logical operators or conditional statements, because `if ([])` will execute since arrays are truthy objects."

---

### 4. **Know bitwise operations basics** - Often asked in technical interviews

**Question:** Explain bitwise operators with a practical example. When would you use them?

**Answer:**
Bitwise operators work on binary representations. Common use cases: checking permissions, flags, and performance-critical operations.

**Examples:**
```javascript
// Check if a bit is set (testing a permission)
let permissions = 5;  // Binary: 0101
console.log(permissions & 1);  // 1 (last bit is set)

// Check if even or odd using bitwise AND
console.log(5 & 1);    // 1 (odd)
console.log(4 & 1);    // 0 (even)

// Check if power of 2
let n = 8;
console.log((n & (n - 1)) === 0 && n > 0);  // true

// Set a specific bit
let flags = 0;
flags |= (1 << 2);  // Set bit at position 2
console.log(flags); // 4 (Binary: 0100)
```

**Interview Answer:** "Bitwise operators are useful for flag management and permissions. For example, in a user permissions system, you can represent multiple permissions as bits in a single number. To check if a user has permission: `(userPermissions & PERMISSION_FLAG) !== 0`. They're also used for performance optimizations when checking if a number is even (using `num & 1`) or if it's a power of 2 (using `(n & (n-1)) === 0`)."

---

### 5. **Understand short-circuit evaluation** - Can optimize code and prevent errors

**Question:** What is short-circuit evaluation and how do you use it to write better code?

**Answer:**
Short-circuit evaluation means that logical operators don't always evaluate all operands. This prevents unnecessary computation and can prevent errors.

**How it works:**
- **`&&`** (AND): If left is falsy, right is not evaluated (returns left)
- **`||`** (OR): If left is truthy, right is not evaluated (returns left)

**Examples:**
```javascript
// Practical: Avoid null reference errors
const user = null;
console.log(user && user.name);  // null (doesn't evaluate user.name)

// Without short-circuit (would error)
console.log(user.name);  // TypeError!

// Using || for default values
const name = userInput || "Guest";  // Uses "Guest" if userInput is falsy

// Performance: Skip expensive operation
if (x > 0 && expensive_function()) {
    // expensive_function only called if x > 0
}
```

**Interview Answer:** "Short-circuit evaluation optimizes code and prevents errors. With `&&`, if the left operand is falsy, the right side isn't evaluated and the expression returns the falsy value. With `||`, if the left is truthy, it returns immediately. This lets you safely check properties: `user && user.name` won't throw an error if user is null. It also saves performance—if the first condition in `x > 0 && expensive()` is false, the expensive function never runs."

---

### 6. **Master the ternary operator** - Used extensively in modern JavaScript

**Question:** How do you use the ternary operator? What are alternatives and when is it appropriate?

**Answer:**
The ternary operator is a compact way to write conditional logic. Syntax: `condition ? valueIfTrue : valueIfFalse`

**Examples:**
```javascript
// Simple ternary
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";

// Nested ternary (grades)
let score = 75;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// In JSX (React)
<div>{isLoaded ? <Content /> : <Spinner />}</div>

// Alternative: if-else
let status;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}

// Alternative: Logical operators
let status = age >= 18 && "Adult" || "Minor";
```

**Interview Answer:** "The ternary operator is perfect for simple, single condition replacements for if-else. The syntax is `condition ? trueValue : falseValue`. It's widely used in modern JavaScript and especially in React. However, avoid nesting ternaries too deeply—they become hard to read. For complex logic, use if-else statements instead. A good rule: if you need to ask 'is this readable?', use if-else."

---

### 7. **Know special operators like ?., ??, ...** - Modern JavaScript features

**Question:** Explain the optional chaining (`?.`), nullish coalescing (`??`), and spread (`...`) operators.

**Answer:**

**Optional Chaining (`?.`)** - Safely access nested properties
```javascript
let user = { profile: { name: "John" } };
console.log(user?.profile?.name);    // "John"
console.log(user?.address?.street);  // undefined (no error!)

// Method chaining
console.log(user?.getEmail?.());     // undefined if method doesn't exist
```

**Nullish Coalescing (`??`)** - Default for null/undefined only
```javascript
let config = null;
let value = config ?? "default";     // "default"

// Different from || which uses all falsy values
let count = 0;
console.log(count || 10);            // 10 (wrong! 0 is valid)
console.log(count ?? 10);            // 0 (correct! null/undefined only)
```

**Spread Operator (`...`)** - Expand iterables
```javascript
// Arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];          // [1, 2, 3, 4, 5]

// Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };        // { a: 1, b: 2, c: 3 }

// Function arguments
function sum(a, b, c) { return a + b + c; }
sum(...[1, 2, 3]);                   // 6
```

**Interview Answer:** "Optional chaining (`?.`) safely accesses nested properties and returns undefined if any level doesn't exist—no errors thrown. Nullish coalescing (`??`) provides a default value only for null or undefined (unlike `||` which triggers on all falsy values). The spread operator (`...`) expands arrays and objects, useful for copying, merging, and passing arguments. These are modern ES2020+ features that make code more concise and safer."