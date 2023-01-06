/* exported oddOrEven */
function oddOrEven(number) {
  var myArray = [];

  for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      myArray.push('even');
    }
    if (number[i] % 2 > 0) {
      myArray.push('odd');
    }

  }
  return myArray;
}
