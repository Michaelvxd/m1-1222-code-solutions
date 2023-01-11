/* exported lastChars */

// Create a function that returns a determined number of characters from a string, starting from the end.

// declare a new function 'lastChars' that takes two arguments. A number 'length' and a string 'string'
// assign the result of the length of 'string' minus the argument 'length' to a new variable 'startingIndex'
// Create an IF statement
// check if the length of 'string' is GREATER THAN the argument 'length'
// if TRUE, starting at the index of 'startingIndex', collect all characters until you reached the end of your string
// cut off anything before the 'startingIndex'
// return the new 'string'
// if FALSE, return 'string'

function lastChars(length, string) {
  var startingIndex = string.length - length;

  if (string.length > length) {
    return string.slice(startingIndex, string.length);
  }
  return string;
}
