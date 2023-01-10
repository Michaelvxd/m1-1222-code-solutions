/* exported tail */

// takes in an array
// defines a new array to store our new array
// using the forEach() method, loop through every index of the array
// using an if statement within the forEach() method, check if the index is greater than 0
// if so, push the element to my new array
// return the new array once complete

function tail(array) {
  var newArray = [];
  array.forEach((element, index) => {
    if (index > 0) {
      newArray.push(element);
    }
  });
  return newArray;
}
