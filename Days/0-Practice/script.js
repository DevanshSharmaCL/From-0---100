function userId(username,cb){
    setTimeout(()=>{
        cb({
            userName:"cyber",
            id:6666,
        })
    },1000)
}

function userKiImg(uniquenum,cb){
    setTimeout(()=>{
        cb({
            img:"shjbda",
            img:"sdjnahjsd",
        })
    },3000)
}

userId("light",function(d){
    userKiImg(d.uniquenum,function(image){
        console.log(d,image)
    })
})