const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", addTask);

function addTask(event) {
	event.preventDefault();

	const taskName = document.getElementById("taskName").value;
	const taskDesc = document.getElementById("taskDesc").value;

	// Create task div
	const taskDiv = document.createElement("div");
	taskDiv.classList.add("task");

	// Create checkbox
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.addEventListener("change", isCompleted);

	// Create task name
	const taskNameDiv = document.createElement("div");
	taskNameDiv.innerText = taskName;

	// Create task description
	if (taskDesc) {
		const taskDescDiv = document.createElement("div");
		taskDescDiv.innerText = taskDesc;
		taskDiv.appendChild(taskDescDiv);
	}

	taskDiv.appendChild(checkbox);
	taskDiv.appendChild(taskNameDiv);

	taskList.appendChild(taskDiv);

	// Clear form inputs
	taskForm.reset();
}

function isCompleted(event) {
	const checkbox = event.target;
	const taskName = checkbox.nextSibling;

	if (checkbox.checked) {
		taskName.style.textDecoration = "line-through";
	} else {
		taskName.style.textDecoration = "none";
	}
}