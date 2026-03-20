function divide(a,b){
    try {
        if(b===0){
            throw new Error("cannot divide by zero")
        }
        return a/b

    } catch (error) {
        return error.message
    }
}

console.log(divide(10,5))
console.log(divide(10,0))
console.log(divide(10,3))