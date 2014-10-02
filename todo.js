/***********************
VARIABLES
************************/

var newTaskInput = document.getElementById('newTask');
var tasks = document.getElementById('tasks');
var clearDone = document.getElementById('clearButton')
var clearAll = document.getElementById('allButton')
// var tasks = document.createElement(tasks);



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


/**********************
FUNCTION VIEW TASK LIST
***********************/

function newTask(task) {
	var taskItem = document.createElement('li');
	taskItem.textContent = task;
	tasks.appendChild(taskItem);
	// return taskItem;
}


/***********************
FUNCTION ON CLICK - DONE
************************/

tasks.onclick = function markAsDone(evt) {
  var task = evt.target;
  toggleDone(task);
 };

function toggleDone(taskElement) {
  taskElement.classList.toggle('done');
}


/***********************
FUNCTION CLEAR DONE TASKS
************************/
function clearDone(done) {
		var doneItem = document.getElementsByTagName('done');
		if (doneItem){
		done.target.files;
		}
}

// clearButton.onclick = function clearDone(evt) {
// 	var
// }


/***********************
FUNCTION CLEAR ALL TASKS
************************/

allButton.onclick = function clearAll(evt) {
	var allTasks = evt.target;
	clearAll(allTasks);
}	

