/* exported take */

// Create a function with two arugments, an array(array) and a number(count). Return the first {count} elements of the array

// Declare a function  name 'take' with two arguments
// an array variable named 'array' and a number variable named 'count'
// declare an empty array and assign it to a new variable, 'newArray'
// Create a loop, initialized with a variable 'i' at 0, with a conditional of 'i < count', and incrementing i
// in the loop, create an IF statement that checks if the lenth of 'array' is GREATER THAN zero
// if true, push the array value at index i to 'newarray'
// return 'newArray'

function take(array, count) {
  var newArray = [];

  for (var i = 0; i < count; i++) {
    if (array.length > 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
