
var button = document.querySelector('.btn');
var modalBtn = document.querySelector('.btn-modal');
var modal = document.querySelector('.modal-show');
var bkg = document.querySelector('.my-bkg');
button.addEventListener('click', promptModal);
modalBtn.addEventListener('click', closeModal);

function promptModal() {
  modal.style.display = 'flex';
  bkg.classList.toggle('bkg-show');
}
function closeModal() {
  modal.style.display = 'none';
  bkg.classList.toggle('bkg-show');
}
