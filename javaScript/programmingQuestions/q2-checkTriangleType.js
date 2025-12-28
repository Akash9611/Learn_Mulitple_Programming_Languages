// Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles" or "scalene".
// Equilateral - Triangles all sides are equals to each other
// isosceles - Triangles 2 sides are equal to each other.
// scalene - Triangles 3r sides are not equal to each other

function checkTriangleType(a, b, c){
  if(a===b && b===c) return 'Equilateral';  
   if(a===b || b===c || c===a ) return 'Isosceles';
   return 'Scalene';
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 3, 4));
console.log(checkTriangleType(3, 4, 5));

//* NOTE :
// 1. We use strict equality operator (===) to compare the lengths of the sides.
// 2. The function checks for equilateral first, then isosceles, and defaults to scalene if neither condition is met.

// Code Explanation: 
// if a=b and b=c then it automatically become a=c. And condition for equilateral triangle is satisfied.
// if a=b or b=c or c=a then it is isosceles triangle.
// If none of the above conditions are satisfied then it is scalene triangle.