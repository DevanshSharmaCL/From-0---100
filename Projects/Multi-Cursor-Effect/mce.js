let div = document.querySelectorAll('.col')
let img = document.querySelectorAll('img')

console.log(img)

div.forEach(e=>{
    e.addEventListener('mouseenter',function(){
        e.style.backgroundColor = '#EF88AD'
        console.log("moving")
    })
    
    e.addEventListener('mouseleave',function(){
        e.style.backgroundColor = 'transparent'
    })
    
    e.addEventListener('mousemove',function(){
        e.style.top = img.x + 'px'
        e.style.left = img.y + 'px'
    })
})