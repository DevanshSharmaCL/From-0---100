 function add (a,b){
    return a+b
 }

 function sub(a,b){
    return a-b
 }

 function calci(a,b,operation){
    return operation(a,b)
 }

 console.log(calci(2,5,add))