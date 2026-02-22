function admitKaAddress(address,cb){
    console.log("fecting datat")
    setTimeout(()=>{
        console.log("here is ur data")
    },2500)
    setTimeout(()=>{
        cb({
            house:12,
            lan:2,
            lon:3
        })

    },3000)

}

admitKaAddress("h-1",function(details){
    console.log(details)
})