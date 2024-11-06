// Filter even numbers from an array
function filterEven(arr) {
  // Return a new array with even numbers
  return arr.filter((number) => number % 2 === 0);
}

// Log even numbers from the array
console.log(filterEven([1, 2, 3, 4, 5, 6, 25, 30]));
