// Dom = Document Object Model
// also frontend ki Javascript 

//Dom's 4 Pillars
//1. Selecting Elements
//2. Changing HTML
//3. Changing Styles
//4. Event Listeners


//1. Selecting Elements
let changeH1=document.querySelector('h1');

//2. HTML Change
changeH1.innerHTML="changed of dom"

//3. chinging Styles
changeH1.style.color="maroon"
changeH1.style.backgroundColor="maroon"


let box= document.querySelector('.box')
box.style.width = "300px"
box.style.height = "300px"
box.style.backgroundColor= "olive"
box.innerHTML = "this is a box"
box.style.display = "flex"
box.style.justifyContent = "center"
box.style.color = "cyan"
box.style.alignItems = "center"
box.style.fontSize = "30px"



//4. Event Listeners

box.addEventListener('click',()=>{
    box.style.backgroundColor="blue"
})

// differnce btw textContent and innerHTML , inertext
// ✅ Use textContent → 90% of time
// ⚠️ Use innerHTML → only when needed
// 🐢 Use innerText → when checking visible text



let positive = document.querySelector('.increment')
let button = document.querySelector('button')

positive.style.fontSize = "40px"
button.style.padding = "10px 20px"
button.style.fontSize = "20px"
button.style.backgroundColor = "green"
button.addEventListener('click',function(){
    positive.innerHTML = Number(positive.innerHTML)+1
})