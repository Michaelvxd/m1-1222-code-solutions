/* exported truncate */

// create a function that truncates a string based on a select number of characters. Append an ellipses past the # of characters determined
// return the new string

// takes in a determined length
// takes in a string
// Using index 0 as a starting point, select the number of characters you want to retain
// assign it to string
// replaces text outside the determined length with ellipses (...) by
// assigning ... to the end of the string
// returns the new string

function truncate(length, string) {
  string = string.slice(0, length);
  string += '...';
  return string;
}
