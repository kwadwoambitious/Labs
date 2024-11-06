// Define a function `fullName` that takes a `person` object.
function fullName(person) {
  // Concatenate `firstName` and `lastName` using template literals.
  let fullName = `${person.firstName}  ${person.lastName}`;

  // Return the full name.
  return fullName;
}

// Call `fullName` with an object and log the result.
console.log(fullName({ firstName: "Ebenezer", lastName: "Antwi" }));
