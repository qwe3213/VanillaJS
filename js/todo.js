const todoForm= document.getElementById("todo-form");
const todoList= document.getElementById("todo-list");
const todoInput=document.querySelector("#todo-form input")

const TODOS_KEY ="todos"
let toDos= [];

 
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    
}
function delteToDo(event){ 
   const li =event.target.parentElement;
   li.remove();
   toDos =toDos.filter((toDo)=>toDo.id !==parseInt(li.id));
   saveToDos()
   
 
}
function paintTodo(newTodo){
   const li = document.createElement("li");
   li.id=newTodo.id
   const span =document.createElement("span");
   span.innerText= newTodo.text;
   const button=document.createElement("button");
   button.innerText="X";
   button.addEventListener("click",delteToDo)
   li.appendChild(span);
   li.appendChild(button);
  
   todoList.appendChild(li);
}
function handleToDosubmit(event){
   event.preventDefault();
   const newTodo= todoInput.value;
   todoInput.value="";
   const newTodoObj= {
    text:newTodo,
    id:Date.now(),
   };
   toDos.push(newTodoObj)
   paintTodo(newTodoObj)
   saveToDos() 

}


todoForm.addEventListener("submit",handleToDosubmit)

const savedTODos =localStorage.getItem(TODOS_KEY);
console.log(savedTODos);
if(savedTODos!==null){
    const parsedToDos = JSON.parse(savedTODos);
    toDos =parsedToDos;
    parsedToDos.forEach(paintTodo);
}


