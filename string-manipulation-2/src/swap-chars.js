/* exported swapChars */

// Create a function that swaps characters at specfic indexes of a string and returns a new string

// declare a fuction 'swapChars' that takes three arugments. a number 'firstIndex', a number 'secondIndex' , and a string 'string'
// separate the original string 'string' into an array of strings and assign it to a new variable 'arrayOfChars'
// swap the characters at index 'firstIndex' with the index of 'secondIndex' and vice versa
// join the arrays in 'arrayOfChars' and return the result

function swapChars(firstIndex, secondIndex, string) {
  var arrayOfChars = string.split('');
  [arrayOfChars[firstIndex], arrayOfChars[secondIndex]] = [arrayOfChars[secondIndex], arrayOfChars[firstIndex]];
  return arrayOfChars.join('');
}
