/* exported capitalize */

// takes in a string
// defines a new variable to store the updated string(newWord)
// capitalizes the first character of the string using the charAt() and toUpperCase() methods
// minimizes all other characters using the slice and toLowerCase methods
// returns the new string in its updated format

function capitalize(word) {
  var newWord = '';
  newWord += word.charAt(0).toUpperCase();
  newWord += word.slice(1).toLowerCase();
  return newWord;
}
