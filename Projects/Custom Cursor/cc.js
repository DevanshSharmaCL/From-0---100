let main = document.querySelector(".main")
let cursor = document.querySelector(".cursor")

main.addEventListener('mousemove',function(mov){

    cursor.style.left = mov.x + 'px'
    cursor.style.top = mov.y + 'px'
})