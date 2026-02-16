 let product = {
    name : "pen",
    price : 100,
    discountedPrice : function(){
        return this.price - 10
    }
}
console.log(product.discountedPrice())