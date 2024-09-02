// let myName = "ayush             "
// let myChannel = "chai       "


// console.log(myName.trim().length)
// console.log(myName.truelength)



// let myHeros = ["thor", "spiderman"]

// let heropower = {
//     thor: "hammar",
//     spiderman: "sling",


//     getSpiderpower: function(){
//         console.log(`spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.ayush = function(){
//     console.log(`ayush is present in all objects`)
// }

// Array.prototype.heyayush = function(){
//     console.log(`ayush says hello`)
// }


// heropower.ayush()

// myHeros.ayush()

// myHeros.heyayush()

//  heropower.heyayush()


    // inheritance

// const User = {
//     name: "kumar",

// }

// const Teacher = {
//     makevideo: true
// }


// const Teachingsupport = {
//     isAvailable: false
// }


// const TAsupport = {
//     makeassignment: 'JS assignment',
//     fulltime: true,
//     __proto__: Teachchingsupport   // old syntax to access other properties.
// }

// Teacher.__proto__ = User

// // modern syntax

// Object.setPrototypeOf(Teachingsupport, Teacher)

let anotherUsername = "chaiAurcode      "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is: ${this.trim().length}`)
}


anotherUsername.truelength()

// "soni ".truelength()
// "iceTea".truelength()