let btn = document.querySelector('button');
let main = document.querySelector('main');

let arr = ["This is Cyber","This is not Light","Full name is CyberLight","Without any spaces in it","sorry Without any space in btw","Sheriyan coding school is indeed good "]

btn.addEventListener('click', function () {
    let h1 = document.createElement('h1')
    let random = Math.floor(Math.random()*arr.length)
    let x = Math.random()*75
    let y = Math.random()*75
    let fs = Math.random()*(100-10)+10
    let rot = Math.floor(Math.random()*360)
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    
    h1.style.position='absolute'
    h1.style.top = x+'%'  
    h1.style.left = y+'%'
    h1.style.fontSize = fs + 'px'  
    h1.style.rotate = rot + 'deg'
    h1.style.color = `rgb(${r},${g},${b})`

    h1.innerText = arr[random]
    main.appendChild(h1);
});
