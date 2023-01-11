/* exported firstChars */

// Create a function that returns a determined number of characters from a string

// declare a new function 'firstChars' that takes two arguments. A number 'length' and a string 'string'
// With index 0 as your starting point, and index of 'length' as the end of your tail determine which characters of the string to retain
// SLICE off the remainder
// return the new string

function firstChars(length, string) {
  string = string.slice(0, length);
  return string;
}
