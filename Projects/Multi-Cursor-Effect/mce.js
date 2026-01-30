let div = document.querySelectorAll('.col')


div.forEach(function(e){

    let img = e.querySelector('img')


 e.addEventListener('mouseenter',function(){
    e.style.backgroundColor = "red"
    img.style.opacity = '1'
})


e.addEventListener('mouseleave',function(){
    e.style.backgroundColor = "transparent"
    img.style.opacity = '0'
    // console.log("leaved")
 })


 e.addEventListener('mousemove',function(move){
    img.style.top = move.y + 'px'
    // img.style.left = move.x + 'px'
 })
})