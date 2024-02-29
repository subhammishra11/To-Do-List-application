function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;
  
  if (task === '') {
    alert("Please enter a task!");
    return;
  }
  
  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  
  li.onclick = function() {
    li.classList.toggle("completed");
  };
  
  ul.appendChild(li);
  input.value = '';
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("taskInput").blur();
    addTask();
  }
});
