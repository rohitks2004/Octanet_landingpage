let tasks =[];


function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.sort((a, b) => {
      const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      
      // Sort by priority
      if (priorityOrder[b.priority] !== priorityOrder[a.priority]) {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        // If priority is the same, sort by deadline (date)
        return new Date(a.deadline) - new Date(b.deadline);
      }
    });
  
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div>
          <label for="completeTask${index}">
            <span>${task.task}</span>
            <span>Deadline: ${task.deadline}</span>
            <span>Priority: ${task.priority}</span>
          </label>
          <button class="del-button" onclick="deleteTask(${index})">Delete</button>
          <button class="com-button" id="completeTask${index}" onclick="completeTask(${index})">Complete</button>
          </div>
      `;
      taskList.appendChild(li);
    });

  }
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const priorityInput = document.getElementById('priorityInput');
    
    const newTask = {
      task: taskInput.value.trim(),
      deadline: deadlineInput.value,
      priority: priorityInput.value
    };
    
    if (newTask.task !== ''  && newTask.deadline !==''  &&  newTask.priority!== '') {
      tasks.push(newTask);
      taskInput.value = '';
      deadlineInput.value = '';
      displayTasks();
    }
  }
  
  function completeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
  }
  
  function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
  }
  
  window.onload = displayTasks;
  