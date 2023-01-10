/* exported isVowel */

function isVowel(character) {
  var myChar = character.toUpperCase();

  if (myChar === 'A' || myChar === 'E' | myChar === 'I' | myChar === 'O' | myChar === 'U') {
    return true;
  }
  return false;
}
