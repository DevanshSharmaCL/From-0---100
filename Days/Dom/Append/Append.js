let btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    let createH1 = document.createElement('h1')
    createH1.innerHTML = "This is created using DOM"
    let createDiv = document.createElement('div')
    let body = document.querySelector('body')
    body.appendChild(createDiv)
    createDiv.appendChild(createH1)
    console.log(createDiv)
    console.log(createH1) 
})