/* exported capitalizeWord */

// write a function that capitalizes the first Character and makes the rest lower case. If its argument is any form of the string 'Javascript'. Return it as 'JavaScript'
// otherwise retun as specified above.

// declare a function named capitalizeWord that takes in a string as an argument
// declare a new variable 'newWord' and assigns it to an empty string
// Target the character at index 0 and capitalize it. Then assign it to 'newWord'
// Lowercase the rest of your original string by targeting the second index as your starting point
// covert your string to lowercase starting from thos point and assign it to 'newWord'
// create an if statement
// IF your argument 'word' capitalized is EQUAL TO 'JAVASCRIPT' , RETURN 'newWord' as 'JavaScript'
// otherwise RETURN 'newWord'

function capitalizeWord(word) {
  var newWord = '';
  newWord += word.charAt(0).toUpperCase();
  newWord += word.slice(1).toLowerCase();
  if (word.toUpperCase() === 'JAVASCRIPT') {
    newWord = 'JavaScript';
    return newWord;
  }
  return newWord;
}
