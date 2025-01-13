// Calculate the sum of numbers in an array
function sum(arr) {
  // Use reduce to accumulate the sum
  return arr.reduce((acc, number) => acc + number, 0);
}

// Log the result of the sum function
console.log(sum([1, 2, 3, 4, 5]));
