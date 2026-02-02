let main = document.querySelector('main')
let img = document.querySelector('.cursor img')

main.addEventListener('mousemove',function(details){
    img.style.left = details.x + 'px'
    img.style.top = details.y
     + 'px'
})