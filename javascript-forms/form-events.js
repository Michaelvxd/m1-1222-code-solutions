
function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ', event.target.name);

}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name: ', event.target.name);

}

function handleInput(event) {
  console.log(`value of ${event.target.name}: `, event.target.value);

}

var inputTxt = document.querySelectorAll('input');
var textArea = document.querySelector('textarea');

inputTxt[0].addEventListener('focus', handleFocus);
inputTxt[0].addEventListener('blur', handleBlur);
inputTxt[0].addEventListener('input', handleInput);

inputTxt[1].addEventListener('focus', handleFocus);
inputTxt[1].addEventListener('blur', handleBlur);
inputTxt[1].addEventListener('input', handleInput);

textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);
