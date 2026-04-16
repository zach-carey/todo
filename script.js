const add = document.getElementById("add");

add.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value;
  const container = document.getElementById("taskContainer");

  const taskBox = document.createElement("div");
  const newItem = document.createElement("p");
  const deleteBtn = document.createElement("button");

  taskBox.className = "taskBox notcompleted";
  
  

  newItem.textContent = taskValue;
  deleteBtn.className = "delete";
  deleteBtn.textContent = "𝘋𝘌𝘓𝘌𝘛𝘌";

  taskBox.appendChild(newItem);
  taskBox.appendChild(deleteBtn);
  container.appendChild(taskBox);

  deleteBtn.addEventListener("click", function(){
    taskBox.remove();
  });

  taskBox.addEventListener("click", function () {
    taskBox.classList.toggle("completed");
});



  taskInput.value = "";
});




