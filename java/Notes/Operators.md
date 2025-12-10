# Java Operators

## Table of Contents
1. [Arithmetic Operators](#arithmetic-operators)
2. [Comparison Operators](#comparison-operators)
3. [Logical Operators](#logical-operators)
4. [Assignment Operators](#assignment-operators)
5. [Bitwise Operators](#bitwise-operators)
6. [Special Operators](#special-operators)
7. [Instanceof Operator](#instanceof-operator)

---

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations on numeric values.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `++` | Increment | `int x = 5; x++` | `6` |
| `--` | Decrement | `int x = 5; x--` | `4` |

### Key Points:
- **Pre-increment (++i)**: Increments and returns the new value
- **Post-increment (i++)**: Increments and returns the old value
- **Modulus (%)**: Returns remainder after division (also works with negative numbers)
- **Division with integers**: Returns integer result (e.g., 10 / 3 = 3)

### Examples:
```java
int a = 10, b = 5;
System.out.println(a + b);  // 15
System.out.println(a - b);  // 5
System.out.println(a * b);  // 50
System.out.println(a / b);  // 2
System.out.println(a % b);  // 0

int x = 5;
System.out.println(x++);    // 5 (returns old value, then increments)
System.out.println(++x);    // 7 (increments, then returns new value)

// Division with integers
System.out.println(10 / 3);    // 3 (not 3.33)
System.out.println(10.0 / 3);  // 3.333... (float division)
```

---

## Comparison Operators

Comparison operators are used to compare two values and return a boolean (true/false).

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal to | `5 == 5` | `true` |
| `!=` | Not equal to | `5 != 3` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal | `10 >= 10` | `true` |
| `<=` | Less than or equal | `10 <= 5` | `false` |

### Key Points:
- Comparison operators return boolean values
- **For objects**: Use `.equals()` method for content comparison, not `==`
- **For strings**: Always use `.equals()` or `.compareTo()`, not `==`
- `==` compares object references, not values

### Examples:
```java
System.out.println(5 == 5);    // true
System.out.println(5 != 3);    // true
System.out.println(10 > 5);    // true

// String comparison (WRONG)
String s1 = new String("Hello");
String s2 = new String("Hello");
System.out.println(s1 == s2);      // false (different references)

// String comparison (CORRECT)
System.out.println(s1.equals(s2)); // true (same content)

// Comparing objects
Integer a = new Integer(5);
Integer b = new Integer(5);
System.out.println(a == b);        // false (different references)
System.out.println(a.equals(b));   // true (same value)
```

---

## Logical Operators

Logical operators are used to perform logical operations and combine conditional statements.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `&&` | AND | `true && false` | `false` |
| `\|\|` | OR | `true \|\| false` | `true` |
| `!` | NOT | `!true` | `false` |

### Short-circuit Evaluation:
- **&&**: If left operand is false, right operand is not evaluated
- **||**: If left operand is true, right operand is not evaluated
- This is important for performance and avoiding null pointer exceptions

### Examples:
```java
boolean a = true, b = false;
System.out.println(a && b);    // false
System.out.println(a || b);    // true
System.out.println(!a);        // false

// Short-circuit evaluation
int x = 5;
if (x > 0 && x < 10) {
    System.out.println("x is between 0 and 10"); // true
}

// Using short-circuit to avoid NullPointerException
Object obj = null;
if (obj != null && obj.toString().equals("test")) {
    // Second condition is not evaluated if obj is null
}
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

### Examples:
```java
int x = 10;
x += 5;    // x = 15
x -= 3;    // x = 12
x *= 2;    // x = 24
x /= 4;    // x = 6
x %= 5;    // x = 1

// Chaining assignments
int a, b, c;
a = b = c = 10;  // All assigned value 10
System.out.println(a + " " + b + " " + c); // 10 10 10
```

---

## Bitwise Operators

Bitwise operators work on binary representations of integers.

| Operator | Name | Example |
|----------|------|---------|
| `&` | AND | `5 & 3` = `1` |
| `\|` | OR | `5 \| 3` = `7` |
| `^` | XOR | `5 ^ 3` = `6` |
| `~` | NOT (Complement) | `~5` = `-6` |
| `<<` | Left Shift | `5 << 1` = `10` |
| `>>` | Right Shift | `5 >> 1` = `2` |
| `>>>` | Unsigned Right Shift | `-5 >>> 1` = `2147483645` |

### How They Work (using 5 = 0101 and 3 = 0011):
- **&**: `0101 & 0011 = 0001` (1) - Both bits must be 1
- **|**: `0101 | 0011 = 0111` (7) - At least one bit must be 1
- **^**: `0101 ^ 0011 = 0110` (6) - Bits must be different
- **~**: `~0101 = 1010` (two's complement representation)
- **<<**: Left shift by 1 position (multiply by 2)
- **>>**: Right shift by 1 position (divide by 2, preserves sign)
- **>>>**: Unsigned right shift (fills with 0s regardless of sign)

### Examples:
```java
System.out.println(5 & 3);    // 1 (0101 & 0011 = 0001)
System.out.println(5 | 3);    // 7 (0101 | 0011 = 0111)
System.out.println(5 ^ 3);    // 6 (0101 ^ 0011 = 0110)
System.out.println(~5);       // -6

// Shift operators
System.out.println(5 << 1);   // 10 (multiply by 2)
System.out.println(5 >> 1);   // 2 (divide by 2)
System.out.println(10 >> 2);  // 2 (divide by 4)

// Practical use: Check if bit is set
int num = 5;  // 0101
boolean isBitSet = (num & 1) != 0;  // Check if last bit is 1
System.out.println(isBitSet);       // true
```

### Common Bitwise Use Cases:
1. **Check if number is power of 2**: `(n & (n-1)) == 0`
2. **Check if bit is set**: `(num & (1 << position)) != 0`
3. **Set a bit**: `num |= (1 << position)`
4. **Clear a bit**: `num &= ~(1 << position)`
5. **Toggle a bit**: `num ^= (1 << position)`

---

## Special Operators

### Ternary Operator (Conditional)
```java
condition ? valueIfTrue : valueIfFalse
```

Example:
```java
int age = 18;
String status = age >= 18 ? "Adult" : "Minor";
System.out.println(status);  // Adult

// Nested ternary
int score = 75;
String grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
System.out.println(grade);   // C
```

### String Concatenation Operator (+)
The `+` operator has special behavior for strings.

```java
String name = "John";
int age = 30;
System.out.println("Name: " + name + ", Age: " + age);
// Output: Name: John, Age: 30

// Type coercion
System.out.println(5 + 3);           // 8 (arithmetic)
System.out.println("5" + 3);         // "53" (concatenation)
System.out.println(5 + 3 + "");      // "8" (converted to string)
System.out.println("" + 5 + 3);      // "53" (string concatenation)
```

---

## Instanceof Operator

The `instanceof` operator checks whether an object is an instance of a class, subclass, or interface.

```java
object instanceof Class
```

### Examples:
```java
String str = "Hello";
System.out.println(str instanceof String);     // true
System.out.println(str instanceof Object);     // true

Integer num = 5;
System.out.println(num instanceof Integer);    // true
System.out.println(num instanceof Object);     // true
System.out.println(num instanceof String);     // false

// With inheritance
class Animal {}
class Dog extends Animal {}

Dog dog = new Dog();
System.out.println(dog instanceof Dog);        // true
System.out.println(dog instanceof Animal);     // true
System.out.println(dog instanceof Object);     // true
```

### Usage in Type Casting:
```java
Object obj = "Hello";

// Always check before casting
if (obj instanceof String) {
    String str = (String) obj;
    System.out.println(str.toUpperCase());  // HELLO
}

// Java 16+: Pattern matching with instanceof
if (obj instanceof String str) {
    System.out.println(str.toUpperCase());  // Automatic casting
}
```

---

## Operator Precedence (High to Low)

| Precedence | Operators |
|-----------|-----------|
| 1 | `() [] . :: new` |
| 2 | `++ -- + - ! ~ new (cast)` |
| 3 | `* / %` |
| 4 | `+ -` |
| 5 | `<< >> >>>` |
| 6 | `< > <= >= instanceof` |
| 7 | `== !=` |
| 8 | `&` |
| 9 | `^` |
| 10 | `\|` |
| 11 | `&&` |
| 12 | `\|\|` |
| 13 | `?:` |
| 14 | `= += -= *= /= %=` |

---

## Type Promotion Rules

When performing operations between different numeric types, Java automatically promotes to a larger type:

1. `byte` and `short` are always promoted to `int`
2. If one operand is `long`, the other is promoted to `long`
3. If one operand is `double`, the other is promoted to `double`
4. If one operand is `float`, the other is promoted to `float`

### Examples:
```java
byte a = 5;
byte b = 3;
byte c = (byte)(a + b);  // Need explicit cast (result is promoted to int)

int x = 10;
long y = 5;
long result = x + y;  // Result is promoted to long

double d = 3.14;
int i = 5;
double result2 = d + i;  // Result is promoted to double
```

---

## Interview Tips

1. **Know the difference between == and .equals()** - Critical for strings and objects!
2. **Understand operator precedence** - Affects code behavior and can lead to bugs
3. **Master bitwise operations** - Frequently asked in technical interviews
4. **Know short-circuit evaluation** - Can optimize code and prevent errors
5. **Understand type promotion** - Important for arithmetic operations
6. **Master the ternary operator** - Used extensively in Java
7. **Know instanceof operator** - Essential for polymorphism and type checking
8. **Understand String concatenation** - The + operator behaves differently for strings
9. **Know the difference between >> and >>>** - Important for bitwise operations
10. **Understand when to use which operator** - Code readability and performance matter

## Common Interview Questions

1. **What is the output of: `System.out.println(5 + 3 + "");`?**
   - Answer: `"8"` (arithmetic first, then string concatenation)

2. **What is the difference between == and .equals()?**
   - `==` compares references (memory addresses)
   - `.equals()` compares content/values

3. **How do you check if a number is a power of 2?**
   - Use: `(n & (n - 1)) == 0 && n > 0`

4. **What is short-circuit evaluation?**
   - For `&&`: If left is false, right is not evaluated
   - For `||`: If left is true, right is not evaluated

5. **What happens when you divide two integers?**
   - The result is truncated to an integer (e.g., 10/3 = 3, not 3.33)