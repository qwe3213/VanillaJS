const loginInput=document.querySelector("#login-form input");
const loginForm= document.querySelector("#login-form");
const link =document.querySelector("a");


function onSubmit(event){
  event.preventDefault();
  console.log(loginInput.value); 

}
function handleLinkClick(event){
   event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit",onSubmit);
link.addEventListener("click",handleLinkClick)