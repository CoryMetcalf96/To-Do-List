// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// Functions

function addTodo(event){
    // Prevents a refresh from happening- the form default.
    event.preventDefault();
    // Create Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    todoInput.value = "";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton)
    // Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)
    // Append to the list
    todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
    const item = e.target;
    // Delete Todo
    const todo = item.parentElement;
    todo.remove();
}