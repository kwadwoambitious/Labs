// Capitalize the first letter of a string
function capitalize(str) {
  // Convert the first letter to uppercase and join with the rest of the string
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}

// Log the result of the capitalize function
console.log(capitalize("amalitech"));
