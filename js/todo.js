const todoForm= document.getElementById("todo-form");
const todoList= document.getElementById("todo-list");
const todoInput=document.querySelector("#todo-form input")

function paintTodo(newTodo){
   const li = document.createElement("li");
   const span =document.createElement("span");
   li.appendChild(span);
   span.innerText =newTodo;
   todoList.appendChild(li);
}
function handleToDosubmit(event){
   event.preventDefault();
   const newTodo= todoInput.value;
   todoInput.value="";
   paintTodo(newTodo)
}

todoForm.addEventListener("submit",handleToDosubmit)