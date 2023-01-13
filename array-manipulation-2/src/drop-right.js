/* exported dropRight */

function dropRight(array, count) {
  var newArray = [];

  for (var i = 0; i < array.length - count; i++) {
    if (array.length > 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
