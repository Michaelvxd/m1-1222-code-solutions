/* exported getKeys */

// takes in an object
// declares a new array
// using a For loop, loop through each key in the object
// use the .push method to push keys to the new array
// returns the new array

function getKeys(object) {
  var newArray = [];

  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}
