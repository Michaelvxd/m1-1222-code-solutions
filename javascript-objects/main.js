var student = {
  firstName: 'Michael',
  lastName: 'Van Doorn',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;

console.log(`value of fullName: ${fullName}.`);

student.livesInIrive = false;
student.previousOccupation = 'retail';

console.log(`value of student.livesInIrive: ${student.livesInIrive}.`);
console.log(`value of student.previousOccupation: ${student.previousOccupation}.`);
console.log('value of student: ', student);

var vehicle = {
  make: 'SpeedyBoi',
  model: '3000',
  year: '2999'
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = true;

console.log(`value of vehicle.color: ${vehicle.color}.`);
console.log(`value of vehicle.isConvertible: ${vehicle.isConvertible}.`);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Buddy',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
