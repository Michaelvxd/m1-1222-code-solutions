/* exported compact */

// defines a new array
// iterates through the original array using the .forEach method
// When iterating, checks if the element at the currentl index evaluates to true
// if so, pushes it to the new array
// if not, the element is skipped
// returns the result after iterating through all elements of the array

function compact(array) {
  const newArray = [];
  array.forEach(element => {
    if (element) {
      newArray.push(element);
    }
  });
  return newArray;
}
