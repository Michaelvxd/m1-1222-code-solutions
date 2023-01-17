/* exported pick */

// create a function that returns a new object all of properties of 'source' in 'keys'
// if a key in 'keys' is not defined in 'source', don't add that property to the new object

// create a function named 'pick' with two arguments
// 'source' an object
// 'keys' an array of strings
// assign an empty object to a new variable 'newObject'
// loop through the length of 'keys' to evaluate if a key exists in 'source'
// within the loop, check if the element at index i (initialized to 0) is in 'source' and is not equal to undefined
// if true, assign the value of source at index keys index at {i} to newObject at index keys at index i
// if false, return 'newObject'

function pick(source, keys) {
  const newObject = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
