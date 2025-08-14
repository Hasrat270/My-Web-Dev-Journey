// Match Operations in javaScript

console.log(10 + 5); // Addition: 15
console.log(10 - 5); // Subtraction: 5
console.log(10 * 5); // Multiplication: 50 --> 10 multiplied by 5 gives product 50
console.log(10 / 5); // Division: 2 --> 10 divided by 5 gives quotient 2
console.log(10 % 3); // Modulus: 1 --> 10 divided by 3 gives quotient 3 and remainder 1
console.log(10 ** 2); // Exponentiation: 100 --> 10 raised to the power of 2
console.log(10 + 5 * 2); // Addition with multiplication: 20 --> 5 * 2 is evaluated first, then added to 10
console.log((10 + 5) * 2); // Parentheses: 30 --> 10 + 5 is evaluated first, then multiplied by 2.


console.log("Start")
console.log(10 + 3 - 5 * 10);
console.log((10 + 3 - 5) * 10);

let result = (10 + 3 - 5) * 10;
result = 10 * 4;
result = result + 1;
result++; // Result = Result + 1
result--; // result = result - 1

result += 5; // Result = Result + 5
result -= 5; // Result = Result - 5
result /= 5; // result = Result / 5
result *= 5; // result = result * 5

console.log(result)

console.log("End")


// Useful Math functions and constants in JavaScript
console.log(Math); // Math object with various mathematical constants and functions
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.707106781186547
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.abs(-5)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1
console.log(Math.asin(1)); // 1.5707963267948966 (π/2)
console.log(Math.acos(1)); // 0
console.log(Math.atan(1)); // 0.7853981633974483 (π/4)
console.log(Math.atan2(1, 1)); // 0.7853981633974483 (π/4)
console.log(Math.exp(1)); // 2.718281828459045
console.log(Math.log(10)); // 2.302585092994046
console.log(Math.log10(100)); // 2
console.log(Math.log2(8)); // 3
console.log(Math.sign(-5)); // -1
console.log(Math.trunc(4.9)); // 4
console.log(Math.fround(1.5)); // 1.5 (single precision float)
console.log(Math.clz32(0)); // 32 (count of leading zero bits in 32-bit integer)
console.log(Math.imul(2, 3)); // 6 (integer multiplication)
console.log(Math.hypot(3, 4)); // 5 (Euclidean distance)
console.log(Math.cbrt(27)); // 3 (cube root)
