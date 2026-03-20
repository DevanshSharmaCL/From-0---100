function withdraw(balance ,amount){
    try {
        if(balance<amount){
            throw new Error("inefficinet amount")
        }else{
            return balance-amount
        }
    } catch (error) {
        return error.message
    }
}

console.log(withdraw(1000,100))
console.log(withdraw(100,1000))