const h1=document.querySelector("div.hello:first-child h1");


function handleClick(){
    const activee ="active"
   if(h1.className===activee){
    h1.className="";
   } else{
    h1.className=activee
   }
}

h1.addEventListener("click",handleClick);
