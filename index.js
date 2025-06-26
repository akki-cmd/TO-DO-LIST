const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // Function to create a task item
    function createTask(taskText) {
      const li = document.createElement('li');
      li.className = 'flex items-center justify-between bg-gray-50 border border-gray-200 rounded px-3 py-2';

      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      taskSpan.className = 'flex-1';

      const buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'ml-2 flex space-x-2';

      // Complete Button
      const completeBtn = document.createElement('button');
      completeBtn.textContent = '✓';
      completeBtn.className = 'text-green-500 hover:text-green-700';
      completeBtn.title = 'Mark as completed';

      completeBtn.addEventListener('click', () => {
        taskSpan.classList.toggle('line-through');
        taskSpan.classList.toggle('text-gray-400');

        taskSpan.classList.toggle('text-gray-400');
      });

      // Delete Button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑️';
      deleteBtn.className = 'text-red-500 hover:text-red-700';
      deleteBtn.title = 'Remove task';

      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });

      buttonsDiv.appendChild(completeBtn);
      buttonsDiv.appendChild(deleteBtn);

      li.appendChild(taskSpan);
      li.appendChild(buttonsDiv);

      return li;
    }

    // Add task on button click
    addBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskItem = createTask(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskInput.focus();
      }
    });

    // Add task on Enter key press
    taskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        addBtn.click();
      }
    });
