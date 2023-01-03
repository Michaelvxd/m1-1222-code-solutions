/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var personsInitials = person.firstName[0] + person.lastName[0];
  return personsInitials;
}
