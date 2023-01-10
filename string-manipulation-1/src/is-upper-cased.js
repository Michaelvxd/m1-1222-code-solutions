/* exported isUpperCased */

// takes in a word as a string
// Using an if statement, determines if the string has all capital letters by
// comparing word to the same variable by with the toUpperCase method applied
// if so, return true
// if not, return false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
