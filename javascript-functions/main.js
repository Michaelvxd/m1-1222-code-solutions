function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log(`${minutes} minutes is equal to ${seconds} seconds.`);
  return seconds;
}

function greet(name) {
  var greetName = name;
  return console.log(`Hey, ${greetName}!`);
}

function getArea(width, height) {
  var area = width * height;
  console.log(`The area of a Shape with width: ${width} and height: ${height} is ${area}.`);
  return area;
}

function getFirstName(person) {
  var personsName = person;
  console.log(`The person's first name is: ${personsName.firstName}!`);
  return personsName.firstName;
}

function getLastElement(array) {
  var myArray = array;
  console.log('The last element of the array is: ', myArray[array.length - 1]);
  return myArray[array.length - 1];
}

convertMinutesToSeconds(5);
greet('Michael');
getArea(17, 42);
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
getLastElement(['propane', 'and', 'propane', 'accessories']);
