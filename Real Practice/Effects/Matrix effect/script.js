let h1 = document.querySelector('h1')
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+}{";  // 76 
let text = h1.innerText
console.log(character.length)
let iteration = 0 

function matrixText(){
    const str = text.split("").map((char , index)=>{
        if(index<iteration){
            return char
        }
        return character.split("")[Math.floor(Math.random()*character.length)] 
    }).join("")

    h1.innerText = str
    iteration += 0.5
}
    
h1.addEventListener('mouseenter', function(e){
    setInterval(() => {
        matrixText()
        
    }, 30);

})

