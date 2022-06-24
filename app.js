const h1=document.querySelector("div.hello:first-child h1");


function handleClick(){
    const currentcolor=h1.style.color
    let newColor;
  if(currentcolor==="tomato"){
    newColor="blue";
  }else{
    newColor="tomato"
  }
  h1.style.color= newColor;
}

h1.addEventListener("click",handleClick);
