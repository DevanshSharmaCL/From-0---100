let block = document.querySelectorAll('.elem')
let allbtn = document.querySelectorAll('button')


allbtn.forEach(function(elem){
    elem.addEventListener('click',function(dtl){
        if(elem.innerHTML == "Add Friend"){
            elem.innerHTML = "Remove Friend"
        }
        else{
            elem.innerHTML = "Add Friend"
        }
    })
})