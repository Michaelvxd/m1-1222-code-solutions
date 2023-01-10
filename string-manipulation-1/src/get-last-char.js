/* exported getLastChar */

// Takes in a string as an argument
// uses the .length method to find the length of the string
// using the length, subtract 1 to find the index position of the last character
// returns the character at the last position in the string
function getLastChar(string) {
  return string[string.length - 1];
}
