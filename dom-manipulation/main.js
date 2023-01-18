
var countClick = 0;

var hotBtn = document.querySelector('.hot-button');
var storeClickCount = document.querySelector('.click-count');

function incrementCount() {
  countClick++;
  storeClickCount.textContent = `Clicks: ${countClick}`;

  if (countClick < 4) {
    hotBtn.className = 'hot-button cold';
  } else if (countClick < 7) {
    hotBtn.className = 'hot-button cool';
  } else if (countClick < 10) {
    hotBtn.className = 'hot-button tepid';
  } else if (countClick < 13) {
    hotBtn.className = 'hot-button warm';
  } else if (countClick < 16) {
    hotBtn.className = 'hot-button hot';
  } else {
    hotBtn.className = 'hot-button nuclear';
  }
}

hotBtn.addEventListener('click', incrementCount);
