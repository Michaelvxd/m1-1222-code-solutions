function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var myButton = document.querySelector('.click-button');
myButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var myHover = document.querySelector('.hover-button');
myHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var myDBL = document.querySelector('.double-click-button');
myDBL.addEventListener('dblclick', handleDoubleClick);
