 

function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name:"cyber",
                age:20
            })
        },1000)
    })
}

getUserData()
.then((data)=>{
    console.log(data)
})