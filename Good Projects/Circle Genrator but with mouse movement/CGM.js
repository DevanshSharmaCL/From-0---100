let main = document.querySelector("main");

document.addEventListener('mousemove', function(e) {
    let div = document.createElement('div')
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    let y = Math.random()*93
    let x = Math.random()*97
    let h = Math.floor(Math.random()*(50 - 10)+10)
    let w = Math.floor(Math.random()*(50 - 10)+10)
    let rot = Math.floor(Math.random()*360)
    let br = Math.floor(Math.random()*50)

    div.style.height = h+'px'
    div.style.width = w+'px'
    div.style.rotate = rot + 'deg'
    div.style.top = y + '%'
    div.style.left = x + '%'
    div.style.position = 'absolute'
    div.style.backgroundColor = `rgb(${r},${g},${b})`
    div.style.borderRadius = br + '%'
    main.appendChild(div)
});
