let h1 = document.querySelector('h1')
let btn = document.querySelector('button')
let grow = 0;
let inner = document.querySelector('.inner')

btn.addEventListener('click',function(){
    let bar = setInterval(function(){
        grow++
        h1.innerText = grow+'%'
        inner.style.width= grow + '%'  
    },50)
    setTimeout(()=>{
        clearInterval(bar)
    },5000)
    console.log()
})