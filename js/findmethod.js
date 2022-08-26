// find method 
// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3 (string){
//     return string.length === 3;
// }

// const ans = myArray.find(isLength3);
// console.log(ans);

// const users = [
//     {userId : 1, userName: "harshit"},
//     {userId : 2, userName: "Nilesh"},
//     {userId : 3, userName: "Amit"},
//     {userId : 4, userName: "Swati"},
//     {userId : 5, userName: "Tanu"},
//     {userId : 6, userName: "lakchay"},
// ]

// const ans = users.find((user) => user.userId ===4);
// console.log(ans);

// every method 

// const number = [2,4,6,8,12];

// const ans =  number.every((number)=> number%2===0);

// callback function ---> true / false (boolean)

// every method ----> true / false (boolean)

// console.log(ans);

// const userCart =[
//         {productId: 1, productName: "moblis", price: 12000},
//         {productId: 2, productName: "laptop", price: 22000},
//         {productId: 3,  productName: "tv", price: 15000}, 
// ]

// const ans = userCart.every((cardtItem) => cardtItem.price < 30000);

// console.log(ans)

//some method

// const numbers = [3,5,2,9];

// kya ek bhi number esa hai jo even hai 
// true

// const ans = numbers.some((number) => number%2 === 0);
// console.log(ans);

// const userCart =[
//         {productId: 1, productName: "moblis", price: 12000},
//         {productId: 2, productName: "laptop", price: 22000},
//         {productId: 3,  productName: "tv", price: 15000}, 
// ]

// const userCart1 = userCart.some((cartItem) => cartItem.price > 100000);
// console.log(userCart1);

//fill method
// value, start, end

// const myArray = new Array(10).fill(2);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,5);
// console.log(myArray);

// splice method
// start, delete , insert

// const myArray = ['item1', 'item2', 'item3', 'item4'];

// delete
// myArray.splice(1, 3);
// console.log(myArray);

// insert 

// iterables
// jispe hum for of loop laga sakein
// string , array are iterables

// const fristName = "Nilesh";
// for(let some of fristName){
//     console.log(some);
// }

// const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }

// Array like object
// jinka pas length property hoti hai 
// aur jike hum index se access kar sakte hai
// example :- string 

// const fristName = "Nilesh";
// console.log(fristName.length);
// console.log(fristName[2]);
// for(let some of fristName){
//     console.log(some);
// }

// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique item only (no duplicates allowed)

// const numbers = new Set([1,2,3,4]);

// console.log(numbers);

// const myArray = [1,2,3,3,4,4,5,5,5,6,7];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
// console.log(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }
// console.log(length);

// maps 
// map is an iterable 

// store data in ordered fashion 

// store key value pair (like object)
// duplicate keys are not allowed like objects

// differents between maps and objects

// objects can only have string or symbol 
// as key

// in maps you can use anything as key 
// like Array, number, String 

// objects literal 
// const person = {
//     firstName : "Nilesh",
//     age : 9,
//     1 : "one"
// }
// console.log(person.firstName);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 

// const person = new Map();
// person.set('firstName', 'Nilesh');
// person.set('age', 7);
// person.set(1,'one');
// console.log(person);
// console.log(person.get(1));
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key)
// }

// for(let [key ,value] of person){
//     console.log(key,value);
// }

// clone using object.assign

// memory


// const obj = {
//     key1 : "value1",
//     key2 : "value2"
// }

// const obj2 = obj;
// obj2.key3 = "value3";
// console.log(obj);
// console.log(obj2);

// optional chaining 

// const user = {
//     firstName: "Nilesh",
//     address : {houshNumber: '12345'}
// }

// console.log(user?.firstName);
// console.log(user?.address?.houshNumber);

// methods
// function inside objects

const person = {
    firstName : "Nilesh",
    age : 7,
    about : function(){
        console.log("person name is Nilesh and person age is 22")
    }
}
person.about();


