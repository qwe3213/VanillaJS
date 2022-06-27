const todoForm= document.getElementById("todo-form");
const todoList= document.getElementById("todo-list");
const todoInput=document.querySelector("#todo-form input")

const TODOS_KEY ="todos"
const toDos= [];

 
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    
}
function delteToDo(event){
   const li =event.target.parentElement;
   li.remove();
}
function paintTodo(newTodo){
   const li = document.createElement("li");
   const span =document.createElement("span");
   const button=document.createElement("button");
   button.innerText="X";
   button.addEventListener("click",delteToDo)
   li.appendChild(span);
   li.appendChild(button);
   span.innerText =newTodo;
   todoList.appendChild(li);
}
function handleToDosubmit(event){
   event.preventDefault();
   const newTodo= todoInput.value;
   todoInput.value="";
   toDos.push(newTodo)
   paintTodo(newTodo)
   saveToDos() 

}
function sayHello(item){
    console.log("This is turn of",item);
}

todoForm.addEventListener("submit",handleToDosubmit)

const savedTODos =localStorage.getItem(TODOS_KEY);
console.log(savedTODos);
if(savedTODos!==null){
    const parsedToDos = JSON.parse(savedTODos);
    parsedToDos.forEach(sayHello);
}


