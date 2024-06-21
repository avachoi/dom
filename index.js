import logIn from "./login.js";

const app = document.getElementById("app");
const header = document.querySelector("h1");
const main = document.getElementById("main");
const form = document.getElementById("form");
const todoInput = form.elements["todoInput"];
const lists = document.getElementById("lists");
const addTodoButton = document.getElementById("addTodoButton");
const doneList = document.getElementById("doneList");
const emailForm = document.getElementById("emailForm");
const loginButton = document.getElementById("loginButton");
const email = document.getElementById("email");
const welcome = document.getElementById("welcome");

lists.style.backgroundColor = "rgb(247, 238, 240)";
lists.style.color = "black";
todoInput.style.width = "350px";
todoInput.style.margin = "20px";
header.style.textAlign = "center";

function deleteTodo(e) {
	e.stopPropagation();
	const todoItem = e.target.parentElement.parentElement;
	todoItem.remove();
	alert("will be deleted");
}

function moveToDone(e) {
	const todoItem = e.target.parentElement.parentElement;
	const doneTodo = document.createElement("li");
	console.log("todoItem", todoItem);
	doneTodo.innerHTML = todoItem.firstChild.textContent.trim();
	doneList.appendChild(doneTodo);
	todoItem.remove();
}

function addTodo(e) {
	const newTask = todoInput.value.trim();
	if (newTask.length > 0) {
		const existingTasks = lists.querySelectorAll("li");
		let taskExists = false;
		existingTasks.forEach((task) => {
			if (task.textContent.trim().slice(0, -10) === newTask.trim()) {
				taskExists = true;
				task.style.color = "red";
			} else {
				task.style.color = "black";
			}
		});
		if (!taskExists) {
			let todo = document.createElement("li");
			todo.innerHTML = newTask;
			todo.style.fontSize = "20px";
			const deleteButton = document.createElement("button");
			const doneButton = document.createElement("button");
			const buttons = document.createElement("div");
			buttons.appendChild(deleteButton);
			buttons.appendChild(doneButton);
			doneButton.innerHTML = "done";
			deleteButton.innerHTML = "delete";
			todo.appendChild(buttons);

			lists.appendChild(todo);
			deleteButton.addEventListener("click", deleteTodo);
			doneButton.addEventListener("click", moveToDone);
			todoInput.value = "";
			window.scrollTop = lists.scrollHeight;
		} else {
			alert("Task already exists in the list!");
			todoInput.focus();
		}
	} else {
		alert("Todo cannot be empty");
		todoInput.focus();
	}
}

addTodoButton.addEventListener("click", addTodo);

loginButton.addEventListener("click", logIn);

app.style.fontFamily = "Gill Sans";
