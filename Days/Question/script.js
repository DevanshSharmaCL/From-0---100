// let user = {
//     name:"cyber",
//     email: "CyberLi55@gmail.com",
//     login:function(){
//         console.log("logged in")
//     }
// }

// user.login()

class user {
    constructor(name, email){
        this.name = name
        this.email = email 
    }
    loggedIn(){
        console.log("LoggeTIN")
    }
}   


let user1 = new user("cyber" ,"cyber@k.k")
let user2 = new user("light" ,"light@k.k")
let user3 = new user("dark" ,"dark@k.k")
let user4 = new user("beast" ,"beast@k.k")
let user5 = new user("ckl" ,"ckl@k.k")

console.log(user1,user2,user3,user4,user5)