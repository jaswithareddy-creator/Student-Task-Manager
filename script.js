const API = "http://localhost:5000/tasks";

let tasks = [];

function addTask() {

    const input = document.getElementById("taskInput");
    const task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);

    displayTasks();

    input.value = "";
}

function displayTasks() {

    const list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });
}

function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}
