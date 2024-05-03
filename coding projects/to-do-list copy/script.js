let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let taskItems = [];



function addTask(){

    let taskText = taskInput.value;
    if( taskText !== "") {
           taskItems.push(taskText)

           let listItem = document.createElement('li');

           listItem.textContent = taskText;

           taskList.appendChild(listItem);
           
           
           listItem.addEventListener('click', function(event) {
            deleteItem(event);
           });
           
           taskInput.value = "";


    } else {
        taskInput.placeholder = "enter text";
    }

}



function deleteItem(event) {
    taskList.removeChild(event.target);
};