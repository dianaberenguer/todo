/***********************
VARIABLES
************************/

var newTaskInput = document.getElementById('newTask');
var tasks = document.getElementById('tasks');
var clearDone = document.getElementById('clearButton')
var clearAll = document.getElementById('allButton')




/********************
FUNCTION GET INPUT
*********************/

newTaskInput.onkeypress = function(evt) {
	if (evt.keyCode === 13) {
		var task = newTaskInput.value;
		if (task) {
			newTask(task);
			newTaskInput.value ='';
			/** limpia la linea despues de enter**/
			}
	}
};


function newTask(task) {
	var taskItem = document.createElement('li');
	taskItem.textContent = task;
	tasks.appendChild(taskItem);
	// return taskItem;
}


/***********************
FUNCTION ON CLICK - DONE
************************/

tasks.onclick = function(evt) {
  var task = evt.target;
  if (task.tagName === "LI"){
		toggleDone(task);
  }
 };

function toggleDone(taskElement) {
  taskElement.classList.toggle('done');
}


/***********************
FUNCTION CLEAR DONE TASKS
************************/

function clearDoneTasks() {
	var doneTasks = document.getElementsByClassName('done');
	for(var i=doneTasks.length-1; i >= 0; i--) {
		doneTasks[i].parentNode.removeChild(doneTasks[i]);
	}
}

clearButton.onclick = function() {
	clearDoneTasks();
}


/***********************
FUNCTION CLEAR ALL TASKS
************************/

function clearAllTasks() {
	var allTasks = document.getElementsByTagName('li');
	for(var i=allTasks.length-1; i >= 0; i--) {
		allTasks[i].parentNode.removeChild(allTasks[i]);
	}
}

allButton.onclick = function() {
	clearAllTasks();
}