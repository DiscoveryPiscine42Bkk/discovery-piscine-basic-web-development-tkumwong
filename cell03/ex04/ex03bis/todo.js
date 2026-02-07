// Function to create a new TODO and add it to the list
function createNewTodo() {
    const todoText = prompt("Enter your new TODO:");
    if (todoText !== null && todoText.trim() !== "") {
        const todoDiv = $("<div>").text(todoText).addClass("todo-item");
        // Add click event listener to remove the TODO on click
        todoDiv.on("click", function () {
            const confirmation = confirm("Do you want to remove this TODO?");
            if (confirmation) {
                removeTodo($(this));
                saveTodoList();
            }
        });
        // Add the new TODO at the top of the list
        $("#ft_list").prepend(todoDiv);
        saveTodoList(); // Save the updated list to cookies
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

// Function to save the TODO list to cookies
function saveTodoList() {
    const todoList = $("#ft_list").html();
    document.cookie = "todoList=" + encodeURIComponent(todoList) + "; path=/; max-age=" + 7 * 24 * 60 * 60;
}

// Function to load the TODO list from cookies
function loadTodoList() {
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith('todoList='));
    if (cookieValue) {
        const savedTodoList = decodeURIComponent(cookieValue.split('=')[1]);
        $("#ft_list").html(savedTodoList);

        // Reattach the click event to each loaded TODO item
        $(".todo-item").on("click", function () {
            const confirmation = confirm("Do you want to remove this TODO?");
            if (confirmation) {
                removeTodo($(this));
                saveTodoList();
            }
        });
    }
}

// Load the TODO list when the page is loaded
$(document).ready(loadTodoList);
