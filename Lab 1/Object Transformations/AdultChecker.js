// Function to check if a person is 18 or older
function isAdult(person) {
  // Check if the person's age is greater than or equal to 18
  return person.age >= 18;
}

// Call the function with a person object having age 18
console.log(isAdult({ age: 20 }));
