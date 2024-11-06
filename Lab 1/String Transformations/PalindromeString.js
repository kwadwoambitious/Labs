// Check if a string is a palindrome
function isPalindrome(str) {
  // Clean the string (remove non-alphanumeric and convert to lowercase)
  let cleanedString = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Reverse the cleaned string
  let reversedString = cleanedString.split("").reverse().join("");

  // Compare the cleaned and reversed strings
  return cleanedString === reversedString;
}

// Log the result of the isPalindrome function
console.log(isPalindrome("Madam"));
