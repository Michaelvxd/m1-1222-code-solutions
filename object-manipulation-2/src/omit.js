/* exported omit */

// create a function that returns a new object all of properties of 'source' NOT LISTED in 'keys'

// create a function named 'omit' with two arguments
// 'source' an object
// 'keys' an array of strings
// assign an empty object to a new variable 'newObject'
// loop through each value in 'source'
// within the loop, check if the value is included in 'keys'
// if true, assign the value of source at index 'value' newObject at index 'value'
// if false, return 'newObject'

function omit(source, keys) {
  const newObject = {};
  for (const value in source) {
    if (!keys.includes(value)) {
      newObject[value] = source[value];
    }
  }
  return newObject;
}
