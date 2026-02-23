function afterDilay(time , cb){
    setTimeout(function(){
        cb(
        )
        
    },time)
}

afterDilay(2000, function(){
    
    console.log("callback executed")
})