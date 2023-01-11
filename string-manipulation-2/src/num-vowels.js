/* exported numVowels */

// Create a function that counts and number of vowels in a string and returns this number

// Declare a new function 'numVowels' that has one argument, a string
// declate a new variable 'vowelCount' and set it equal to 0
// make your string uppercase and assign it to a new variable 'upperString'
// Loop through the string and check for the vowels: A, E, I, O, or U
// if present, increment vowels by 1
// Once the end of the string is reached and the loop is closed
// return the count

function numVowels(string) {
  var numVowels = 0;
  var upperString = string.toUpperCase();

  for (var i = 0; i < string.length; i++) {
    if (upperString[i] === 'A' || upperString[i] === 'E' | upperString[i] === 'I' | upperString[i] === 'O' | upperString[i] === 'U') {
      numVowels++;
    }
  }
  return numVowels;
}
