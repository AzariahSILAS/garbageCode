let tasks = [];

function addTask() {
    let taskText = document.getElementById('taskInput').value;
    if (taskText) {
      tasks.push(taskText);
      document.getElementById('taskInput').value = '';
      renderTask();
    }
    
}

function renderTask() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = tasks[i];
        listItem.addEventListener('click', () => {
            removeTask(i);
        });
        taskList.appendChild(listItem);
    }
}


function removeTask(index) {
    tasks.splice(index, 1);
    renderTask();
}
