let promise = new Promise(function(res,rej){
    let rn = Math.floor(Math.random()*10);
    if(rn>5) res("resolved with " + rn)
        else rej("rejected with " + rn)
})

async function waiting(){
    try{
        let val = await promise;
        console.log(promise);
    } catch (err){
        console.log(err)
    }
}

waiting()