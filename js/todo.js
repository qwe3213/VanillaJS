const todoForm= document.getElementById("todo-form");
const todoList= document.getElementById("todo-list");
const todoInput=document.querySelector("#todo-form input")

function handleToDosubmit(event){
   event.preventDefault();
   console.log(todoInput.value);
   const newTodo= todoInput.value;
   todoInput.value="";
}

todoForm.addEventListener("submit",handleToDosubmit)