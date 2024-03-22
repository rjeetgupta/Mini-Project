const addButton = document.getElementById("btn");
const inputValue = document.getElementById('inputValue');
const listItem = document.getElementById('listItem');

function addTask() {
    const taskText = inputValue.value.trim();
    if (taskText === '') {
        alert('Please enter your task');
        return;
    }
    const taskItem = createTaskItem(taskText);
    listItem.appendChild(taskItem);
    clearInputValue();
}

function createTaskItem(taskText) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const taskTextNode = document.createTextNode(taskText);
    
    const editButton = createButton('Edit');
    editButton.onclick = function() {
        editTask(taskTextNode);
    };

    const deleteButton = createButton('Delete');
    deleteButton.onclick = function() {
        listItem.removeChild(li);
    };

    const li = document.createElement('li');
    li.appendChild(checkbox);
    li.appendChild(taskTextNode);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

function createButton(text) {
    const button = document.createElement('button');
    button.innerText = text;
    button.className = text.toLowerCase() + '-button';
    return button;
}

function editTask(taskTextNode) {
    const newText = prompt('Enter new task text:', taskTextNode.textContent);
    if (newText !== null) {
        taskTextNode.textContent = newText;
    }
}

function clearInputValue() {
    inputValue.value = '';
}

addButton.addEventListener("click", addTask);
