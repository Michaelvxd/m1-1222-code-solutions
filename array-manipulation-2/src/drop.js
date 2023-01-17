/* exported drop */

// Create a function with two arugments, an array(array) and a number(count). Return the elements after the first {count} elements

// Declare a function  name 'drop' with two arguments
// an array variable named 'array' and a number variable named 'count'
// declare an empty array and assign it to a new variable, 'newArray'
// taking 'count' as a starting point, slice off all values from 'array' follow this index position
// assign the result to 'newArray'
// return 'newArray'

function drop(array, count) {
  var newArray = [];
  newArray = array.slice(count);
  return newArray;
}
