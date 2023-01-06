/* exported filterOutStrings */
function filterOutStrings(values) {
  var valuesFiltered = [];

  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      valuesFiltered.push(values[i]);
    }
  }
  return valuesFiltered;
}
