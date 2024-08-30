// const promiseOne = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log('Asyn task is complete');
//     resolve()
//   }, 1000)
// })


//  promiseOne.then(function(){
//      console.log("promises consumed");
//  })



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log('Async 2 resolved');
// })



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//      resolve({username: "ayush", email: "ayush@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const PromiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     let error = true;
//     if(!error){
//         resolve({username: "ayush", password: "123"})
//     }else{
//         reject('ERROR something went wrong')
//     }
//     },1000)
// })

// PromiseFour.then((user) =>{
//    console.log(user);
//    return user.username;
// }).then((username) =>{
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=> console.log("the promises are either resolved or rejected"))


// const Promise5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "ayush", password: "123"})
//         }else{
//             reject('ERROR: js went wrong')
//         }
//     }, 1000)
// });


// async function consumerPromise5(){
//     try {
//         const response = await Promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }


// consumerPromise5()


// async function getAlluser(){
//     try {
//      const response =    await fetch('https://api.github.com/users/Ayushkumar-61')
//     const data =  await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("ERORR:", error);
//     }
// }


// getAlluser()



// fetch('https://api.github.com/users/Ayushkumar-61')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => console.log(error));