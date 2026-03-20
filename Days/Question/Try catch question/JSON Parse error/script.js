function parseData(data){
    try {
        let string = JSON.parse(data)
        return string
    } catch (error) {
        return "invalid string"
    }
}

console.log(parseData(`{"name":"cyber"}`))