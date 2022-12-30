function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log(`${minutes} minutes is equal to ${seconds} seconds.`);
  return seconds;
}

function greet(name) {
  return console.log(`Hey, ${name}!`);
}

function getArea(width, height) {
  var area = width * height;
  console.log(`The area of a Shape with width: ${width} and height: ${height} is ${area}.`);
  return area;
}

function getFirstName(person) {
  console.log(`The person's first name is: ${person.firstName}!`);
  return person.firstName;
}

function getLastElement(array) {
  console.log('The last element of the array is: ', array[array.length - 1]);
  return array[array.length - 1];
}

convertMinutesToSeconds(5);
greet('Michael');
getArea(17, 42);
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
getLastElement(['propane', 'and', 'propane', 'accessories']);
