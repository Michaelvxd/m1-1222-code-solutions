
var button = document.querySelector('.lightbulb');
var background = document.querySelector('.container');
button.addEventListener('click', turnOffTheLights);
var lightsOn = false;
var containOn = false;

function turnOffTheLights() {
  lightsOn = !lightsOn;
  containOn = !containOn;
  button.classList.toggle('lightsoff', lightsOn);
  background.classList.toggle('containoff', containOn);
}
