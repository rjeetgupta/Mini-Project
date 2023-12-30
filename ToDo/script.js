const addButton = document.getElementById("btn");
const inputValue = document.getElementById('inputValue');
const listItem = document.getElementById('listItem');



function addTask() {
    const taskText = inputValue.value.trim();

    if (taskText === '') {
        alert('Please enter your task');
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = addTask;
    listItem.appendChild('li')
    addTask(`${taskText}`)
    
    // Clear the input value after adding task
    inputValue.value = '';
}

addButton.addEventListener('click', addTask);


// const button = document.querySelector('.btn');
// // const toDoBox = document.querySelector('todo-box').value;
// const inputValue = document.getElementById('inputValue');

// button.addEventListener('click', addTask() )

//     function addTask() {
//         const taskText = inputValue.value.trim();
//         if (taskText === ' ') {
//             alert('Please enter a task');
//             return;
//         }
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(taskText));
//         document.querySelector('.todo-box').appendChild(li);
//         // document.body.appendChild(li);
//     }
    // createList(`${inputValue}`);
    
    
    // console.log(inputValue);
    // alert("button clicked");



// const addToDo = (li) => {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `
//         ${inputValue}
//         <i class="fas fa-times"></i>
//     `;
//     toDoBox.appendChild(listItem);
// }

// const removeElements = document.getElementsByClassName('fa-times')
// removeElements.addEventListener('click', function () {
//     li.remove();
// })