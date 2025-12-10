# Java Variables

## Table of Contents
1. [Introduction](#introduction)
2. [Variable Declaration](#variable-declaration)
3. [Primitive Data Types](#primitive-data-types)
4. [Reference Data Types](#reference-data-types)
5. [Variable Scope](#variable-scope)
6. [Access Modifiers](#access-modifiers)
7. [Static Variables](#static-variables)
8. [Final Variables](#final-variables)
9. [Naming Conventions](#naming-conventions)
10. [Best Practices](#best-practices)

---

## Introduction

Variables are containers that store data values in memory. Java is a **strongly typed language**, meaning every variable must be declared with a specific data type before use.

### Basic Syntax:
```java
dataType variableName = value;
```

Example:
```java
int age = 25;
String name = "John";
double salary = 50000.50;
```

---

## Variable Declaration

### Declaring Variables
```java
// Single variable declaration
int count = 0;

// Multiple variables of the same type
int x = 5, y = 10, z = 15;

// Declaration without initialization (will have default value)
int uninitialized;  // Default: 0
String text;        // Default: null
boolean flag;       // Default: false

// Declaration and initialization
String name = "Alice";
int age = 30;
```

### Variable Initialization Rules
- Local variables must be initialized before use
- Instance variables get default values
- Static variables get default values

```java
public class Example {
    static int staticVar;      // Default: 0
    int instanceVar;           // Default: 0
    
    public void method() {
        int localVar;          // Must initialize before use
        // System.out.println(localVar);  // Error!
        
        localVar = 10;         // Now initialized
        System.out.println(localVar);  // OK
    }
}
```

---

## Primitive Data Types

Primitive types hold actual values (not references). There are 8 primitive types in Java.

### Integer Types

| Type | Size | Range | Default |
|------|------|-------|---------|
| `byte` | 1 byte | -128 to 127 | 0 |
| `short` | 2 bytes | -32,768 to 32,767 | 0 |
| `int` | 4 bytes | -2^31 to 2^31-1 | 0 |
| `long` | 8 bytes | -2^63 to 2^63-1 | 0L |

```java
byte smallNumber = 100;
short mediumNumber = 1000;
int count = 100000;
long largeNumber = 10000000000L;  // L suffix required for long

// Number literals
int decimal = 100;
int octal = 0144;      // 100 in decimal
int hex = 0x64;        // 100 in decimal
int binary = 0b1100100;  // 100 in decimal
```

### Floating-Point Types

| Type | Size | Range | Default | Precision |
|------|------|-------|---------|-----------|
| `float` | 4 bytes | ±3.4×10^38 | 0.0f | ~6-7 digits |
| `double` | 8 bytes | ±1.7×10^308 | 0.0 | ~15-16 digits |

```java
float pi = 3.14f;      // f suffix required for float
double e = 2.71828;
double scientific = 1.5e-10;  // Scientific notation

// Use double by default (more precision)
double money = 99.99;  // Preferred
float approx = 99.99f; // Less precise
```

### Character Type

| Type | Size | Range | Default |
|------|------|-------|---------|
| `char` | 2 bytes | 0 to 65535 (Unicode) | '\u0000' |

```java
char letter = 'A';
char digit = '5';
char unicode = '\u0048';  // 'H'
char newline = '\n';

// Escape sequences
char tab = '\t';
char backslash = '\\';
char quote = '\'';
char doubleQuote = '\"';
```

### Boolean Type

| Type | Values | Default |
|------|--------|---------|
| `boolean` | true, false | false |

```java
boolean isActive = true;
boolean isEmpty = false;
boolean result = 5 > 3;  // true

// Only true/false, no integers
// boolean flag = 1;  // Error!
// boolean flag = 0;  // Error!
```

### Examples:
```java
public class PrimitiveTypes {
    public static void main(String[] args) {
        // Integer types
        byte b = 127;
        short s = 32000;
        int i = 100000;
        long l = 10000000000L;
        
        // Floating-point types
        float f = 3.14f;
        double d = 3.14159;
        
        // Character type
        char c = 'A';
        
        // Boolean type
        boolean bool = true;
        
        // Print types and values
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + bool);
    }
}
```

---

## Reference Data Types

Reference types store references (memory addresses) to objects, not the values themselves. Classes, interfaces, and arrays are reference types.

### Objects and Classes
```java
// Create objects (references)
String name = new String("John");
String city = "New York";  // String literal (special handling)

// Objects have default value: null
String nullString = null;

// Objects compared by reference (unless overridden)
String s1 = new String("hello");
String s2 = new String("hello");
System.out.println(s1 == s2);         // false (different references)
System.out.println(s1.equals(s2));    // true (same content)
```

### Arrays
```java
// Array declaration and initialization
int[] numbers = new int[5];        // Default: {0, 0, 0, 0, 0}
int[] values = {1, 2, 3, 4, 5};
String[] names = {"Alice", "Bob", "Charlie"};
int[][] matrix = new int[3][3];   // 2D array

// Array access
numbers[0] = 10;
System.out.println(numbers[0]);    // 10
System.out.println(numbers.length); // 5
```

### Collections
```java
import java.util.*;

// List
List<String> list = new ArrayList<>();
list.add("apple");
list.add("banana");

// Set
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(2);

// Map
Map<String, Integer> map = new HashMap<>();
map.put("age", 30);
map.put("id", 123);
```

### Strings
```java
// String is a reference type, but with special handling
String str1 = "Hello";
String str2 = "Hello";
System.out.println(str1 == str2);      // true (same String pool reference)

String str3 = new String("Hello");
System.out.println(str1 == str3);      // false (different references)
System.out.println(str1.equals(str3)); // true (same content)

// String is immutable
String original = "Hello";
String modified = original.concat(" World");
System.out.println(original);  // "Hello" (unchanged)
System.out.println(modified);  // "Hello World"
```

### Passing by Value vs Reference
```java
// Primitive (passed by value)
public class Test {
    public static void changePrimitive(int num) {
        num = 100;
    }
    
    public static void changeObject(Person person) {
        person.age = 100;  // Changes the object
        person = new Person();  // Doesn't affect original reference
    }
    
    public static void main(String[] args) {
        int x = 5;
        changePrimitive(x);
        System.out.println(x);  // 5 (unchanged)
        
        Person p = new Person();
        p.age = 25;
        changeObject(p);
        System.out.println(p.age);  // 100 (changed!)
    }
}

class Person {
    int age;
}
```

---

## Variable Scope

Scope determines where a variable is accessible within the code.

### Local Variables
Declared inside methods/blocks and accessible only within that scope.

```java
public class ScopeExample {
    public void localScope() {
        int localVar = 10;
        {
            int blockVar = 20;
            System.out.println(localVar);  // OK (accessible)
            System.out.println(blockVar);  // OK (accessible)
        }
        System.out.println(localVar);      // OK
        System.out.println(blockVar);      // Error! (out of scope)
    }
}
```

### Instance Variables (Member Variables)
Declared in a class (outside methods) and accessible to all instance methods.

```java
public class InstanceScope {
    int instanceVar = 10;  // Instance variable
    
    public void method1() {
        System.out.println(instanceVar);  // OK
    }
    
    public void method2() {
        System.out.println(instanceVar);  // OK
    }
    
    public static void main(String[] args) {
        InstanceScope obj = new InstanceScope();
        System.out.println(obj.instanceVar);  // OK (through object)
    }
}
```

### Static Variables (Class Variables)
Declared with `static` keyword and shared among all instances.

```java
public class StaticScope {
    static int staticVar = 10;  // Static variable
    int instanceVar = 5;
    
    public void method() {
        System.out.println(staticVar);      // OK
        System.out.println(instanceVar);    // OK
    }
    
    public static void staticMethod() {
        System.out.println(staticVar);      // OK
        System.out.println(instanceVar);    // Error! Can't access instance var
    }
}
```

### Method Parameter Scope
Parameters are local to the method.

```java
public void method(int param1, String param2) {
    System.out.println(param1);   // OK (parameter scope)
    System.out.println(param2);   // OK
}

// param1 and param2 not accessible here
```

---

## Access Modifiers

Access modifiers control the visibility of variables and methods.

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| `public` | ✓ | ✓ | ✓ | ✓ |
| `protected` | ✓ | ✓ | ✓ | ✗ |
| `package-private` (default) | ✓ | ✓ | ✗ | ✗ |
| `private` | ✓ | ✗ | ✗ | ✗ |

### Examples:
```java
public class AccessModifiers {
    // Public: accessible everywhere
    public int publicVar = 1;
    
    // Protected: accessible in package and subclasses
    protected int protectedVar = 2;
    
    // Package-private (default): accessible in same package
    int packageVar = 3;
    
    // Private: accessible only in this class
    private int privateVar = 4;
    
    public void printAll() {
        System.out.println(publicVar);      // OK
        System.out.println(protectedVar);   // OK
        System.out.println(packageVar);     // OK
        System.out.println(privateVar);     // OK
    }
}

// Outside the class in same package
public class Other {
    public static void main(String[] args) {
        AccessModifiers obj = new AccessModifiers();
        System.out.println(obj.publicVar);      // OK
        System.out.println(obj.protectedVar);   // OK
        System.out.println(obj.packageVar);     // OK
        System.out.println(obj.privateVar);     // Error!
    }
}
```

---

## Static Variables

Static variables are shared by all instances of a class (class variables).

### Key Characteristics:
- Shared among all instances
- Initialized when class loads
- Accessed using class name

```java
public class Counter {
    static int count = 0;      // Static variable
    int instanceId = 0;        // Instance variable
    
    public Counter() {
        count++;
        instanceId = count;
    }
    
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();
        
        System.out.println(c1.instanceId);     // 1
        System.out.println(c2.instanceId);     // 2
        System.out.println(c3.instanceId);     // 3
        System.out.println(Counter.count);     // 3 (shared)
    }
}
```

### Static Variables in Memory
```java
public class MemoryExample {
    static String className = "MemoryExample";  // 1 copy, shared
    int objectId = 0;                           // Each instance has copy
    
    public static void main(String[] args) {
        MemoryExample obj1 = new MemoryExample();
        MemoryExample obj2 = new MemoryExample();
        
        // Modifying static variable
        MemoryExample.className = "Modified";
        System.out.println(obj1.className);  // "Modified" (affects all)
        System.out.println(obj2.className);  // "Modified"
    }
}
```

---

## Final Variables

The `final` keyword makes variables immutable (cannot be changed).

### Local Final Variables
```java
public void example() {
    final int constant = 10;
    // constant = 20;  // Error!
    System.out.println(constant);  // OK (read-only)
}
```

### Instance Final Variables
```java
public class FinalExample {
    final int immutable;
    
    public FinalExample(int value) {
        immutable = value;  // Can initialize once in constructor
    }
    
    public void method() {
        // immutable = 20;  // Error! Cannot reassign
        System.out.println(immutable);  // OK
    }
}
```

### Static Final Variables (Constants)
```java
public class Constants {
    static final double PI = 3.14159;
    static final String APP_NAME = "MyApp";
    static final int MAX_USERS = 100;
    
    public static void main(String[] args) {
        System.out.println(PI);         // OK
        System.out.println(APP_NAME);   // OK
        
        // PI = 3.14;  // Error!
    }
}
```

### Final Objects
Final prevents reassignment but not property modification.

```java
public class FinalObjects {
    public static void main(String[] args) {
        final Person person = new Person("John");
        
        person.name = "Jane";  // OK (modify property)
        System.out.println(person.name);  // "Jane"
        
        // person = new Person("Bob");  // Error! Cannot reassign
    }
}

class Person {
    String name;
    public Person(String name) {
        this.name = name;
    }
}
```

---

## Naming Conventions

### camelCase (for variables and methods)
```java
int age = 25;
String firstName = "John";
boolean isActive = true;
void calculateTotal() {}
```

### PascalCase (for class names)
```java
public class Person {}
public class UserAccount {}
public class DataProcessor {}
```

### UPPER_SNAKE_CASE (for constants)
```java
static final int MAX_USERS = 100;
static final String API_KEY = "secret";
static final double PI = 3.14159;
```

### Rules for Valid Variable Names:
- Must start with a letter, underscore (_), or dollar sign ($)
- Can contain letters, digits, underscores, and dollar signs
- Are case-sensitive
- Cannot be Java keywords

```java
int validName = 1;
int _name = 2;
int $name = 3;
int name123 = 4;

// int 123name = 5;    // Error! Starts with digit
// int for = 6;        // Error! Reserved keyword
```

---

## Best Practices

### 1. Use Meaningful Names
```java
// Bad
int x = 5;
String y = "John";

// Good
int userAge = 5;
String firstName = "John";
```

### 2. Initialize Variables
```java
// Bad
int count;
// ... lots of code ...
count = 0;

// Good
int count = 0;
```

### 3. Use Access Modifiers Appropriately
```java
// Bad: exposing internals
public int age;
public String password;

// Good: encapsulation
private int age;
private String password;

public int getAge() { return age; }
public void setPassword(String pwd) { this.password = pwd; }
```

### 4. Use Final for Constants
```java
// Bad
public static int MAX_USERS = 100;

// Good
public static final int MAX_USERS = 100;
```

### 5. Avoid Magic Numbers
```java
// Bad
if (age >= 18) { }

// Good
static final int ADULT_AGE = 18;
if (age >= ADULT_AGE) { }
```

### 6. Use Appropriate Types
```java
// Bad
String age = "25";
String salary = "50000.50";

// Good
int age = 25;
double salary = 50000.50;
```

### 7. Declare Variables Close to Usage
```java
// Bad
int result = 0;
// ... many lines of code ...
result = calculate();

// Good
// ... some code ...
int result = calculate();
```

### 8. Use Primitive Types When Possible
```java
// For simple values, use primitives
int count = 0;        // Better than Integer count = 0;
double price = 99.99; // Better than Double price = 99.99;

// Use wrapper classes only when needed (Collections, null values)
List<Integer> numbers = new ArrayList<>();
Integer nullable = null;
```

### 9. Avoid Instance Variables in Static Context
```java
public class StaticVars {
    int instanceVar = 10;
    
    public static void main(String[] args) {
        // instanceVar is not accessible here
        // System.out.println(instanceVar);  // Error!
        
        // Use instance
        StaticVars obj = new StaticVars();
        System.out.println(obj.instanceVar);  // OK
    }
}
```

### 10. Use Enums for Fixed Values
```java
// Bad
public static final int RED = 1;
public static final int GREEN = 2;
public static final int BLUE = 3;

// Good
public enum Color {
    RED, GREEN, BLUE
}

Color color = Color.RED;
```

---

## Default Values for Variables

### Instance and Static Variables
| Type | Default Value |
|------|----------------|
| byte | 0 |
| short | 0 |
| int | 0 |
| long | 0L |
| float | 0.0f |
| double | 0.0 |
| boolean | false |
| char | '\u0000' |
| Object/Reference | null |

```java
public class DefaultValues {
    static int staticInt;          // 0
    int instanceInt;               // 0
    boolean instanceBool;          // false
    String instanceString;         // null
    
    public static void main(String[] args) {
        DefaultValues obj = new DefaultValues();
        System.out.println(obj.staticInt);      // 0
        System.out.println(obj.instanceBool);   // false
        System.out.println(obj.instanceString); // null
    }
}
```

### Local Variables
Local variables have **no default value** and must be initialized before use.

```java
public void method() {
    int localInt;                // No default
    System.out.println(localInt);  // Error! Must initialize
    
    localInt = 5;
    System.out.println(localInt);  // OK
}
```

---

## Common Interview Questions

1. **What is the difference between primitive and reference data types?**
   - Primitives store actual values; references store memory addresses
   - Primitives are passed by value; references are passed by reference

2. **What are the 8 primitive data types in Java?**
   - byte, short, int, long, float, double, char, boolean

3. **What is the difference between local, instance, and static variables?**
   - Local: declared in methods, accessible only in that method
   - Instance: declared in class, accessible to all methods
   - Static: shared among all instances, accessed via class name

4. **What is the difference between == and .equals() for Strings?**
   - `==` compares references (memory addresses)
   - `.equals()` compares content (values)

5. **What are access modifiers and why use them?**
   - Control visibility of variables: public, protected, package-private, private
   - Enable encapsulation and protect internal state

6. **What is a final variable?**
   - A variable that cannot be reassigned after initialization
   - Used for constants or immutable references

7. **What is the default value of variables?**
   - Instance/static variables have defaults (0, false, null)
   - Local variables have no default and must be initialized

8. **Can you instantiate an interface or abstract class?**
   - No, but you can create a reference to them
   - `List list = new ArrayList<>();` (interface reference)

---

## Summary Table

| Aspect | Local | Instance | Static |
|--------|-------|----------|--------|
| Scope | Method/Block | Class | Class |
| Default Value | None | Yes | Yes |
| Memory | Stack | Heap | Static memory |
| Lifetime | Until block exits | Until object exists | Until JVM stops |
| Access | this, name | this, name | ClassName, name |
| Inheritance | - | Inherited | Inherited |
