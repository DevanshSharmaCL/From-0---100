function loginUser(username , cb){
    console.log("login user.....")
    setTimeout(() => {
        cb({
            id:12121,
            username:"cyber"
        })
    }, 2000);
}

function fetchPermission(id , cb){
    console.log("fetching permission....")
    setTimeout(() => {
        cb(["read", "write", "delete"])
    }, 3000);
}

function loadDashboard(permission , cb){
    console.log("loading dashboard")
    setTimeout(() => {
        cb()
    }, 4000);
}

loginUser("cyber",function(userData){
    fetchPermission(userData.id,function(permission){
        loadDashboard(permission,function(){
            console.log("dashboard loaded")
        })
    })
})