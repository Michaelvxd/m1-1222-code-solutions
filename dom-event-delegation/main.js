
var taskListEvent = document.querySelector('.task-list');
taskListEvent.addEventListener('click', taskListClick);

function taskListClick(e) {
  console.log('event.target: ', e.target);
  console.log('event.target.tagName: ', e.target.tagName);

  if (e.target.tagName === 'BUTTON') {
    var taskListNearest = e.target.closest('.task-list-item');
    console.log(taskListNearest);
    taskListNearest.remove();
  }
}
