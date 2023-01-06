/* exported includesSeven */
function includesSeven(array) {
  var myBoolean = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return myBoolean;
}
