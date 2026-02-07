// Function to create a new TODO and add it to the list
function createNewTodo() {
  const todoText = prompt("Enter your new TODO:");

  if (todoText !== null && todoText.trim() !== "") {
    const todoDiv = document.createElement("div");
    todoDiv.textContent = todoText;
    todoDiv.classList.add("todo-item");

    // Add click event listener to remove the TODO on click
    todoDiv.addEventListener("click", function () {
      const confirmation = confirm("Do you want to remove this TODO?");
      if (confirmation) {
        removeTodo(todoDiv);
        saveTodoList();
      }
    });

    // Add the new TODO at the top of the list
    const ftList = document.getElementById("ft_list");
    ftList.insertBefore(todoDiv, ftList.firstChild);

    saveTodoList(); // Save the updated list to localStorage
  }
}

// Function to remove a TODO permanently from the DOM
function removeTodo(todoElement) {
  todoElement.remove();
}

// Function to open the text window for creating a new TODO
function openNewTodo() {
  createNewTodo();
}

// Function to save the TODO list to localStorage
function saveTodoList() {
  const todoList = document.getElementById("ft_list").innerHTML;
  localStorage.setItem("todoList", todoList);
}

// Function to load the TODO list from localStorage
function loadTodoList() {
  const ftList = document.getElementById("ft_list");
  const savedTodoList = localStorage.getItem("todoList");

  if (savedTodoList) {
    ftList.innerHTML = savedTodoList;
  }
}

// Load the TODO list when the page is loaded
document.addEventListener("DOMContentLoaded", loadTodoList);
