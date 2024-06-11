const header = document.querySelector("h1");
const main = document.getElementById("main");
const form = document.getElementById("form");
const todoInput = form.elements["todoInput"];
const lists = document.getElementById("lists");
const addTodoButton = document.getElementById("addTodoButton");

lists.style.backgroundColor = "rgb(247, 238, 240)";
todoInput.style.width = "350px";
todoInput.style.margin = "20px";
header.style.textAlign = "center";

function deleteTodo(e) {
	const todoItem = e.target.parentElement;
	todoItem.remove();
	alert("will be deleted");
}

function addTodo(e) {
	const newTask = todoInput.value.trim();
	if (newTask.length > 0) {
		let todo = document.createElement("li");
		todo.innerHTML = newTask;
		todo.style.fontSize = "20px";
		const deleteButton = document.createElement("button");
		deleteButton.innerHTML = "delete";
		todo.appendChild(deleteButton);
		lists.appendChild(todo);
		deleteButton.addEventListener("click", deleteTodo);
		todoInput.value = "";
		window.scrollTop = lists.scrollHeight;
	} else {
		alert("Todo cannot be empty");
		todoInput.focus();
	}
}

addTodoButton.addEventListener("click", addTodo);

header.style.fontFamily = "Gill Sans";
