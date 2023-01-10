/* exported sumAll */
function sumAll(numbers) {
  var sumOfNumbers = 0;

  for (var i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }

  return sumOfNumbers;
}
