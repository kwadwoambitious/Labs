// Function to filter people by minimum age
function filterByAge(people, minAge) {
  // Filter people whose age is greater than or equal to minAge
  return people.filter((person) => person.age >= minAge);
}

// Test the function with sample data
console.log(
  filterByAge(
    [
      { name: "Akua", age: 25 },
      { name: "Kwaku", age: 17 },
      { name: "Akosua", age: 30 },
      { name: "Kwadwo", age: 22 },
      { name: "Akwasi", age: 12 },
    ],
    20 // Minimum age
  )
);
