function checkNumber(value){
    try {
        if (typeof value !== "number") {
            throw new Error("not a number")
        } else {
            return "valid number"
        }
    } catch (error) {
        return error.message
    }
}

console.log(checkNumber(10))      // valid number
console.log(checkNumber("hello")) // not a number