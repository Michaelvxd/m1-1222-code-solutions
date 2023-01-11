/* exported ransomCase */

// takes in a string as an argument
// decares a new variable 'newString' and assigns it to an empty string
// create a for loop, declaring 'i' as 0, comparing i is LESS THAN the length of your original string
// INCREMENT i on every loop
// within the for loop, create an if statement
// Look for odd characters. IF i (index) mod 2 is EQUAL TO 1
// make the character at that index upper case and ASSIGN it to your new string
// ELSE IF i (index) is not equal to 1, make it lower case and ASSIGN it to your new string
// RETURN the new string

function ransomCase(string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
