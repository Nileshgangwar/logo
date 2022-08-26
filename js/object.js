// object 

// how to iterate object 
// const person = {
//     name: "John Doe",
//     surname: "Doe",
//     age: 35,
//     gender: "male",
// }
// for(let key in person){
//     // console.log(person[key])
//     console.log(`${key} : ${person[key]}`);

// }
// console.log(Object.keys(person));

// computed properties 

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(obj);

// spred operator 
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2];
// console.log(newArray);

// spred operaor in objects 
// const obj1 = {
//     name: "John Doe",
//     surname: "Doe",
// };
// const obj2 = {
//     name1: "Nilesh",
//     surname1: "Kumar",
// };
// const newObject = {...obj1, ...obj2}
// const newObject = {..."abcdef"}
// console.log(newObject);

// object destructuring 
// const band = {
//     bandName: "led zepplin",
//     famousSong: "stairway to heaven",
// };
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// const {bandName, famousSong} = band;
// console.log(bandName);

// object inside array 
// very useful in real world applications 

// const users = [
//     {userId: 1, firstName: 'Nilesh', gender: 'male'},
//     {userId: 2, firstName: 'mohit', gender: 'male'},
//     {userId: 3, firstName: 'nitish', gender: 'male'},
// ]
// for (let user of users){
//     console.log(user.userId);

// }

// nested destructuring 
// const users = [
//     {userId: 1, firstName: 'Nilesh', gender: 'male'},
//     {userId: 2, firstName: 'mohit', gender: 'male'},
//     {userId: 3, firstName: 'nitish', gender: 'male'},
// ]
// const [user1, user2, user3] = users;
// console.log(users)
// const [{firstName: user1fistName, userId} , {gender: user3gender}] = users;
// console.log(user1fistName); 
// console.log(userId);
// console.log(user3gender);

// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// singHappyBirthday();
// function twoPlusFour(){
//     return 2+4;
// }
// const returnedValue =  twoPlusFour();
// console.log(returnedValue);

// function sumTwoNumbers(number1, number2){
//     return number1 % number2;
// }
// const returnedValue = sumTwoNumbers(8,9);
// console.log(returnedValue);

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }else{
//         return false;

//     }
// }
// console.log(isEven(4));


// function firstChar(anyString){
//     return anyString.charAt(0).toUpperCase() + anyString.slice(1);

// }
// console.log(firstChar("abcdef"));

// function findTarget(array, target){
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1, 3, 8, 90]
// const ans = findTarget(myArray, 8);
// console.log(ans);

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ....");
// }
// singHappyBirthday();

//arrow function 

// const singHappyBirthday = () => {
//     console.log("happy birthday to you....");
// }

// singHappyBirthday();

//hoisting 

// hello();

// function hello(){
//     console.log("hello");
// }

// function inside function 

// const app = () => {
//     const myFunc = () => {
//         console.log("hello");
//     }
//     const addTwo = (num1, num2) => {
//         return num1 + num2;
//     }
//     const mul = (num1, num2) => num1 * num2;
//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(4,6));
//     console.log(mul(5,7));

// }
// app();

// lexical scope 
// function myApp(){
//     const myVar = "value1";
//     function myFunc(){
//         const myVar = "value76";
//         console.log("inside myFunc",myVar);
//     }
//     console.log(myVar);
//     myFunc();

// }
// myApp();

// const myVar = "value1";

// function myApp(){
//     function myFunc(){
//         // const myVar = "value76";
//         const myFunc2 = () => {
//             console.log("hello", myVar);
//         }
//         myFunc2();
//     }
//     console.log(myVar)
//     myFunc();
// }
// myApp();

// block scope vs function scope

// {
//     const firstName = "Harshit";
//     console.log(firstName);
// }
// {
//     const firstName = "James";
//     console.log(firstName);
// }
// const firstName = "gender";
// console.log(firstName);

// if(true){
//     var firstName = "James";
//     console.log(firstName);
// }
// console.log(firstName);

// default parameters 

// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b = 0;
//     }
//     return a*b;
// }

// function addTwo(a,b=0){
//     return a + b;
// }
// const ans = addTwo(4);
// console.log(ans);

// rest parameters 

// function myFunc(a, b, ...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);

// }
// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }
// const ans = addAll(4,5,7);
// console.log(ans);

// para destructuring

//object
//react

// const person = {
//     firstName: "harshit",
//     gender: "male",
// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// printDetails(person);

// callback function 

// function myFunc2(name){
//     console.log("inside my func 2");
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can...");
//     callback("Nilesh");
// }

// myFunc(myFunc2);

// functon returning function

// function myFunc(){
//     return [1,2,3];

// }

// const ans = myFunc();
// console.log(ans);

// important array method 

// const numbers = [4, 2, 3, 8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
//     // console.log(`${number}*2 = ${numbers*2}`);

// }
// for(let i = 0; i< numbers.length; i++){
//     multiplyBy2(numbers[i],i)
// }
// numbers.forEach(function(number, index){
//     console.log(`index is ${index} number is ${number}`);
// });
// const users = [
//     {firstName: "Nilesh", age: 23},
//     {firstName: "amit", age: 20},
//     {firstName: "nitish", age: 22},
//     {firstName: "swati", age: 20},

// ]

// // users.forEach(function(user){
// //     console.log(user.firstName);
// // });

// for(let user of users){
//     console.log(user.firstName);
// }

//map method

// const numbers = [3,4,6,8,9];

// const square = function(number){
//     return number * number;
// }

// const squareNumber = numbers.map((number, index) =>{
//     return `index: ${index} |${number * number}`;
// })

// const squareNumber =  numbers.map(square);
// console.log(squareNumber);

// const users = [
//     {fristName: "harshit", age: 23},
//     {fristName: "mohit", age: 21},
//     {fristName: "Nilesh", age: 22},
//     {fristName: "swati", age: 34},
// ]

// const userNames = users.map((user)=>{
//     return user.fristName;
// });

// console.log(userNames);

// filter method 

// const numbers = [1,2, 3, 8, 90, 112];

// const isOdd = function(number){
//     return number%2 !==0;
// }
// const evenNumbers = numbers.filter(isOdd);
// console.log(evenNumbers);

// reduce 
// const numbers = [1,2,3,4,5, 6, 7];

// aim : sum of all the numbers in array

// const sum =  numbers.reduce((accumulater, currentValue) =>{
//     return accumulater + currentValue;
// });
// console.log(sum);

// const userCart =[
//     {productId: 1, productName: "moblis", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3,  productName: "tv", price: 15000}, 
// ]

// const totalAmount = userCart.reduce((totalPrice, currentPrice)=>{
//     return totalPrice + currentPrice.price;
// },0)

// console.log(totalAmount);

// sort 

// const numbers = [5,12,400,1000,1200];
// numbers.sort();
// console.log(numbers);
// numbers.sort((a,b) =>{
//     return a-b;
// });
// console.log(numbers);

