var characters = document.querySelectorAll('span');
var restartButton = document.querySelector('.restart');
var currentIndex = 0;

document.addEventListener('keydown', checkCharacter);
restartButton.addEventListener('click', restart);

function checkCharacter(event) {
  var currentChar = characters[currentIndex];
  // checks if the current keydown value is equal
  // to the character in the text content
  // if so, colors it green and increments index
  // if false, adds the color: red property
  if (event.key === currentChar.textContent) {
    currentChar.classList.add('character-correct');
    currentIndex++;
  } else {
    currentChar.classList.add('character-wrong');
    characters[currentIndex].classList.add('character-next-wrong');
    document.removeEventListener('keydown', checkCharacter);
    restartButton.classList.remove('restart');
  }

  // adds border to next character
  if (currentIndex < characters.length) {
    characters[currentIndex].classList.add('character-next');
  }
  // removes border from character just typed
  if (currentIndex > 0) {
    characters[currentIndex - 1].classList.remove('character-next');
  }

  // show play again button if sentece was finished
  if (currentIndex === characters.length) {
    restartButton.classList.remove('restart');
  }
}

function restart() {
  currentIndex = 0;
  characters.forEach(removeCSS);
  document.addEventListener('keydown', checkCharacter);
  characters[0].classList.add('character-next');
  restartButton.classList.add('restart');
}

function removeCSS(character) {
  character.classList.remove('character-correct');
  character.classList.remove('character-wrong');
  character.classList.remove('character-next');
  character.classList.remove('character-next-wrong');
}
