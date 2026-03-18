// promises => no matter what , this will get done, even if condition is true or false
// its an object that represent future result 
// which give result later
// callback is calling the function into another function 
// promises has 3 stages , 
//pending - still working 
//resolve - success
//reject - failure


function checkUserAge(){
    return new Promise((resolve,reject)=>{
        let age = Math.floor(Math.random()*30)

        if(age>=18){resolve(`access granted , age is ${age}`)}
            else {reject(`access denied , age is ${age}`)}
    })
}
// now we have to even handle the result too 
checkUserAge()
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})