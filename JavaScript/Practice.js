
// Print 1 to 10 using for

// for (i=1; i<=10;i++){
//     console.log(i);
// }



// Print even numbers between 1 to 20

// for(i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }



// Reverse a string using loop

// for( let char of "devansh"){
//     for (let i=char.length-1; i>=0; i--){
//         console.log(char[i]);
//     }
// }



// sm of all the number from the array 

// let arr = [1,2,3,4,5];
// let sum = 0;

// for (let i=0;i<=arr.length;i++){
//     sum+=arr[i];
// }
// console.log(sum);



//print all character of a name using for of

// for (let char of "devansh"){
//     console.log(char);
// }



// Print all object keys and values using for-in

// let user = {
//     fullName:"devansh",
//     age:20,
//     city:"gurgaon",
//     state:"haryana",
// }   
// for (let key in user){
//     console.log(key, ":", user[key]);
// }

// use continue to skip a specific number

// for(let i=1;i<=10;i++){
//     if(i===5) continue;
//     console.log(i);
// }



//Guess number game – use while to ask until correct

// let secretNumber = 7;
// let guess = Number(prompt("Guess the number"));

// while (guess !== secretNumber) {
//     guess = Number(prompt("Wrong! Try again"));
// }

// console.log("🎉 Correct! You guessed the number");



//print numbers from 1 to 20 using a for loop

// for(let i= 1; i <21; i++){
//     console.log(i);
// }


//print number s from 10 to 1 using a for loop

// for(i = 10 ; i>0 ; i--){
//     console.log(i);
// }


//print even number s from 1 to 20 using a for loop



//print odd number from 1 to 15 using while loop 

// let i =0;
// while(i<=15){
//     if(i%2!=0){
//         console.log(i);
//     }
//     i++
// }


//print the multiplication table of 5 

// for ( let i = 1 ; i<=55;i++){
//     console.log (`5 x ${i} = ${5*i}`)
// }

//find the sum of number from 1 to 100 using a loop 

// let sum = 0 ; 
// for ( let i = 1 ; i<=100 ;i++){
//     console.log (sum += i)
// }


// print all the number from 1 to 50 , which are divisble by 3 

// for (let i = 1 ; i<=50 ; i++){
//     console.log(i%3===0?i:"")
// }

// ask the user for a number and print wheather each number from 1 to that number is even or odd

// let number = 10

// for (let i = 1; i <= number; i++) {
//     console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
// }


// //Q1 - Stop at first multiple of 7 
// write  a loop from 1 to 100 that 
//   . print each number 
//   .stops completely when it finds its first number that is divisble by 7 

// for ( let i = 1 ; 1<=101; i++){
//     console.log(i)
//     if(i%7===0){
//         break;
//     }
// }


//Q2 - Skip multiples of 3
// write a loop from 1 to 50 that
// . prints each number 
// . skips any number that is divisble by 3

// for (let i = 1 ; i<=50;i++){
//     console.log(i%3===0?"":i)
// }





//=============================================================================================================================
//=============================================================================================================================
//=============================================================================================================================
//=============================================================================================================================
//=============================================================================================================================
//=============================================================================================================================



//Projects

//Project 1 -  BMI Calculattor

function bmi(weight, hieght){
    return weight / (hieght*hieght);
}
console.log(Math.round(bmi(50,1.7)))
