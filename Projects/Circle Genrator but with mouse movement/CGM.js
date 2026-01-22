let main = document.querySelector("main");

document.addEventListener('mousemove', function(e) {
    let div = document.createElement('div')
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    let x = Math.random()*94
    let y = Math.random()*96
    let h = Math.floor(Math.random()*(50 - 10)+10)
    let w = Math.floor(Math.random()*(50 - 10)+10)
    let rot = Math.floor(Math.random()*360)

    div.style.height = h+'px'
    div.style.width = w+'px'
    div.style.rotate = rot + 'deg'
    div.style.top = x + '%'
    div.style.left = y + '%'
    div.style.position = 'absolute'
    div.style.backgroundColor = `rgb(${r},${g},${b})`

    main.appendChild(div)
});
