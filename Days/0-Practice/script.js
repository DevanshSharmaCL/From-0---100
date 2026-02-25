let promise = new Promise(function(res,rej){
    let rn = Math.floor(Math.random()*10);
    if(rn>5) res("resolved with " + rn)
        else rej("rejected with " + rn)
})

promise.then(function(val){
    console.log(val)
}).catch(function(val){
    console.log(val)
})