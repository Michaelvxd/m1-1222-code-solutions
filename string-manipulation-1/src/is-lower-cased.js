/* exported isLowerCased */

// takes in a word as a string
// Using an if statement, determines if the string has all lower case letters by
// comparing word to the same variable by with the toLowerCase method applied
// if so, return true
// if not, return false

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
