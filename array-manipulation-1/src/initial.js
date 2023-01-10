/* exported initial */

// takes in an array
// defines a new array to store our new array
// using the forEach() method, loop through every index of the array
// using an if statement within the forEach() method, check if the index is less than...
// the .length of array - 1
// if so, push the element to my new array
// return the new array once complete

function initial(array) {
  var newArray = [];
  array.forEach((element, index) => {
    if (index < (array.length - 1)) {
      newArray.push(element);
    }
  });
  return newArray;
}
