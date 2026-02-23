function afterDilay(time , cb){
    setTimeout(function(){
        cb(
            console.log("callback executed")
        )

    },time)
}

afterDilay(2000, function(){

})