 class student {
    constructor(name , rollnumber){
        this.name = name
        this.rollnumber = rollnumber
    }
    introduce(){
        console.log(`this student name is ${this.name} and the rollnumber is ${this.rollnumber}`)
    }
 }

 let setuden1 = new student("Cyber", 26557349)
 setuden1.introduce()