var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('Your minutes converted to seconds is equal to: ', convertMinutesToSecondsResult);

var greetResult = greet('Michael');
console.log(`Hey, ${greetResult}!`);

var getAreaResult = getArea(17, 42);
console.log(`The area is equal to ${getAreaResult}.`);

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log(`The person's first name is: ${getFirstNameResult}!`);

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(`The last element of the array is: ${getLastElementResult}.`);

function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  return name;
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}
