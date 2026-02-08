let Btn = document.querySelector('.button')
let carImage = document.querySelector('img')
let carName = document.querySelector('.box p')

let carArr =[{
    name: "Toyota-Supra",
    image: "f47b648535d6deb69a1b36d1836e15b9.jpg",
    boxColor: "#3E1E68"
},{
    name: "Nissan-Silvia",
    image: "05753607feba7092b81d37c1df07b688.jpg",
    boxColor: "#9B7EBD"
},{
    name: "Porche-911",
    image: "8b183ec93480850499c95b0a20b573f3.jpg",
    boxColor: "#5A0E24"
}]

Btn.addEventListener('click',function(){
    
    let randomCar = Math.floor(Math.random()*carArr.length)
    carImage.src = carArr[randomCar].image
    carName.innerText = carArr[randomCar].name
    carName.parentElement.style.backgroundColor = carArr[randomCar].boxColor

})