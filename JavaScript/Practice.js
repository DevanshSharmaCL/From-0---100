
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



// print all character of a name using for of

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



// Guess number game – use while to ask until correct

// let secretNumber = 7;
// let guess = Number(prompt("Guess the number"));

// while (guess !== secretNumber) {
//     guess = Number(prompt("Wrong! Try again"));
// }

// console.log("🎉 Correct! You guessed the number");



// print numbers from 1 to 20 using a for loop

// for(let i= 1; i <21; i++){
//     console.log(i);
// }


// print number s from 10 to 1 using a for loop

// for(i = 10 ; i>0 ; i--){
//     console.log(i);
// }


// print even number s from 1 to 20 using a for loop



// print odd number from 1 to 15 using while loop 

// let i =0;
// while(i<=15){
//     if(i%2!=0){
//         console.log(i);
//     }
//     i++
// }


// print the multiplication table of 5 

// for ( let i = 1 ; i<=55;i++){
//     console.log (`5 x ${i} = ${5*i}`)
// }

// find the sum of number from 1 to 100 using a loop 

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


// Q2 - Skip multiples of 3
// write a loop from 1 to 50 that
// . prints each number 
// . skips any number that is divisble by 3

// for (let i = 1 ; i<=50;i++){
//     console.log(i%3===0?"":i)
// }





// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================



// Projects

// Project 1 -  BMI Calculattor

// function bmi(weight, hieght){
//     return weight / (hieght*hieght);
// }
// console.log(Math.round(bmi(50,1.7)))




// Project 2 - Create a reusable disccount calculator function (hof)
// high order function is a fucntion which use another function as an argument ot return a function as a result 

// function ds(discount){
//     return function (price){
//         return price-price*(discount/100);
//     }
// }
// let ten = ds(10);
// let twenty = ds(20);
// console.log(ten(100));
// console.log(twenty(200));




// project 3 - create a pure function to transform a value

// pure function are fucntion which does not effect the variable outside the fucntion 

// function adding(val){
//     return val+val-1
// }
// console.log(adding(20));



// create an array with 3 fruits and print the second one

// let fruits =["apple","banana","mango"];
// console.log(fruits[1]);


// add mango at the end and pineapple at the start of the array

// let fruits =["apple","banana","grapes"];
// fruits.push("mango");
// fruits.unshift("pineapple");
// console.log(fruits);


// replace banana with kiwi

// let fruits =["apple","banana","grapes"];
// fruits[1]="kiwi";
// console.log(fruits);

// what ths difference btw push and unshift 

// let fruits =["apple","banana","grapes"];
// fruits.push("hi")
// console.log(fruits);
// fruits.unshift("byw")
// console.log(fruits);

// push add the element at the end of the array 
// unshift push the element at the start of the array 


// remove the items from this array using a methos

// let numbers =[1,2,3,4,5,6,7,8,9];
// numbers.pop()
// console.log(numbers);

// insert red and blue at index 1

// let colors =["green","yellow","black"];
// colors.splice(1,0,"red","blue");
// console.log(colors);


// extract the middle 3 number from the array 
// let arr =[1,2,3,4,5,6,7,8,9];
// let middle= arr.slice(3,6)
// console.log(middle);


// sort this array alphabetically and then reverse the order

// let alphabet=["d","a","c","b","e"];
// alphabet.sort().reverse();
// console.log(alphabet);


//use .map()to square the each number
// let arr =[1,2,3,4,5];
// let sqr = arr.map(function(val){
//     return val*val
// });
// console.log(sqr);


// use .filter() to keep number gretaer than 10

// let arr =[5,10,15,20,25];
// let filter=arr.filter(function(val){
//     return val>=10
// })
// console.log(filter);


// use reduce() to get the sum of all the number 

// let arr =[1,2,3,4,5];
// let sum = arr.reduce(function(acc ,val){
//     return acc+val;
// })
// console.log(sum);


//use .find() to get the first number less than 10 

// let arr =[12,15,8,20,5];
// let les = arr.find(function(val){
//     return val<10
// })
// console.log(les);



// use .some to check if any student has scored bellow 35 ------> this return values in true and false

// let arr = [40,55,30,70,85];

// let check =arr.some(function(val){
//     return val<35
// })

// console.log(check);



//use .every to check if all numbver are even 
//this too return values in true and false
// let arr =[2,4,6,8,10];
// let even = arr.every(function(val){
//     return val 
// })

// console.log(even);



//destructure this array to get first name and last name 
//in this we just have to match the position of the array

// let fullName =["Cyber","Light"];
// let [firstName , lastName] = fullName;

// console.log(firstName);
// console.log(lastName);



//merge two array using spread operator
// spread operator is used to expand the array
//...a this is expanding the array a

let a = [1,2,3];
let b = [4,5,6];

let merge=[...a,...b];
console.log(merge);
