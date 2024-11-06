// Array to store to-do items
let todoList = [];

// DOM Elements
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dueDateInput = document.getElementById("dueDate");
const addBtn = document.getElementById("addBtn");
const sortAscBtn = document.getElementById("sortAsc");
const sortDescBtn = document.getElementById("sortDesc");
const todoListContainer = document.getElementById("todoList");

// Helper function to create a new to-do item
function createTodoItemElement(todoItem, index) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  if (todoItem.completed) {
    li.classList.add("complete");
  }

  li.innerHTML = `
       <table class="table" style="width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 10px;">
  <thead>
    <tr>
        <th class="" style="width: 25%; border: 1px solid #ddd; padding: 8px;">Title</th>
      <th style="width: 35%; border: 1px solid #ddd; padding: 8px;">Description</th>
      <th style="width: 20%; border: 1px solid #ddd; padding: 8px;">Due Date/Time</th>
      <th style="width: 20%; border: 1px solid #ddd; padding: 8px;">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style=" padding: 8px;">${todoItem.title}</td>
      <td style=" padding: 8px;">${
        todoItem.description || "No description"
      }</td>
      <td style=" padding: 8px;">${new Date(
        todoItem.dueDate
      ).toLocaleString()}</td>
      <td style=" padding: 8px; width: auto;">
       <button class="edit" onclick="editTodoItem(${index})">Edit</button>
        <button class="delete" onclick="deleteTodoItem(${index})">Delete</button>
        <button class="complete" onclick="toggleComplete(${index})">
          ${todoItem.completed ? "Undo" : "Complete"}
        </button>
      </td>
    </tr>
  </tbody>
</table>
    `;
  return li;
}

// Add to-do item
addBtn.addEventListener("click", function () {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const dueDate = new Date(dueDateInput.value);

  if (!title) {
    alert("Title field can't be empty");
    return;
  } else if (isNaN(dueDate)) {
    alert("Please provide a valid date and time");
    return;
  }

  const newTodoItem = {
    title,
    description,
    dueDate,
    completed: false,
  };

  todoList.push(newTodoItem);
  renderTodoList();

  alert("New to-do item added!");

  titleInput.value = "";
  descriptionInput.value = "";
  dueDateInput.value = "";
});

// Render the to-do list
function renderTodoList() {
  todoListContainer.innerHTML = "";
  todoList.map((todoItem, index) => {
    const todoItemElement = createTodoItemElement(todoItem, index);
    todoListContainer.appendChild(todoItemElement);
  });
}

// Delete a to-do item
function deleteTodoItem(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

// Edit a to-do item
function editTodoItem(index) {
  const todoItem = todoList[index];
  titleInput.value = todoItem.title;
  descriptionInput.value = todoItem.description;
  dueDateInput.value = todoItem.dueDate.toISOString().slice(0, 16);
  deleteTodoItem(index);
}

// Toggle complete status of a to-do item
function toggleComplete(index) {
  todoList[index].completed = !todoList[index].completed;
  renderTodoList();
}

// Sort the list by due date (ascending)
sortAscBtn.addEventListener("click", function () {
  todoList.sort((a, b) => a.dueDate - b.dueDate);
  renderTodoList();
});

// Sort the list by due date (descending)
sortDescBtn.addEventListener("click", function () {
  todoList.sort((a, b) => b.dueDate - a.dueDate);
  renderTodoList();
});

// Initial render of the list (empty initially)
renderTodoList();
