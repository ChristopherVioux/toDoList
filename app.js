const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);

function addTodo(e) {
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const checkedButton = document.createElement("button");
    checkedButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    checkedButton.classList.add("chkd-btn");
    todoDiv.appendChild(checkedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-regular fa-square-minus"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv)
}