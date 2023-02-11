function removeTask() {
	const taskContainer = this.parentNode;
	const todoList = taskContainer.parentNode;

	todoList.removeChild(taskContainer);
}

function addTask(todoList, taskInput) {
	if (todoList.childElementCount >= 10) return;
	if (!taskInput.value.length) return;

	const taskContainer = document.createElement('div');
	const taskHeader = document.createElement('h5');
	const removeButton = document.createElement('button');

	taskContainer.setAttribute('class', 'row task-container');

	taskHeader.setAttribute('class', 'col-xs-4 task');
	taskHeader.innerText = taskInput.value;

	removeButton.setAttribute('class', 'btn btn-danger remove-button');
	removeButton.innerHTML = "REMOVE";

	removeButton.addEventListener('click', removeTask);

	taskContainer.appendChild(taskHeader);
	taskContainer.appendChild(removeButton);

	todoList.appendChild(taskContainer);

	taskInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
	const todoList = document.querySelector('#todo-list');


	const taskInput = document.querySelector('#task-detail');
	const addTaskBtn = document.querySelector('#addtask-button');

	addTaskBtn.addEventListener('click', addTask.bind(null, todoList, taskInput));

	taskInput.addEventListener('keyup', (event) => {
		if (event.keyCode === 13) {
			addTask(todoList, taskInput);
		}
	});
});
      