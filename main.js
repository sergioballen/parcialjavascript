document.addEventListener('DOMContentLoaded', function () {
  if (typeof data === 'object' && data.tasks) {
    const taskTable = document.getElementById('taskTable'); 

    for (const taskId in data.tasks) {
      const task = data.tasks[taskId];
      const row = document.createElement('tr');

      const taskCell = document.createElement('td');
      taskCell.textContent = task.task;

      const stateCell = document.createElement('td');
      stateCell.textContent = task.state ? 'Cumplida' : 'No Cumplida';

      const endCell = document.createElement('td');
      endCell.textContent = task.end;

      row.appendChild(taskCell);
      row.appendChild(stateCell);
      row.appendChild(endCell);

      taskTable.appendChild(row);
    }
  } else {
    console.error('No se encontraron datos válidos en data.js');
  }
});