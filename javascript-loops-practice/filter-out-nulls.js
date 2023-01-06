/* exported filterOutNulls */
function filterOutNulls(values) {
  var valuesFiltered = [];

  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valuesFiltered.push(values[i]);
    }
  }
  return valuesFiltered;
}
