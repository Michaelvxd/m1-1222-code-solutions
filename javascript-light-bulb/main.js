
var button = document.querySelector('.lightbulb');
var background = document.querySelector('.container');
button.addEventListener('click', turnOffTheLights);

function turnOffTheLights() {
  button.classList.toggle('lightsoff');
  background.classList.toggle('containoff');
}
