const images=["0.jpg","1.jpg","2.jpg"]

const randomimage= images[Math.floor(Math.random()*images.length)]
console.log(randomimage);

const bgimg= document.createElement("img")

bgimg.src=`img/${randomimage}`;

document.body.appendChild(bgimg)