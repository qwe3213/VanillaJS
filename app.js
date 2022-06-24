const h1=document.querySelector("div.hello:first-child h1");


function handleClick(){
    h1.style.color="blue";
}
function handlemoustenter(){
    h1.innerText= "Mouse is here"
}
function handlemouseleave(){
    h1.innerText="Mouse is gone"
}
function handleWindowResize(){
    document.body.style.background="tomato"
}
function copystart(){
    alert("hihihihi")
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("WIFI ON");
}

h1.addEventListener("click",handleClick);
h1.addEventListener("mouseenter",handlemoustenter);
h1.addEventListener("mouseleave",handlemouseleave);


window.addEventListener("copy",copystart);
window.addEventListener("resize",handleWindowResize);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);