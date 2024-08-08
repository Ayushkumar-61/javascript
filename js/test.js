const cars1 = "maruti suzuki"
// const cars2 = "SUV"
// console.log(cars.blink());
// console.log(cars.anchor('ayush'));
// console.log(cars.at(3));
// console.log(cars.big());
// console.log(cars.bold());
// console.log(cars.charCodeAt());
// console.log(cars.codePointAt());
// console.log(cars.codePointAt(3));
// console.log(cars1.concat( cars2));
// console.log(cars2.concat( cars1));
// console.log(cars1.endsWith("suzuki"));
// console.log(cars1.fixed());
// console.log(cars1.isWellFormed());

// let score = "ayush";

// // const {score} = req.body;

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let IsLoggedIn = "ayush";

// let booleanIsLoggedIn = Boolean(IsLoggedIn);
// console.log(booleanIsLoggedIn);

// let someNumber = 13;

// let StringNumber = String(someNumber);
// console.log(typeof someNumber);
// console.log(someNumber);

// typeof 1n === "bigint"; 
// typeof BigInt("1") === "bigint"; 



// ************************** Datatypes summary practice *******************************

// Primitive datatypes //

// 7 types : string, number, null, undefined, symbol, Boolean, BigInt

const Isnumber1 = 100;
const Isnumber2 = 100.3;

const IsLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 9898989898989n;
const bigNumber1 = BigInt(9898989898989);

// console.log(bigNumber);

// Reference (non primitive) Datatypes (non primitive datatype always return type as object)

// Arrays, objects, Function (thereas datatype is always said as function)

// const heros = ["saktiman", "nagraj", "Doga"];
// let myobj = {
//     name: "ayush",
//     age: 23,
// }

// let myfunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof heros);


// stack and Heap memory in javascript summary//

// let myname = "Ayush";

// let myname2 = myname;
// myname2 = "rahul";

// // console.log(myname2);
// // console.log(myname);

// let listofCars = {
//     name: "SUV",
//     modelno: 1213132,
// }

// let listofbikes = listofCars;

// listofbikes.name = "KIA";

// console.log(listofbikes.name);
// console.log(listofCars.name);


// ************************** Strings summary ***********************//

const name = "ayush";
const repoCount = 5;

// console.log(name + repoCount + " values"); // outdated style for concatenation //

// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); // it is also known as newer method of doing concatenation and it is also said as string interpolation. //

const gameName = new String('ayu-sh-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('s'));

// const newString = gameName.substring(0, 5);
// console.log(newString);

// const anotherString = gameName.slice(-10, 4);
//  console.log(anotherString);

// const newStringOne = "    ayush    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://ayush.com/ayush%20kumar"
//  console.log(url.replace('%20', '-'));

//  console.log(url.includes('kumar'));
//  console.log(gameName.split('-'));


// +++++++++++++++++++++++++++ Nums_and_maths ++++++++++++++++++++++ //


const score = 400;
// console.log(score);


const balance  = new Number(100);
// console.log(balance);

// console.log(balance.toExponential());
// console.log(balance.toFixed(2));

const anothernumber = 123.8966;
// console.log(anothernumber.toPrecision(6));

const hundreads = 1000000;
// console.log(hundreads.toLocaleString('en-IN'));


// ++++++++++++++++++++ maths ++++++++++++++++ //

// console.log(Math);
// console.log(Math.abs(-9));
// console.log(Math.PI);
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 8, 6, 10));
// console.log(Math.max(4, 8, 9, 12));

// console.log(Math.random());
// console.log((Math.random()*10) +1 );
// console.log(Math.floor(Math.random()*10) +1 );

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min );


// ****************************** Date & time ****************************** //


let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 7, 3);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2024, 0, 2, 7, 58, 20);
// let myCreatedDate = new Date("2024-01-14"); DD-MM-YY format
 let myCreatedDate = new Date("08-02-2024"); 
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = new Date();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//  console.log(Math.floor(new Date()/1000));

let newDate = new Date();
// console.log(newDate);
//  console.log(newDate.getMonth() +1);
//  console.log(newDate.getDay());

//console.log(`the newDate is ${newDate} and the month is ${newDate.getMonth()} and the day is ${newDate.getDay()}`);//

// console.log(newDate.toLocaleString('default',{
//     weekday:"short",
//     day:"2-digit",

// }))


// ************************ Array ****************** //

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Batman", "superman"];

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[0]);


// Array methods //

// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(6);
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice and spice //

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);

// console.log("B", myArr);

// const myn2 = myArr.splice(1,3);
// console.log("C", myArr);
// console.log(myn2);

// ***************************** Array2 ************************//

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

//  const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//  console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]] ]

const real_another_array = another_array.flat(2)
// console.log(real_another_array);

// console.log(Array.isArray("ayush"))
// console.log(Array.from("ayush"));
// console.log(Array.isArray("ayush"));
// console.log(Array.from({name:"ayush"}));

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3))



// *********************** Objects ******************//


// singleton- when we use constructor method to declare an object it is known as singleton and when we use literals the singleton is not made.
 // object.create- here we are using constructor method to declare an object and it is also known as singleton.

 // object literals- it is a way of declaring an object.

 const mySym = Symbol("key1")

 const juser ={
    name: "ayush",
    "full name": "ayush kumar",
    [mySym]: "mykey1",
    age: 22,
    location: "koderma",
    email: "ayush@gmail.com",
    IsLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]

 }
 
//  console.log(juser.name);
//  console.log(juser["name"]);
//  console.log(juser["full name"]);
//   console.log(juser[mySym]);
//  console.log(typeof juser[mySym]);
//  console.log(juser);

juser.email = "akash@email.com"
// console.log(juser);
// Object.freeze(juser);
juser.email = "ahhhash@email.com"
// console.log(juser);

// juser.greeting = function(){
//     console.log("hello js users");
// }

// console.log(juser.greeting());

// juser.greetingTwo = function(){
//     console.log(`hello js users, ${this.name}`);
// }
//  console.log(juser.greetingTwo());


// ************************** objects part2 ******************* //

// const tinderuser = new Object()
// tinderuser.email = "a@gmail.com",
// tinderuser.name = "ayush",
// tinderuser.fullname = {
//    name1: "kumar",
//    age: 22,
// }

// console.log(tinderuser.fullname);
// console.log(typeof tinderuser);

// 


 const tinderuser = {}
 tinderuser.id = "123abc"
 tinderuser.name = "ayush"
 tinderuser.IsLoggedIn = false

// console.log(tinderuser.id);


// const regularuser = {
//    email: "k@gmail.com",
//    fullname: {
//       userfullname: {
//          firstname: "ayush",
//          lastname: "kumar"
//       }
//    }
// }

// console.log(regularuser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 =  {3: "a", 4: "b"}
 const obj4 = {5: "a", 6: "b"}

//  const obj3 = {obj1, obj2}
//  const obj3 = Object.assign({}, obj1, obj2, obj4)
   // const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
   {
      id: 1,
      email: "s@gmail.com"
   },
   {
      id: 1,
      email: "s@gmail.com"
   },
   {
      id: 1,
      email: "s@gmail.com"
   }
]

// console.log(users[0].id);
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.values(tinderuser).length);
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('IsLoggedI'));


// *********************** objects-destructure and json api intro ****************//

const course = {
   coursename: "javascript",
   price: "5000",
   courseInstructor: "ayush"
}
 // (course.courseInstructor);

 const {courseInstructor: instructor} = course // object de-structor //
//  console.log(instructor)


// ************************** functions ********************* //

// function myname(){
//    console.log("A")
//    console.log("y")
//    console.log("u")
//    console.log("s")
//    console.log("h")
   
// }

// myname();


// function addtwonumbers(number1, number2){
//   console.log(number1 + number2);
// }

// function addtwonumbers(number1, number2){
//    let result = number1 + number2
//    return result
//    console.log("ayush");
//  }

// function addtwonumbers(number1, number2){
//    return number1 + number2
//  }
  
// function loginusermessage(username){
//     if(!username === undefined){
//        console.log("please enter your username");
//        return;
     
//     }
//       return `${username} just logged in`
// }

function loginusermessage(username= "sam"){
       if(!username){
           console.log("please enter your username");
           return;
        
        }
          return `${username} just logged in`
    }

//  const result = addtwonumbers(3, 5);
//  addtwonumbers(3, "5");
//  addtwonumbers(3, null);

// console.log("result:",result);

console.log(loginusermessage("ayush"))






























