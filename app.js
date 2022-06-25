const loginInput=document.querySelector("#login-form input");
const loginForm= document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME= "hidden" ;
function onSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username=loginInput.value;
  console.log(username);
  greeting.innerText="Hello "+ username;
  greeting.classList.remove(HIDDEN_CLASSNAME)
  localStorage.setItem("username",username)
}
function handleLinkClick(event){
   event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit",onSubmit);
