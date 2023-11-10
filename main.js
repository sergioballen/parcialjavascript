document.addEventListener('DOMContentLoaded', function () {
  const taskTable = document.getElementById('taskTable'); 
  const addTaskForm = document.getElementById('addTaskForm'); 
  const filterState = document.getElementById('filterState'); 

  function addTaskToTable(taskName, taskStatus, taskDate) {
    const row = document.createElement('tr');

    const taskCell = document.createElement('td');
    taskCell.textContent = taskName;

    const stateCell = document.createElement('td');
    stateCell.textContent = taskStatus ? 'Cumplida' : 'No Cumplida';

    const endCell = document.createElement('td');
    endCell.textContent = taskDate;

    row.appendChild(taskCell);
    row.appendChild(stateCell);
    row.appendChild(endCell);

    taskTable.appendChild(row);
  }

  function loadTasksFromData() {
    if (typeof data === 'object' && data.tasks) {
      for (const taskId in data.tasks) {
        const task = data.tasks[taskId];
        addTaskToTable(task.task, task.state, task.end);
      }
    } else {
      console.error('No se encontraron datos válidos en data.js');
    }
  }

  loadTasksFromData();

  addTaskForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const taskName = document.getElementById('taskName').value;
    const taskStatus = document.getElementById('taskStatus').value;
    const taskDate = document.getElementById('taskDate').value;

    addTaskToTable(taskName, taskStatus, taskDate);

   
    addTaskForm.reset();
  });

  
  filterState.addEventListener('change', function () {
    updateTable();
  });

  function updateTable() {
    const selectedState = filterState.value; 

    taskTable.innerHTML = '';

    for (const taskId in data.tasks) {
      const task = data.tasks[taskId];
      
      if (selectedState === 'all' || 
          (selectedState === 'cumplida' && task.state) || 
          (selectedState === 'noCumplida' && !task.state)) {
        addTaskToTable(task.task, task.state, task.end);
      }
    }
  }
});
