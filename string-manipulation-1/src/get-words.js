/* exported getWords */

function getWords(string) {
  var newWord = [];
  if (string.length > 1) {
    newWord = string.split(' ');
    return newWord;
  }
  return newWord;
}
