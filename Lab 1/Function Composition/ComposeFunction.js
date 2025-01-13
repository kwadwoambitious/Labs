// Compose function that combines multiple functions, applying them from right to left
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

// Function to reverse a string
const reversedString = (str) => str.split("").reverse().join("");

// Function to capitalize a string
const capitalizedString = (str) => str.toUpperCase();

// Composing functions: reverse the string and then capitalize it
const reverseAndCapitalize = compose(capitalizedString, reversedString);

// Test the composed function
console.log(reverseAndCapitalize("ebenezer"));

// Function to filter even numbers from an array
const evenNumbers = (arr) => arr.filter((number) => number % 2 === 0);

// Function to double each number in an array
const doubledNumbers = (arr) => arr.map((number) => number * 2);

// Composing functions: first filter even numbers, then double them
const doubledEvenNumbers = compose(doubledNumbers, evenNumbers);

// Test the composed function
console.log(doubledEvenNumbers([10, 16, 13, 20]));
