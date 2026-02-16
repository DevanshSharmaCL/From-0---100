class car {
    constructor(brand , speed){
        this.brand = brand,
        this.speed = speed
    }
    config(){
        return this.brand + " - " + this.speed
    }
}

let car1 = new car("BMW",250)
let car2 = new car("Porche",310)
let car3 = new car("Toyota",180)

