function addTask() {
    const taskInput = document.getElementById('inp');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new task container
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task1');
    
    // Create task label
    const taskLabel = document.createElement('p');
    taskLabel.textContent = taskInput.value;
    taskLabel.classList.add('taskLabel');
    
    // Create Done button
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.classList.add('btnDone');
    doneButton.addEventListener('click', () => {
        taskLabel.style.textDecoration = 'line-through';
    });

    // Create Incomplete button
    const incompleteButton = document.createElement('button');
    incompleteButton.textContent = 'Incomplete';
    incompleteButton.classList.add('btnIncomplete');
    incompleteButton.addEventListener('click', () => {
        taskLabel.style.textDecoration = 'none';
    });

    // Append elements to the task container
    taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(doneButton);
    taskContainer.appendChild(incompleteButton);
    
    // Append the task container to the task list
    taskList.appendChild(taskContainer);

    // Update the task count
    updateTaskCount();

    // Clear the input field
    taskInput.value = '';
}

// Function to update the task count
function updateTaskCount() {
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');

    // Count the number of tasks
    const count = taskList.children.length;

    // Update the task count display
    taskCount.textContent = `Tasks: ${count}`;
}

// Add event listener to the "Add Task" button
document.querySelector('.task-button button').addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
document.getElementById('inp').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
