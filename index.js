const tasks = []

function handleSubmit(event) {
    event.preventDefault();
    var taskName = document.getElementById("taskName").value;
    var taskDescription = document.getElementById("taskDescription").value;
    const task = {taskName:taskName, taskDescription:taskDescription};
    tasks.push(task);
    // Create a new list item element
    var listItem = document.createElement("div");

    // Create a new heading element for the task name
    var heading = document.createElement("h3");
    heading.textContent = taskName;

    // Create a new paragraph element for the task description
    var paragraph = document.createElement("p");
    paragraph.textContent = taskDescription;

    // Append the heading and paragraph elements to the list item
    listItem.appendChild(heading);
    listItem.appendChild(paragraph);

    // Append the list item to the task list
    var taskList = document.getElementById("taskList");
    taskList.appendChild(listItem);

    // Clear the input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskDescription").value = ""; 
}