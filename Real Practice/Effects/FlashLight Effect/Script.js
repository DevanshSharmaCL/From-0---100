document.addEventListener('mousemove', function(details){

    let x = details.clientX + "px"
    let y = details.clientY + "px"

    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--y', y)

})
