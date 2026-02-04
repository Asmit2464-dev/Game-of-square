let first= document.querySelector(".start")
let body=document.querySelector("body")
first.addEventListener("click",function(){

  
setInterval(function () {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
},300)
})
let sq1=document.querySelector("#sq1")

first.addEventListener("click",function(){
setInterval(function(){
let r =  Math.floor(Math.random()*1000)
sq1.innerHTML=`<h1>${r} </h1>`
}, 1000)

setInterval(function(){
let words = ["Apple", "Banana", "Mango", "Orange", "Grapes","Pineapple","kiwi","Peach","Guava","Watermelon"];
let randomIndex = Math.floor(Math.random() * words.length);
  sq2.innerHTML = `<h1>${words[randomIndex]}</h1>`;
},1000)
})

let start=document.querySelector(".start")
start.addEventListener("mouseover",function(){
  start.style.cursor="pointer"
})
let sq2=document.querySelector("#sq2")
first.addEventListener("click",function(){
setInterval(function(){
  sq2.classList.add("rotate");
},1000)

})

let heading3= document.querySelector("#heading3")

first.addEventListener("click",function(){ 
    heading3.classList.add("loading3")
    heading3.innerHTML=" "

})

// let sq4= document.querySelector("#sq4")
// first.addEventListener("click",function(){
//   sq4.classList.add("image")
//   sq4.innerHTML=" "
// })

let sq4= document.querySelector("#sq4")
first.addEventListener("click",function(){
setInterval(function(){
  let images = ["cpu.png","pic.jpg","pic2.avif","pic3.jpg"];
let randomIndex = Math.floor(Math.random() * images.length);
sq4.style.backgroundImage = `url(${images[randomIndex]})`;
sq4.innerHTML=""
},200)
sq4.classList.add("image")
})

// curosr move
// let crsr=document.querySelector(".cursor")
// crsr.style.backgroundColor="green"
// let first2= document.querySelector("body")
// first2.addEventListener("mouseover",function(dets){

//   crsr.style.left = dets.x + "px"
//   crsr.style.top = dets.y + "px"
// })

