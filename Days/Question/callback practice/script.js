function greetUser(name,cb){
    setTimeout(()=>{
        console.log(`hello ${name}`)
    },2000)
    setTimeout(() => {
        console.log("welcome to our websie")
        
    }, 3000);
}

greetUser("cyber")