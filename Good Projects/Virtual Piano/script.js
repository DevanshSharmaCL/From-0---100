let stroke = document.querySelector('.Strokes')

//24 = 1
//29 = 2
//36 = 3
//41 = 4
//48 = q
//53 = w
//60 = e 
//64 = r 
//65 = t 
//69 = y 
//72 = u 
//77 = i 
//79 = o
//84 = p 
//96 = [ 
    
let keys = document.querySelectorAll('.keys')


document.addEventListener('keydown',function(details){
    let pressedKey = details.key 

    keys.forEach(function(keya){
        if(pressedKey === "1"){
            let a24 = new Audio("Audios/24.mp3")
            a24.play();
        }
        if(pressedKey === "2"){
            let a29 = new Audio("Audios/29.mp3")
            a29.play();
        }
        if(pressedKey === "3"){
            let a36 = new Audio("Audios/36.mp3")
            a36.play();
        }
        if(pressedKey === "4"){
            let a41 = new Audio("Audios/41.mp3")
            a41.play();
        }
        if(pressedKey === "q"){
            let a48 = new Audio("Audios/48.mp3")
            a48.play();
        }
        if(pressedKey === "w"){
            let a53 = new Audio("Audios/53.mp3")
            a53.play();
        }
        if(pressedKey === "e"){
            let a60 = new Audio("Audios/60.mp3")
            a60.play();
        }
        if(pressedKey === "r"){
            let a64 = new Audio("Audios/64.mp3")
            a64.play();
        }
        if(pressedKey === "t"){
            let a65 = new Audio("Audios/65.mp3")
            a65.play();
        }
        if(pressedKey === "y"){
            let a69 = new Audio("Audios/69.mp3")
            a69.play();
        }
        if(pressedKey === "u"){
            let a72 = new Audio("Audios/72.mp3")
            a72.play();
        }
        if(pressedKey === "i"){
            let a77 = new Audio("Audios/77.mp3")
            a77.play();
        }
        if(pressedKey === "o"){
            let a79 = new Audio("Audios/79.mp3")
            a79.play();
        }
        if(pressedKey === "p"){
            let a84 = new Audio("Audios/84.mp3")
            a84.play();
        }
        if(pressedKey === "["){
            let a96 = new Audio("Audios/96.mp3")
            a96.play();
        }
    })
})