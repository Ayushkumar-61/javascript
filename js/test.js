// const cars1 = "maruti suzuki"
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

// const Isnumber1 = 100;
// const Isnumber2 = 100.3;

// const IsLoggedIn = false;
// const outsideTemp = null;
// let userEmail;


// const id = Symbol('123');
// const anotherId = Symbol('123');

// // console.log(id === anotherId);

// const bigNumber = 9898989898989n;
// const bigNumber1 = BigInt(9898989898989);

// // console.log(bigNumber);

// // Reference (non primitive) Datatypes (non primitive datatype always return type as object)

// // Arrays, objects, Function (thereas datatype is always said as function)

// // const heros = ["saktiman", "nagraj", "Doga"];
// // let myobj = {
// //     name: "ayush",
// //     age: 23,
// // }

// // let myfunction = function(){
// //     console.log("Hello world");
// // }

// // console.log(typeof heros);


// // stack and Heap memory in javascript summary//

// // let myname = "Ayush";

// // let myname2 = myname;
// // myname2 = "rahul";

// // // console.log(myname2);
// // // console.log(myname);

// // let listofCars = {
// //     name: "SUV",
// //     modelno: 1213132,
// // }

// // let listofbikes = listofCars;

// // listofbikes.name = "KIA";

// // console.log(listofbikes.name);
// // console.log(listofCars.name);


// // ************************** Strings summary ***********************//

// const name = "ayush";
// const repoCount = 5;

// // console.log(name + repoCount + " values"); // outdated style for concatenation //

// // console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); // it is also known as newer method of doing concatenation and it is also said as string interpolation. //

// const gameName = new String('ayu-sh-com');

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);

// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// // console.log(gameName.charAt(3));
// // console.log(gameName.indexOf('s'));

// // const newString = gameName.substring(0, 5);
// // console.log(newString);

// // const anotherString = gameName.slice(-10, 4);
// //  console.log(anotherString);

// // const newStringOne = "    ayush    ";
// // console.log(newStringOne);
// // console.log(newStringOne.trim());

// const url = "https://ayush.com/ayush%20kumar"
// //  console.log(url.replace('%20', '-'));

// //  console.log(url.includes('kumar'));
// //  console.log(gameName.split('-'));


// // +++++++++++++++++++++++++++ Nums_and_maths ++++++++++++++++++++++ //


// const score = 400;
// // console.log(score);


// const balance  = new Number(100);
// // console.log(balance);

// // console.log(balance.toExponential());
// // console.log(balance.toFixed(2));

// const anothernumber = 123.8966;
// // console.log(anothernumber.toPrecision(6));

// const hundreads = 1000000;
// // console.log(hundreads.toLocaleString('en-IN'));


// // ++++++++++++++++++++ maths ++++++++++++++++ //

// // console.log(Math);
// // console.log(Math.abs(-9));
// // console.log(Math.PI);
// // console.log(Math.round(4.3));
// // console.log(Math.ceil(4.9));
// // console.log(Math.floor(4.9));
// // console.log(Math.min(4, 8, 6, 10));
// // console.log(Math.max(4, 8, 9, 12));

// // console.log(Math.random());
// // console.log((Math.random()*10) +1 );
// // console.log(Math.floor(Math.random()*10) +1 );

// // const min = 10;
// // const max = 20;

// // console.log(Math.floor(Math.random() * (max - min + 1)) + min );


// // ****************************** Date & time ****************************** //


// let myDate = new Date();
// // console.log(myDate);
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleString());
// // console.log(typeof myDate);

// // let myCreatedDate = new Date(2024, 7, 3);
// // console.log(myCreatedDate.toDateString());
// // let myCreatedDate = new Date(2024, 0, 2, 7, 58, 20);
// // let myCreatedDate = new Date("2024-01-14"); DD-MM-YY format
//  let myCreatedDate = new Date("08-02-2024"); 
// // console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = new Date();
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// //  console.log(Math.floor(new Date()/1000));

// let newDate = new Date();
// // console.log(newDate);
// //  console.log(newDate.getMonth() +1);
// //  console.log(newDate.getDay());

// //console.log(`the newDate is ${newDate} and the month is ${newDate.getMonth()} and the day is ${newDate.getDay()}`);//

// // console.log(newDate.toLocaleString('default',{
// //     weekday:"short",
// //     day:"2-digit",

// // }))


// // ************************ Array ****************** //

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeroes = ["Batman", "superman"];

// const myArr2 = new Array(1, 2, 3, 4, 5)
// // console.log(myArr[0]);


// // Array methods //

// // myArr.push(6);
// // console.log(myArr);
// // myArr.pop();
// // console.log(myArr);

// // myArr.unshift(6);
// // console.log(myArr);
// // myArr.shift()
// // console.log(myArr);

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(9));

// // const newArr = myArr.join()

// // console.log(myArr);
// // console.log(newArr);
// // console.log(typeof newArr);


// // slice and spice //

// // console.log("A", myArr);

// // const myn1 = myArr.slice(1,3)
// // console.log(myn1);

// // console.log("B", myArr);

// // const myn2 = myArr.splice(1,3);
// // console.log("C", myArr);
// // console.log(myn2);

// // ***************************** Array2 ************************//

// // const marvel_heroes = ["thor", "ironman", "spiderman"]
// // const dc_heroes = ["superman", "flash", "batman"]

// // marvel_heroes.push(dc_heroes);
// // console.log(marvel_heroes);
// // console.log(marvel_heroes[3][1]);

// // const allHeroes = marvel_heroes.concat(dc_heroes)
// // console.log(allHeroes);

// //  const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// //  console.log(all_new_heroes);

// // const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]] ]

// // const real_another_array = another_array.flat(2)
// // console.log(real_another_array);

// // console.log(Array.isArray("ayush"))
// // console.log(Array.from("ayush"));
// // console.log(Array.isArray("ayush"));
// // console.log(Array.from({name:"ayush"}));

// // let score1 = 100
// // let score2 = 200
// // let score3 = 300

// // console.log(Array.of(score1, score2, score3))



// // *********************** Objects ******************//


// // singleton- when we use constructor method to declare an object it is known as singleton and when we use literals the singleton is not made.
//  // object.create- here we are using constructor method to declare an object and it is also known as singleton.

//  // object literals- it is a way of declaring an object.

// //  const mySym = Symbol("key1")

// //  const juser ={
// //     name: "ayush",
// //     "full name": "ayush kumar",
// //     [mySym]: "mykey1",
// //     age: 22,
// //     location: "koderma",
// //     email: "ayush@gmail.com",
// //     IsLoggedIn: false,
// //     lastLoginDays: ["monday", "tuesday"]

// //  }
 
// //  console.log(juser.name);
// //  console.log(juser["name"]);
// //  console.log(juser["full name"]);
// //   console.log(juser[mySym]);
// //  console.log(typeof juser[mySym]);
// //  console.log(juser);

// // juser.email = "akash@email.com"
// // // console.log(juser);
// // // Object.freeze(juser);
// // juser.email = "ahhhash@email.com"
// // console.log(juser);

// // juser.greeting = function(){
// //     console.log("hello js users");
// // }

// // console.log(juser.greeting());

// // juser.greetingTwo = function(){
// //     console.log(`hello js users, ${this.name}`);
// // }
// //  console.log(juser.greetingTwo());


// // ************************** objects part2 ******************* //

// // const tinderuser = new Object()
// // tinderuser.email = "a@gmail.com",
// // tinderuser.name = "ayush",
// // tinderuser.fullname = {
// //    name1: "kumar",
// //    age: 22,
// // }

// // console.log(tinderuser.fullname);
// // console.log(typeof tinderuser);

// // 


// //  const tinderuser = {}
// //  tinderuser.id = "123abc"
// //  tinderuser.name = "ayush"
// //  tinderuser.IsLoggedIn = false

// // console.log(tinderuser.id);


// // const regularuser = {
// //    email: "k@gmail.com",
// //    fullname: {
// //       userfullname: {
// //          firstname: "ayush",
// //          lastname: "kumar"
// //       }
// //    }
// // }

// // console.log(regularuser.fullname.userfullname.firstname);


// // const obj1 = {1: "a", 2: "b"}
// // const obj2 =  {3: "a", 4: "b"}
// //  const obj4 = {5: "a", 6: "b"}

// //  const obj3 = {obj1, obj2}
// //  const obj3 = Object.assign({}, obj1, obj2, obj4)
//    // const obj3 = {...obj1, ...obj2, ...obj4}
// // console.log(obj3);

// // const users = [
// //    {
// //       id: 1,
// //       email: "s@gmail.com"
// //    },
// //    {
// //       id: 1,
// //       email: "s@gmail.com"
// //    },
// //    {
// //       id: 1,
// //       email: "s@gmail.com"
// //    }
// // ]

// // console.log(users[0].id);
// // console.log(tinderuser);

// // console.log(Object.keys(tinderuser));
// // console.log(Object.values(tinderuser));
// // console.log(Object.values(tinderuser).length);
// // console.log(Object.entries(tinderuser));

// // console.log(tinderuser.hasOwnProperty('IsLoggedI'));


// // *********************** objects-destructure and json api intro ****************//

// // const course = {
// //    coursename: "javascript",
// //    price: "5000",
// //    courseInstructor: "ayush"
// // }
// //  // (course.courseInstructor);

// //  const {courseInstructor: instructor} = course // object de-structor //
// //  console.log(instructor)


// // ************************** functions ********************* //

// // function myname(){
// //    console.log("A")
// //    console.log("y")
// //    console.log("u")
// //    console.log("s")
// //    console.log("h")
   
// // }

// // myname();


// // function addtwonumbers(number1, number2){
// //   console.log(number1 + number2);
// // }

// // function addtwonumbers(number1, number2){
// //    let result = number1 + number2
// //    return result
// //    console.log("ayush");
// //  }

// // function addtwonumbers(number1, number2){
// //    return number1 + number2
// //  }
  
// // function loginusermessage(username){
// //     if(!username === undefined){
// //        console.log("please enter your username");
// //        return;
     
// //     }
// //       return `${username} just logged in`
// // }

// // function loginusermessage(username= "sam"){
// //        if(!username){
// //          //   console.log("please enter your username");
// //            return;
        
// //         }
// //           return `${username} just logged in`
// //     }

// //  const result = addtwonumbers(3, 5);
// //  addtwonumbers(3, "5");
// //  addtwonumbers(3, null);

// // console.log("result:",result);

// // console.log(loginusermessage("ayush"))

// // function calculatecartPrice(val1, val2, ...num1){
// //      return num1;
// // }
// // console.log(calculatecartPrice(200, 400, 500, 2000))


// // const user = {
// //    username: "ayush",
// //    price: 199
// // }

// // function handleObject(anyobject){
// //     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// // }

// // handleObject(user)
// // handleObject({
// //    username: "ayushkumar",
// //    price: 300
// // })

// // const myNewArray = [200, 400, 100, 600]

// // function returnSecondValue(getArray){
// //    return getArray[1]
// // }

// // console.log(returnSecondValue(myNewArray))
// //   console.log(returnSecondValue([200, 400, 100, 600]))


// // ************************ global and blocked scope **************************** //

// // let a = 10
// // const b = 20
// // var c = 300

// //   const a = 200

// //  let a = 100

// // if(true){
// //     let a = 10
// //    const b = 20
// //    //  c = 30
// //    // console.log("INNER:", a)
// //    function addme(){

// //    }
// // }

// //  console.log(a);
// // console.log(b);
// // console.log(c);


// // function one(){
// //    const username = "ayush"

// //    function two(){
// //       const website = "youtube"
//       //  console.log(username);
// //    }
// //    //console.log(website);
    
// //     //two()
// // }

//  //one()


// // if(true){
// // const username = "ayush"
// // if(username === "ayush"){
// //  const website = " youtube"
// //  console.log(username + website);
// // }
// // //console.log(website);
// // }

// //console.log(username);


// // console.log(addone(5));
// // function addone(num){
// //    return num + 1;
// // }


// // console.log(addTwo(5));
// // const addTwo = function(num){
// //    return num + 2;
// // }


// // ******************** this and arrow function in javascript ******************** //


// // const user  = {
// //    username: "ayush",
// //    price: 999,

// //     welcomeMessage: function(){
// //       console.log(`${this.username}, welcome to website`);
// //       //   console.log(this);
// //     }
// // }

// //    console.log(user.welcomeMessage());
// //    user.username = "sam"
// //   console.log(user.welcomeMessage());

// //   console.log(this);


// //  function start(){
// //    let username = "ayush"
// //    console.log(this.username);
// //  }

// //  start()


// // const start = function(){
// //    let username = "ayush"
// //    console.log(this.username)
// // }


// //  const start = () => {
// //     let username = "ayush"
// //     console.log(this);
// //  }
// //  start()


// // const addTwo = (num1, num2) => {
// //    return num1 + num2
// // }

// // const addTwo = (num1, num2) =>   num1 + num2;

// // const addTwo = (num1, num2) =>   (num1 + num2); // need not want to write return keyword //


// // const addTwo = (num1, num2) =>   ({username: "ayush"})

// // console.log(addTwo(3, 5));


// Immediately invoked function expressions (IIFE) //

// (function man(){      // IIFE named function //
//    console.log(`DB CONNECTED`);
// })();

// ((name) =>{   // IIFE no-named function
//    console.log(`DB CONNECTED TWO ${name}`);
// })("ayush") 


// ******************************** control-flow in javascript ************************* //


// if


// const temperature = 41;

// if (temperature > 41){
//     console.log("you there");
// }else {
//    console.log("not");
// }
// console.log("you are not there");


// const score = 200

// if(score > 100){
//    var power = "fly"
//    console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


// ********************** short-hand condition check ******************* //

// const balance = 1000

// if (balance > 500) console.log("test");     // implect scope //


// if (balance < 500){
//    console.log("less than 500");
// }else if (balance < 750){
//        console.log("less than 750");
// }else if(balance < 950){
//    console.log("less than 950");
// }else{
//    console.log("less than 1200");
// }



// const isUserLoggedIn = true
// const debitcard = true
// const LoggedInfromGoogle = false
// const LoggedInfromEmail = true
// const guesuser = true

// if(isUserLoggedIn && debitcard && 2==3){
//    console.log("Allow to buy course")
// }

// if (LoggedInfromGoogle || LoggedInfromEmail || guesuser){
//    console.log("user logged in");
// }


// const month = "march"

// switch (month) {
//    case "jan":
//       console.log("jan");
//       break;
//    case "feb":
//       console.log("feb");
//       break;
//    case "march":
//       console.log("march");
//        break;
//    case "april":
//       console.log("april");
//       break;

//    default:
//       console.log("default case match");
//       break;
// }


// const userEmail = []

// if (userEmail){
//    console.log("Got user email");
// }else{
//    console.log("Dont have user email");
// }


// if (userEmail.length == 0){
//    console.log("Array is empty");
// }


// const emptyobj = {}

// if (Object.keys(emptyobj).length == 0){
//    console.log("object is empty");
// }else{
//    console.log("not");
// }

// Nullish coalescing operator (??) null undefined //

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
//console.log(val1);


// Ternary operator //

// condition ? true: false

// const iceTeaPrice = 100
// iceTeaPrice <80 ? console.log("less than 80") : console.log("more than 80");

// ********************** for-loop ******************** //

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
        //    console.log("5 is best number");
//     }



//     //  console.log(element);
// }



// for (let i = 0; i <= 10; i++) {
//      console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value ${j} and inner loop ${i}`);
//         // console.log(`${i+'*'+j} = ${i*j}`);
//            console.log(i + '*' + j + ' = '  +i*j);
//     }
// }


// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }



// break and continue // 


// for (let index = 1; index < 20; index++) {
//    if (index == 5){
//     console.log("Detected 5");
//     break;
//    }
//       console.log(`value of 1 is ${index}`) ;
// }
// for (let index = 1; index < 20; index++) {
//    if (index == 5){
//     console.log("Detected 5");
//     continue;
//    }
//       console.log(`value of 1 is ${index}`) ;
// }

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//       index = index + 2  
// }



// let myArray  = ["flash", "batman", "superman"]
//    let arr = 0
// while (arr < myArray.length) {
//      console.log(`value is ${myArray[arr]}`) ;  
//      arr = arr + 1
// }

// let score = 11
// do {
//      console.log(`score is ${score}`);   
//      score ++
// } while (score <=10);



// for of

// ["", "", ""]
// [{}, {}, {}]


// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//       console.log(num);  
// }


// const greetings  = "hello world"
// for (const greet of greetings){
//      if(greet == " "){
//         continue;
//      }   
//      console.log(`Each user is ${greet}`);
// }


// Maps


// const map = new Map()
// map.set('IN', "INDIA")
// map.set('usa', "united states of america")
// map.set('fri', "france")

// // console.log(map);

// for (const [key, value]  of map) {
//         console.log(key, ':-', value);
// }


// const myobject = {
//         game1: 'NFS',
//         game2: 'spiderman'
// }

// for (const [key, value] of myobject) {
//         console.log(key, ':-', value);
// }


// const myobject = {
//    js: 'javascript',
//    cpp: 'c++',
//    rb: 'rubby',
//    swift: 'swift by apple'
// }

// for (const key in myobject) {
//         console.log(`${key} shortcut is for ${myobject[key]}`);
//         }


// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//        console.log(programming[key]);
// }


// const map = new Map()
//       map.set('IN', "INDIA")
//       map.set('usa', "united states of america")
//       map.set('fri', "france")
//       map.set('IN', "INDIA")

//      for (const key in map) {
//          console.log(key);
//     }


// const coding  = ["js", "rubby", "java", "python", "cpp"]

// coding.forEach(function (item){
//     console.log(item);
// })


// coding.forEach((item) => {
//      console.log(item);
// })


// function printme(item){
//         console.log(item);
// }


// coding.forEach(printme);


// coding.forEach((item, index, arr) => {
//        console.log(item, index, arr);
// })


// const mycoding = [
//         {
//                 languageName: "javascript",
//                 languageFileName: "js"
//         },
//         {
//                  languageName: "java",
//                 languageFileName: "java"
//         },
//         {
//                  languageName: "java",
//                 languageFileName: "java"
//         },
// ]

// mycoding.forEach((item) =>{
//       console.log(item.languageName);
// })



// ****************** filters in javascript **************** //


// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//         console.log(item);
//         return item;
// })

// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
// const newNums = myNums.filter((num) => num > 4)

// console.log(newNums);


// const number = myNums.forEach((num) => num > 4)
// console.log(myNums);


// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// const books = [
//         { title: 'Book One', genre: 'Fiction', publish: 1981, 
//             edition: 2004},
//         { title: 'Book Two', genre: 'non-Fiction', publish: 1992, 
//             edition: 2008},
//         { title: 'Book Three', genre: 'History', publish: 1999, 
//             edition: 2007},
//         { title: 'Book Four', genre: 'non-Fiction', publish: 1989, 
//             edition: 2010},
//         { title: 'Book Five', genre: 'Science', publish: 2009, 
//             edition: 2014},
//         { title: 'Book Six', genre: 'Fiction', publish: 1987, 
//             edition: 2010},
//         { title: 'Book Seven', genre: 'History', publish: 1986, 
//             edition: 1986},
//         { title: 'Book Eight', genre: 'Science', publish: 2011, 
//             edition: 2016},
//         { title: 'Book Nine', genre: 'non-Fiction', publish: 1981, 
//             edition: 1989},
//     ];


//      let userbooks =  books.filter((bk) => bk.genre === 'History')
// //     console.log(userbooks);

//    userBooks = books.filter((bk) => {
//         return bk.publish >= 1995 && bk.genre === "History"
//     });

//     console.log(userbooks);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => {return num + 10})
// console.log(newNums);
// const newNums = [];
// myNumbers.forEach((num) => {
//         newNums.push(num + 10)
//         return newNums;
// })
// console.log(newNums);

// const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)

// console.log(newNums);


// reduce method.


// const myNums = [1, 2, 3]

//    const mytotal =  myNums.reduce(function (acc, currval){
//         console.log(`acc ${acc} and currval: ${currval}`);
//         return acc + currval;
//     }, 0)

//   const mytotal  = myNums.reduce((acc,currval) => acc+currval, 0)

//     console.log(mytotal);


const shoppingcart = [
        {
            itemname: "js course",
            price: 2999
        },
        {
            itemname: "py course",
            price: 999
        },
        {
            itemname: "mobile dev course",
            price: 5999
        },
        {
            itemname: "data science course",
            price: 12999
        },
    ]

   const pricetopay =  shoppingcart.reduce((acc,arr) => acc+arr.price, 0)

   console.log(pricetopay);