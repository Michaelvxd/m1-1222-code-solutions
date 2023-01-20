
var button = document.querySelector('.btn');
var modal = document.querySelector('.modal');
var background = document.querySelector('.container');
var modalBtn = document.querySelector('.btn-modal');
button.addEventListener('click', promptModal);
modalBtn.addEventListener('click', closeModal);

function promptModal() {
  modal.classList.toggle('modal-show');
  background.classList.toggle('contain-bkg');
}
function closeModal() {
  modal.classList.toggle('modal-show');
  background.classList.toggle('contain-bkg');
}
