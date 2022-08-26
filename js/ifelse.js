// let age = 12;
// let voterid = "No";

// if (age >= 18) {
//     console.log("you can vote");
// }else{
//     console.log("you can't vote");
// }
// let num = 12;

// if (num%2 === 0) {
//     console.log("even");
// }else{
//     console.log("odd");

// }

// ternary operater / condition operater

// let age2 = 22;
// let drink = age2 >= 5 ? "cofee" : "milk";
// console.log (drink)

// let firstName = "Nilesh";
// let age = 22;

// if (firstName[0] === "N" && age > 18) {
//     console.log("Your Name is Nilesh and you age is above 18");
// }

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if(userGuess === winningNumber){
//     console.log("Your Guess Number right");
// }else{
//     if(userGuess < winningNumber){
//         console.log("Your Guess Number small");

//     }else{
//         console.log("Your Guess Number big");
//     }
// }

// let tempInDegree = prompt("Enter tempInDegree");

// if(tempInDegree< 0){
//     console.log("exremely cold outside");

// }else if(tempInDegree < 16){
//     console.log("it is cold out side");
// }else if(tempInDegree < 25){
//     console.log("wather is okay");
// }else if (tempInDegree < 35) {
//     console.log("let go for swim");
// }else if (tempInDegree < 45) {
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }
// console.log(tempInDegree);

// switch statemantn

// let day = 7;

// switch (day) {
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("wedneday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("unknown day");
//         break;
// }
// let i = 0;

// while (i<= 10) {
//     console.log(i);
//     i++;
// }
// let num = 10;
// let total = 0;
// let i = 0;

// while(i<=100){
//     total = total + i;
//     i++;
// }
// console.log(total);
// let total = (num*(num+1))/2;
// console.log(total); 

// for (let i = 0; i <= 9; i++) {
//     console.log(i);
    
// }

// let total = 0;

// let num = 100;
// for (let i = 0; i <= num; i++) {
//     total = total + i;
    
// }
// console.log(total);

//break

// for (let i = 0; i <= 10; i++) {
//     if (i===6) {
//         break
//     };
//     console.log(i);
    
// }
// console.log("Now brack the number")

// continue

// for (let i = 0; i <= 10; i++) {
//     if (i===6) {
//         continue
//     };
//     console.log(i);
    
// }
// console.log("Now brack the number")

//do while loop

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)

// console.log(i);

//intro to arrays
// reference type
//how to create arrays
//ordered collection of items

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits[1]);
// console.log( typeof fruits)
// console.log(Array.isArray(fruits))

// array push pop
// fruits.push("banana");
// console.log(fruits)
// fruits.pop();
// console.log(fruits);

// array shift unshift
//  fruits.unshift("apple");
// console.log(fruits)
// fruits.shift(); 
// console.log(fruits)


// how to clone array
// how to concatenae two arrays

// let array1 = ["items1", "items2", "items3", "items4"];
// let array2 = array1.slice(0).concat(["array3", "array4"]);
// let array2 = [].concat(array1,["array1","array2"]);
// new way spread operator
// let array2 = [...array1, "array1", "array2" ]

// array1.push("items3");

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);
// for (let i= 0; i < array1.length; i++){
//     console.log(array1[i].toUpperCase());
// }

// use const for creating array

// heap memory ["apple","mango"]

// const fruits = ["apple", "mango", "grapes"];
// fruits.push("banana");
// console.log(fruits);
// const fruits = ["apple", "mango", "grapes"];
// const fruits1 = [];

// let i = 0;
// while (i<= fruits.length) {
//     fruits1.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits1);

// for of loop in Array

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());

// }
// console.log(fruits2);
// for(let index in fruits){
//     console.log(fruits[index].toUpperCase());

// }

// array destructuring

// const myArray = ["Value1", "value2"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// let [myvar1, myvar2] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// objects reference type 

const person = {
    name: "Nilesh",
    age: 45,
    hobbies: ["apple", "mango"]}
console.log(person);

//how to access data from objects
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// how to add key value pair to objects
person.gender = "male";
console.log(person);



