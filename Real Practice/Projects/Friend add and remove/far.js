let frnd = document.querySelector('h5')
let add = document.getElementById('Add')

let flag = 0 

add.addEventListener('click', function(){
    if (flag == 0 ){
        frnd.innerHTML = 'Friend'
        frnd.style.color = 'green'
        add.innerHTML = ' Remove'
        flag = 1
    }else{
        frnd.innerHTML = "Stranger"
        frnd.style.color = 'red'
        add.innerHTML = 'Add Friend' 
        flag = 0
    }
})
