/* exported takeRight */

// Create a function with two arugments, an array(array) and a number(count). Return the elements after the first {count} elements

// Declare a function  name 'takeRight' with two arguments
// an array variable named 'array' and a number variable named 'count'
// declare an empty array and assign it to a new variable, 'newArray'
// check if 'count' is GREATER THAN the length of your array
// if true, assign 'array' to 'newArray' and return 'newArray'
// else take the length of 'array' minus 'count' as an argument and assign the last {count} elements to 'newArray'
// return 'newArray'

function takeRight(array, count) {
  var newArray = [];

  if (count > array.length) {
    newArray = array;
    return newArray;
  } else {
    newArray = array.slice(array.length - count);
    return newArray;
  }
}
