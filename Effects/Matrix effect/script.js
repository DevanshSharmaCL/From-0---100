let para = document.querySelector('h1')

let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let text = para.textContent.trim()

let iteration = 0 

para.addEventListener('mouseenter', function(){

    let interval = setInterval(() => {

        let str = text.split('').map((char, index) => {

            if(index < iteration){
                return char
            }

            return character[Math.floor(Math.random() * character.length)]

        }).join('')

        para.textContent = str

        iteration += 0.5

        if(iteration >= text.length){
            clearInterval(interval)
        }

    }, 30)

})
