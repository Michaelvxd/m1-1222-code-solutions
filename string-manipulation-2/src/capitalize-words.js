/* exported capitalizeWords */

// write a function that capitalizes the first Character of each word in a string and makes the rest lower case.

// declare a function named capitalizeWords that takes in a string as an argument
// declare a new variable 'wordsCapitalized' and assigns it to an empty string
// Uses the regex expression to check for spaces or commas and assign it to a new variable 'regexCheck'
// Split 'string' at every comma or space and assign it to a new array 'splitWords'

// Create a FOR loop, inilitize 'i' as zero, check if 'i' is LESS THAN the length of 'splitWords', increment i every loop
// within the FOR loop, Assign the index at 'i' of splitWords to a new variable 'evalCurrentWord'
// make the character at index 0 of 'evalCurrentWord' capitalized, make the remainder (starting at index 1) of 'evalCurrentWord' lower case
// concatenate the two strings

// stil within the FOR loop, create an IF statement
// check if the expression i is LESS THAN the length of 'splitWords' minus one is true
// if false, exit
// if TRUE, check another IF statement
// next IF statement: IF the an index of a comma is found in our original string...
// concatenate the string ', ' and 'wordsCapitalized'. Populating the comma separating between words
// if FALSE, concatenate a space ' ' and 'wordsCapitalized'. Populating the space separating between words
// exit all IF statements
// RETURN your new string, 'wordsCapitalized'

function capitalizeWords(string) {
  var wordsCapitalized = '';
  var regexCheck = /[ ,]+/;
  // break up our original string using .split and checking for spaces or commas
  var splitWords = string.split(regexCheck);

  // loop through our new array for the # of indexes (words) in it
  for (var i = 0; i < splitWords.length; i++) {
    // declare the current Word we want to evaluate
    var evalCurrentWord = splitWords[i];
    // make the character at index 0 of our evaluated word capital, make the rest lower case, concatenate them and assign to our final string
    wordsCapitalized += evalCurrentWord[0].toUpperCase() + evalCurrentWord.substring(1).toLowerCase();

    // check if this is the last iteration of our loop
    // i is less than the length of our array minus one, if true.....
    if (i < splitWords.length - 1) {
      // check if a comma is present in our origianl string
      // if true, concatenate a comma with a space
      if (string.indexOf(',') !== -1) {
        wordsCapitalized += ', ';
      } else {
        // if false, concatenate just a space
        wordsCapitalized += ' ';
      }
    }
  }
  return wordsCapitalized;

}
