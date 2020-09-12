// Selectors
todoButton = document.querySelector(".todo-button");
todoList = document.querySelector(".todo-list");
todoInput = document.querySelector(".todo-input");
todoSelect = document.querySelector(".select");

// Event Listerns

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);
todoSelect.addEventListener("click", completedUncompleted);
// Functions

function addTodo(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  todoList.appendChild(todoDiv);

  const todo = document.createElement("li");
  todo.classList.add("todo-item");
  todo.innerText = todoInput.value;
  todoDiv.appendChild(todo);

  const checkButton = document.createElement("button");
  checkButton.classList.add("check-btn");
  checkButton.innerHTML = ' <i class="fas fa-check"></i>';
  todoDiv.appendChild(checkButton);

  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class="fas fa-trash">';
  todoDiv.appendChild(trashButton);

  todoInput.value = "";
}

function checkDelete(e) {
  const item = e.target;
  const parent = item.parentElement;
  if (item.classList[0] === "check-btn") {
    parent.classList.toggle("completed");
  } else if (item.classList[0] === "trash-btn") {
    parent.classList.add("removed");
    parent.addEventListener("transitionend", function () {
      parent.remove();
    });
  }
}

function completedUncompleted(e) {
  const item = todoList.children;
  const todos = Array.from(item);
  const value = e.target.value;
  todos.forEach(function (todo) {
    switch (value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
