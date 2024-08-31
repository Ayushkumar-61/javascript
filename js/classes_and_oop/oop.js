// ## object literal.

//  const user = {
//     username: "ayush",
//     logincount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got userdetails from database")
//         // console.log(`username: ${this.username}`)
//         //  console.log(this)
//     }
//  }

//  console.log(user.username)
//  console.log(user.getUserDetails());
//  console.log(this)



// ## constructor function.


// const promiseOne = new Promise()
// const date = new Date()  -- it is used to create a new context and is called constructor function.



function User(username, logincount, isLoggedIn){
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
    return this
}


   const userOne = new User("ayush", 12, true)
   const userTwo = new User("kumar", 11, false)

   console.log(userOne.constructor);
//    console.log(userTwo);