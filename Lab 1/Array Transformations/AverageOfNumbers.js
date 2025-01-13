// Function to calculate the average of an array
function average(arr) {
  // Sum all elements in the array
  let sumOfNumbers = arr.reduce((acc, number) => acc + number, 0);

  // Calculate and return the average
  return sumOfNumbers / arr.length;
}

// Call the average function with an array of numbers
console.log(average([24, 54, 100, 31]));
