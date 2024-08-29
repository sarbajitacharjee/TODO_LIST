document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    function addTask(taskText) {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        todoItem.appendChild(taskSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    }

    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const themeToggle = document.getElementById('theme-toggle');
        
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = '🌞'; // Sun emoji for light mode
        } else {
            themeToggle.textContent = '🌚'; // Moon emoji for dark mode
        }
    });
    
    
});
